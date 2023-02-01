function Navbar(props) {
  function handleHome() {
    window.location.reload();
  }
  return (
    <nav className="py-[1%] grid grid-cols-1 sm:grid-cols-2 px-10 lg:px-4 font-fredoka bg-[#8251e5]">
      <div className="py-2 text-center sm:text-start">
        <button
          className="text-[#f1f1f6] hover:text-[#ffffff] md:ml-6 text-4xl"
          onClick={handleHome}
        >
          Olx Clone
        </button>
      </div>
      <div className="grid grid-cols-4 py-4">
        <button
          className="text-lg font-semibold bg-[#8251e5] border-none text-[#f1f1f6] hover:text-[#ffffff]"
          onClick={props.onNav1}
        >
          {props.Nav1}
        </button>{' '}
        <button
          className="text-lg font-semibold bg-[#8251e5] border-none text-[#f1f1f6] hover:text-[#ffffff]"
          onClick={props.onNav2}
        >
          {props.Nav2}
        </button>{' '}
        <button
          className="text-lg font-semibold bg-[#8251e5] border-none text-[#f1f1f6] hover:text-[#ffffff]"
          onClick={props.onNav3}
        >
          {props.Nav3}
        </button>{' '}
        <button
          className="text-lg font-semibold bg-[#8251e5] border-none text-[#f1f1f6] hover:text-[#ffffff]"
          onClick={props.onNav4}
        >
          {props.Nav4}
        </button>{' '}
      </div>
    </nav>
  );
}

export default Navbar;