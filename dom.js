// let input1 = document.querySelector('#input1')
// let input2 = document.querySelector('#input2')
// let btn1 = document.querySelector('.btn1')
// let list = document.querySelector('.list')
// let btn2 = document.querySelector('.btn2')
// let data = []



// document.addEventListener()
// btn1.addEventListener("click", () => {
//     let obj = {
//         name1: input1.value,
//         name2: input2.value,
//     }
//     data.push(obj)
//     console.log(data)
//     input1.value = ""
//     input2.value = ""
//     getData()
// })

// btn2.addEventListener("click", () => {
//     deleteData()
// })

// function getData() {
//     list.innerHTML = ""

//     data.forEach((el) => {
//         list.innerHTML += `<h1>${el.name1} ${el.name2}</h1>`
//     });
// }

// function deleteData() {
//     data.pop()
//     getData()
// }

let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector("#input3");
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let list = document.querySelector('.list');

getData();

btn1.addEventListener('click', () => {
    addData();
});

btn2.addEventListener("click", () => {
    deleteData();
});

btn3.addEventListener("click", () => {
    deleteAllData();
});

function addData() {
    let obj = {
        name: input1.value,
        surname: input2.value,
        url: input3.value,
    };

    let data = JSON.parse(localStorage.getItem("person")) || [];
    data.push(obj);
    localStorage.setItem("person", JSON.stringify(data));
    getData();
    input1.value = "";
    input2.value = "";
    input3.value = "";
}

function getData() {
    list.innerHTML = "";
    let newData = JSON.parse(localStorage.getItem("person")) || [];
    newData.forEach((el) => {
        let div = document.createElement("div");

        let h1 = document.createElement("h1");
        h1.innerText = el.name;

        let h2 = document.createElement("h1");
        h2.innerText = el.surname;

        let img = document.createElement("img");
        img.src = el.url;

        div.append(h1, h2, img);
        list.append(div);
    });
}

function deleteData() {
    let data = JSON.parse(localStorage.getItem("person")) || [];
    data.pop();
    localStorage.setItem("person", JSON.stringify(data));
    getData();
}

function deleteAllData() {
    localStorage.removeItem("person");
    getData();
}
