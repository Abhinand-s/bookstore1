//import featuresbookcss
import './FeaturesBooks.css'
//import tytle props..........
import TitileTypeOne from '../../UI/TitileTypeOne/TitileTypeOne'

// Import Swiper React components  Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

//import featuresbooksData
import { featuredBooksData } from '../../Data/Data';
import { Link } from 'react-router-dom';
//import react icon
import { BsArrowReturnRight } from 'react-icons/bs';
//swiper breakpoint
const breakpoints = {
    //when window width is <= 1024px
    1024: {
        slidesPerView: 4,
        spaceBetweenSlides: 30
    },
    //when window width is <= 768px
    768: {
        slidesPerView: 3,
        spaceBetweenSlides: 20
    },
    //when window width is <= 480px
    480: {
        slidesPerView: 2,
        spaceBetweenSlides: 10
    },
    //when window width is <= 0px
    0: {
        slidesPerView: 1,
        spaceBetweenSlides: 0
    },
}
export default function FeaturesBooks() {
    return (
        <section className='Featured'>
            <div className="container featurers-book-cotnainer">
                {/*.......title  props*/}
                <TitileTypeOne TitleTop={'some quality items'} Title={'Featured Books'} />

                {/*.......featuredbooks slider .........*/}
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    loop={true}
                    modules={[Pagination]}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    breakpoints={breakpoints}

                >
                    {
                        featuredBooksData.map(({ img, imgLling, name, namelink, writer, price }, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="featurebook-box">
                                        <Link to={imgLling} className='featurebook'>
                                            <img src={img} alt="" />
                                        </Link>
                                        <div className="featurebook-info">
                                            <Link to={namelink}>
                                                <h4>{name}</h4>
                                            </Link>
                                            <div><small>{writer}</small></div>
                                            <h5><span>{price}</span></h5>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                    <div className="feature-border container"></div>
                    {/*.......swiper pagination .........*/}
                    <div className="swiper-pagination"></div>
                    {/*.......view all products button .........*/}
                    <Link to='*' className='btn feature-btn'>View all products <BsArrowReturnRight /></Link>
                </Swiper>

            </div>
        </section>
    )
}
