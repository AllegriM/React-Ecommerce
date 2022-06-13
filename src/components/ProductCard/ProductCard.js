import React from 'react'
import Card from '../Card/Card'



export const ProductCard = ( props ) => {
    return (
        <> 
            <Card
                key={props.data.id}
                prod={props.data}
                // {...product} me deja pasar todo
            />
        </>
    )
}
