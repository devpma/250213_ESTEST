function Header() {
  return (
    <header className="bg-white border-b border-gray-300 px-6 py-3">
      <div className="w-full max-w-[1700px] mx-auto lg:w-[88.54%] flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/images/logo.svg"
            alt="EN MEDIA"
            className="h-[1.8rem] lg:h-[2.29rem]"
          />
        </div>
        <nav>
          <ul className="flex space-x-2 md:space-x-4 lg:space-x-6 text-[14px] md:text-[16px] lg:text-[20px] text-customDark font-semibold">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
