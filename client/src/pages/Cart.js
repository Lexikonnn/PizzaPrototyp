import { useContext, useRef, useState } from 'react';

import useVisibility from '../hooks/UseVisibility';
import BaseLayout from '../layouts/Base';
import FormOrder from '../components/formOrder/FormOrder';
import './Cart.css';
import PizzaCard from '../components/cartListCard/CartListCard';
import Modal from '../components/modal/Modal';

import { OrderedPizzasContext } from '../contex/OrderPizzaContex';


const Cart = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const { orderedPizzas, totalPrice } = useContext(OrderedPizzasContext);
    const sectionRef = useRef(null);
    const isVisible = useVisibility(sectionRef);

    const handleOrderSuccess = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <BaseLayout isVisible={isVisible}>
            {orderedPizzas <= 0 ? <h1 className='md-title black text-wrapper' ref={sectionRef}>Cart is Empty</h1> :
                <div className='section cart' ref={sectionRef}>

                    <div className='order-container'>
                        <div>
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
                        </div>
                        <div className='detail-container'>
                            <hr className='line' />
                            <div className='detail-wrapper'>
                                <p className='small black'>Total Price: {totalPrice()} €</p>
                            </div>
                        </div>
                    </div>
                    <div className='form-container'>
                        <FormOrder onOrderSuccess={handleOrderSuccess}/>
                    </div>

                </div>}
                {isModalOpen && <Modal onClose={closeModal} />}
        </BaseLayout>
    );
}

export default Cart;