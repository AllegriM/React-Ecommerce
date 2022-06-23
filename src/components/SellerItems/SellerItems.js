import { useEffect, useState } from "react"
import getSellerID from "../../helpers/getSellerProducts"
import { ProductCard } from '../ProductCard/ProductCard'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export const SellerItems = ({ prodId }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        getSellerID(prodId, setItems)
    }, [])


    return (
        <>
            {
                items.length === 0 ? null
                    :
                    <div className="seller-section product-section">
                        <h3 className="title-seller">Publicaciones del vendedor</h3>
                        <div className='prod-description'>
                            <Swiper
                                className="swiper-wrapper"
                                modules={[Navigation]}
                                navigation={true}
                                slidesPerGroup={3}
                                slidesPerView={3}
                                spaceBetween={30}
                            >
                                {
                                    items.slice(1, 21).map((prod, index) => {
                                        return (
                                            <SwiperSlide key={index} style={{ width: 224 }}>
                                                <ProductCard data={prod} key={prod.id} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
            }

        </>
    )
}