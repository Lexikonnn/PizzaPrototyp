import './FormOrder.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState, useContext } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import Btn from '../button/Btn';
import { OrderedPizzasContext } from '../../contex/OrderPizzaContex';

const FormOrder = () => {

    const { orderedPizzas, clearCart } = useContext(OrderedPizzasContext);


    const initialValues = {
        name: "",
        email: "",
        phone: "",
        address: "",
        pizzas: orderedPizzas || [],
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Please input your name!"),
        email: Yup.string().email().required("Please input your email!"),
        phone: Yup.number().required("Please input your phone!"),
        address: Yup.string().required("Please input your address!"),
        pizzas: Yup.array().of(
            Yup.object().shape({
                id: Yup.number().required("Pizza ID is required"),
                amount: Yup.number().required("Amount is required")
            })
        ).required("At least one pizza must be ordered!")
    });

    const onSubmit = (data, { resetForm }) => {
        axios.post('http://localhost:3001/orders', data)
            .then((response) => {
                console.log("Order placed successfully");
                clearCart();
                resetForm();
            })
            .catch((error) => {
                console.error("Error placing order:", error);
            });
    }


    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='form-wrapper'>
                <h1 className='md-title black gap'>Who’s Hungry?</h1>
                <label className='form-title'>Name</label>
                <ErrorMessage name='name' component='span' className="error-msg" />
                <Field className="input-field"
                    autoComplete='off'
                    id='inputCreateOrder'
                    name='name'
                    placeholder='name...'
                />
                <label className='form-title'>Email</label>
                <ErrorMessage name='email' component='span' className="error-msg" />
                <Field className="input-field"
                    autoComplete='off'
                    id='inputCreateOrder'
                    name='email'
                    placeholder='email...'
                />
                <label className='form-title'>Phone</label>
                <ErrorMessage name='phone' component='span' className="error-msg" />
                <Field className="input-field"
                    autoComplete='off'
                    id='inputCreateOrder'
                    name='phone'
                    placeholder='phone...'
                />
                <label className='form-title'>Address</label>
                <ErrorMessage name='address' component='span' className="error-msg" />
                <Field className="input-field gap"
                    autoComplete='off'
                    id='inputCreateOrder'
                    name='address'
                    placeholder='address...'
                />
                <Btn type="submit" ui="emerald" content="Order" />
            </Form>
        </Formik>
    );
}

export default FormOrder;