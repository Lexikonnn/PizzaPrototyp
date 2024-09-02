import { useContext, useRef } from 'react';

import useVisibility from '../hooks/UseVisibility';
import BaseLayout from '../layouts/Base';
import FormOrder from '../components/formOrder/FormOrder';
import './Cart.css';
import PizzaCard from '../components/cartListCard/CartListCard';

import { OrderedPizzasContext } from '../contex/OrderPizzaContex';


const Cart = () => {

    const { orderedPizzas, totalPrice } = useContext(OrderedPizzasContext);
    const sectionRef = useRef(null);
    const isVisible = useVisibility(sectionRef);


    return (
        <BaseLayout isVisible={isVisible}>
            {orderedPizzas <= 0 ? <h1 className='md-title black text-wrapper' ref={sectionRef}>Cart is Empty</h1> :
            <div className='section cart' ref={sectionRef}>

                <div className='order-container'>
                    {
                        orderedPizzas.map((order, key) => {
                            return <PizzaCard
                                id={order.id}
                                image={order.image}
                                name={order.name}
                                amount={order.amount}
                                price={order.price}
                                size={order.size}
                            />
                        })
                    }
                    <hr className='line'/>
                    <div className='detail-container'>
                        <p className='small black'>Total Price: {totalPrice()} €</p>
                    </div>
                </div>
                <div className='form-container'>
                    <FormOrder />
                </div>

            </div>}
        </BaseLayout>
    );
}

export default Cart;