const Dev = require('../models/Dev');
const axios = require('axios');
const parseStringAsArray = require('../utils/parseStringAsArray');
module.exports = {
    async storeDev(request, response){
        const { github_username, techs, latitude, longitude } = request.body;
        let dev = await Dev.findOne({github_username}) 
        
        if(!dev){
            const techsArray = parseStringAsArray(techs)
            
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            
            const  { name = login, avatar_url, bio } = apiResponse.data    
            
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

                dev = await Dev.create({
                    github_username,
                    name,
                    avatar_url,
                    bio,
                    techs: techsArray,
                    location
                });
        }   
        return response.json(dev)
    },

    async listDevs(request, response){
        const devs = await Dev.find();

        return response.json(devs)
    }

}