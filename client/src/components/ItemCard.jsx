import { useState } from 'react';
import './App.css';

function ItemCard(props) {
  const [imgLoad, setLoad] = useState(false);

  function handleError() {
    setLoad(true);
  }

  return (
    <div className="itemCard">
      {!imgLoad ? (
        <img
          className="itemImg"
          onError={handleError}
          src={props.itemImgUrl}
          alt="item-img"
        />
      ) : (
        <img
          className="itemImg"
          src={props.itemImgUrl ? '/items4.webp' : '/items2.png'}
          alt="item-img"
        />
      )}
      <p className="itemPrice">
        <b>₹ {props.itemPrice}</b>
      </p>
      <p className="itemName"> {props.itemName}</p>
      <button type="button" className="soldBtn">
        {props.itemIsSold ? 'sold' : 'assured✔'}
      </button>
      {props.notShowBuyBtn ? (
        ''
      ) : (
        <button type="button" onClick={props.onBuyClick} className="buyBtn">
          buy now
        </button>
      )}
    </div>
  );
}

export default ItemCard;
