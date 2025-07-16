import React from 'react';
import '../../styles/components/FormInput.css';
import { Form } from 'react-bootstrap';

const FormInput = (props) => {
    return (
        <div className='FormInput'>
            <Form.Label className='label'>{props.label}</Form.Label>
            <Form.Control required id='LineInput1' type = {props.type} name={props.name} placeholder={props.placeholder}   />
            <span id= {props.name} hidden="true" style ={{'color' : 'red', 'font-size':'80%'}}>Required Field</span>
        </div>
    );
};

export default FormInput;