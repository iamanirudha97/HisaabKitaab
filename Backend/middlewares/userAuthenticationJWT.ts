import jwt from 'jsonwebtoken';
export const SECRET = 'SECr3t';  // This should be in an environment variable in a real application

export const verifyToken = (req, res, next) => {
    try {
        console.log("Inside verify token")
        const token = req.headers.authorization?.split(" ")[1];
        if(!token){
            res.status(401).json({message: "UNAUTHORIZED: Token missing"});
        } else {
            jwt.verify(token, SECRET, (err, user) => {
                if(err){
                    return res.status(403).json({message: "Invalid Token"});
                }
                req.user = user;
                console.log("User is ", user);
                next();
            })
        }     
    } catch (error) {
        res.status(401).json({ message : error.message});
    }
};