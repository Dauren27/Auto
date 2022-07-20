import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Header from '../components/Header'
const Profile = () => {
    const dispatch=useDispatch();
    const logoutFunction=()=>{
        dispatch({type:'CHANGE_AUTH',payload:false})
        localStorage.removeItem('isAuth')
    }
  return (
    <Container>
        <Header/>
        <ContLayout>
            <h1>Вы уже авторизованы</h1>
            <button onClick={()=>logoutFunction()}>Выйти</button>
        </ContLayout>
    </Container>
  )
}

export default Profile
const Container=styled.div`
    width:100%;
    height:100vh;
    background: rgba(21, 32, 38, 1);
    display:flex;
    flex-direction:column;
    align-items:center;
`
const ContLayout=styled.div`
    width:80%;
    height:100%;
    h1{
        color:#fff;
    }
    button{
        background:#EB5757;
        margin-top:10px;
        color:#fff;
        padding:11px 71px;
        justify-content:center;
        cursor:pointer;
        border-radius:8px;
        border:none;
        font-size:20px;
        &:hover{
            transform:scale(1.05);
        }
    }
`