import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryPath from '../../components/DetailCardPage/ProductCategoryTree'
import { SellerItems } from '../../components/DetailCardPage/ProductSellerItems'
import { ProductQuestions } from '../../components/DetailCardPage/ProductQuestions'
import { ReviewData } from '../../components/DetailCardPage/ProductReviews';
import { SelectQuantity } from '../../components/DetailCardPage/ProdQuantitySelection'
import { CartContext } from '../../Context/cartContext'
import { AddCartButton } from '../../components/DetailCardPage/ProductCartBtn'
import { AmountContext } from '../../Context/amountSelContext'
import { Box, Spinner, Stack } from '@chakra-ui/react'
import { ImagesProdChanger } from '../../components/DetailCardPage/ProductImages'
import { ReviewContext } from '../../Context/reviewData'
import { StarsCollection } from '../../components/Stars/StarsCollection'
import { FavButton } from '../../components/FavButton/FavBtn'

export const ProductCardDetail = ({ data }) => {

    const [loading, setLoading] = useState(true)

    const { amount, setProdAmount } = useContext(AmountContext)
    
    const { cart, addToCart } = useContext(CartContext)
    
    const { prodReviews } = useContext(ReviewContext)
    
    const prodId = useParams()
    
    useEffect(() => {
        setTimeout(() =>{
            if (amount && cart && prodReviews && data) return setLoading(false)
        }, 700)
    }, [])
    
    return (
        loading ? 
        <Stack align='center' justify='center' height='80vh'>
            <Spinner size='xl' />
        </Stack>
        :
        <>
            <div className='detail-container'>
                <CategoryPath prodID={prodId} />
                <div className='product-container'>
                    <div className='product-card'>
                        <div className='product-info'>
                            <ImagesProdChanger data={data} />
                            <SellerItems prodId={prodId} />
                            <ProductQuestions prodId={prodId} />
                            <ReviewData prodId={prodId} prodTitle={data.title} />
                        </div>
                        <div className='seller-info'>
                            <div className='product-main'>
                                <p className='product-qty-sell texto-gris'>{data.condition === "new" ? "Nuevo" : "Usado"} | {data.sold_quantity === undefined ? 0 : data.sold_quantity} vendidos</p>
                                <div className='product-title-fav '>
                                    <h1 className='product-title'>{data.title}</h1>
                                    <FavButton prod={data} />
                                </div>
                            </div>
                            <div className='product-review separation-Y'>
                                <StarsCollection starsAmount={prodReviews.numberOfStars}/>
                                <p className='separation-left texto-gris'>{prodReviews.total} opiniones</p>
                            </div>
                            <Box className='product-price-cuotas' mt='1em'>
                                <span className='product-price'>
                                    <span className='product-price-int'>{data.currency_id === "USD" ? `U$S ${Math.round((data.price)).toLocaleString('es-AR')}` : `$ ${Math.round((data.price)).toLocaleString('es-AR')}`}</span>
                                </span>
                                <p className='product-price-subtitle'>
                                    <span className='product-due-qty'>en 12x {Math.round((data.price / 12)).toLocaleString('es-AR')}</span>
                                    <span className='product-due-float'>{(data.price / 12).toFixed(2).slice(-2)}</span>
                                </p>
                                <p className='texto-azul m0 '>Ver los medios de pago</p>
                            </Box>
                            <div className='product-shipping separation-Y'>
                                <figure aria-hidden="true" className="ui-pdp-media__figure">
                                    <svg xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><defs><symbol id="fast_truck"><path fillRule="nonzero" d="M10.587 14.805H7.01a2.452 2.452 0 1 1-4.452-1.937l-1.56-.003.002-1.2 3.6.008v.025h.048c1.167 0 2.143.815 2.39 1.907h3.52a2.455 2.455 0 0 1 1.836-1.844l2.423-6.352a.6.6 0 0 0-.56-.814H4.6v-1.2h9.658a1.8 1.8 0 0 1 1.697 2.4h1.677l1.409 4.225-2.027 4.787-1.701-.007a2.452 2.452 0 0 1-4.726.005zm4.751-1.205l.883.004 1.538-3.634-.991-2.975h-1.27l-1.835 4.809c.834.253 1.48.939 1.675 1.796zM7 5.79v1.2H1v-1.2h6zM4.6 8.222v1.2H2.2v-1.2h2.4zm.049 7.178a1.251 1.251 0 1 0 0-2.502 1.251 1.251 0 0 0 0 2.502zm8.3 0a1.251 1.251 0 1 0 0-2.502 1.251 1.251 0 0 0 0 2.502z"></path></symbol></defs><g fill="#00A650"><path fillRule="nonzero" d="M10.587 14.805H7.01a2.452 2.452 0 1 1-4.452-1.937l-1.56-.003.002-1.2 3.6.008v.025h.048c1.167 0 2.143.815 2.39 1.907h3.52a2.455 2.455 0 0 1 1.836-1.844l2.423-6.352a.6.6 0 0 0-.56-.814H4.6v-1.2h9.658a1.8 1.8 0 0 1 1.697 2.4h1.677l1.409 4.225-2.027 4.787-1.701-.007a2.452 2.452 0 0 1-4.726.005zm4.751-1.205l.883.004 1.538-3.634-.991-2.975h-1.27l-1.835 4.809c.834.253 1.48.939 1.675 1.796zM7 5.79v1.2H1v-1.2h6zM4.6 8.222v1.2H2.2v-1.2h2.4zm.049 7.178a1.251 1.251 0 1 0 0-2.502 1.251 1.251 0 0 0 0 2.502zm8.3 0a1.251 1.251 0 1 0 0-2.502 1.251 1.251 0 0 0 0 2.502z"></path></g></svg>
                                </figure>
                                <div className='product-shipping-text m0'>
                                    <p className='product-shipping-arrive m0'>
                                        <span className='texto-verde'>Llega mañana</span>
                                        <span className='product-price-subtitle separation-left'>
                                            <span className='product-due-qty'>{data.shipping?.free_shipping === false ? "por $603" : "gratis"} </span>
                                        </span>
                                    </p>
                                    <p className='texto-gris mb-1'>Comprando dentro de las próximas <span className='texto-negro'>13 h 19 min</span></p>
                                    <p className='texto-gris mb-1' >Beneficio Mercado Puntos</p>
                                    <p className='texto-azul mb-1'>Ver más formas de entrega</p>
                                </div>
                            </div>
                            <div className='product-shipping separation-Y'>
                                <figure aria-hidden="true" className="ui-pdp-media__figure">
                                    <svg xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12"><defs><symbol id="returns"><path d="M2.474 7.2h7.225a2.7 2.7 0 1 0 0-5.4H7V.6h2.7a3.9 3.9 0 1 1 0 7.8H2.473l2.45 2.389-.839.859L.14 7.8l3.945-3.848.838.859L2.473 7.2z"></path></symbol></defs><g fill="#00A650"><path d="M2.474 7.2h7.225a2.7 2.7 0 1 0 0-5.4H7V.6h2.7a3.9 3.9 0 1 1 0 7.8H2.473l2.45 2.389-.839.859L.14 7.8l3.945-3.848.838.859L2.473 7.2z"></path></g></svg>
                                </figure>
                                <div className='product-shipping-text m0'>
                                    <p className='texto-verde mb-1'>Devolución gratis</p>
                                    <p className='texto-gris mb-1'>Tenés 30 días desde que lo recibís.</p>
                                    <p className='texto-azul mb-1'>Conocer más</p>
                                </div>
                            </div>
                            <div>
                                <p className='texto-negro-big'>Stock disponible</p>
                            </div>
                            <div>
                                <Box display='flex' alignItems='center' className="andes-button__content">
                                    <span className="">Cantidad:</span>
                                    <SelectQuantity prodQuantity={data.available_quantity} setProdAmount={setProdAmount}/>
                                    <span className="texto-gris">({data.available_quantity} disponibles)</span>
                                </Box>
                            </div>
                            <Box mt='1em' className='product-buy-btns mt2'>
                                <div className="">
                                    <button type="submit" className="btn-submit btn-azul" aria-disabled="false" formAction="https://www.mercadolibre.com.ar/gz/checkout/buy">
                                        <span className="andes-button__content">Comprar ahora</span>
                                    </button>
                                    <AddCartButton prodQuantity={data.available_quantity} addToCart={addToCart} cart={cart} item={data} prodAmount={amount} />
                                    <div className="separation-Y">
                                        <div className="modalbox">
                                            <div className="align-all">
                                                <svg xlink="http://www.w3.org/1999/xlink" style={{ flexShrink: 0, marginRight: 10 }} className="ui-pdp-icon ui-pdp-icon--rounded-truck-medium-alt ui-pdp-color--GREEN ui-pdp-card-tooltip__card__content__icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><symbol id="rounded_truck_medium_alt"><path stroke="#00a650" strokeWidth="0.5" d="M15 29.75C6.867 29.75 0.25 23.133 0.25 15C0.25 6.867 6.867 0.25 15 0.25c8.133 0 14.75 6.617 14.75 14.75 C29.75 23.133 23.133 29.75 15 29.75z M15 1.25C7.418 1.25 1.25 7.418 1.25 15c0 7.582 6.168 13.75 13.75 13.75 c7.582 0 13.75-6.168 13.75-13.75C28.75 7.418 22.582 1.25 15 1.25z"></path><path d="M14.29 19.292c-0.297 0.985-1.212 1.702-2.293 1.702c-1.083 0-1.997-0.719-2.294-1.703L9.001 19.29 c-0.994 0-1.8-0.806-1.8-1.8v-6.695c0-0.994 0.806-1.8 1.8-1.8h6.664c0.994 0 1.8 0.806 1.8 1.8V10.8h2.626l2.708 3.491v4.999 l-1.846 0.002c-0.297 0.985-1.211 1.702-2.293 1.702s-1.996-0.717-2.293-1.702H14.29z M18.66 17.405 c-0.66 0-1.195 0.534-1.195 1.194S18 19.794 18.66 19.794s1.195-0.535 1.195-1.194C19.855 17.939 19.32 17.405 18.66 17.405z M11.997 17.405c-0.66 0-1.195 0.534-1.195 1.194s0.535 1.194 1.195 1.194s1.194-0.535 1.194-1.194 C13.191 17.939 12.656 17.405 11.997 17.405z M15.665 10.195H9.001c-0.331 0-0.6 0.269-0.6 0.6v6.695c0 0.33 0.269 0.6 0.6 0.6 h0.655c0.234-1.078 1.193-1.885 2.34-1.885c1.148 0 2.107 0.807 2.34 1.884h1.93v-7.294C16.266 10.464 15.996 10.195 15.665 10.195 L15.665 10.195z M19.503 12h-2.038v4.525c0.352-0.205 0.76-0.32 1.195-0.32c1.146 0 2.105 0.807 2.34 1.885h0.6v-3.388L19.503 12z"></path></symbol></defs><g fill="#00A650"><path stroke="#00a650" strokeWidth="0.5" d="M15 29.75C6.867 29.75 0.25 23.133 0.25 15C0.25 6.867 6.867 0.25 15 0.25c8.133 0 14.75 6.617 14.75 14.75 C29.75 23.133 23.133 29.75 15 29.75z M15 1.25C7.418 1.25 1.25 7.418 1.25 15c0 7.582 6.168 13.75 13.75 13.75 c7.582 0 13.75-6.168 13.75-13.75C28.75 7.418 22.582 1.25 15 1.25z"></path><path d="M14.29 19.292c-0.297 0.985-1.212 1.702-2.293 1.702c-1.083 0-1.997-0.719-2.294-1.703L9.001 19.29 c-0.994 0-1.8-0.806-1.8-1.8v-6.695c0-0.994 0.806-1.8 1.8-1.8h6.664c0.994 0 1.8 0.806 1.8 1.8V10.8h2.626l2.708 3.491v4.999 l-1.846 0.002c-0.297 0.985-1.211 1.702-2.293 1.702s-1.996-0.717-2.293-1.702H14.29z M18.66 17.405 c-0.66 0-1.195 0.534-1.195 1.194S18 19.794 18.66 19.794s1.195-0.535 1.195-1.194C19.855 17.939 19.32 17.405 18.66 17.405z M11.997 17.405c-0.66 0-1.195 0.534-1.195 1.194s0.535 1.194 1.195 1.194s1.194-0.535 1.194-1.194 C13.191 17.939 12.656 17.405 11.997 17.405z M15.665 10.195H9.001c-0.331 0-0.6 0.269-0.6 0.6v6.695c0 0.33 0.269 0.6 0.6 0.6 h0.655c0.234-1.078 1.193-1.885 2.34-1.885c1.148 0 2.107 0.807 2.34 1.884h1.93v-7.294C16.266 10.464 15.996 10.195 15.665 10.195 L15.665 10.195z M19.503 12h-2.038v4.525c0.352-0.205 0.76-0.32 1.195-0.32c1.146 0 2.105 0.807 2.34 1.885h0.6v-3.388L19.503 12z"></path></g></svg>
                                                <div className="">
                                                    <p className="customize-cart">Armá un carrito de productos
                                                        <svg xlink="http://www.w3.org/1999/xlink" width="41" height="13" viewBox="0 0 41 13" xmlns="http://www.w3.org/2000/svg"><defs><symbol id="full_icon"><path fillRule="nonzero" d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z"></path></symbol></defs><g fill="#00A650"><path fillRule="nonzero" d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z"></path></g></svg>
                                                        del mismo vendedor y ahorrá en el envío.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                            <div>
                                <ul>
                                    <li>
                                        <div className='align-base'>
                                            <figure aria-hidden="true" className="media__figure">
                                                <svg xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15"><defs><symbol id="protected_buy"><path fillRule="nonzero" d="M.399 3.89v-.6h.6c1.87 0 3.76-.783 5.68-2.374l.383-.317.383.317c1.92 1.59 3.81 2.374 5.68 2.374h.6v.6c0 5.633-2.165 9.242-6.473 10.679l-.19.063-.19-.063C2.564 13.132.4 9.523.4 3.89zm6.663-1.743c-1.8 1.4-3.62 2.179-5.455 2.32.135 4.725 1.947 7.648 5.455 8.898 3.508-1.25 5.32-4.173 5.455-8.898-1.835-.141-3.656-.92-5.455-2.32zm-.905 6.477l3.191-3.582.896.798-4.02 4.513-2.472-2.377.831-.865 1.574 1.513z"></path></symbol></defs><g fill="#000000" fillOpacity="0.55"><path fillRule="nonzero" d="M.399 3.89v-.6h.6c1.87 0 3.76-.783 5.68-2.374l.383-.317.383.317c1.92 1.59 3.81 2.374 5.68 2.374h.6v.6c0 5.633-2.165 9.242-6.473 10.679l-.19.063-.19-.063C2.564 13.132.4 9.523.4 3.89zm6.663-1.743c-1.8 1.4-3.62 2.179-5.455 2.32.135 4.725 1.947 7.648 5.455 8.898 3.508-1.25 5.32-4.173 5.455-8.898-1.835-.141-3.656-.92-5.455-2.32zm-.905 6.477l3.191-3.582.896.798-4.02 4.513-2.472-2.377.831-.865 1.574 1.513z"></path></g></svg>
                                            </figure>
                                            <p className='texto-gris'>
                                                <span className='texto-azul'>Compra Protegida</span>
                                                , recibí el producto que esperabas o te devolvemos tu dinero.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='align-base'>
                                            <figure aria-hidden="true" className="media__figure">
                                                <svg xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><defs><symbol id="loyalty_points"><path fillRule="nonzero" d="M7.598 8.746v1.252h.6c1.657 0 3 1.343 3.001 3v.6H2.798v-.602a2.998 2.998 0 0 1 2.998-2.997h.604l-.001-1.253a3.435 3.435 0 0 1-1.578-.724l-1.586-.446-.106-.041-.739-.37A3.6 3.6 0 0 1 .402 3.947V1.599h2.486l-.2-1.2h8.618l-.2 1.2h2.489v2.346a3.6 3.6 0 0 1-1.988 3.22l-.739.37-.106.041-1.592.448a3.43 3.43 0 0 1-1.572.722zm2.65-2.272l.134-.037.688-.345a2.4 2.4 0 0 0 1.326-2.147V2.799h-1.49l-.52 3.13c-.032.187-.078.37-.138.545zm-6.505-.001a3.453 3.453 0 0 1-.139-.552L3.087 2.8H1.602v1.148a2.4 2.4 0 0 0 1.325 2.145l.687.345.129.036zm.361-4.874l.684 4.126a2.24 2.24 0 0 0 2.21 1.874c1.092 0 2.024-.79 2.204-1.868L9.89 1.6H4.104zm4.094 9.6H5.795c-.784 0-1.45.5-1.697 1.199h5.799c-.248-.699-.915-1.2-1.7-1.2z"></path></symbol></defs><g fill="#000000" fillOpacity="0.55"><path fillRule="nonzero" d="M7.598 8.746v1.252h.6c1.657 0 3 1.343 3.001 3v.6H2.798v-.602a2.998 2.998 0 0 1 2.998-2.997h.604l-.001-1.253a3.435 3.435 0 0 1-1.578-.724l-1.586-.446-.106-.041-.739-.37A3.6 3.6 0 0 1 .402 3.947V1.599h2.486l-.2-1.2h8.618l-.2 1.2h2.489v2.346a3.6 3.6 0 0 1-1.988 3.22l-.739.37-.106.041-1.592.448a3.43 3.43 0 0 1-1.572.722zm2.65-2.272l.134-.037.688-.345a2.4 2.4 0 0 0 1.326-2.147V2.799h-1.49l-.52 3.13c-.032.187-.078.37-.138.545zm-6.505-.001a3.453 3.453 0 0 1-.139-.552L3.087 2.8H1.602v1.148a2.4 2.4 0 0 0 1.325 2.145l.687.345.129.036zm.361-4.874l.684 4.126a2.24 2.24 0 0 0 2.21 1.874c1.092 0 2.024-.79 2.204-1.868L9.89 1.6H4.104zm4.094 9.6H5.795c-.784 0-1.45.5-1.697 1.199h5.799c-.248-.699-.915-1.2-1.7-1.2z"></path></g></svg>
                                            </figure>
                                            <p className='texto-gris'>
                                                <span className='texto-azul'>Mercado Puntos.</span>
                                                Se abrirá en una nueva ventana. Sumás 22 puntos.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}


