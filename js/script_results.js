const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
});
const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats');
const ES = new EventSource(url, header);
const cat = document.querySelector(".cats");
const dog = document.querySelector(".dogs");
const parrot = document.querySelector(".parrots");
const error = document.querySelector(".error");

ES.onmessage = (obj) => {
    let { cats, dogs, parrots } = JSON.parse(obj.data);
    console.log("cats:" + cats + ", dogs:" + dogs + ", parrots:" + parrots);
    let tot = cats + dogs + parrots;
    cat.style.cssText = `width: ${cats/tot*100}%`;
    cat.textContent = `${cats}`;
    dog.style.cssText = `width: ${dogs/tot*100}%`;
    dog.textContent = `${dogs}`;
    parrot.style.cssText = `width: ${parrots/tot*100}%`;
    parrot.textContent = `${parrots}`;
}

ES.onerror = error => {
    ES.readyState ? error.textContent = "Some error" : null;
}



