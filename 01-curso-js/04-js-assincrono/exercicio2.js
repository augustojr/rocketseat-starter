function buscarGithub() {
    var inputElement = document.querySelector('#app input[name=user]');
    var user = inputElement.value;
    
    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(function(response) {
        var containerElement = document.querySelector('#app');
        var listElement = document.querySelector('#app ul');
        
        listElement.innerHTML = '';
        
        for (repo of response.data) {
            var itemElement = document.createElement('li');
            var itemText = document.createTextNode(repo.name);
            itemElement.appendChild(itemText);
            
            listElement.appendChild(itemElement);
        }
    })
    .catch(function(error) {
        
    });
    
}
