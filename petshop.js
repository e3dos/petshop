let listaDePets = ["Bob", "menino", "tico"];

function addNome(nome) {
   listaDePets.push(nome);
   return "Pet adicionado com sucesso";
}

function listarPets() {
    let lista = "";
    for (const iterator of listaDePets) {
        lista += "=============================\n";
        lista += "Nome do pet: " + iterator + "\n";
    }
    return lista;
}

module.exports = {addNome,listarPets}