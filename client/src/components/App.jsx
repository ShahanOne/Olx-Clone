import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Items from './Items';
import Login from './Login';
import Register from './Register';
import UserPage from './UserPage';
import Footer from './Footer';

function App() {
  const [logOrRegister, setLogOrRegister] = useState(true);
  const [isSignClick, setSignClick] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState('');

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
  }

  return (
    <div className="mainDiv">
      {isAuthenticated ? (
        <UserPage
          userId={userInfo._id}
          userName={userInfo.username}
          boughtItems={userInfo.boughtItems}
          listedItems={userInfo.listedItems}
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
            Nav1={'Home'}
            onNav1={handleHome}
            Nav2={'Login/Signup'}
            onNav2={handleSignInClick}
            // Nav3={}
            // onNav3={handleSignClick}
          />
          <Items seed={''} onBuyClick={handleSignInClick} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
