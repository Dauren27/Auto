import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InputComp from '../components/InputComp'
import QuestionComp from '../components/QuestionComp'
const ComparePage = () => {
  return (
    <Container>
        <ContainerBackground>
            <Header/>
            <LayoutCont>
                    <InputComp/>
            </LayoutCont>
        </ContainerBackground>
        <LayoutCont>
            <H2><Link to='/'>Главная</Link>/ <span>Сравнение</span></H2>
            <H1>Сравнение</H1>
        </LayoutCont>
        <Cars>
            
        </Cars>
        <QuestionComp/>
        <Footer/>
    </Container>
  )
}

export default ComparePage
const Container=styled.div`
    width:100%;
    height:100%;
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
`
const H2=styled.h2`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    cursor:pointer;
    span{
        text-decoration:underline;
    }
    a{
        color: #333333;
        &:hover{
            text-decoration:underline;
        }
    }
    margin-top:20px;
`
const H1=styled.h1`
    margin-top:30px;
    font-weight: 700;
    font-size: 38px;
    line-height: 42px;
    color: #333333;
`
const Cars=styled.div`
    min-height:80vh;
    width:100%;
`
