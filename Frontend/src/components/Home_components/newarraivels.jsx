import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {  All_Products  } from "../../assets/asset";

const newarraivels = () => {
  return (

   
      <div className=" container-fluid pt-5">
          <h1 className="text-center">New Arraivels</h1>
         <h3 className="">UpTo 40% Offers Now</h3>
        <div className="  w-100 bg-primary p-5">
         <h1 className="text-center m-5 ">MEN'S SHOE COLLECTION</h1> 

       
    <Swiper
   
        
        breakpoints={{
          1024 : { slidesPerView : 3},
          768 : { slidesPerView : 3},
          320 : { slidesPerView : 1}

        }}
      slidesPerView={4}
      spaceBetween={20}
      modules={[Autoplay, ]}
     
      autoplay={{ delay: 1000 }}
      speed={2000}
      loop={true}
    >
     {All_Products.filter(a => a.category === "shoe").map((item , index) => (
      <SwiperSlide key = {index}>
        <div className=" ">
        <div className="card border-0 shadow-sm h-100">
          <img src={item.img} alt={item.text} height={400} width="100%" />
          <div className="card-body bg-primary text-light">
            <h3 className="">${item.price}</h3>
          </div>
        </div>
        </div>
      </SwiperSlide>
     ))}
    </Swiper>
    </div>
     </div>
    
  );
};

export default newarraivels;