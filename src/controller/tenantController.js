import tenantService from "../service/tenantService.js"


const tenantController = {}

tenantController.post = async (req, res) => {
    const data = req.body
    try {
        const result = await tenantService.post(data)
        return res.json(result)
    } catch (err) {
        return res.json(err)
    }
}


export default tenantController