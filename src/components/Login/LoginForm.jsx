import FormCheck from './FormCheck';
import '../../styles/components/LogIn.css';
import { Form, Button } from 'react-bootstrap';
import FormInput from './FormInput';
import axios from 'axios';

const LoginForm = () => {

   


    const Submit = (e) =>{
        e.preventDefault();
        var data = new FormData(e.target);
        console.log(Object.fromEntries(data.entries()));
        data = Object.fromEntries(data.entries())
        
            
        axios.post('http://127.0.0.1:8000/auth/login/', {
        username: data['username'],
        password: data['password'],
        }).then(function (response){
            console.log(response.data);
            const token = response.data['token'];
            //console.log(token);
            localStorage.setItem('token', token);
        }).catch(function (error){
            if( !document.getElementById('msg')){
                var msg = document.createElement("span");
                var text_msg = document.createTextNode("incorrect login or password !!!");
                msg.appendChild(text_msg);
                msg.id = 'msg';
                msg.style = 'font-size : 80%; color : red';
                var div_login = document.querySelector('.LogIn');
                div_login.appendChild(msg);
            }
        });
       
    }; 
    return (
        <div className='LogIn'>



            <Form className='Form' onSubmit = {Submit} >  
                <FormInput name = 'username' type = "username" label = 'User name*' placeholder = "Enter your login" />
                <FormInput name = 'password' type='Password' label = 'Password*' placeholder = "Enter your password" />

                <FormCheck name ='check'/>
                <Button id= 'Bsubmit' variant="primary" type="submit">Log In</Button>
            </Form>


            
        </div>
    );
};

export default LoginForm;