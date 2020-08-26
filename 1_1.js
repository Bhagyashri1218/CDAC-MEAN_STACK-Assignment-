
const parent = document.querySelector("#parentBlock");
console.log(parent);

window.addEventListener("load", () => {
    console.log("ON.LOAD");
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users?page=2");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText);
            let sjson = JSON.parse(xhr.responseText);
            console.log(sjson.data);
            domlogicHere(sjson.data);
        }
    };
    xhr.send();
});

let domlogicHere = function (list) {
    const parent = document.querySelector("#parentBlock");
    console.log("INSIDE.LOAD", parent);
    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        const newElement = parent.children[0].cloneNode(true);
        newElement.style.display = "flex";
        newElement.children[0].innerHTML =
            item.first_name + " " + item.last_name;

        parent.insertBefore(newElement, parent.firstChild);
    }
};