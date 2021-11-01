const { model } = require('mongoose');
const Employee = require('../../models/employee')

const  employees = async employeeIds => {
        try{
            const employees = await Employee.find({ _id: { $in: employeeIds} });
            return employees.map(employee =>{
                return {
                    ...employee._doc,
                    _id: employee.id
                };
            });
        }catch (err) {
            throw err;
        }
    };


module.exports = {
    employees: async () => {
        try {
            const employees = await Employee.find();
            return employees.map(employee => {
                return {
                ...employee._doc,
                _id: employee.id
                };
            });
            } catch (err) {
            throw err;
            }
        }, 

    createEmployee: async args => {
    try{
        const employee = new Employee({
        name: args.employeeInput.name,
        title: args.employeeInput.title,
        location: args.employeeInput.location,
        email: args.employeeInput.email,
        phone: args.employeeInput.phone,
        picture: args.employeeInput.picture
    });
    return await employee.save();
    }   
    catch (err) {
        console.log(err);
        throw new Error("New Employee Not Created: ", err);
    }
}};
