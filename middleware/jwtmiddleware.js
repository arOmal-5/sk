const jwt=require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{
    try{
        const token =req.headers['authorization'].split(' ')[1];
        console.log(token);
        const jwtResponse = jwt.verify(
            token,process.env.JWT_KEY)
        req.payload=jwtResponse.userId
        next()
    }
    catch(err){
        res.status(402).json("Authorization Failed")
    }
}

module.exports =jwtMiddleware