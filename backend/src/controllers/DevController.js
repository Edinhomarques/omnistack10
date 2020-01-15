const Dev = require('../models/Dev');
const axios = require('axios')
module.exports = {
    async storeDev(request, response){
        const { github_username, techs, latitude, longitude } = request.body;
    
        const techsArray = techs.split(',').map(tech => tech.trim());
        let dev = await Dev.findOne({github_username}) 

        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
        const  { name = login, avatar_url, bio } = apiResponse.data    
        
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }
        if(!dev){
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

}