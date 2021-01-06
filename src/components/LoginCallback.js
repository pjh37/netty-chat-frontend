import {useEffect} from 'react';
import axios from 'axios';
import qs from 'qs';
import Cookies from 'js-cookie';

function LoginCallback(props) {

    useEffect(()=>{
        try{
            localStorage.setItem('username',Cookies.get('username'))
            console.log('LoginCallback')
            props.history.push('/')
        }catch(error){
            props.history.push('/error')
        }
    })

    return null
}

export default LoginCallback