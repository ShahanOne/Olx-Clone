import { useState } from 'react';
import './App.css';

function ItemCard(props) {
  const [imgLoad, setLoad] = useState(false);
  const [heart, setHeart] = useState('♡');

  function handleError() {
    setLoad(true);
  }
  function handleHeart() {
    if (heart === '♡') {
      setHeart('❤️');
    } else if (heart === '❤️') {
      setHeart('♡');
    }
  }

  return (
    <div className="shadow-[0_10px_30px_rgba(140, 82, 255, 0.9)] bg-[#ffffff] sm:w-[16rem] mx-2 sm:mx-4 my-8 text-center rounded-lg px-1 sm:hover:-translate-y-2 hover:transition-transform">
      <button
        className=" bg-gradient-to-r from-purple-600 absolute cursor-default text-[rgb(253,253,253)] text-xs sm:text-sm px-2 py-1 sm:ml-6 mt-2 rounded-2xl shadow-lg border-none"
        style={!props.isSignClicked ? {} : { display: 'none' }}
        type="button"
      >
        {props.itemIsSold ? 'sold✅' : 'assured✔'}
      </button>
      {!imgLoad ? (
        <img
          className="h-[9rem] sm:h-[12rem] w-full shadow-[0_8px_40px_rgb(0,0,0,0.12)] rounded-t-lg rounded-b-lg"
          onError={handleError}
          src={props.itemImgUrl}
          alt="item-img"
        />
      ) : (
        <img
          className="h-[9rem] sm:h-[12rem] w-full shadow-[0_8px_40px_rgb(0,0,0,0.12)] rounded-lg"
          src={props.itemImgUrl ? '/gif2.gif' : '/items4.webp'}
          alt="item-img"
        />
      )}
      <p className="text-md sm:text-lg my-2 font-sans font-semibold">
        ₹ {props.itemPrice}
      </p>
      <p className="text-md sm:text-xl sm:mb-2"> {props.itemName}</p>

      <div className="grid grid-cols-2 gap-4 p-2">
        {props.showWishlistBtn && (
          <button
            type="button"
            onClick={() => props.onWishlist() && handleHeart()}
            className="bg-[#faf6ff] shadow-md hover:bg-[#ffffff] text-slate-600 active:translate-y-1 text-xs sm:text-base py-3 rounded-2xl border-none"
          >
            Wishlist {heart}
          </button>
        )}
        {props.showViewBtn && (
          <button
            type="button"
            // onClick={props.onBuyClick}
            onClick={props.onViewClick}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-xl hover:to-indigo-600 hover:from-purple-500 active:translate-y-1 text-white text-xs sm:text-base py-3 rounded-2xl border-none"
          >
            View
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
