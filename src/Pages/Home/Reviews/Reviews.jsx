import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://emarat-server.vercel.app/reviews')
        .then(res=>res.json())
        .then(data=> setReviews(data))
    },[])
    return (
        <div className='my-20'>
            <h3 className="text-4xl text-sky-600 my-6 ml-20 text-center font-bold">
            Reviews 
            </h3>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
        {
            reviews.map(review=>  <SwiperSlide
            key={review._id}
            >
                <div className='m-24 text-center'>
                    <img className='h-25 w-25 rounded-full' src={review?.image} alt="" />
                    <h3 className='text-3xl text-sky-600'>{review?.name}</h3>
                    <p>{review?.details}</p>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
        </div>
    );
};

export default Reviews;