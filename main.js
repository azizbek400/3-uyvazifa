const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const items = document.querySelectorAll(".item");


const clearStyle = () => {
    for (const i of items) {
        i.style.backgroundColor = "";
    }
};


const btnEvent = () => {
    clearStyle();
    let idf = false;
    for (const i of items) {
        if (input.Value.toLocaleLowerCase() == i.textContent.toLocaleLowerCase()) {
            i.style.backgroundColor = "red";
            idf = true;
        }
    }

    if (!idf) {
        alert("user mavjud emas");
    }
}

btn.addEventListener("click", btnEvent)