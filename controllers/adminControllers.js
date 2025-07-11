const adminTbl = require("../models/adminTbl")


const home = async (req, res) => {
    return res.render("home",{
        admin: req.currentUser
    })
}

const adminTable = async (req,res) => {
    try{
        let data = await adminTbl.find()
        return res.render("admin_table", {
            data,
            admin:req.currentUser
        })
        }
        catch (error){
            console.log(err)
    }
}

const adminForm = (req, res) => {
    return res.render("admin_form", {
        admin: req.currentUser
    })
}

module.exports = {home, adminTable, adminForm}