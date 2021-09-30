import React ,{useContext}from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import CartItem from './Cartitem'
export const Cart = (props) => {
    const cartctx=useContext(CartContext);
    const totalamount=`$${cartctx.totalAmount.toFixed(2)}`;
    const hasitems=cartctx.items.length>0;
    const cartitemremovehandler=(id)=>{
        cartctx.removeItem(id)
    }
    const cartitemaddhandler=item=>{
        cartctx.addItem({...item,amount:1})
    }
    const cartitems=
    <ul className={classes['cart-items']}>
        {cartctx.items.map(item=><CartItem key={item.id} name={item.name} 
        amount={item.amount} price={item.price} onAdd={cartitemaddhandler.bind(null,item)}
         onRemove={cartitemremovehandler.bind(null,item.id)} />)}</ul>
    return (
        <Modal onClose={props.onClose}>
            {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalamount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasitems && <button className={classes.button}>Order</button>}

            </div>

        </Modal>
            
            
        
    )
}

export default Cart;
