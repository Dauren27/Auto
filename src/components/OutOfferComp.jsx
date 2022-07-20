import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import MyModal from './MyModal/MyModal'
import { AiOutlineClose } from "react-icons/ai";

const OutOfferComp = () => {
    const [modal,setModal]=useState(false)
  return (
    <Container>
        <h1> <Link to='/sale'><AiOutlineArrowLeft/></Link>Наше предложение</h1>
        <FlexDiv>
                <MyModal visible={modal} setVisible={setModal}>
                    <CloseBtn><button onClick={()=>setModal(!modal)}><AiOutlineClose/></button></CloseBtn>
                    <FlexLayout>
                        <h1 style={{display:'flex',justifyContent:'center'}}>Оставить заявку дилеру</h1>
                        <ModalInputs>
                            <input type="text"placeholder="Имя"/>
                            <input type="text"placeholder="Телефон"/>
                            <button onClick={()=>setModal(!modal)}>Отправить</button>
                        </ModalInputs>
                        <P>Обработка сведений о Пользователях осуществляется  в соответствии с <span>Политикой в области обработки и обеспечения безопасности персональных данных.</span></P>
                    </FlexLayout>
                </MyModal>
            <Offer>
                <div><h2>Ваш автомобиль</h2></div>
                <div>
                    <ul style={{opacity: modal? '1':'0.5'}}>
                        <li>Марка<span>Haval</span></li>
                        <li>Модель<span>F7</span></li>
                        <li>Год выпуска<span>2016</span></li>
                        <li>Поколение<span>1</span></li>
                        <li>Двигатель<span>Бензин</span></li>
                        <li>Модификация<span>2.0 AMT(190 л.с)</span></li>
                        <li>Тип кузова<span>Внедорожник 5дв.</span></li>
                        <li>Привод<span>Передний</span></li>
                        <li>КПП<span>Робот</span></li>
                    </ul>
                </div>
            </Offer>
            <Price>
                <div>
                    <p>При сдаче в трейд-ин</p>
                    <h2>1 800 485 Сом</h2>
                </div>
                <div>
                    <p>При самостоятельной продаже</p>
                    <h2>2 000 485 Сом</h2>
                </div>
                <div>
                    <p>Ваш номер расчета</p>
                    <h2>43896204</h2>
                </div>
            </Price>
        </FlexDiv>
        <Buttons>
            <Link to='/sale'><button>Вернуться к подбору</button></Link>
            <button onClick={()=>setModal(true)}>Оставить заявку дилеру</button>
        </Buttons>
    </Container>
  )
}
const Container=styled.div`
    width:90%;
    h1{
        svg{
            color:#fff;
            margin-right:20px;
            cursor:pointer;
            :hover{
                transform:scale(1.05);
            }
        }
        margin-top:80px;
        display:flex;
        align-items:center;
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 40px;
        color:#fff;
    }
`
const FlexDiv=styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:30px;
`
const Offer=styled.div`
    width:65%;
    background:rgba(158, 171, 184, 0.2);
    border-radius:8px;
    padding:20px 0px 0px 35px;
    height:220px;
    h2{
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 26px;
        color:#fff;
    }
    ul{
        height:180px;
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
        li{
            width:220px;
            display:flex;
            justify-content:space-between;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            color:#fff;
            margin-top:10px;
            cursor:pointer;
            &:nth-child(6),&:nth-child(7),&:nth-child(8),&:nth-child(9){
                width:280px;
            }
            span{
                
            }
        }
    }
`
const Price=styled.div`
    width:30%;
    background:#fff;
    border-raius:8px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    border-radius:8px;
    p{
        margin-left:20px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #152026;
        opacity: 0.5;
    }
    h2{
        margin-left:20px;
        font-family: 'Commissioner';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 28px;
        color: #152026;
    }
`
const FlexLayout=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const CloseBtn=styled.div`
    width:100%;
    display:flex;
    justify-content:flex-end;
    button{
        background: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        padding: 6px 10px;
        border:none;
        color: #FFFFFF;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 32px;
        display: flex;
        align-items: center;
        cursor:pointer;
        svg{
            font-size:25px;
        }
    }
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
    padding: 6px 29px;
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
}`
const ModalInputs=styled.div`
    display:flex;
    margin-top:30px;
    button{
        border-radius: 8px;
        padding: 6px 71px;
        border:none;
        color: #FFFFFF;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 32px;
        display: flex;
        align-items: center;
        cursor:pointer;
        background: #eb5757;
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
        width:228px;
        height:44px;
        z-index:0;
        position:relative;
        padding-left:10px;
        margin-right:30px;
    }
`
const P=styled.div`
    margin-top:20px;
    width:750px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    opacity: 0.5;
    span{
        font-weight:bold;
        text-decoration:underline;
        cursor:pointer;
    }
`
export default OutOfferComp
