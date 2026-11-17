import User from './user.model.js'

export const getAllUsers = async (req, res) => {
    try {
        // const data = [ "Ali", "Usman", "Wahid", "Samar" ]
        const users = await User.find({})
        return res.send({
            status: true,
            users
        })
    } catch (error) {
        console.log(error)
    }
}