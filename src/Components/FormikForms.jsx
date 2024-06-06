import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const FormikForms = () => {
    return (
        <div>
            <Formik>
                <Form>
                    <div>
                        <label>
                            Book's Title
                        </label>
                        <Field type="text" name="booktitle" />
                        <ErrorMessage name="booktitle" component="h5" className=""></ErrorMessage>
                    </div>
                    <div>
                        <label>
                            Published Date
                        </label>
                        <Field type="text" name="publisheddate" />
                        <ErrorMessage name="publisheddate" component="h5" className=""></ErrorMessage>
                    </div>
                    <div>
                        <label>
                            ISBN Number
                        </label>
                        <Field type="text" name="isbn" />
                        <ErrorMessage name="isbn" component="h5" className=""></ErrorMessage>
                    </div>
                    <div>
                        <label>
                            Author's Name
                        </label>
                        <Field type="text" name="author" />
                        <ErrorMessage name="author" component="h5" className=""></ErrorMessage>
                    </div>
                    <div>
                        <label>
                            Author's DOB
                        </label>
                        <Field type="text" name="dob" />
                        <ErrorMessage name="dob" component="h5" className=""></ErrorMessage>
                    </div>
                    <div>
                        <label>
                            Short Biography
                        </label>
                        <Field type="text" name="biography" />
                        <ErrorMessage name="biography" component="h5" className=""></ErrorMessage>
                    </div>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default FormikForms;