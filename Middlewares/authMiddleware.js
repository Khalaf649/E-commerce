const User=require('../Models/User');
module.exports = async(req, res, next) => {
    if(!req.headers.authorization){
        return res.status(401).json({message: 'You are not authorized'});
    }
    const token = req.headers.authorization.split(' ')[1];
    if(!token){
        return res.status(401).json({message: 'You are not authorized'});
    }
    try{
        const decoded = jwt.verify(token, 'secret');
        req.user = await User.findById(decoded.userId);
        next();

}
catch(err){
    return res.status(401).json({message: 'You are not authorized'});
}
}