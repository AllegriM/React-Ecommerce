import React, { useEffect, useState } from 'react'
import { sliderImages } from './sliderData'

export const SliderBanner = () => {

    const [current, setCurrent] = useState(0)
    const length = sliderImages.length

    if (!Array.isArray(sliderImages) || length <= 0) {
        return null
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1) 
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1) 
    }

    return (
        <>
            <div className="img-slider">
                {sliderImages.map( (slide, index) =>{
                    return (
                        <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                            {index === current && <img key={index} alt="product img" className="slider-img" src={slide.image} />}
                        </div>
                        )
                    })  
                }
                <button className='arrowNextImg arrowImgs' onClick={nextSlide}>
                    <svg xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgba(0, 0, 0, 0.9)"><path d="M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z" fill="#3483FA"></path></svg>
                </button>
                <button className='arrowPrevImg arrowImgs' onClick={prevSlide}>
                    <svg xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgba(0, 0, 0, 0.9)"><path d="M14.0656 4.9325L15.1263 5.99316L9.12254 11.9969L15.1325 18.0069L14.0719 19.0676L7.00122 11.9969L14.0656 4.9325Z" fill="#3483FA"></path></svg>
                </button>
                {/* <img alt="product img" className="img" src={require("../../../imgs/banner2.webp")} />
                <img alt="product img" className="img" src={require("../../../imgs/banner3.webp")} />
                <img alt="product img" className="img" src={require("../../../imgs/banner1.webp")} />
                <img alt="product img" className="img" src={require("../../../imgs/banner4.webp")} />
                <img alt="product img" className="img" src={require("../../../imgs/banner5.webp")} /> */}
            </div>
        </>
    )
}
