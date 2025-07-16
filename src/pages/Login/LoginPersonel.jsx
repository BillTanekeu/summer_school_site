import LoginForm from '../../components/Login/LoginForm';
import '../../styles/components/ContentLogin.css'
import NavigationLogIn from '../../components/Login/NavigationLogIn';
import imgLogin from '../../assets/Group749.png';

const LoginPersonel = () => {
    return (
        <div className='ContentAuth'>
            <h1 style={{'margin-bottom':'50px'}}>Log in as</h1>
            <NavigationLogIn />
            <div className="ContentLogin">
                <LoginForm />
                <img src = {imgLogin} alt='' className="ImgLog"/>

            </div>
        </div>
    );
};

export default LoginPersonel;