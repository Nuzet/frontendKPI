const GoodsCard = ({image,title,price,id}) => {
    return (
        <div className="card-container">
            <div className="card" id={id}>
                <img src={image} alt="Cham"></img>
                <div className="card-content">
                    <div className="card-title">{title}</div>
                    <div className="card-price">${price}</div>
                </div>
            </div>
        </div>
    );
}

export default GoodsCard;
