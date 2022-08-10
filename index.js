const API_URL = 'https://jsonplaceholder.typicode.com/users';

const xhr = XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState === 4 && this.status === 200){
        console.log(this.response);
    }
}

xhr.addEventListener('load', onRequestHandler);