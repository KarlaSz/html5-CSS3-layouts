const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector(".popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGHT = document.querySelector(".popup__arrow--right");

let currentImgIndex;

const showNextImg = () => {
        if (currentImgIndex === THUMBNAILS.length - 1) {
            currentImgIndex = 0;
        } else {
            currentImgIndex = currentImgIndex + 1;
        }
        POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
    };

const showPreviousImg = () => {
    if (currentImgIndex === 0) {
        currentImgIndex = THUMBNAILS.length - 1;
    } else {
        currentImgIndex--;
    }
    POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};

const closePopUp = () => {
    POPUP.classList.add("fade-out");
    setTimeout(() => {
        POPUP.classList.add("hidden");
        POPUP.classList.remove("fade-out");
    }, 300);
};

THUMBNAILS.forEach((thumbnail, index) => {
    const showPopUp = (e) => {
        POPUP.classList.remove("hidden");
        POPUP_IMG.src = e.target.src;
        currentImgIndex = index;
    };

    thumbnail.addEventListener("click", showPopUp);

    thumbnail.addEventListener("keydown", (e) => {
        if (e.code === "Enter" || e.keyCode === 13) {
            showPopUp(e);
        }
        
    });
});

POPUP_CLOSE.addEventListener("click", closePopUp);

ARROW_RIGHT.addEventListener("click", showNextImg);

ARROW_LEFT.addEventListener("click", showPreviousImg);

document.addEventListener("keydown", (e) => {
    if (!POPUP.classList.contains("hidden")) {
        if (e.code === "ArrowRight" || e.keyCode === 39) {
            showNextImg();
        }
       
        if (e.code === "ArrowLeft" || e.keyCode === 37) {
            showPreviousImg();
        }
        if (e.code === "Escape" || e.keyCode === 27) {
            closePopUp();
        }
    }
    
});

POPUP.addEventListener("click", (e) => {
    if (e.target === POPUP) {
        closePopUp();
    }
});