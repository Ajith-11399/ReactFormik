import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const FormikForms = () => {
    return (
        <div>
            <Formik>
                <Form>
                    <div>
                        <label>
                            Name:
                        </label>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="h5" className=""></ErrorMessage>
                    </div>
                    <div>
                        <label>
                            Password:
                        </label>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="h5" className=""></ErrorMessage>
                    </div>
                    <div>
                        <label>
                            Name:
                        </label>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="h5" className=""></ErrorMessage>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default FormikForms;