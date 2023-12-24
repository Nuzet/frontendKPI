const Image = () => {
    function addImage() {
        const imageContainer = document.body;
        const newImage = document.createElement("img");
        newImage.src = "https://viel-unterwegs.de/wp-content/uploads/2021/11/leipzig-aussicht-tipps.jpg";
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
    return (
        <div>
            <img id="cityImage" src="https://viel-unterwegs.de/wp-content/uploads/2021/11/leipzig-aussicht-tipps.jpg"
                alt="Фото міста"></img>

                <div className="buttons">
                    <button onClick={addImage}>Додати зображення</button>
                    <button onClick={increaseImageSize}>Збільшити зображення</button>
                    <button onClick={decreaseImageSize}>Зменшити зображення</button>
                    <button onClick={deleteImage}>Видалити зображення</button>
                </div>
        </div>
    )
}

export default Image
