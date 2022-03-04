import tenantRepositary from "../repositary/tenantRepositary.js"


const tenantService = {}

tenantService.post = async (data) => {
    const result = await tenantRepositary.post(data)
    return result
}


export default tenantService