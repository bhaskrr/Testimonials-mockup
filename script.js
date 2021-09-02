const customerImg = document.querySelector(".customerImg");
const customerName = document.querySelector(".customerName");
const review = document.querySelector(".review");
const buttons = document.querySelectorAll("button");

const pictures = [
    "img1",
    "img2",
    "img3",
    "img4"
]
const names = [
    "AJ Lee",
    "John Doe",
    "Keith Cena",
    "Jitendra Mahal"
]
const reviews = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed nisi lacus sed viverra tellus in hac habitasse platea. Praesent semper feugiat nibh sed pulvinar proin gravida."
]

let counter = 0;

buttons.forEach((button) => {
    button.addEventListener("click", ()=> {
        if(button.classList.contains('btn-left')) {
            counter--;
            if(counter < 0) {
                counter = pictures.length - 1;
            }
            customerImg.src = `Images/${pictures[counter]}.jpg`;
            customerName.innerText = names[counter];
            review.innerText = reviews[counter];
        }
        if (button.classList.contains('btn-right')) {
            counter++;
            if (counter > pictures.length - 1) {
                counter = 0;
            }
            customerImg.src = `Images/${pictures[counter]}.jpg`;
            customerName.innerText = names[counter];
            review.innerText = reviews[counter];
        }
    })
})