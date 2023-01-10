import ItemCard from './ItemCard';

function MyAccount(props) {
  return (
    <div className="myAccountDiv">
      <div className="listedItemsDiv">
        <p className="myAccountText">Items Listed for Sale :-</p>
        {props.listedItems?.length ? (
          props.listedItems.map((item, index) => (
            <ItemCard
              key={index}
              itemName={item.name}
              itemPrice={item.price}
              itemIsSold={item.isSold}
              notShowBuyBtn={true}
              itemImgUrl={item.imageUrl ? item.imageUrl : ''}
            />
          ))
        ) : (
          <p className="noDataText">No Listed items!</p>
        )}
        <div className="addNewItemDiv">
          <button className="listNewItemBtn" onClick={props.addNewItem}>
            List New Item
          </button>
        </div>
      </div>
      <div className="boughtItemsDiv">
        <p className="myAccountText">Items Bought :-</p>

        {props.boughtItems?.length ? (
          props.boughtItems.map((item, index) => (
            <ItemCard
              key={index}
              itemName={item.name}
              itemPrice={item.price}
              itemIsSold={item.isSold}
              notShowBuyBtn={true}
              itemImgUrl={item.imageUrl ? item.imageUrl : ''}
            />
          ))
        ) : (
          <p className="noDataText">such empty, No items bought... yet!</p>
        )}
      </div>
    </div>
  );
}

export default MyAccount;
