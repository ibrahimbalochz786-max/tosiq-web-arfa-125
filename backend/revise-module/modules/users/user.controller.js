export const getAllUsers = async (req, res) => {
    try {
        const data = [ "Ali", "Usman", "Wahid", "Samar" ]
        return res.send({
            status: true,
            data
        })
    } catch (error) {
        console.log(error)
    }
}