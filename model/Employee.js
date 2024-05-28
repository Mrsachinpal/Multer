const mongoose = require('mongoose')

const EmpSchema = new mongoose.Schema({
    Emp_name: {
        type: String,
        trim: true,
        required: true
    },
    Emp_id: {
        type: Number,
        trim: true,
        required: true
    },
    Emp_password: {
        type: String,
        trim: true,
        required: true
    },
    Emp_jobtitle: {
        type: String,
        trim: true,
        required: true
    },
    Emp_devicetoken: {
        type: String,
        trim: true,
        required: true
    },
    Emp_image: {
        data: Buffer,
        contentType: String
    }
})

let Employee= mongoose.model('Employee',EmpSchema);
module.exports=Employee
