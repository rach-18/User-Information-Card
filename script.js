const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const country = document.querySelector(".country");
const phoneNumber = document.querySelector(".phone-number");
const state = document.querySelector(".state");
const city = document.querySelector(".city");
const village = document.querySelector(".village");
const boxColor = document.querySelector(".box-color");
const outerColor = document.querySelector(".outer-color");
const fontColor = document.querySelector(".font-color");
const boxDiv = document.querySelector(".box");
const changeColorBtn = document.querySelector(".color-btn");
const containerDiv = document.querySelector(".container");
const clearBtn = document.querySelector(".clear-btn");

let user = {
    "fname" : "",
    "lname" : "",
    "country" : "",
    "phone" : "",
    "state" : "",
    "city" : "",
    "village" : ""
};

function takeData() {
    const firstNameInput = prompt("Enter your First Name: ");
    const lastNameInput = prompt("Enter your Last Name: ");
    const countryInput = prompt("Enter your Country: ");
    const phoneNumberInput = prompt("Enter your Phone Number: ");
    const stateInput = prompt("Enter your State: ");
    const cityInput = prompt("Enter your City: ");
    const villageInput = prompt("Enter your Village: ");

    user.fname = firstNameInput.charAt(0).toUpperCase() + firstNameInput.slice(1);
    user.lname = lastNameInput.charAt(0).toUpperCase() + lastNameInput.slice(1);
    user.country = countryInput.charAt(0).toUpperCase() + countryInput.slice(1);
    user.phone = phoneNumberInput.charAt(0).toUpperCase() + phoneNumberInput.slice(1);
    user.state = stateInput.charAt(0).toUpperCase() + stateInput.slice(1);
    user.city = cityInput.charAt(0).toUpperCase() + cityInput.slice(1);
    user.village = villageInput.charAt(0).toUpperCase() + villageInput.slice(1);

    localStorage.setItem("user", JSON.stringify(user));

    displayData();
}

function displayData() {
    firstName.innerHTML = user.fname;
    lastName.innerHTML = user.lname;
    country.innerHTML = user.country;
    phoneNumber.innerHTML = user.phone;
    state.innerHTML = user.state;
    city.innerHTML = user.city;
    village.innerHTML = user.village;
}

function changeColor() {
    boxDiv.style.backgroundColor = boxColor.value;
    containerDiv.style.backgroundColor = outerColor.value;
    boxDiv.style.color = fontColor.value;
}

function clear() {
    localStorage.clear();
}

window.addEventListener("load", () => {
    if(localStorage.getItem("user")) {
        user = JSON.parse(localStorage.getItem("user"));
        displayData();
    }
    else {
        takeData();
    }
});

changeColorBtn.addEventListener("click", () => {
    changeColor();
})

clearBtn.addEventListener("click", () => {
    clear();
    user.fname = "";
    user.lname = "";
    user.country = "";
    user.phone = "";
    user.state = "";
    user.city = "";
    user.village = "";
    displayData();
})
