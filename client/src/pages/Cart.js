import { useState, useRef } from 'react';

import useVisibility from '../hooks/UseVisibility';
import BaseLayout from '../layouts/Base';
import FormOrder from '../components/formOrder/FormOrder';
import './Cart.css';
import PizzaCard from '../components/cartListCard/CartListCard';


const Cart = () => {

    const sectionRef = useRef(null);
    const isVisible = useVisibility(sectionRef);






    return (
        <BaseLayout isVisible={isVisible}>
            <div className='section cart' ref={sectionRef}>

                {/*<div className='order-container'>
                    {listOfPizzas.map((value, key) => {
                        return <PizzaCard image={value.image} name={value.name} amount={value.amount} price={value.price} size={value.size}/>
                    })
                    }
                </div>*/}
                <FormOrder />
            </div>
        </BaseLayout>
    );
}

export default Cart;