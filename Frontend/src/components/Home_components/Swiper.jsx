import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {  All_Products  } from "../../assets/asset";



const MySwiper = () => {
  return (
      <div className=" container pt-5">
        <h1 className="text-center m-5">MEN'S COLLECTION</h1>
    <Swiper
   
        
        breakpoints={{
          1024 : { slidesPerView : 3},
          768 : { slidesPerView : 3},
          320 : { slidesPerView : 1}

        }}
      slidesPerView={3}
      spaceBetween={20}
      modules={[Autoplay, ]}
     
      autoplay={{ delay: 1000 }}
      speed={1000}
      loop={true}
    >
     {All_Products.filter(a => a.category === "tshirt").map((item , index) => (
      <SwiperSlide key = {index}>
        <div className="card border-0 shadow-sm h-100">
          <img src={item.img} alt={item.text} height={300} width={300}/>
          <div className="card-body">
            <h3 className="">{item.text}</h3>
          </div>
        </div>
      </SwiperSlide>
     ))}
    </Swiper>
    </div>
  );
};

export default MySwiper;