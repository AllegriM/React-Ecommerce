import React from 'react'
import './product.css'

export default function Product(props) {
    return (
        <>
            <div className='product-container'>
                <div className='product-card'>
                    <div className='product-info'>
                        <div className='product-all-imgs'>
                            <span className='product-img'>
                                <img alt='' />
                            </span>
                            <span className='product-img'>
                                <img alt='' />
                            </span>
                            <span className='product-img'>
                                <img alt='' />
                            </span>
                        </div>
                        <div className='product-big-img'>
                            <img alt='' className='product-main-img' src='https://http2.mlstatic.com/D_NQ_NP_825073-MLA40760731794_022020-O.webp' />
                        </div>
                    </div>
                    <div className='seller-info'>
                        <div className='product-main'>
                            <p className='product-qty-sell texto-gris'>Nuevo | 253 vendidos</p>
                            <div className='product-title-fav '>
                                <h1 className='product-title'>Auriculares in-ear gamer inalámbricos Haylou GT Series GT1 negro.</h1>
                                <button className='heart-fav'>
                                    <svg xlink="http://www.w3.org/1999/xlink" class="ui-pdp-icon ui-pdp-icon--bookmark ui-pdp-bookmark__icon-bookmark" xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20"><defs><symbol id="bookmark"><path stroke="#3483FA" d="M10.977 2.705C11.93 1.618 13.162 1 14.895 1c3.333 0 5.607 2.152 5.607 6.274 0 .08-.002.16-.005.24-.107 2.596-1.876 5.253-4.737 7.892a33.77 33.77 0 0 1-3.165 2.57 32.447 32.447 0 0 1-1.45.983l-.394.243-.394-.243-.009-.005-.021-.014-.08-.05a32.447 32.447 0 0 1-1.34-.914 33.77 33.77 0 0 1-3.165-2.57c-2.86-2.639-4.63-5.296-4.737-7.892A5.839 5.839 0 0 1 1 7.274C1 3.152 3.274 1 6.607 1c1.733 0 2.966.618 3.918 1.705.056.064.137.165.226.282.09-.117.17-.218.226-.282z"></path></symbol></defs><g stroke-width="1.5px" fill-rule="evenodd" stroke="#3483FA" fill="none"><g stroke="#3483FA" fill="none" stroke-width="1.5px"><path stroke="#3483FA" d="M10.977 2.705C11.93 1.618 13.162 1 14.895 1c3.333 0 5.607 2.152 5.607 6.274 0 .08-.002.16-.005.24-.107 2.596-1.876 5.253-4.737 7.892a33.77 33.77 0 0 1-3.165 2.57 32.447 32.447 0 0 1-1.45.983l-.394.243-.394-.243-.009-.005-.021-.014-.08-.05a32.447 32.447 0 0 1-1.34-.914 33.77 33.77 0 0 1-3.165-2.57c-2.86-2.639-4.63-5.296-4.737-7.892A5.839 5.839 0 0 1 1 7.274C1 3.152 3.274 1 6.607 1c1.733 0 2.966.618 3.918 1.705.056.064.137.165.226.282.09-.117.17-.218.226-.282z"></path></g></g></svg>
                                </button>
                            </div>
                        </div>
                        <div className='product-review separation-Y'>
                            <div className='heart-valoracion'>
                                <svg class="ui-review-view__rating__summary__rating__star" aria-hidden="true" width="16.8" height="16" viewBox="0 0 10 10">
                                    <path fill="#3483FA" fill-rule="evenodd" d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path>
                                </svg>
                                <svg class="ui-review-view__rating__summary__rating__star" aria-hidden="true" width="16.8" height="16" viewBox="0 0 10 10">
                                    <path fill="#3483FA" fill-rule="evenodd" d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path>
                                </svg>
                                <svg class="ui-review-view__rating__summary__rating__star" aria-hidden="true" width="16.8" height="16" viewBox="0 0 10 10">
                                    <path fill="#3483FA" fill-rule="evenodd" d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path>
                                </svg>
                                <svg class="ui-review-view__rating__summary__rating__star" aria-hidden="true" width="16.8" height="16" viewBox="0 0 10 10">
                                    <path fill="#3483FA" fill-rule="evenodd" d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path>
                                </svg>
                                <svg class="ui-review-view__rating__summary__rating__star" aria-hidden="true" width="16.8" height="16" viewBox="0 0 10 10">
                                    <path fill="#3483FA" fill-rule="evenodd" d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path>
                                </svg>
                            </div>
                            <p className='separation-left texto-gris'>11 opiniones</p>
                        </div>
                        <div className='product-distincion separation-Y'>
                            <div className='distincion'>MÁS VENDIDO</div>
                            <p className='separation-left texto-azul '>20° en Auriculares</p>
                        </div>
                        <div className='product-price-cuotas'>
                            <span className='product-price'>
                                <span className='product-price-currency'>$</span>
                                <span className='product-price-int'>3.050</span>
                                <span className='product-price-float'>90</span>
                            </span>
                            <p className='product-price-subtitle'>
                                <span className='product-due-qty'>en 12x $452</span>
                                <span className='product-due-float'>37</span>
                            </p>
                            <p className='texto-azul m0 '>Ver los medios de pago</p>
                        </div>
                        <div className='product-shipping separation-Y'>
                            <figure aria-hidden="true" class="ui-pdp-media__figure">
                                <svg xlink="http://www.w3.org/1999/xlink" class="ui-pdp-icon ui-pdp-icon--fast-truck ui-pdp-color--GREEN" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><defs><symbol id="fast_truck"><path fill-rule="nonzero" d="M10.587 14.805H7.01a2.452 2.452 0 1 1-4.452-1.937l-1.56-.003.002-1.2 3.6.008v.025h.048c1.167 0 2.143.815 2.39 1.907h3.52a2.455 2.455 0 0 1 1.836-1.844l2.423-6.352a.6.6 0 0 0-.56-.814H4.6v-1.2h9.658a1.8 1.8 0 0 1 1.697 2.4h1.677l1.409 4.225-2.027 4.787-1.701-.007a2.452 2.452 0 0 1-4.726.005zm4.751-1.205l.883.004 1.538-3.634-.991-2.975h-1.27l-1.835 4.809c.834.253 1.48.939 1.675 1.796zM7 5.79v1.2H1v-1.2h6zM4.6 8.222v1.2H2.2v-1.2h2.4zm.049 7.178a1.251 1.251 0 1 0 0-2.502 1.251 1.251 0 0 0 0 2.502zm8.3 0a1.251 1.251 0 1 0 0-2.502 1.251 1.251 0 0 0 0 2.502z"></path></symbol></defs><g fill="#00A650"><path fill-rule="nonzero" d="M10.587 14.805H7.01a2.452 2.452 0 1 1-4.452-1.937l-1.56-.003.002-1.2 3.6.008v.025h.048c1.167 0 2.143.815 2.39 1.907h3.52a2.455 2.455 0 0 1 1.836-1.844l2.423-6.352a.6.6 0 0 0-.56-.814H4.6v-1.2h9.658a1.8 1.8 0 0 1 1.697 2.4h1.677l1.409 4.225-2.027 4.787-1.701-.007a2.452 2.452 0 0 1-4.726.005zm4.751-1.205l.883.004 1.538-3.634-.991-2.975h-1.27l-1.835 4.809c.834.253 1.48.939 1.675 1.796zM7 5.79v1.2H1v-1.2h6zM4.6 8.222v1.2H2.2v-1.2h2.4zm.049 7.178a1.251 1.251 0 1 0 0-2.502 1.251 1.251 0 0 0 0 2.502zm8.3 0a1.251 1.251 0 1 0 0-2.502 1.251 1.251 0 0 0 0 2.502z"></path></g></svg>
                            </figure>
                            <div className='product-shipping-text m0'>
                                <p className='product-shipping-arrive m0'>
                                    <span className='texto-verde'>Llega hoy</span>
                                    <p className='product-price-subtitle separation-left'>
                                        <span className='product-due-qty'>por $603</span>
                                        <span className='product-due-float'>49</span>
                                    </p>
                                </p>
                                <p className='texto-gris mb-1'>Comprando dentro de las próximas <span className='texto-negro'>13 h 19 min</span></p>
                                <p className='texto-gris mb-1' >Beneficio Mercado Puntos</p>
                                <p className='texto-azul mb-1'>Ver más formas de entrega</p>
                            </div>
                        </div>
                        <div className='product-shipping separation-Y'>
                            <figure aria-hidden="true" class="ui-pdp-media__figure">
                                <svg xlink="http://www.w3.org/1999/xlink" class="ui-pdp-icon ui-pdp-icon--return ui-pdp-color--GREEN" xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12"><defs><symbol id="returns"><path d="M2.474 7.2h7.225a2.7 2.7 0 1 0 0-5.4H7V.6h2.7a3.9 3.9 0 1 1 0 7.8H2.473l2.45 2.389-.839.859L.14 7.8l3.945-3.848.838.859L2.473 7.2z"></path></symbol></defs><g fill="#00A650"><path d="M2.474 7.2h7.225a2.7 2.7 0 1 0 0-5.4H7V.6h2.7a3.9 3.9 0 1 1 0 7.8H2.473l2.45 2.389-.839.859L.14 7.8l3.945-3.848.838.859L2.473 7.2z"></path></g></svg>
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
                            <span class="andes-button__content">
                                <span class="">Cantidad:</span>
                                <span class="texto-negro-big">1 unidad</span>
                                <span class="open-flecha">
                                    <svg xlink="http://www.w3.org/1999/xlink" class="ui-pdp-icon ui-pdp-icon--chevron ui-pdp-icon--chevron-down" viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg" width="8" height="11"><defs><symbol id="chevron"><path fill="none" fill-rule="evenodd" stroke-width="1.5" d="M1 1.343L6.657 7 1 12.657"></path></symbol></defs><g stroke="#3483FA" fill="#000000" fill-opacity="0.25"><path fill="none" fill-rule="evenodd" stroke-width="1.5" d="M1 1.343L6.657 7 1 12.657"></path></g></svg>
                                </span>
                                <span class="texto-gris">(20 disponibles)</span>
                            </span>
                        </div>
                        <div className='product-buy-btns mt2'>
                            <div className="">
                                <button type="submit" class="btn-submit btn-azul" aria-disabled="false" formaction="https://www.mercadolibre.com.ar/gz/checkout/buy">
                                    <span className="andes-button__content">Comprar ahora</span>
                                </button>
                                <button type="submit" class="btn-submit btn-azulaseo" aria-disabled="false" formaction="/p/MLA1114692649/add-to-cart" formmethod="POST">
                                    <span className="andes-button__content">Agregar al carrito</span>
                                </button>
                                <div className="separation-Y">
                                    <div className="modalbox">
                                        <div className="align-all">
                                            <svg xlink="http://www.w3.org/1999/xlink" style={{flexShrink: 0, marginRight: 10}} class="ui-pdp-icon ui-pdp-icon--rounded-truck-medium-alt ui-pdp-color--GREEN ui-pdp-card-tooltip__card__content__icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><symbol id="rounded_truck_medium_alt"><path stroke="#00a650" stroke-width="0.5" d="M15 29.75C6.867 29.75 0.25 23.133 0.25 15C0.25 6.867 6.867 0.25 15 0.25c8.133 0 14.75 6.617 14.75 14.75 C29.75 23.133 23.133 29.75 15 29.75z M15 1.25C7.418 1.25 1.25 7.418 1.25 15c0 7.582 6.168 13.75 13.75 13.75 c7.582 0 13.75-6.168 13.75-13.75C28.75 7.418 22.582 1.25 15 1.25z"></path><path d="M14.29 19.292c-0.297 0.985-1.212 1.702-2.293 1.702c-1.083 0-1.997-0.719-2.294-1.703L9.001 19.29 c-0.994 0-1.8-0.806-1.8-1.8v-6.695c0-0.994 0.806-1.8 1.8-1.8h6.664c0.994 0 1.8 0.806 1.8 1.8V10.8h2.626l2.708 3.491v4.999 l-1.846 0.002c-0.297 0.985-1.211 1.702-2.293 1.702s-1.996-0.717-2.293-1.702H14.29z M18.66 17.405 c-0.66 0-1.195 0.534-1.195 1.194S18 19.794 18.66 19.794s1.195-0.535 1.195-1.194C19.855 17.939 19.32 17.405 18.66 17.405z M11.997 17.405c-0.66 0-1.195 0.534-1.195 1.194s0.535 1.194 1.195 1.194s1.194-0.535 1.194-1.194 C13.191 17.939 12.656 17.405 11.997 17.405z M15.665 10.195H9.001c-0.331 0-0.6 0.269-0.6 0.6v6.695c0 0.33 0.269 0.6 0.6 0.6 h0.655c0.234-1.078 1.193-1.885 2.34-1.885c1.148 0 2.107 0.807 2.34 1.884h1.93v-7.294C16.266 10.464 15.996 10.195 15.665 10.195 L15.665 10.195z M19.503 12h-2.038v4.525c0.352-0.205 0.76-0.32 1.195-0.32c1.146 0 2.105 0.807 2.34 1.885h0.6v-3.388L19.503 12z"></path></symbol></defs><g fill="#00A650"><path stroke="#00a650" stroke-width="0.5" d="M15 29.75C6.867 29.75 0.25 23.133 0.25 15C0.25 6.867 6.867 0.25 15 0.25c8.133 0 14.75 6.617 14.75 14.75 C29.75 23.133 23.133 29.75 15 29.75z M15 1.25C7.418 1.25 1.25 7.418 1.25 15c0 7.582 6.168 13.75 13.75 13.75 c7.582 0 13.75-6.168 13.75-13.75C28.75 7.418 22.582 1.25 15 1.25z"></path><path d="M14.29 19.292c-0.297 0.985-1.212 1.702-2.293 1.702c-1.083 0-1.997-0.719-2.294-1.703L9.001 19.29 c-0.994 0-1.8-0.806-1.8-1.8v-6.695c0-0.994 0.806-1.8 1.8-1.8h6.664c0.994 0 1.8 0.806 1.8 1.8V10.8h2.626l2.708 3.491v4.999 l-1.846 0.002c-0.297 0.985-1.211 1.702-2.293 1.702s-1.996-0.717-2.293-1.702H14.29z M18.66 17.405 c-0.66 0-1.195 0.534-1.195 1.194S18 19.794 18.66 19.794s1.195-0.535 1.195-1.194C19.855 17.939 19.32 17.405 18.66 17.405z M11.997 17.405c-0.66 0-1.195 0.534-1.195 1.194s0.535 1.194 1.195 1.194s1.194-0.535 1.194-1.194 C13.191 17.939 12.656 17.405 11.997 17.405z M15.665 10.195H9.001c-0.331 0-0.6 0.269-0.6 0.6v6.695c0 0.33 0.269 0.6 0.6 0.6 h0.655c0.234-1.078 1.193-1.885 2.34-1.885c1.148 0 2.107 0.807 2.34 1.884h1.93v-7.294C16.266 10.464 15.996 10.195 15.665 10.195 L15.665 10.195z M19.503 12h-2.038v4.525c0.352-0.205 0.76-0.32 1.195-0.32c1.146 0 2.105 0.807 2.34 1.885h0.6v-3.388L19.503 12z"></path></g></svg>
                                            <div className="">
                                                <p className="customize-cart">Armá un carrito de productos
                                                    <svg xlink="http://www.w3.org/1999/xlink" class="icon--full" width="41" height="13" viewBox="0 0 41 13" xmlns="http://www.w3.org/2000/svg"><defs><symbol id="full_icon"><path fill-rule="nonzero" d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z"></path></symbol></defs><g fill="#00A650"><path fill-rule="nonzero" d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z"></path></g></svg>
                                                del mismo vendedor y ahorrá en el envío.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <div className='align-base'>
                                        <figure aria-hidden="true" class="media__figure">
                                            <svg xlink="http://www.w3.org/1999/xlink" class="ui-pdp-icon ui-pdp-icon--protected ui-pdp-color--GRAY" xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15"><defs><symbol id="protected_buy"><path fill-rule="nonzero" d="M.399 3.89v-.6h.6c1.87 0 3.76-.783 5.68-2.374l.383-.317.383.317c1.92 1.59 3.81 2.374 5.68 2.374h.6v.6c0 5.633-2.165 9.242-6.473 10.679l-.19.063-.19-.063C2.564 13.132.4 9.523.4 3.89zm6.663-1.743c-1.8 1.4-3.62 2.179-5.455 2.32.135 4.725 1.947 7.648 5.455 8.898 3.508-1.25 5.32-4.173 5.455-8.898-1.835-.141-3.656-.92-5.455-2.32zm-.905 6.477l3.191-3.582.896.798-4.02 4.513-2.472-2.377.831-.865 1.574 1.513z"></path></symbol></defs><g fill="#000000" fill-opacity="0.55"><path fill-rule="nonzero" d="M.399 3.89v-.6h.6c1.87 0 3.76-.783 5.68-2.374l.383-.317.383.317c1.92 1.59 3.81 2.374 5.68 2.374h.6v.6c0 5.633-2.165 9.242-6.473 10.679l-.19.063-.19-.063C2.564 13.132.4 9.523.4 3.89zm6.663-1.743c-1.8 1.4-3.62 2.179-5.455 2.32.135 4.725 1.947 7.648 5.455 8.898 3.508-1.25 5.32-4.173 5.455-8.898-1.835-.141-3.656-.92-5.455-2.32zm-.905 6.477l3.191-3.582.896.798-4.02 4.513-2.472-2.377.831-.865 1.574 1.513z"></path></g></svg>
                                        </figure>
                                        <p className='texto-gris'>
                                            <span className='texto-azul'>Compra Protegida</span>
                                            , recibí el producto que esperabas o te devolvemos tu dinero.
                                        </p>
                                    </div>                                    
                                </li>
                                <li>
                                    <div className='align-base'>
                                        <figure aria-hidden="true" class="media__figure">
                                            <svg xlink="http://www.w3.org/1999/xlink" class="ui-pdp-icon ui-pdp-icon--loyalty ui-pdp-color--GRAY" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><defs><symbol id="loyalty_points"><path fill-rule="nonzero" d="M7.598 8.746v1.252h.6c1.657 0 3 1.343 3.001 3v.6H2.798v-.602a2.998 2.998 0 0 1 2.998-2.997h.604l-.001-1.253a3.435 3.435 0 0 1-1.578-.724l-1.586-.446-.106-.041-.739-.37A3.6 3.6 0 0 1 .402 3.947V1.599h2.486l-.2-1.2h8.618l-.2 1.2h2.489v2.346a3.6 3.6 0 0 1-1.988 3.22l-.739.37-.106.041-1.592.448a3.43 3.43 0 0 1-1.572.722zm2.65-2.272l.134-.037.688-.345a2.4 2.4 0 0 0 1.326-2.147V2.799h-1.49l-.52 3.13c-.032.187-.078.37-.138.545zm-6.505-.001a3.453 3.453 0 0 1-.139-.552L3.087 2.8H1.602v1.148a2.4 2.4 0 0 0 1.325 2.145l.687.345.129.036zm.361-4.874l.684 4.126a2.24 2.24 0 0 0 2.21 1.874c1.092 0 2.024-.79 2.204-1.868L9.89 1.6H4.104zm4.094 9.6H5.795c-.784 0-1.45.5-1.697 1.199h5.799c-.248-.699-.915-1.2-1.7-1.2z"></path></symbol></defs><g fill="#000000" fill-opacity="0.55"><path fill-rule="nonzero" d="M7.598 8.746v1.252h.6c1.657 0 3 1.343 3.001 3v.6H2.798v-.602a2.998 2.998 0 0 1 2.998-2.997h.604l-.001-1.253a3.435 3.435 0 0 1-1.578-.724l-1.586-.446-.106-.041-.739-.37A3.6 3.6 0 0 1 .402 3.947V1.599h2.486l-.2-1.2h8.618l-.2 1.2h2.489v2.346a3.6 3.6 0 0 1-1.988 3.22l-.739.37-.106.041-1.592.448a3.43 3.43 0 0 1-1.572.722zm2.65-2.272l.134-.037.688-.345a2.4 2.4 0 0 0 1.326-2.147V2.799h-1.49l-.52 3.13c-.032.187-.078.37-.138.545zm-6.505-.001a3.453 3.453 0 0 1-.139-.552L3.087 2.8H1.602v1.148a2.4 2.4 0 0 0 1.325 2.145l.687.345.129.036zm.361-4.874l.684 4.126a2.24 2.24 0 0 0 2.21 1.874c1.092 0 2.024-.79 2.204-1.868L9.89 1.6H4.104zm4.094 9.6H5.795c-.784 0-1.45.5-1.697 1.199h5.799c-.248-.699-.915-1.2-1.7-1.2z"></path></g></svg>
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
        </>
    )
}
