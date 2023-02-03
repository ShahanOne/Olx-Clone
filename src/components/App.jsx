import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Items from './Items';
import Login from './Login';
import Register from './Register';
import UserPage from './UserPage';
import ItemPage from './ItemPage';
import Footer from './Footer';

function App() {
  const [logOrRegister, setLogOrRegister] = useState(true);
  const [isSignClick, setSignClick] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const [viewItem, setViewItem] = useState('');

  function handleHome() {
    window.location.reload();
  }
  function handleSignInClick() {
    setSignClick((value) => !value);
  }
  function handleUserData(data) {
    setUserInfo(data);
    setAuthenticated((value) => !value);
  }
  function refreshUserData(data) {
    setUserInfo(data);
  }
  function login() {
    setSignClick(false);
  }
  function loginError() {
    window.alert('user not found,please register or try again');
  }
  function register() {
    window.alert('Registered, You Can Login Now');
  }
  function goToLogin() {
    setLogOrRegister(true);
  }
  function goToRegister() {
    setLogOrRegister(false);
  }
  function handleSignOut() {
    setAuthenticated((value) => !value);
    setUserInfo('');
    setViewItem('');
  }
  function handleView(item) {
    setViewItem(item);
  }
  function handleBack() {
    setViewItem('');
  }

  return (
    <div className=" text-[#2e0f6a] font-allerta">
      {isAuthenticated ? (
        <UserPage
          newUserData={refreshUserData}
          userId={userInfo._id}
          userName={userInfo.username}
          boughtItems={userInfo.boughtItems}
          listedItems={userInfo.listedItems}
          wishlist={userInfo.wishlist}
          cartItems={userInfo.cartItems}
          handleSignOut={handleSignOut}
        />
      ) : (
        <div className="homePageDiv">
          {isSignClick &&
            (logOrRegister ? (
              <Login
                onLogin={login}
                onError={loginError}
                userData={handleUserData}
                onGoToRegister={goToRegister}
                onCut={handleSignInClick}
              />
            ) : (
              <Register
                onRegister={register}
                onGoToLogin={goToLogin}
                onCut={handleSignInClick}
              />
            ))}
          <Navbar
            Nav3={'Home'}
            onNav3={handleHome}
            Nav4={'Login/Signup'}
            onNav4={handleSignInClick}
            // Nav3={}
            // onNav3={handleSignClick}
          />
          {viewItem ? (
            <ItemPage
              itemName={viewItem.name}
              itemPrice={viewItem.price}
              itemImg={viewItem.imageUrl}
              itemDescription={viewItem.description}
              onBuy={handleSignInClick}
              onCart={handleSignInClick}
              onBack={handleBack}
            />
          ) : (
            <>
              <div className="welcome grid grid-cols-1 sm:grid-cols-2 bg-gradient-to-r from-indigo-500 sm:via-purple-500 to-purple-800 sm:to-pink-600 py-4 lg:p-10">
                <center className="py-10 sm:py-20">
                  <p className="text-3xl lg:text-5xl my-4 font-fredoka text-[#f1f1f6]">
                    Welcome to
                  </p>
                  <p className="text-6xl lg::text-7xl font-bold font-fredoka text-[#f1f1f6]">
                    Olx Clone
                  </p>
                </center>
                <div className="px-4 lg:p-0">
                  <img
                    className={`rounded-3xl h-[20rem] lg:h-[30rem] ${
                      !isSignClick ? 'animate-slow-bounce' : ''
                    } transition-transform`}
                    src="/woman2.webp"
                    alt=""
                  />
                </div>

                {/* <picture>
                  <source
                    media="(max-width: 600px)"
                    srcSet="/olxlandingphone4.png"
                  />
                  <img src="/olxlanding1.png" alt="landing" />
                </picture> */}
              </div>
              <div className="bg-gradient-to-r from-indigo-800 sm:via-purple-700 to-purple-800 sm:to-pink-700 w-full py-8 lg:py-4 font-fredoka text-2xl text-center text-white">
                {/* <div className={!isSignClick ? 'animate-bounce' : ''}> */}
                Let's Browse{' '}
                <b className="bg-purple-400 px-2 py-1 rounded-3xl">🡇</b>
                {/* </div> */}
              </div>
              <div></div>
              <Items
                seed={''}
                // onBuyClick={handleSignInClick}
                onViewClick={handleView}
                onWishlist={handleSignInClick}
                isSignClicked={isSignClick}
              />
            </>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
