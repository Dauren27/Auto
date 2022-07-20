import React from 'react'
import styled from 'styled-components'
import AutoSale from '../components/AutoSale'
import CreditComp from '../components/CreditComp'
import Footer from '../components/Footer'
import MainContainer from '../components/MainContainer'
import QuestionComp from '../components/QuestionComp'
const Main = () => {
  return (
    <Container>
        <MainContainer/>
        <AutoSale/>
        <CreditComp/>
        <QuestionComp/>
        <Footer/>
    </Container>
  )
}
export default Main
const Container=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`

