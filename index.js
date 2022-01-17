const axios = require('axios');


exports.getPosts = async function() {
    result = await axios.get('https://borisjeletich.nl/v1/api/post/read.php')
        .then((response) => {
            return JSON.stringify(response.data);
        });
    return result;
}

exports.getPost = async function(id) {
    result = await axios.get('https://borisjeletich.nl/v1/api/post/read_single.php?id=' + id)
        .then((response) => {
            return JSON.stringify(response.data);
        });
    return result;
}

exports.createBase = async function(apikey) {
    result = await axios.post('https://borisjeletich.nl/v1/api/post/create.php', {}, { headers: { 'token': apikey, 'Content-Type': 'application/json' } })
        .then((response) => {
            return JSON.stringify(response.data);
        });
    return result;
}

exports.createPost = async function(apikey, id, title, description, category, images, version) {
    result = await axios.post('https://borisjeletich.nl/v1/api/post/createRest.php', { id: id, name: title, description: description, category: category, images: images, version: version }, { headers: { 'token': apikey, 'Content-Type': 'application/json' } })
        .then((response) => {
            return JSON.stringify(response.data);
        });
    return result;

}

exports.searchPosts = async function(search) {
    result = await axios.get('https://borisjeletich.nl/v1/api/post/search.php?search=' + search)
        .then((response) => {
            return JSON.stringify(response.data);
        });
    return result;
}