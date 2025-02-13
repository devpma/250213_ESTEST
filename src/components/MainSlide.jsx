import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function MainSlide() {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        className="w-full h-[400px] md:h-[500px] lg:h-[740px]"
      >
        <SwiperSlide>
          <div
            className="relative w-full h-full bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url('/images/main.jpg')` }}
          >
            <div className="m-auto text-white w-full max-w-[1440px] mx-auto lg:w-[75%] px-[50px] lg:px-0">
              <h1 className="text-[30px] md:text-[50px] lg:text-[71px] font-bold leading-[1.25] mb-[12px] lg:mb-[58px]">
                Lorem ipsum <br />
                dolor sit amet,
              </h1>
              <p className="text-[14px] md:text-[20px] lg:text-[31px]">
                Lorem ipsum dolor sit amet, consectetur <br />
                sed do eiusmod tempor incididunt ut <br />
                abore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-full bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url('/images/main.jpg')` }}
          >
            <div className="m-auto text-white w-full max-w-[1440px] mx-auto lg:w-[75%]">
              <h1 className="text-4xl font-bold mb-4">
                Lorem ipsum <br />
                dolor sit amet,
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur <br />
                sed do eiusmod tempor incididunt ut <br />
                abore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-button-next !text-white !right-[10px] lg:!right-[45px]"></div>
        <div className="swiper-button-prev !text-white !left-[10px] lg:!left-[45px]"></div>
      </Swiper>
    </section>
  );
}

export default MainSlide;
