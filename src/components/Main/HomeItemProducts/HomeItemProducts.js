import React from "react";
import Card from '../../Card/Card';


export const HomeItemProducts =  ( {data} ) => {
    
    return (
        <>
            {data.map( (product) => {
                    return <Card
                        key={product.id}
                        prod={product}
                    />
                })
            }
        </>
    )
}