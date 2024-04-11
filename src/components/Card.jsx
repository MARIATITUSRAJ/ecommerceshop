import React, { useState } from 'react';
import "./Card.css"
function Card({ cardData, setCartValue }) {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="card m-2">
      
      {cardData.isSale && (
        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Sale
        </div>
      )}
      {cardData.isSpecial && (
        <div className="badge bg-danger text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Special
        </div>
      )}
      <div className="card-body p-4 text-center">
      <img class="card-img-top" src={cardData.imgUrl}  />
        <h5 className="card-title"npm run dev>{cardData.name}</h5>
        <p className="card-text">
          {cardData.rating && <div>{cardData.rating}</div>}
          {cardData.originalPrice ? (
            <div>
              <span style={{ textDecoration: 'line-through' }}>
                {cardData.originalPrice}
              </span>{' '}
              {cardData.price}
            </div>
          ) : (
            `Price: ${cardData.price}`
          )}
        </p>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          {toggle ? (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value + 1);
                setToggle(false);
              }}
            >
              Add To Cart
            </button>
          ) : (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value - 1);
                setToggle(true);
              }}
            >
              Remove from Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function CardGrid({ setCartValue }) {
  const cardData = [
    { name: 'Fancy Product', price: '$40.00-$80' , imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/680817/40/mod01/fnd/IND/fmt/png/Mens-Slim-Fit-Polo-T-shirt" },
    { name: 'Special Item', rating: '⭐⭐⭐⭐⭐', originalPrice: '$20.00', price: '$18.00', isSpecial: true ,imgUrl:"https://th.bing.com/th/id/OIP.Zg5-Ew1zsaCyKtWAFZj8kgAAAA?rs=1&pid=ImgDetMain"},
    { name: 'Sale Item', price: '$25', isSale: true ,imgUrl:"https://th.bing.com/th/id/OIP.hCQQ_1W21si1bMa54_j7xQHaHa?w=800&h=800&rs=1&pid=ImgDetMain"},
    { name: 'Popular Item', rating: '⭐⭐⭐⭐⭐', price: '$40.00',imgUrl:"https://i.pinimg.com/originals/5b/15/4c/5b154c6dd14d4c248c9920a3f683ffcd.jpg" },
    { name: 'Sale Item', price: '$25', isSale: true,imgUrl:"https://slimages.macys.com/is/image/MCY/products/4/optimized/9135134_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1" },
    { name: 'Fancy Product', price: '$40.00-$80' ,imgUrl:"data:image/jpeg;base64,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"},
    { name: 'Special Item', rating: '⭐⭐⭐⭐⭐', originalPrice: '$20.00', price: '$18.00', isSpecial: true ,imgUrl:"https://th.bing.com/th/id/OIP.uxCs55xQrCWQehlrIts_sQHaHa?w=640&h=640&rs=1&pid=ImgDetMain"},
    { name: 'Popular Item', rating: '⭐⭐⭐⭐⭐', price: '$40.00' ,imgUrl:"https://ik.imagekit.io/ldqsn9vvwgg/images/508508.jpg"},
  ];

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {cardData.map((card, index) => (
            <div key={index} className="col-mb-4">
              <Card cardData={card} setCartValue={setCartValue} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardGrid;