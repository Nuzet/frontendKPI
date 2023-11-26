
document.addEventListener("DOMContentLoaded", function () {
    let isBackgroundWhite = true;
    let isTextBlack = true;

    const elementById = document.getElementById("element1");
    const elementByQuerySelector = document.querySelector("#element2");

    elementById.addEventListener("click", function () {
        if (isBackgroundWhite) {
            elementById.style.backgroundColor = "black";
        } else {
            elementById.style.backgroundColor = "white";
        }

        if (isTextBlack) {
            elementById.style.color = "white";
        } else {
            elementById.style.color = "black";
        }

        isBackgroundWhite = !isBackgroundWhite;
        isTextBlack = !isTextBlack;
    });

    elementByQuerySelector.addEventListener("click", function () {
        if (isBackgroundWhite) {
            elementByQuerySelector.style.backgroundColor = "green";
        } else {
            elementByQuerySelector.style.backgroundColor = "white";
        }

        if (isTextBlack) {
            elementByQuerySelector.style.color = "white";
        } else {
            elementByQuerySelector.style.color = "black";
        }

        // Зміна стану змінних
        isBackgroundWhite = !isBackgroundWhite;
        isTextBlack = !isTextBlack;
    });
});


function addImage() {
    const imageContainer = document.body;
    const newImage = document.createElement("img");
    newImage.src = "https://34travel.me/media/upload/images/2018/november/8-leipzig/2.jpg";
    newImage.alt = "Фото міста";
    newImage.id = "cityImage";
    imageContainer.appendChild(newImage);
}

function increaseImageSize() {
    const image = document.getElementById("cityImage");
    const currentWidth = image.width;
    image.style.width = (currentWidth * 1.2) + "px"; 
}

function decreaseImageSize() {
    const image = document.getElementById("cityImage");
    const currentWidth = image.width;
    image.style.width = (currentWidth * 0.8) + "px"; 
}

function deleteImage() {
    const image = document.getElementById("cityImage");
    if (image) {
        image.parentNode.removeChild(image);
    }
}
