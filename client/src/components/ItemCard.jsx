import { useState } from 'react';
import './App.css';

function ItemCard(props) {
  const [imgLoad, setLoad] = useState(false);

  function handleError() {
    setLoad(true);
  }

  return (
    <div className="shadow-[0_10px_30px_rgba(140, 82, 255, 0.9)] bg-[#ffffff] w-[16rem] mx-2 my-8 text-center py-2 px-2 rounded-lg">
      <button
        className=" bg-[#8c52ef] absolute cursor-default text-[rgb(253,253,253)] text-sm px-2 py-1 ml-6 mt-2 rounded-2xl shadow-lg border-none"
        style={!props.isSignClicked ? {} : { display: 'none' }}
        type="button"
      >
        {props.itemIsSold ? 'sold✅' : 'assured✔'}
      </button>
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
      <p className=" text-lg my-2 font-sans font-semibold">
        ₹ {props.itemPrice}
      </p>
      <p className="text-xl mb-2"> {props.itemName}</p>

      <div className="grid grid-cols-2 gap-4 py-2">
        {props.showCartBtn && (
          <button
            type="button"
            onClick={props.onCartClick}
            className="bg-[#faf6ff] shadow-md hover:bg-[#ffffff] text-slate-600 active:translate-y-1 text-base py-3 rounded-2xl border-none"
          >
            Cart🛒
          </button>
        )}
        {props.showViewBtn && (
          <button
            type="button"
            // onClick={props.onBuyClick}
            onClick={props.onViewClick}
            className="bg-[#8c52ff] shadow-xl hover:bg-[#9460fd] active:translate-y-1 text-white text-base py-3 rounded-2xl border-none"
          >
            View
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
