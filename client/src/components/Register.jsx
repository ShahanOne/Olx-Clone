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
      const res = await fetch('https://olxcloneserver.cyclic.app/register', {
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
    <div className="bg-[#51309246] font-allerta p-[3%_0_10%] fixed w-full h-screen">
      <div className="mx-[10%] my-[25%]  lg:m-[5%_34%] px-[5%] py-[6%] lg:p-[0_1%_2%_2.5%] bg-[#f7f3ff] rounded-lg text-[#2e0f6a]">
        <p className=" text-end text-[2rem] m-0">
          <b
            className="hover:cursor-default hover:text-[#8c52ff]"
            onClick={props.onCut}
          >
            x
          </b>
        </p>
        <p className="authenticateText">
          Register and start your selling journey!{' '}
        </p>

        <form onSubmit={handleSubmit}>
          <label className=" text-lg m-[1%_0]" htmlFor="userName">
            Username <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            className="block border-none rounded w-[90%] h-8 m-[3%_0] focus:outline-none"
            type="text"
            value={userName}
            onChange={handleUserNameChange}
            id="userName"
          />
          <label className=" text-lg m-[1%_0]" htmlFor="password">
            Password <span style={{ color: 'red' }}>*</span>
          </label>
          <input
            className="block border-none rounded w-[90%] h-8 m-[3%_0] focus:outline-none"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            id="password"
          />

          <button
            className="bg-[#8c52ff] text-white text-2xl m-[1%_0] p-[1%]  rounded-lg  w-[92%] border border-[#8c51ff] hover:bg-[#6139b1] hover:cursor-pointer"
            type={userName && password ? 'submit' : 'button'}
          >
            Register
          </button>
        </form>

        <p className="authenticateText py-2">
          {' '}
          Already have an account? Login !
        </p>
        <button
          type="button"
          className="bg-[#6139b1] text-white text-2xl m-[1%_0] p-[1%]  rounded-lg  w-[92%] border border-[#8c51ff] hover:bg-[#7a48de] hover:cursor-pointer"
          onClick={props.onGoToLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Register;
