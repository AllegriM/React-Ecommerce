import { useState } from "react";

export const ImagesProdChanger = ( { data } ) => {

    //Img 

    const [img, setImg] = useState(`${data.pictures[0]?.secure_url}`)

    const selectImg = (e) => {
        setImg(e.target.src)
    }

    let picLength = data.pictures.length;
    const otherImgs = picLength - 7;

    return (
        <div className='images-container product-section'>
            <div className='product-all-imgs'>
                {picLength <= 7 ?
                    data.pictures.map(img => {
                        return (
                            <div key={img.id}>
                                <div className='product-img-cont'>
                                    <img className='product-img' onMouseOver={selectImg} onClick={selectImg} alt='' src={img.secure_url} />
                                </div>
                            </div>
                        )
                    })
                    :
                    data.pictures.slice(0, 8).map(img => {
                        return (
                            <div className='prod-last-child' key={img.id}>
                                <div className='product-img-cont'>
                                    <img className='product-img' onMouseOver={selectImg} onClick={selectImg} alt='' src={img.secure_url} />
                                    <span className='product-otherImgs'>{`+${otherImgs}`}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='product-big-img'>
                <img alt='' className='product-main-img' src={img} />
            </div>
        </div>
    )
}
