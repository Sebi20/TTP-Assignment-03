const one = document.getElementById("container");
console.log(one);

const two = document.querySelector("#container");
console.log(two);

const three = document.getElementsByClassName("second");
console.log(three);

const four = document.getElementsByClassName("third")[1];
console.log(four);

const five = document.getElementById("container").innerText = "Hello!"
console.log(five);

const six = document.getElementsByClassName("footer")[0];
six.classList.add("main")
console.log(six);

six.classList.remove("main"); // 7)

const eight = document.createElement("li");
console.log(eight);

const nine = eight.textContent = "four";
console.log(nine)

const ten = document.querySelector("ul").append(eight);

const twelve = document.querySelectorAll("ol")[0].getElementsByTagName("li");
for(let i = 0; i < twelve.length; i++){
    twelve[i].style.backgroundColor = "green";
}

document.getElementsByClassName("footer")[0].remove();
