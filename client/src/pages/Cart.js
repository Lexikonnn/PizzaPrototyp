import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useEffect, useState } from 'react';




const Cart = () => {

    const [listOfOrders, setListOfOrders] = useState([]);

    const initialValues = {
        name: "",
        email: "",
        phone: "",
        adress: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Please input your name!"),
        email: Yup.string().email().required("Please input your email!"),
        phone: Yup.number().required("Please input your phone!"),
        adress: Yup.string().required("Please input your adress!"),
    })

    const onSubmit = (data) => {

            axios.post('http://localhost:3001/orders', data).then((response) => {
                console.log("ok");
                setListOfOrders(response.data);
            });
    }



    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <label>Name</label>
                    <ErrorMessage name='name' component='span' />
                    <Field
                        autocomplete='off'
                        id='inputCreateOrder'
                        name='name'
                        placeholder='name...'
                    />
                    <label>Email</label>
                    <ErrorMessage name='email' component='span' />
                    <Field
                        autocomplete='off'
                        id='inputCreateOrder'
                        name='email'
                        placeholder='email...'
                    />
                    <label>Phone</label>
                    <ErrorMessage name='phone' component='span' />
                    <Field
                        autocomplete='off'
                        id='inputCreateOrder'
                        name='phone'
                        placeholder='phone...'
                    />
                    <label>Adress</label>
                    <ErrorMessage name='adress' component='span' />
                    <Field
                        autocomplete='off'
                        id='inputCreateOrder'
                        name='adress'
                        placeholder='adress...'
                    />
                    <button type='submit'>Order</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Cart;