import { useState } from 'react';
import './App.css';

function ItemCard(props) {
  const [imgLoad, setLoad] = useState(false);

  function handleError() {
    setLoad(true);
  }

  return (
    <div className="shadow-[0_10px_30px_rgba(140, 82, 255, 0.9)] bg-[#ffffff] w-[16rem] mx-2 my-8 text-center py-2 px-2 rounded-lg">
      {!imgLoad ? (
        <img
          className="h-[12rem] w-full shadow-[0_8px_40px_rgb(0,0,0,0.12)] rounded-lg"
          onError={handleError}
          src={props.itemImgUrl}
          alt="item-img"
        />
      ) : (
        <img
          className=" h-[12rem] w-full shadow-[0_8px_40px_rgb(0,0,0,0.12)] rounded-lg"
          src={props.itemImgUrl ? '/gif2.gif' : '/items4.webp'}
          alt="item-img"
        />
      )}
      <p className=" text-lg my-4 font-sans font-semibold">
        ₹ {props.itemPrice}
      </p>
      <p className="text-xl"> {props.itemName}</p>
      <button
        className=" bg-[#b592ff] cursor-default text-[rgb(253,253,253)] text-base px-3 py-2 mx-[2.5%] my-[5%] rounded-2xl shadow-md border-none"
        type="button"
      >
        {/* add to cart🛒 */}
        {props.itemIsSold ? 'sold✅' : 'assured✔'}
      </button>
      {props.notShowBuyBtn ? (
        ''
      ) : (
        <button
          type="button"
          onClick={props.onBuyClick}
          className="bg-[#8c52ff] shadow-xl hover:bg-[#9460fd] text-white text-base p-3 mx-[2.5%] my-[5%] rounded-2xl border-none"
        >
          buy now
        </button>
      )}
    </div>
  );
}

export default ItemCard;
