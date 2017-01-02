const http = require('http');

let createRoute = (port) => {
    const api = {};
    const routes = {};
    const method = ['GET', 'POST'];

    method.forEach((method) =>{
        routes[method] = {};
        api[method.toLowerCase()] = (path, fn) => {
            //assim se criam objetos dinamicos.
            routes[method][path] = fn;
        }
    })

    // var get = (path, fn) => {
    //     routes['GET'][path] = fn;
    // }

    // var post = (path, fn) => {
    //     routes['POST'][path] = fn;
    // }

    //criando o server e rodando scripts.
    http.createServer((req, res) => {

        //Permite o acesso cross origin. acesso de diferentes url.
        res.setHeader('Access-Control-Allow-Origin', '*');
        if(!routes[req.method][req.url]) return res.end();
        routes[req.method][req.url](req,res);

    }).listen(port);
    return api;
};

module.exports = createRoute;