import React,{useState} from 'react';

const Postman = () =>{
 
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');


    const changeHandlerEmail=(e)=>{
        setemail({email:e.target.value});
    }
    const changeHandlerPassword=(e)=>{
        setpassword({password:e.target.value});
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(email,password);
    }
    return(
        <form onSubmit={submitHandler}>
        <input type='text' name='email' value={setemail} onChange={changeHandlerEmail}/>
        <input type='text' name='password' value={setpassword} onChange={changeHandlerPassword}/>
        <button type='submit'>login</button>
        </form>
    );
    
}

export default Postman;