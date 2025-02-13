const Footer = () => {
  return (
    <footer className="bg-customDark text-white py-[50px] md:;py-[80px] lg:py-[115px]">
      <div className="w-full max-w-[1440px] mx-auto lg:w-[75%] px-[20px] xl:px-0">
        <img
          src="/images/logo.svg"
          alt="EN MEDIA"
          className="h-[1.8rem] lg:h-[2.29rem] img-white"
        />
        <p className="sm:text-[14px] lg:text-[21px] text-[#f5f5f5] mt-[30px]">
          Copyrights 2024.
          <strong className="text-white">테스트</strong> All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
