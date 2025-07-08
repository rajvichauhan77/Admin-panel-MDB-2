const adminTbl = require("../models/adminTbl")


const home = async (req, res) => {
    return res.render("home",{
        admin: req.currentUser
    })
}

module.exports = {home}