const express = require('express');
const Employee = require('../model/Employee');
const router = express.Router();
const multer = require('multer');


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', async(req, res) => {
    let empData=await Employee.find({})
    res.render('ShowData',{empData})
})


router.get('/add', (req, res) => {
    res.render('addData')
})

router.get('/show/:id', async (req,res)=>{
    let{id}=req.params
    let EmpFound=await Employee.findById(id);
    // console.log(EmpFound)
    res.render('showEmployee',{EmpFound});
})

router.post('/add', upload.single('Emp_image'), (req, res) => {
    console.log('Form body:', req.body); // Log the form fields
    console.log('Uploaded file:', req.file); // Log the uploaded file

    let { Emp_name, Emp_id, Emp_password, Emp_jobtitle, Emp_devicetoken } = req.body;
    let Emp_image = req.file ? {
        data: req.file.buffer,
        contentType: req.file.mimetype
    } : null;

    Employee.create({ Emp_name, Emp_id, Emp_password, Emp_jobtitle, Emp_devicetoken, Emp_image })
        .then((NewEmp) => {
            res.redirect('/');
        })
        .catch((error) => {
            console.error('Error creating employee:', error);
            res.status(400).send('Error creating employee');
        });
});

module.exports = router