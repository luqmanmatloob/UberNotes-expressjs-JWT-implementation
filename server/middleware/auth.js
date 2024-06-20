const jwt = require("jsonwebtoken")

function authenticator(req, res, next){
    const token = req.headers.authorization
    jwt.verify(token, "9283498324983823948", (err, decode)=>{
        if(err)
        return res.send({
            message:  "Invalid token, please login again",
            status: 2
        })
        if(decode){
            req.body.user = decode.userID
            next()
        }
        else
        {
            res.send({
                message: "Invalid token, please login again",
                status: 2
            })
        }
    })
}

module.exports = {
    authenticator
}