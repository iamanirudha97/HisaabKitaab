export const registerUser = async(req, res) => {
    const {email, password} = req.body;
    try {
        const user = {
            ...req.body
        }
        res.status(201).json({message: "user registered successfully", user})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
