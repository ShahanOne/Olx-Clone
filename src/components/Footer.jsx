function Footer() {
  return (
    <div className="bg-gradient-to-r from-pink-400 to-red-500 py-4">
      <center>
        <p className="text-[#f1f1f6] p-[1%] m-0 text-lg">
          {'</>'} by{' '}
          <a
            className="text-xl no-underline font-semibold text-[#f1f1f6]hover: text-[#fbfaf9]"
            href="https://shahanone.wordpress.com"
          >
            {' '}
            Shahan.One
          </a>
        </p>
        <p className="text-[#f1f1f6] p-[1%] m-0 text-lg">
          All rights reserved, 2024
        </p>
      </center>
    </div>
  );
}

export default Footer;
