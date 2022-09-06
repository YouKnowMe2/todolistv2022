function enableCors(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','https://capable-medovik-8b144c.netlify.app');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    next();

}

module.exports = enableCors;