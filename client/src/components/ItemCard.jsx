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

      <div>
        {props.notShowCartBtn ? (
          ''
        ) : (
          <button
            type="button"
            onClick={props.onCartClick}
            className="bg-[#f4effb] shadow-lg hover:bg-[#f4ecff] text-slate-600 active:translate-y-1 text-base p-3 rounded-2xl border-none"
          >
            add to cart🛒
          </button>
        )}
        {props.notShowBuyBtn ? (
          ''
        ) : (
          <button
            type="button"
            onClick={props.onBuyClick}
            className="bg-[#8c52ff] shadow-xl hover:bg-[#9460fd] active:translate-y-1 text-white text-base p-3 mx-[2.5%] my-[5%] rounded-2xl border-none"
          >
            buy now
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
