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

export const deleteUser = async (req, res) => {
    const { id } = req.params
    if(!id) {
        return res.send({
            status: false,
            message: "ID not found!"
        })
    }
    try {
        const user = await User.findByIdAndDelete({_id: id})
        if(!user) {
            return res.send({
                status: false,
                message: "User not found"
            })
        }

        // const data = [ "Ali", "Usman", "Wahid", "Samar" ]
        const users = await User.find({})
        return res.send({
            status: true,
            message: "Data has been deleted",
            users
        })

    } catch (error) {
        console.log(error)
    }
}

export const singleUser = async (req, res) => {
    const { id } = req.params
    if(!id) {
        return res.send({
            status: false,
            message: "ID not found!"
        })
    }
    try {
        const user = await User.findById({_id: id})
        if(!user) {
            return res.send({
                status: false,
                message: "User not found"
            })
        }

        return res.send({
            status: true,
            user
        })

    } catch (error) {
        console.log(error)
    }
}