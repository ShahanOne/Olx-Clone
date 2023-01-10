import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

function Items(props) {
  const [itemData, setItemData] = useState('');

  useEffect(() => {
    async function getItemsData() {
      await fetch('/api', {
        mode: 'no-cors',
      })
        .then((res) => res.json())
        .then((data) => setItemData(data));
    }

    getItemsData();
  }, []);
  console.log(itemData);
  return (
    <div className="itemsDiv">
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
  );
}

export default Items;
