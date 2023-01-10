function Navbar(props) {
  function handleHome() {
    window.location.reload();
  }
  return (
    <nav>
      <button className="navBrand navLink" onClick={handleHome}>
        Olx Clone
      </button>
      <button className="navLink" onClick={props.onNav1}>
        {props.Nav1}
      </button>{' '}
      <button className="navLink" onClick={props.onNav2}>
        {props.Nav2}
      </button>{' '}
      <button className="navLink" onClick={props.onNav3}>
        {props.Nav3}
      </button>{' '}
      <button className="navLink" onClick={props.onNav4}>
        {props.Nav4}
      </button>{' '}
    </nav>
  );
}

export default Navbar;
