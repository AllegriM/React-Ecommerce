import { useEffect, useState } from "react"
import getSellerID from "../../helpers/getSellerProducts"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Card from "../Card/Card";

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
                                                <Card prod={prod} key={prod.id} />
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