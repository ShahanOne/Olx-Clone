import { useState } from 'react';

function Register(props) {
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
    props.onRegister();
    try {
      const res = await fetch('http://localhost:3001/register', {
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
        .then((data) => console.log(data));
    } catch (err) {
      console.log(err);
    }
    setUserName('');
    setPassword('');
  };
  return (
    <div className="authenticateDiv">
      <div className="formDiv">
        <p className="crossIcon">
          <b onClick={props.onCut}>x</b>
        </p>
        <p className="authenticateText">
          Register and start your selling journey!{' '}
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
            className="registerBtn"
            type={userName && password ? 'submit' : 'button'}
          >
            Register
          </button>
        </form>

        <p className="authenticateText"> Already have an account? Login !</p>
        <button type="button" className="loginBtn" onClick={props.onGoToLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Register;
