import Navbar from './Navbar';
import Items from './Items';
import ListNewItem from './ListNewItem';
import MyAccount from './MyAccount';
import { useState } from 'react';

function UserPage(props) {
  const [isNewClicked, setNewClick] = useState(false);
  const [isAccountClicked, setAccountClick] = useState(false);

  const [seed, setSeed] = useState(1);

  function handleHome() {
    setAccountClick(false);
    setNewClick(false);
  }
  function handleNewItem() {
    setNewClick(true);
    setAccountClick(false);
  }
  function handleMyAcc() {
    setAccountClick(true);
    setNewClick(false);
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
  async function handleBuy(item) {
    handleRerender();

    try {
      const res = await fetch('http://localhost:3001/buy-item', {
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
      });
    } catch (err) {
      console.log(err);
    }
    // window.alert('item bought, view in My Account');
    // console.log(item);
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
      <div className="userPageDiv">
        <p className="userPageText">
          <i>
            <img src="/account2.png" alt="acc" /> {props?.userName}{' '}
          </i>
        </p>
        <p className="refresh">
          <b onClick={handleRerender}>
            {' '}
            <img src="/refresh.png" alt="refresh" /> Refresh
          </b>
        </p>
        {!isNewClicked && !isAccountClicked ? (
          <div className="userHomeDiv">
            <Items seed={seed} onBuyClick={handleBuy} />
          </div>
        ) : isAccountClicked ? (
          <MyAccount
            boughtItems={props?.boughtItems}
            listedItems={props?.listedItems}
            addNewItem={handleNewItem}
          />
        ) : isNewClicked ? (
          <ListNewItem
            onTap={handleRerender}
            userName={props.userName}
            userId={props.userId}
          />
        ) : (
          <div className="userHomeDiv">
            <Items seed={seed} onBuyClick={handleBuy} />
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

//  <p className="userTopText">
//           If you're here, means you are verified, thats great !
// </p>
