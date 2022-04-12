import React from "react";
import '../../css/Products/Products.css'

function Products(props) {
    console.log(props.products)
    return (
        <div className="products">
            {
                props.products.map((product) => {
                    return (
                        <>
                            <div key={product.id} className="product-item">
                                <div>
                                    <img src={product.imageUrl} alt={product.title} />
                                    <div className="product-details">
                                        <p> {product.title} </p>
                                        <p> {product.price} </p>
                                    </div>
                                    <button> Add To Cart </button>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Products