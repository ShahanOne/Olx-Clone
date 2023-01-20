import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

function Items(props) {
  const [itemData, setItemData] = useState('');

  useEffect(() => {
    async function getItemsData() {
      await fetch(`
https://olxcloneserver.cyclic.app/api`)
        .then((res) => res.json())
        .then((data) => setItemData(data));

      // .then((data) => console.log(data));
    }

    getItemsData();
  }, [props.seed]);

  // console.log(itemData);
  return (
    <>
      {itemData ? (
        <div className="bg-[#f0ebfb] px-16 md:px-28 lg:px-36 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8 min-h-[80rem]">
          {itemData.map((item, index) => (
            <ItemCard
              key={index}
              itemName={item.name}
              itemPrice={item.price}
              itemIsSold={item.isSold}
              notShowBuyBtn={item.isSold}
              itemImgUrl={item.imageUrl ? item.imageUrl : ''}
              onBuyClick={() => props.onBuyClick(item)}
            />
          ))}
        </div>
      ) : (
        <img
          className="w-full mt-[30%] mb-[80%] md:mb-[30%] lg:mt-0 lg:mb-0"
          src="/loading.gif"
        />
      )}
    </>
  );
}

export default Items;
