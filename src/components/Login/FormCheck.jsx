import React from 'react';
import { Form } from 'react-bootstrap';
import '../../styles/components/FormCheck.css';

const FormCheck = (props) => {
    return (
        <div className='FormCheck'>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check name ={props.name} type="checkbox" label="keep loged in" />
            </Form.Group>
            <a href="/" className = "ForgotPass">Forgot password?</a>
        </div>
    );
};

export default FormCheck;