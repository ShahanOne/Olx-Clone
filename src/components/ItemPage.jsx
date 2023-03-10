import { useState } from 'react';

function ItemPage(props) {
  const [imgLoad, setLoad] = useState(false);

  function handleError() {
    setLoad(true);
  }

  return (
    <div className="p-4 md:p-12 bg-gradient-to-r from-violet-100 to-pink-100">
      <button
        onClick={props.onBack}
        className=" px-4 py-2 bg-[#faf6ff] shadow-md hover:bg-[#ffffff] active:translate-y-1 rounded-2xl border-none"
      >
        Go Back
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="imgColumn p-4 md:px-8 md:py-12">
          {!imgLoad ? (
            <img
              className="h-[15rem] w-[20rem] md:w-[35rem] md:h-[32rem] rounded-md shadow-lg"
              onError={handleError}
              src={props.itemImg}
              alt="item-img"
            />
          ) : (
            <img
              className="h-[15rem] w-[20rem] md:w-[35rem] md:h-[32rem] rounded-md shadow-lg"
              src={props.itemImg ? '/noLoad.png' : '/noImg.png'}
              alt="item-img"
            />
          )}
        </div>
        <div className="detailsColumn px-4 py-1 md:py-12">
          <div className="info md:text-start">
            <p className="text-3xl md:text-3xl py-2">{props.itemName}</p>
            <p className="text-xl font-fira">₹ {props.itemPrice}</p>
          </div>

          <div className="itemDescription mt-4 md:mt-8 py-12 px-4 rounded-xl text-slate-600 bg-violet-200">
            <p className="italic">
              {props.itemDescription
                ? props.itemDescription
                : 'Item description not provided'}
            </p>
          </div>

          <div className="buttons mb-12 md:text-start py-4 md:py-12">
            <button
              type="button"
              onClick={props.onCart}
              className="bg-[#faf6ff] shadow-md hover:bg-[#ffffff] text-slate-600 active:translate-y-1 text-base p-3 mr-2 rounded-2xl border-none"
            >
              Add to Cart
            </button>
            <button
              type="button"
              onClick={props.onBuy}
              className="bg-gradient-to-r from-purple-500 to-purple-600 shadow-xl hover:to-purple-600 hover:from-purple-400 active:translate-y-1 text-white text-base p-3 rounded-2xl border-none"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
