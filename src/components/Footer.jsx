function Footer() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 sm:via-purple-500 to-purple-800 sm:to-pink-600">
      <center>
        <p className="text-[#f1f1f6] p-[1%] m-0 text-lg">
          <b> {'</>'} </b> by{' '}
          <a
            className="text-xl no-underline font-semibold text-[#f1f1f6]hover: text-[#fbfaf9]"
            href="https://shahanone.wordpress.com"
          >
            {' '}
            Shahan.One
          </a>
        </p>
        <p className="text-[#f1f1f6] p-[1%] m-0 text-lg">
          <b> All rights reserved, 2023</b>
        </p>
      </center>
    </div>
  );
}

export default Footer;
