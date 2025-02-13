const cards = [
  {
    img: "/images/img1.jpg",
    title: "Lorem ipsum dolor sit amet,",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    img: "/images/img2.jpg",
    title: "Lorem ipsum dolor sit amet,",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    img: "/images/img3.jpg",
    title: "Lorem ipsum dolor sit amet,",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    img: "/images/img4.jpg",
    title: "Lorem ipsum dolor sit amet,",
    desc: "Lorem ipsum dolor sit amet",
  },
];

const MainCard = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto lg:w-[75%] py-[50px] lg:py-[160px] px-[20px] xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white h-[350px] sm:h-[400px] xl:h-[490px] relative rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={card.img}
              alt="Card Image"
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            />

            <div className="p-[30px]">
              <h3 className="text-xl lg:text-[28px] 2xl:text-[31px] font-black lg:leading-[22px] xl:leading-[38.75px] tracking-[-0.025em] text-black">
                {card.title}
              </h3>
              <p className="lg:text-[14px] xl:text-[18px] text-[#424242] mt-2">
                {card.desc}
              </p>
              <p className="lg:text-[12px] xl:text-[16px] text-[#bdbdbd] absolute left-[0] bottom-[30px] px-[30px]">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainCard;
