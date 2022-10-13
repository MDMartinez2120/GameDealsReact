import React, { useState, useEffect} from 'react';

import classes from './MainHeader.module.css';
import Button from '../UI/Button/Button';
import Home from '../Home/Home';
import Login from "../Login/Login";

const MainHeader = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1'){
            setIsLoggedIn(true);
        }

    }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return (
        <header className={classes['main-header']}>
            <h1>Gamer Deals</h1>
            <Login>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </Login>
        </header>
    );
};

export default MainHeader;