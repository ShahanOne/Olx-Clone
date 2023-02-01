import Navbar from './Navbar';
import Items from './Items';
import ListNewItem from './ListNewItem';
import MyAccount from './MyAccount';
import ItemPage from './ItemPage';
import { useState } from 'react';

function UserPage(props) {
  const [isNewClicked, setNewClick] = useState(false);
  const [isAccountClicked, setAccountClick] = useState(false);
  const [viewItem, setViewItem] = useState('');

  const [seed, setSeed] = useState(1);

  function handleHome() {
    setAccountClick(false);
    setNewClick(false);
    setViewItem('');
  }
  function handleNewItem() {
    setNewClick(true);
    setAccountClick(false);
  }
  function handleMyAcc() {
    setAccountClick(true);
    setNewClick(false);
    setViewItem('');
  }
  function handleSignOut() {
    // window.location.reload();
    props.handleSignOut();
  }
  function handleRerender() {
    setSeed(Math.random());
    setNewClick(false);
    setAccountClick(false);
  }
  function handleView(item) {
    setViewItem(item);
  }
  function handleBack() {
    setViewItem('');
  }
  async function handleBuy() {
    handleRerender();

    try {
      const res = await fetch('https://olxcloneserver.cyclic.app/buy-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            userId: props.userId,
            itemId: viewItem._id,
          },
        ]),
      })
        .then((res) => res.json())
        .then((data) => data !== 'poop' && props.newUserData(data));
    } catch (err) {
      console.log(err);
    }
    window.alert('Item bought, view in My Account');
    // console.log(item);
  }

  //Add to Cart
  async function handleCart() {
    try {
      const res = await fetch('https://olxcloneserver.cyclic.app/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            userId: props.userId,
            itemId: viewItem._id,
          },
        ]),
      })
        .then((res) => res.json())
        .then((data) => data !== 'poop' && props.newUserData(data));
    } catch (err) {
      console.log(err);
    }
    window.alert('Item added to cart');
  }

  //Add to Wishlist
  async function handleWishlist(item) {
    try {
      const res = await fetch('https://olxcloneserver.cyclic.app/wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            userId: props.userId,
            itemId: item._id,
          },
        ]),
      })
        .then((res) => res.json())
        .then((data) => data !== 'poop' && props.newUserData(data));
    } catch (err) {
      console.log(err);
    }
  }

  function newData(data) {
    props.newUserData(data);
  }
  return (
    <>
      <Navbar
        Nav1={'Home'}
        onNav1={handleHome}
        Nav2={'List Item'}
        onNav2={handleNewItem}
        Nav3={'My Account'}
        onNav3={handleMyAcc}
        Nav4={'Sign Out'}
        onNav4={handleSignOut}
      />
      <div className="userPageDiv bg-[#f0ebfb]">
        <div className="grid grid-cols-3 font-fredoka py-4 pl-8 bg-[#774ad1]">
          <div className="userPageText my-4 lg:my-12 text-white text-2xl md:text-3xl lg:text-4xl">
            Hello {props.userName}
          </div>
          <div className="text-center">
            <img
              className="hover:animate-spin inline-block w-40"
              src="/avatar2.png"
              alt=""
            />
          </div>
          <div className="refresh text-end my-4 lg:my-12 pr-8">
            <button
              className="text-white active:translate-y-1 hover:cursor-pointer text-2xl p-4 rounded-lg active:shadow-sm  shadow-lg active:bg-[#8251e5] hover:text-[#f3eeff]"
              onClick={handleRerender}
            >
              Refresh
            </button>
          </div>
        </div>

        {!isNewClicked && !isAccountClicked ? (
          <div className="userHomeDiv">
            {viewItem ? (
              <ItemPage
                itemName={viewItem.name}
                itemPrice={viewItem.price}
                itemImg={viewItem.imageUrl}
                itemDescription={viewItem.description}
                onBuy={handleBuy}
                onCart={handleCart}
                onBack={handleBack}
              />
            ) : (
              <Items
                seed={seed}
                onWishlist={handleWishlist}
                onViewClick={handleView}
              />
            )}
          </div>
        ) : isAccountClicked ? (
          //View Item
          viewItem ? (
            <ItemPage
              itemName={viewItem.name}
              itemPrice={viewItem.price}
              itemImg={viewItem.imageUrl}
              itemDescription={viewItem.itemDescription}
              onBuy={handleBuy}
              onCart={handleCart}
              onBack={handleBack}
            />
          ) : (
            <MyAccount
              boughtItems={props?.boughtItems}
              listedItems={props?.listedItems}
              onViewClick={handleView}
              onWishlist={handleWishlist}
              wishlist={props?.wishlist}
              cartItems={props?.cartItems}
              addNewItem={handleNewItem}
            />
          )
        ) : isNewClicked ? (
          <ListNewItem
            newUserData={newData}
            onTap={handleRerender}
            userName={props.userName}
            userId={props.userId}
          />
        ) : (
          <div className="userHomeDiv">
            {viewItem ? (
              <ItemPage
                itemName={viewItem.name}
                itemPrice={viewItem.price}
                itemImg={viewItem.imageUrl}
                itemDescription={viewItem.description}
                onBuy={handleBuy}
                onCart={handleCart}
                onBack={handleBack}
              />
            ) : (
              <Items
                seed={seed}
                onWishlist={handleWishlist}
                onViewClick={handleView}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default UserPage;
// Todo
//all listings
//posted
//sell status
//bought
