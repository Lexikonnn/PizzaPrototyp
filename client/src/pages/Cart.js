import { useContext, useRef } from 'react';

import useVisibility from '../hooks/UseVisibility';
import BaseLayout from '../layouts/Base';
import FormOrder from '../components/formOrder/FormOrder';
import './Cart.css';
import PizzaCard from '../components/cartListCard/CartListCard';

import { OrderedPizzasContext } from '../contex/OrderPizzaContex';


const Cart = () => {

    const { orderedPizzas } = useContext(OrderedPizzasContext);
    const sectionRef = useRef(null);
    const isVisible = useVisibility(sectionRef);

    return (
        <BaseLayout isVisible={isVisible}>
            <div className='section cart' ref={sectionRef}>

                <div className='order-container'>
                    {orderedPizzas <= 0 ? <h1 className='md-title black text-wrapper'>Cart is Empty</h1> :
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
                </div>
                <div className='form-container'>
                    <FormOrder />
                </div>

            </div>
        </BaseLayout>
    );
}

export default Cart;