fetch('https://api-mobilespecs.azharimm.site/v2/top-by-fans').then(function(response) {
    response.json().then(function(test) {
    console.log(test);
    for(let i = 0; i < 10; i++){
        document.querySelector('#fone' + i).innerHTML = test.data.phones[i].phone_name;
    }
    });
})