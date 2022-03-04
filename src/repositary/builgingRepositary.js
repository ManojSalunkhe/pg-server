import { Building } from '../model/building.js'

const buildingRepositary = {}

buildingRepositary.post = async (data) => {
    try {
        const unique = await Building.findOne({
            name: data.name,
            address: data.address
        })

        if (!unique) {
            const result = await new Building(data)
            result.save()
            return result
        } else {
            return " building name or address already exits"
        }
    } catch (err) {
        return err
    }
}

buildingRepositary.get = async (token) => {
    try {
        const result = await Building.find({
            ownerId: token
        })
        return result
    } catch (err) {
        return err
    }
}

buildingRepositary.put = async (data) => {
    try {
        const result = await Building.findByIdAndUpdate(data.id, data, { new: true, runValidators: true })
        // console.log("here", result)
        return result
    } catch (err) {
        console.log(err)
        return err
    }
}

buildingRepositary.delete = async (id) => {
    try {
        const result = await Building.findByIdAndDelete(id)
        // console.log(result)
        return result
    } catch (err) {
        return err
    }
}

export default buildingRepositary