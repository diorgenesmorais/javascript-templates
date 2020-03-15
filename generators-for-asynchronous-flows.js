const fetch = require('node-fetch');

function ajax(nome) {
    const url = `https://api.github.com/users/${nome}/repos`;
    fetch(url)
        .then(data => data.json())
        .then(data => dados.next(data))
        .catch(err => {
            console.log(err);
        });
}

function listar(list) {
    list.map(projeto => console.log('=> ' , projeto.name));
}

// generator
function* ajaxGen() {
    console.log('Buscar projetos Lady Day:');
    const day = yield ajax('ladyday');
    listar(day);

    console.log('Buscar projetos Diorgenes:');
    const diorgenes = yield ajax('diorgenesmorais');
    listar(diorgenes);
}

const dados = ajaxGen();
dados.next();