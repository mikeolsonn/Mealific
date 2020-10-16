const key = '960e3ce6d8bdea55fa59a664f86f60b5';
const id = 'c5d7ac65';
const url = 'https://api.edamam.com/search'

function handleGetData() {
$.ajax(url + '?q=chicken&app_id=' + id + '&app_key=' + key)
.then(data => console.log(data))
.then(error => console.log(error))
};

