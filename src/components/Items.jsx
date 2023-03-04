import { useState, useEffect } from 'react';
import SkeletonCard from './SkeletonCard';
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
        <div className="bg-gradient-to-r from-violet-100 to-pink-100 px-2 md:px-28 lg:px-36 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8">
          {itemData.map((item, index) => (
            <ItemCard
              key={index}
              itemName={item.name}
              itemPrice={item.price}
              itemIsSold={item.isSold}
              showViewBtn={!item.isSold}
              showWishlistBtn={true}
              itemImgUrl={item.imageUrl ? item.imageUrl : ''}
              isSignClicked={props.isSignClicked}
              onWishlist={() => props.onWishlist(item)}
              onViewClick={() => props.onViewClick(item)}
              // onBuyClick={() => props.onBuyClick(item)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-gradient-to-r from-violet-100 to-pink-100 px-2 md:px-28 lg:px-40 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8">
          <SkeletonCard />
          <SkeletonCard /> <SkeletonCard /> <SkeletonCard /> <SkeletonCard />
          <SkeletonCard /> <SkeletonCard /> <SkeletonCard /> <SkeletonCard />
          <SkeletonCard /> <SkeletonCard /> <SkeletonCard /> <SkeletonCard />
        </div>
      )}
    </>
  );
}

export default Items;
// <img
//   className="w-full mt-[30%] mb-[80%] md:mb-[30%] lg:mt-0 lg:mb-0"
//   src="/loading.gif"
//   alt="loading"
// />;
