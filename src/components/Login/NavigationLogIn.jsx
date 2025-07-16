import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/components/NavigationLogIn.scss'
import {FaUserCircle, FaUserGraduate} from 'react-icons/fa'
import {MdGroups} from 'react-icons/md'


const NavigationLogIn = () => {
    return (
        <div className='NavigationLogIn'>
            <NavLink to ='/authStudent'><FaUserCircle size='2rem' style={{'margin-right': "4px" }} />Student</NavLink>
            <NavLink to ='/authPersonal'><MdGroups size='2rem' style={{'margin-right': "5px" }} />Personal</NavLink>

        </div>
    );
};

export default NavigationLogIn;