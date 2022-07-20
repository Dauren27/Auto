import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [login,setLogin]=useState('')
    const [password,setPassword]=useState('')
    const [showPassword,setShowPassword]=useState(false)
    const [message,setMessage]=useState('')
    const dispatch=useDispatch();
    const isAuth=useSelector(state=>state.authReducer.auth)
    const navigate=useNavigate()
    const Admin={
        login:'Dauren',
        password:'2003'
    }
    useEffect(()=>{
        if(localStorage.getItem('isAuth')){
            dispatch({type:'CHANGE_AUTH',payload: true})
            navigate('/')
        }
    },[])
    const checkPassword=()=>{
        if(login==Admin.login && password==Admin.password){
            setMessage('Вы успешно авторизовались')
            dispatch({type:'CHANGE_AUTH',payload: true})
            localStorage.setItem('isAuth','true')
        }else{
            setMessage('Неверный логин или пароль')
            setLogin('')
            setPassword('')
        }
    }
  return (
    <Container>
        <Form onClick={(e)=>e.preventDefault()}>
            <h1>Войти</h1>
            <input 
                type="text"
                onChange={event=>setLogin(event.target.value)} 
                placeholder='Логин'/>
            <div>
                <input 
                    type={showPassword ? 'text' : 'password'}
                    onChange={event=>setPassword(event.target.value)} 
                    placeholder='Пароль'/>
                {
                    !showPassword ?
                    <AiFillEye onClick={()=>setShowPassword(!showPassword)}/>
                    : <AiFillEyeInvisible onClick={()=>setShowPassword(!showPassword)}/>
                }
            </div>
            <p>{message}</p>
            <button onClick={()=>checkPassword()}>Войти</button>
        </Form>
    </Container>
  )
}

export default Login

const Container=styled.div`
    width: 100%;
    height:100vh;
    background:rgba(21, 32, 38, 1);
    display:flex;
    justify-content:center;
    align-items:center;
`
const Form=styled.form`
    display:flex;
    flex-direction:column;
    input,button{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 11px;
        background: #FFFFFF;
        font-size:20px;
        border:none;
        border-radius: 8px;
        padding: 11px 71px 11px 11px;
    }
    input{
        margin-top:10px;
    }
    div{
        position:relative;
        input{

        }
        svg{
            position:absolute;
            right:10px;
            top:20px;
            height:25px;
            width:25px;
            color: #aaa;
            cursor:pointer;
        }
    }
    button{
        background:#EB5757;
        margin-top:10px;
        color:#fff;
        padding:11px 71px;
        justify-content:center;
        cursor:pointer;
        &:hover{
            transform:scale(1.05);
        }
    }
    h1{
        font-size: 32px;
        line-height: 40px;
        color:#eb5757;
        text-align:center;
    }
    p{
        color:#fff;
        font-size:18px;
    }
`