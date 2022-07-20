import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
import SearchComp from './SearchComp'
import InputComp from './InputComp'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const MainContainer = () => {
    const city=useSelector(state=>state.cityReducer.city)
  return (
    <MainCont>
        <Header/>
        <Container>
            <InputComp/>
            <Info>
                <h1>Автомаркет</h1>
                <ul>
                    <li><img src="/images/check.png" alt="" /><a href=""> Проверенный диллер</a></li>
                    <li><img src="/images/check.png" alt="" /><a href=""> Возможность бронирования</a></li>
                    <li><img src="/images/check.png" alt="" /><a href=""> Поддеражанные авто в кредит</a></li>
                    <li><img src="/images/check.png" alt="" /><a href=""> Комиссионная продажа</a></li>
                </ul>
            </Info>
            <BuyOrSale>
                <Buy>
                    <div>
                        <Link to='/buy'><h1>Купить авто</h1></Link>
                        <p>Выберите один из Х автомобилей <br/>с пробегом, все в наличии</p>
                        <a href="">Смотреть каталог</a>
                    </div>
                </Buy>
                <Sale>
                    <div>
                        <Link to='/sale'><h1>Продать автомобиль</h1></Link>
                        <p>Выкупим Ваш автомобиль.<br/> Быстрая оценка за 2 минуты</p>
                        <a href="">Онлайн оценка</a>
                    </div>
                </Sale>
            </BuyOrSale>
            <H1>Выбрать автомобиль с пробегом в <span>{city}е </span></H1>
            <SearchComp city={city}/>
        </Container>
    </MainCont>
  )
}
export default MainContainer
const MainCont=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:100%;
    background: url('/images/background.png') no-repeat;
    background-size: cover;
    @media(max-width:1400px){
        background-size:cover;
        background-position: center center;
    }
    z-index:1;
`
const Container=styled.div`
    width:80%;
    z-index:1;
    @media(max-width:775px){
        width:90%;
    }
`
const Info=styled.div`
    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 42px;
        line-height: 54px;
        color:#fff;
        margin-top:60px;
    }
    ul{
        margin-top:15px;
    }
    li{
        display:flex;
        margin-top: 5px;
    }
    a{
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        color:#fff;
        margin-left:10px;
    }
`
const BuyOrSale=styled.div`
    width:100%;
    display:flex;
    justify-content:space-evenly;
    margin-top: 100px;
    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 40px;
        color: #fff;
        cursor:pointer;
        &:hover{
            text-decoration:underline;
        }
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
        color: #FFFFFF;
        opacity: 0.6;

    }
    a{
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        color: #EB5757;
        &:hover{
            text-decoration:underline;
        }
    }
    @media(max-width:800px){
        flex-direction:column;
        align-items:center;
    }
`
const Buy=styled.div`
    width: 500px;
    height:250px;
    background: url('/images/back-1.png');
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius:18px;
    display:flex;
    align-items:center;
    div{
        padding:60px;
        height:60%;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
    }
    @media(max-width:530px){
        width:95%;
        height:200px;
        div{
            padding:10px;
            h1{
                font-size:30px;
            }
            p,a{
                font-size:15px;
            }
        }
    }
`
const Sale=styled(Buy)`
    background: url('/images/back-2.png') no-repeat center center;
    @media(max-width:800px){
        margin-top:30px;
    }
`
const H1=styled.div`
    margin-top:100px;
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 42px;
    color:#fff;
    span{
        color:#eb5757;
    }
    @media(max-width:525px){
        font-size:35px;
    }
`
