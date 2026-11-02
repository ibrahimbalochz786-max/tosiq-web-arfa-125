import { list } from "../utils/common.js"

export const getAllColors = (req, res) => {
    return res.send({ status: true, list })
}