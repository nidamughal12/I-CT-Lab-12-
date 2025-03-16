window.addEventListener("load", function () {
    alert("Welcome to my portfolio!");
});

// Button to change background color
const colorButton = document.createElement("button");
colorButton.textContent = "Change Background Color";
document.body.appendChild(colorButton);

colorButton.addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
});

// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Form validation script
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    if (name === "" || email === "") {
        alert("Please fill out all the fields.");
        event.preventDefault();
    }
});
`
