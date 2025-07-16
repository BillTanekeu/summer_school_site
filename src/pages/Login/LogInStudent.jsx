import LoginForm from '../../components/Login/LoginForm';
import imgLogin from '../../assets/Group749.png';
import '../../styles/components/ContentLogin.css';
import NavigationLogIn from '../../components/Login/NavigationLogIn';

const LogInStudent = () => {
    return (
        <div className='ContentAuth'>
            <h2 style={{'margin-bottom':'50px'}}>Log in as</h2>
            <NavigationLogIn />
            <div className="ContentLogin">
                <LoginForm />
                <img src = {imgLogin} alt='' className="ImgLog"/>

            </div>
            

        </div>
    );
};

export default LogInStudent;