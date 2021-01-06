import React, {useEffect,useState} from 'react'
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';

function ProtectedDash(props) {
    useEffect(() => {
        const id = localStorage.getItem('id');
        if(id!==null){
            setIsAuth(true);
        }else{
            setIsAuth(false);
        }
    
    }, [])

    const [isAuth,setIsAuth]=useState(false);
    console.log(props);
    return (
        <div>
            {isAuth===true?<Dashboard />:<Login />}
        </div>
    )
}

export default ProtectedDash