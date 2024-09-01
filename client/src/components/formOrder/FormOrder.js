import './FormOrder.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {useState} from 'react';
import * as Yup from 'yup';
import axios from 'axios';

import Btn from '../button/Btn';


const FormOrder = () => {

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
                <ErrorMessage name='email' component='span' className="error-msg"  />
                <Field className="input-field"
                    autoComplete='off'
                    id='inputCreateOrder'
                    name='email'
                    placeholder='email...'
                />
                <label className='form-title'>Phone</label>
                <ErrorMessage name='phone' component='span' className="error-msg"  />
                <Field className="input-field"
                    autoComplete='off'
                    id='inputCreateOrder'
                    name='phone'
                    placeholder='phone...'
                />
                <label className='form-title'>Adress</label>
                <ErrorMessage name='adress' component='span' className="error-msg"  />
                <Field className="input-field gap"
                    autoComplete='off'
                    id='inputCreateOrder'
                    name='adress'
                    placeholder='adress...'
                />
                <Btn type="submit" ui="emerald" content="Order" />
            </Form>
        </Formik>
    );
}

export default FormOrder;