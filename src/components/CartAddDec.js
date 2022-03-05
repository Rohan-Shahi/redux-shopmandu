import React from 'react'

export default function CartAddDec(props) {
    const {productCount,increaseProduct,decreaseProduct} = props;
  return (
    <div className="card-adder">
        <button  onClick={decreaseProduct} className="dec">-</button>
        <input type="number" min={0} disabled value={productCount} />
        <button onClick={increaseProduct} className="inc" >+</button>
      </div>
  )
}
