import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';




const PizzaCreate = () => {

    const [listOfPizzas, setListOfPizzas] = useState([]);

    const initialValues = {
        image: "",
        name: "",
        priceLarge: "",
        priceSmall: "",
    };

    const validationSchema = Yup.object().shape({
        image: Yup.mixed(),
        name: Yup.string().required("Please input name!"),
        priceLarge: Yup.number().required("Please input price!"),
        priceSmall: Yup.number().required("Please input price!"),
    })

    const onSubmit = (data) => {
        
        console.log(data);

        axios.post('http://localhost:3001/pizzas', data).then((response) => {
            console.log("ok");
            console.log(response)
            setListOfPizzas(response.data);
        });
    }



    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ setFieldValue }) => (
                    <Form>
                        <label>Image</label>
                        <input
                            type='file'
                            onChange={(e) => {
                                setFieldValue('image', e.target.files[0])
                            }}
                        />
                        <ErrorMessage name='image' component='span' />

                        <label>Name</label>
                        <Field
                            autoComplete='off'
                            id='name'
                            name='name'
                            placeholder='name...'
                        />
                        <ErrorMessage name='name' component='span' />

                        <label>Large Pizza Price</label>
                        <Field
                            autoComplete='off'
                            id='priceLarge'
                            name='priceLarge'
                            placeholder='price...'
                            type='number'
                        />
                        <ErrorMessage name='priceLarge' component='span' />

                        <label>Small Pizza Price</label>
                        <Field
                            autoComplete='off'
                            id='priceSmall'
                            name='priceSmall'
                            placeholder='price...'
                            type='number'
                        />
                        <ErrorMessage name='priceSmall' component='span' />

                        <button type='submit'>Create</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default PizzaCreate;