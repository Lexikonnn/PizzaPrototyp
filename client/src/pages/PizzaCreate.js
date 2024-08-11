import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';




const PizzaCreate = () => {

    const [listOfPizzas, setListOfPizzas] = useState([]);

    const initialValues = {
        name: "",
        packagericeLarge: "",
        priceSmall: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Please input name!"),
        priceLarge: Yup.number().required("Please input price!"),
        priceSmall: Yup.number().required("Please input price!"),
    })

    const onSubmit = (data) => {

            axios.post('http://localhost:3001/pizzas', data).then((response) => {
                console.log("ok");
                setListOfPizzas(response.data);
            });
    }



    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <label>Name</label>
                    <ErrorMessage name='name' component='span' />
                    <Field
                        autoComplete='off'
                        id='inputCreatePizza'
                        name='name'
                        placeholder='name...'
                    />
                    <label>Large Pizza Price</label>
                    <ErrorMessage name='priceLarge' component='span' />
                    <Field
                        autoComplete='off'
                        id='inputCreatePizza'
                        name='priceLarge'
                        placeholder='price...'
                    />
                    <label>Small Pizza Price</label>
                    <ErrorMessage name='priceSmall' component='span' />
                    <Field
                        autoComplete='off'
                        id='inputCreatePizza'
                        name='priceSmall'
                        placeholder='price...'
                    />
                    <button type='submit'>Create</button>
                </Form>
            </Formik>
        </div>
    );
}

export default PizzaCreate;