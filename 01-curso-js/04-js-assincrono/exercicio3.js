function buscarGithub() {
    var inputElement = document.querySelector('#app input[name=user]');
    var user = inputElement.value;
    
    var listElement = document.querySelector('#app ul');
    
    var carregandoElement = document.createElement('li');
    var carregandoText = document.createTextNode('Carregando...');
    carregandoElement.appendChild(carregandoText);
    
    listElement.innerHTML = '';
    listElement.appendChild(carregandoElement);
    
    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(function(response) {
        listElement.innerHTML = '';
        
        for (repo of response.data) {
            var itemElement = document.createElement('li');
            var itemText = document.createTextNode(repo.name);
            itemElement.appendChild(itemText);
            
            listElement.appendChild(itemElement);
        }
    })
    .catch(function(error) {
        listElement.innerHTML = '';
        
        var erroElement = document.createElement('li');
        var erroText = document.createTextNode('Erro ao buscar usuário no Github!');
        erroElement.appendChild(erroText);
        
        listElement.appendChild(erroElement);
    });
    
}
