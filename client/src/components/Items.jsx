import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

function Items(props) {
  const [itemData, setItemData] = useState('');

  useEffect(() => {
    async function getItemsData() {
      await fetch(`http://localhost:3001/api`)
        .then((res) => res.json())
        .then((data) => console.log(data));

      // .then((data) => console.log(data));
    }

    getItemsData();
  }, []);

  // console.log(itemData);
  return (
    <div className="itemsDiv">
      {itemData
        ? itemData.map((item, index) => (
            <ItemCard
              key={index}
              itemName={item.name}
              itemPrice={item.price}
              itemIsSold={item.isSold}
              notShowBuyBtn={item.isSold}
              itemImgUrl={item.imageUrl ? item.imageUrl : ''}
              onBuyClick={() => props.onBuyClick(item)}
            />
          ))
        : 'loading...'}
    </div>
  );
}

export default Items;
