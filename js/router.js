

const router = (request, response) => {
    const url = request.url;
    console.log(url);

    response.setHeader('Content-Type', 'application/json');
    let root = { name: ''};

    if(url === '/') {
        root.name = 'root';
    } else {
        root.name = 'Other path';
    }
    
    response.write(JSON.stringify(root));
    response.end();
}

module.exports = router;