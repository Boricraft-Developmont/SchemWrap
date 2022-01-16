const schemapi = require('./index.js');

async function main() {
    let result = await schemapi.getPosts();
    console.log(result);

    //schemapi.getPost(id);
    result = await schemapi.getPost(2);
    console.log(result);


    result = await schemapi.createBase('your-api-key');
    console.log(result);

    //schemapi.createPost('your-api-key', id, title, description, category, images, version);
    result = await schemapi.createPost('your-api-key', id , 'test', 'test', 'test', 'test', '123');
    console.log(result);

    result = await schemapi.searchPosts('sus');
    console.log(result);

}

main();