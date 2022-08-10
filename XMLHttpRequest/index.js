const API_URL = 'https://jsonplaceholder.typicode.com';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector("#app");

        const tpl = data.map((user) => `<div class="name">${user.name}</div> <div class="email">${user.email}</div> <div class="phone">${user.phone}</div> <div class="web">${user.website}</div>`);
        HTMLResponse.innerHTML = `<div class="card">${tpl}</div>`
    }
 
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/users`);
xhr.send();