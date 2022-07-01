import { Text } from '@chakra-ui/react'

export const PayMethod = () => {
    return (
        <>
            <div className="pay-container">
                <div className="pay-methods">
                    <div className="pay-mains">
                        <div className="pay-group">
                            <Text cursor='pointer' className="logo-credit">
                                <img alt="credit pay" className="pay-logo" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/credit-card.svg" />
                            </Text>
                            <div className="pay-texts">
                                <div className="pay-method">Tarjeta de crédito</div>
                                <div className="pay-advice">Ver promociones bancarias</div>
                            </div>
                        </div>
                        <div className="pay-group">
                            <Text cursor='pointer' className="logo-debit">
                                <img alt="debit pay" className="pay-logo" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/debit-card.svg" />
                            </Text>
                            <div className="pay-texts">
                                <div className="pay-method">Tarjeta de débito</div>
                                <div className="pay-advice">Ver más</div>
                            </div>
                        </div>
                        <div className="pay-group">
                            <Text cursor='pointer' className="logo-credit2">
                                <img alt="mercado credito" className="pay-logo" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/mercado-creditsv2.svg" />
                            </Text>
                            <div className="pay-texts">
                                <div className="pay-method">Cuotas sin tarjeta</div>
                                <div className="pay-advice">Conocé Mercado Crédito</div>
                            </div>
                        </div>
                        <div className="pay-group">
                            <Text cursor='pointer' className="logo-agree">
                                <img alt="pago aceptado" className="pay-logo" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/payment-agreement.svg" />
                            </Text>
                            <div className="pay-texts">
                                <div className="pay-method">Efectivo</div>
                                <div className="pay-advice">Ver más</div>
                            </div>
                        </div>
                    </div>
                    <div className="plus-info">
                        <div className="pay-plus">
                            <Text cursor='pointer' className="logo-plus">
                                <img alt="ver mas" className="pay-logo" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/view-more.svg" />
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
