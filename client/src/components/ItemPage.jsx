import { useState } from 'react';

function ItemPage(props) {
  const [imgLoad, setLoad] = useState(false);

  function handleError() {
    setLoad(true);
  }

  return (
    <div className=" px-8 py-4 md:p-12  bg-[#f0ebfb]">
      <button
        onClick={props.onBack}
        className="px-4 py-2 bg-[#faf6ff] shadow-md hover:bg-[#ffffff] active:translate-y-1 text-base rounded-2xl border-none"
      >
        <img src="/back1.png" alt="" />
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="imgColumn p-4 md:px-8 md:py-12">
          {/* <img src={props.itemImg} alt="itemImg" /> */}
          <center>
            {' '}
            {!imgLoad ? (
              <img
                className="h-[14rem] md:h-[32rem]"
                onError={handleError}
                src={props.itemImg}
                alt="item-img"
              />
            ) : (
              <img
                className=" h-[14rem] md:h-[32rem]"
                src={props.itemImg ? '/gif2.gif' : '/items4.webp'}
                alt="item-img"
              />
            )}
          </center>
        </div>
        <div className="detailsColumn px-4 py-1 md:py-12">
          <div className="info text-center md:text-start">
            <p className="text-xl md:text-3xl py-2">{props.itemName}</p>
            <p className=" text-lg">₹ {props.itemPrice}</p>
          </div>

          <div className="itemDescription mt-4 md:mt-8 py-12 px-4 rounded-xl text-slate-600 bg-violet-200">
            <p className="italic">
              Item Description Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Repellendus
            </p>
          </div>

          <div className="buttons text-center md:text-start py-4 md:py-12">
            <button
              type="button"
              onClick={props.onCart}
              className="bg-[#faf6ff] shadow-md hover:bg-[#ffffff] text-slate-600 active:translate-y-1 text-base p-3 mx-2 rounded-2xl border-none"
            >
              Add to Cart
            </button>
            <button
              type="button"
              onClick={props.onBuy}
              className="bg-[#8c52ff] shadow-xl hover:bg-[#9460fd] active:translate-y-1 text-white text-base p-3 rounded-2xl border-none"
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
