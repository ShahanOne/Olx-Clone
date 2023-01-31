import ItemCard from './ItemCard';

function MyAccount(props) {
  return (
    <div className="myAccountDiv px-[15%] lg:px-[12%] pt-[5%]">
      <div className="wishlistDiv ">
        <p className="myAccountText text-2xl">My Cart :-</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {props.cartItems?.length ? (
            props.cartItems.map((item, index) => (
              <ItemCard
                key={index}
                itemName={item.name}
                itemPrice={item.price}
                itemIsSold={item.isSold}
                showCartBtn={true}
                showViewBtn={true}
                onViewClick={() => props.onViewClick(item)}
                itemImgUrl={item.imageUrl ? item.imageUrl : ''}
              />
            ))
          ) : (
            <p
              className="noDataText 
          m-[5%_2%]"
            >
              No Wishlisted items!
            </p>
          )}
        </div>
      </div>
      <div
        className="listedItemsDiv 
      min-h-80"
      >
        <p className="myAccountText text-2xl">Items Listed for Sale :-</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {props.listedItems?.length ? (
            props.listedItems.map((item, index) => (
              <ItemCard
                key={index}
                itemName={item.name}
                itemPrice={item.price}
                itemIsSold={item.isSold}
                itemImgUrl={item.imageUrl ? item.imageUrl : ''}
              />
            ))
          ) : (
            <p
              className="noDataText 
          m-[5%_2%]"
            >
              No Listed items!
            </p>
          )}
        </div>

        <div className="addNewItemDiv text-center">
          <button
            className="listNewItemBtn 
            bg-[#8c52ff] border-[#8c51ff] hover:bg-[#9460fd] text-white text-lg mb-8 p-[2%] lg:p-[1%] rounded-lg border shadow-lg"
            onClick={props.addNewItem}
          >
            List New Item
          </button>
        </div>
      </div>
      <div
        className="boughtItemsDiv 
      min-h-80"
      >
        <p className="myAccountText text-2xl">Items Bought :-</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-8">
          {props.boughtItems?.length ? (
            props.boughtItems.map((item, index) => (
              <ItemCard
                key={index}
                itemName={item.name}
                itemPrice={item.price}
                itemIsSold={''}
                notShowBuyBtn={true}
                notShowCartBtn={true}
                itemImgUrl={item.imageUrl ? item.imageUrl : ''}
              />
            ))
          ) : (
            <p className="noDataText m-[5%_2%]">
              such empty, No items bought... yet!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
