let inp = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("ul");

btn.addEventListener("click", function() {
    let li = document.createElement("li");
    let dlt = document.createElement("button");
    li.innerText = inp.value;
    dlt.classList.add("btns");
    dlt.innerText = "Delete";
    li.appendChild(dlt);
    list.appendChild(li);
    inp.value = "";

    dlt.addEventListener("click", function() {
        let parent = dlt.parentElement;
        parent.remove();
    });
});

