const router = require('./router.js');

var app = router(3412);

var operadoras = [
    {nome: 'Oi', codigo: 14, categoria: 'celular', preco: 2},
    {nome: 'VIVO', codigo: 15, categoria: 'celular', preco: 1},
    {nome: 'TIM', codigo: 14, categoria: 'celular', preco: 2}
];

var contatos = [
    {id:1, nome: 'bruno', telefone: '9999-2222', data: new Date(), operadora: operadoras[0]},
    {id:1, nome: 'jairo', telefone: '9999-2222', data: new Date(), operadora: operadoras[1]},
    {id:1, nome: 'David', telefone: '9999-2222', data: new Date(), operadora: operadoras[2]}
];

app.get('/operadoras', (req, res) => {
     res.write(JSON.stringify(operadoras));
     res.end();
})

app.get('/contatos', (req, res) => {
    res.write(JSON.stringify(contatos));
    res.end();
})
