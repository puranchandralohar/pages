
const ActiveClass  = "active";

const Images = document.querySelectorAll(".slider");

Images[0].classList.add(ActiveClass);

function removeActiveClass(){
    const elm = document.querySelector(`.${ActiveClass}`);
    if(elm){
        elm.classList.remove(ActiveClass);
    }
}

function addClass(e){
    e.stopPropagation();
    removeActiveClass();
    const target = e.currentTarget;
    target.classList.add(ActiveClass)
}

Images.forEach(image => {
    image.addEventListener('click', addClass);
});