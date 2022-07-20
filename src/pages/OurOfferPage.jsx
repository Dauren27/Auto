import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import InputComp from '../components/InputComp'
import OutOfferComp from '../components/OutOfferComp'
const OurOfferPage = () => {
  return (
    <Container>
        <Header/>
        <LayoutCont>
                <InputComp/>
                <OutOfferComp/>
        </LayoutCont>
    </Container>
        
  )
}

export default OurOfferPage
const Container=styled.div`
    width:100%;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    background: url('/images/saleBack.png');
    background-size:cover;
`
const LayoutCont=styled.div`
    width:80%;
    hr{
        border: 1px solid rgba(255, 255, 255, 0.2);
        margin-top:20px;
    }
`