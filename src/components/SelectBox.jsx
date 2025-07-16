import React from 'react';

const SelectBox = (props) => {
    return (
        <div style={{display : 'flex', flexDirection : 'column', margin : '7px'}}>
            <label>{props.label}</label>
            <select name={props.name} id={props.id} className = {props.className} ></select>
        </div>
    );
};

export default SelectBox;