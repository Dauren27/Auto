import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import InputComp from '../components/InputComp'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SaleAuto = () => {
    const city=useSelector(state=>state.cityReducer.city)
  return (
    <Container>
        <Header/>
            <LayoutCont>
                <InputComp/>
                <H1>Продать автомобиль с пробегом в <span>{city}е </span></H1>
                <ChooseDiv>
                    <div><input type="select" placeholder="Введите VIN номер"/><MdOutlineKeyboardArrowDown/></div>
                    <div><input type="text" placeholder="Пробег"/></div>
                    <div><input type="text" placeholder="Бишкек"/><MdOutlineKeyboardArrowDown/></div>
                    <input type="text" placeholder="Владельцев о ПТС"/>
                    <div><input type="text" placeholder="ПТС"/><MdOutlineKeyboardArrowDown/></div>
                </ChooseDiv>
                <P>Указанная рассчетная стоимость является приблизительной и действует при сдаче автомобиля в trade-in</P>
                <hr />
                <Buttons>
                    <div>
                        <button>Я не помню VIN</button>
                        <Link to="/sale/offer"><button style={{background: 'rgba(235, 87, 87, 1)'}}>Получить предложение</button></Link>
                    </div>
                </Buttons>
            </LayoutCont>
    </Container>
  )
}
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
const H1=styled.div`
    margin-top:150px;
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 42px;
    color:#fff;
    span{
        color:#eb5757;
    }
`
const ChooseDiv=styled.div`
    width:90%;
    display:flex;
    justify-content: space-between;
    flex-wrap:wrap;
    margin-top:50px;
    div{
        position:relative;
        div{
            border-radius:10px;
            background:#fff;
            padding:10px;
            max-height:150px;
            overflow:auto;
            p{
                font-weight: 500;
                font-size: 14px;
                color: #152026;
                line-height: 24px;
                cursor:pointer;
            }
            ul{
                li{
                    margin-top:10px;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 22px;
                    color: #152026;
                    &:hover{
                        background:rgba(158, 171, 184, 1);
                        cursor:pointer;
                    }
                }
            }
        }
        svg{
            color:rgba(21, 32, 38, 0.5);
            width:25px;
            height:25px;
            position:absolute;
            right:10px;
            top:10px;
            cursor:pointer;
            &:hover{
                transform:scale(1.1);
            }
        }
    }
    input{
        background: #FFFFFF;
        border-radius: 8px;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        color: #152026;
        line-height: 24px;
        border:none;
        width:188px;
        height:44px;
        z-index:0;
        position:relative;
        padding-left:10px;
    }
    img{
        z-index:1;
        width:15px;
    }
`
const P=styled.p`
    margin-top:30px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    opacity: 0.5;
`
const Buttons=styled.div`
margin-top:30px;
width:100%;
display:flex;
justify-content:flex-end;
div{
    display:flex;
}
button{
    background: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 7px 41px;
    border:none;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    display: flex;
    align-items: center;
    cursor:pointer;
    &:first-child{
        margin-right:15px;
    }
    &:nth-child(2){
        background: #eb5757;
    }
    &:hover{
        transform: scale(1.05);
    }
}
`
export default SaleAuto
