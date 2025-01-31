module.exports=(req,res,next)=>{
    if(!req.user.isAdmin){
        const error=new Error('Not Authorized');
        error.statusCode=403;
        throw error;
    }
    next();
}