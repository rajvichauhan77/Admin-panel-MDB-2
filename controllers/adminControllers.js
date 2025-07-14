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

const insertAdmin = async (req, res) => {
    console.log(req.body)
    console.log(req.file)

    if(req.file){
        req.body.avatar = req.file.path
    }
    try {
        let data = await adminTbl.create(req.body)
        return res.redirect("/admin_form")
    } catch (error) {
        console.log(error)
    }
}

// const editAdmin = async (req, res) => {
//     let id = req.query.id
//     if(req.query.userId){
//         let resp = await adminTbl.findById(id)
//         return res.render("edit_admin", {
//             admin: resp
//         })
//     }
//     else{
//         // return res.redirect("404")
//         console.log(error)
//     }
// }


const editAdmin = async (req, res) => {
    try {
        const id = req.query.userId; // Read userId here
        const admin = await adminTbl.findById(id);

        if (!admin) {
            return res.status(404).send("Admin not found");
        }

        res.render("edit_admin", { admin });
    } catch (error) {
        console.log("Error in editAdmin:", error);
        res.status(500).send("Server error");
    }
};


const updateAdmin = async (req,res) => {
    let id = req.params.id

   
     if(req.file){
        req.body.avatar = req.file.path
     }
     
     if(req.params.id)
     {
        if(req.body.avatar){
            let resp = await adminTbl.findByIdAndUpdate(id, req.body)
        }else{
            let avUp = await adminTbl.findById(id)
            req.body.avatar = avUp.avatar
            let resp = await adminTbl.findByIdAndUpdate(id, req.body)
        }
        return res.redirect("/admin_table")
     }
     else{
        return res.redirect("404")
    }
}




module.exports = {home, adminTable, adminForm, insertAdmin, editAdmin, updateAdmin}