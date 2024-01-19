import { useState } from 'react';
import './App.css';
import { GoHeart,GoHeartFill } from "react-icons/go";

function ItemCard({
  isSignClicked,
  showViewBtn,
  showWishlistBtn,
  onWishlist,
  itemImgUrl,
  itemIsSold,
  itemPrice,
  itemName,
  onViewClick
}) {
  const [imgLoad, setLoad] = useState(false);
  let simpleHeart = <GoHeart fontSize={18} className='pt-1'/>
  let filledHeart = <GoHeartFill fontSize={18} className='pt-1'/>
  const [heart, setHeart] = useState(simpleHeart);

  function handleError() {
    setLoad(true);
  }

function handleHeart() {
  setHeart((prevHeart) => (prevHeart === simpleHeart ? filledHeart : simpleHeart));
}


  return (
    <div className="shadow-[0_10px_30px_rgba(80, 200,120, 0.9)] bg-[#ffffff] sm:w-[16rem] mx-2 sm:mx-4 my-8 text-center rounded-lg px-1 sm:hover:-translate-y-2 hover:transition-transform">
      <button
        className=" bg-gradient-to-r from-pink-500  absolute cursor-default text-[rgb(253,253,253)] text-xs sm:text-sm px-2 py-1 sm:ml-6 mt-2 rounded-2xl shadow-lg border-none"
        style={!isSignClicked ? {} : { display: 'none' }}
        type="button"
      >
        {itemIsSold ? (
          <p>
            sold <b>✓</b>{' '}
          </p>
        ) : (
          <p>
            assured <b>✓</b>{' '}
          </p>
        )}
      </button>
      {!imgLoad ? (
        <img
          className="h-[9rem] sm:h-[12rem] w-full shadow-[0_8px_40px_rgb(0,0,0,0.12)] rounded-t-lg rounded-b-lg"
          onError={handleError}
          src={itemImgUrl}
          alt="item-img"
        />
      ) : (
        <img
          className="h-[9rem] sm:h-[12rem] w-full shadow-[0_8px_40px_rgb(0,0,0,0.12)] rounded-lg"
          src={itemImgUrl ? '/noLoad.png' : '/noImg.png'}
          alt="item-img"
        />
      )}
      <p className="text-md sm:text-lg my-2 font-sans font-semibold">
        ₹ {itemPrice}
      </p>
      <p className="text-md sm:text-xl sm:mb-2"> {itemName}</p>

      <div className="grid grid-cols-2 gap-4 p-2">
        {showWishlistBtn && (
          <button
            type="button"
            onClick={() => onWishlist() && handleHeart()}
            className="bg-[#fff5fe] flex justify-center gap-1 shadow-md hover:bg-[#ffffff] text-slate-600 active:translate-y-1 text-xs sm:text-base py-3 rounded-2xl border-none"
          >
       <p>{heart}</p>    <p>Wish</p>  
          </button>
        )}
        {showViewBtn && (
          <button
            type="button"
            // onClick={onBuyClick}
            onClick={onViewClick}
            className="bg-pink-400 shadow-xl hover:bg-pink-500 active:translate-y-1 text-white text-xs sm:text-base py-3 rounded-2xl border-none"
          >
            View
          </button>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
