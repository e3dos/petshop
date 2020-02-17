const http = require("http");
const petshop = require("./petshop");

const server = http.createServer((req,res) => {


    //res.setHeader("Content-Type","text/html;charset=utf8");

    switch(req.url) {

        case "/listapets" : {
            return res.end(petshop.listarPets());
            break;
        }

    }


   
    res.write("Voce está dentro do sistema de petshop");
    res.end();

});

server.listen(80,"");