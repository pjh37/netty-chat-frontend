import {useEffect} from 'react';
import axios from 'axios';
import qs from 'qs';
import Cookies from 'js-cookie';

function LoginCallback({history,location}) {
    useEffect(()=>{
        async function getToken(){
            const {code}=qs.parse(location.search,{
                ignoreQueryPrefix:true
            })
            try{
                // const {access_token}=await axios.post('http://localhost:3000/auth'
                // ,{code})
                console.log({code});
                console.log(code);
                console.log('cookie: '+Cookies.get('name'))
                console.log('cookie없을때 : '+Cookies.get('notexist'))
                
                console.log("여기서 LoginCallback 하고 / 경로로 리다일렉트")
                //props.authenticated=true
                //localStorage.setItem('name',access_token)
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