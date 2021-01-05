import {useEffect} from 'react';
import axios from 'axios';
import qs from 'qs';
import Cookies from 'js-cookie';

function LoginCallback({history,location}) {
    useEffect(()=>{
        async function getToken(){
            const {args}=qs.parse(location.search,{
                ignoreQueryPrefix:true
            })
            try{
                localStorage.setItem('username',Cookies.get('username'))
                history.push('/')
            }catch(error){
                history.push('/error')
            }

            
    
        }
        getToken();
    },[location,history])

    return null
}

export default LoginCallback