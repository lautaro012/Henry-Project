const axios = require('axios');
require('dotenv').config();
//const {API_KEY} = process.env

const getTags = async () => {
    let tags = []
    while (page < 6) {
        const info = await axios("https://api.rawg.io/api/games?key=22b7d9c1190846e38e66003610885078&page=" + page)
        info.data.results.forEach(e => {
            tags.push(e.name)
        });
        page++
    }
    // console.log(tags)
    return tags
}


module.exports = {
    getTags
}