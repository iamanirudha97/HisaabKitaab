let users = [];

//add a new user to the database
export const registerUser = async(req, res) => {
    const {email} = req.body;
    try {
        //update with mongoose logic to prevent same 
        //user create multiple accounts based on username and email id
        let emailExists = users.findIndex(u => u.email === email);
        console.log("DEBUG : ", emailExists)
        
        if(emailExists !== -1){
            res.status(409).json({message: "email already exists in the database"});
        } else {
            const user = {
                ...req.body
            }
            users.push(user); //push to mongoose database
            console.log("update:",users)
            res.status(201).json({message: "user registered successfully", user});
            }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//get all users database
export const getAllUsers = async(req, res) => {
    try {
        res.status(200).json({ message: users});
    } catch (error) {
        res.status(500).json({ message: "DATABASE ERROR"})
    }
};

//update user information
export const updateUser = async(req, res) => {
    try {
        const updatedUserIndex = users.findIndex( u => u.email === req.params.email);
        if(updatedUserIndex === -1) {
            res.status(404).json({message: "User not found in database"});
        }
        else{
            users[updatedUserIndex].firstName = req.body.firstName;
            users[updatedUserIndex].lastName = req.body.lastName;
            users[updatedUserIndex].userName = req.body.userName;
            users[updatedUserIndex].email = req.params.email;
            users[updatedUserIndex].password = req.body.password;
            res.status(200).json({ message: "User updated Successfully", users} );
            console.log("Updated user", users[updatedUserIndex]);
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const deleteUser = async(req, res) => {
    try {
        const userIndex = users.findIndex(u => u.email === req.params.email); //mongoose query
        if(userIndex === -1){
            res.status(404).json({message: "user not found"});
        } else {
            users.splice(userIndex, 1);
            res.status(200).json({message: "User deleted successfully"});
        }    
    } catch (error) {
        res.status(400).json({ message : error.message});
    }
};
