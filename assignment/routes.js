// Importing core modules
const http = require('http');

const routes = (request, response) => {
    const requestUrl = request.url;

    switch (requestUrl) {
        case '/users':
            usersHandler(request, response);
            break;
        case '/create-user':
            createUserHandler(request, response);
            break;
        default:
            rootHandler(request, response);
    }

    response.end();
}

function rootHandler(request, response) {
    response.write('<html>');
    response.write('<body>');
    response.write('<h1>This is some greeting... </h1>');
    response.write('<form action="/create-user" method="POST">');
    response.write('<input type="text" name="username">');
    response.write('<button type="submit">Create User</button>');
    response.write('</form>');
    response.write('</body>');
    response.write('</html>');

}

function usersHandler(request, response) {
    response.write('<html><body><p><ul>');

    for (let i = 0; i < 10; i++) {
        response.write(`<li>Person ${i}</li>`);
    }

    response.write('</p></ul></body></html>');
}

function createUserHandler(request, response) {
    let data = [];

    request.on('data', (chunk) => {
        data.push(chunk);
    });

    request.on('end', () => {
        console.log('POST DATA: ', data.toString());
    });

    response.statusCode = 302;
    response.setHeader('Location', '/users');
}

module.exports = routes;