import Employee from "./employee.model.js"

export const allEmployees = async (req, res) => {
    const employees = await Employee.find({})
    return res.send({
        status: true,
        employees
    })
}