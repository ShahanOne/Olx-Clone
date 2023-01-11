import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function Login(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleUserNameChange(e) {
    const { value } = e.target;

    setUserName(value);
  }
  function handlePasswordChange(e) {
    const { value } = e.target;

    setPassword(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://olxcloneserver.cyclic.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            username: userName,
            password: password,
          },
        ]),
      })
        .then((res) => res.json())
        .then((data) =>
          data !== 'poop' ? props.userData(data) : props.onError()
        );
    } catch (err) {
      console.log(err);
    }
    props.onLogin();
  };

  return (
    <div className="authenticateDiv">
      <div className="formDiv">
        <p className="crossIcon">
          <b onClick={props.onCut}>x</b>
        </p>
        <p className="authenticateText">
          {' '}
          Create an account or Log in with an existing account
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userName">
            Username <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="text"
            value={userName}
            onChange={handleUserNameChange}
            id="userName"
          />
          <label htmlFor="password">
            Password <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            id="password"
          />

          <button
            className="loginBtn"
            type={userName && password ? 'submit' : 'button'}
          >
            LogIn
          </button>
        </form>

        <p className="authenticateText"> Don't have an account? Register Now</p>
        <button
          className="registerBtn"
          type="button"
          onClick={props.onGoToRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
