import React from 'react'

export const SliderBanner = () => {
    return (
        <>
            <div className="img-slider">
                <img alt="product img" className="img" src={require("../../../imgs/banner2.webp")} />
                <img alt="product img" className="img" src={require("../../../imgs/banner3.webp")} />
                <img alt="product img" className="img" src={require("../../../imgs/banner1.webp")} />
                <img alt="product img" className="img" src={require("../../../imgs/banner4.webp")} />
                <img alt="product img" className="img" src={require("../../../imgs/banner5.webp")} />
            </div>
        </>
    )
}
