import React, { useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import InputComp from '../components/InputComp'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const CarIdPage = () => {
    const carName=useSelector(state=>state.carReducer.carName)
  return (
    <Wrapper>
        <ContainerBackground>
            <Header/>
            <LayoutCont>
                <InputComp/>
            </LayoutCont>
        </ContainerBackground>
        <LayoutCont>
            <H2><Link to='/'>Главная</Link>/ <Link to='/buy'><span>Каталог</span></Link>/<span>{carName}</span></H2>
        </LayoutCont>
    </Wrapper>
  )
}

export default CarIdPage
const Wrapper=styled.div`
    width:100%;
    min-height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const ContainerBackground=styled.div`
    width:100%;
    height:100%;
    background: url('/images/Rectangle 12 (1).png');
    display:flex;
    flex-direction:column;
    align-items:center;
`
const LayoutCont=styled.div`
    width:80%;
    h1{
        margin-top:40px;
    }
`
const H2=styled.h2`
    margin-top:20px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    cursor:pointer;
    a{
        color:#333;
        &:hover{
            text-decoration:underline;
            cursor:pointer;

        }
    }
`