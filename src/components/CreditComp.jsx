import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const CreditComp = () => {
  return (
    <Container>
        <LeftDiv>
            <h1>Заявка <span>во все банки-партнеры</span> <br/>на покупку авто в кредит</h1>
            <img src="/images/Group 657.png" alt="" />
        </LeftDiv>
        <RightDiv>
            <BigDiv>
                <h2>Выбрать автомобиль</h2>
                <Buttons>
                    <input type="text" placeholder="Марка"/>
                    <input type="text" placeholder="Модель"/>

                </Buttons>
                <Divs>
                    <Div>
                        <h2>Первоначальный взнос</h2>
                        <input type="text" placeholder="140 000"/>
                    </Div>
                    <DivTwo>
                        <h2>Срок кредитования</h2>
                        <input type="text" placeholder="24"/>
                    </DivTwo>
                </Divs>
                <H2>Контактные данные</H2>
                <Buttons>
                    <input type="text" placeholder="Имя"/>
                    <input type="text" placeholder="Телефон"/>
                </Buttons>
                <p>
                    Обработка сведений о Пользователях осуществляется  в соответствии     с Политикой в области обработки и обеспечения безопасности персональных данных. 
                </p>
                <Link to='/sale/offer'><button>Получить предложение</button></Link>
            </BigDiv>
        </RightDiv>
    </Container>
  )
}
const Container=styled.div`
    width:100%;
    height:90vh;
    display:flex;
    background: url('/images/Rectangle 12 (1).png');
`
const LeftDiv=styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    width:45%;
    img{
        width:720px;
        height:auto;
        margin-top:30px;
    }
    h1{
        margin-top:70px;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 42px;
        color:#fff;
        span{
            color:#eb5757;
        }
    }
`
const RightDiv=styled.div`
    display:flex;
    align-items:center;
    width:50%;
    div{
        h2{
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 26px;
            color: #FFFFFF;
        }
        input{
            margin-top:10px;
            background: #FFFFFF;
            border-radius: 8px;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            color: #152026;
            line-height: 24px;
            border:none;
            width:230px;
            height:44px;
            z-index:0;
            position:relative;
            padding-left:10px;
        }
        p{
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: #FFFFFF;
            opacity: 0.5;
            margin-top:30px;
        }
        button{
            margin-top:20px;
            background: #eb5757;
            border-radius: 8px;
            padding: 8px 31px;
            border:none;
            color: #FFFFFF;
            font-family: 'Commissioner';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 32px;
            display: flex;
            align-items: center;
            cursor:pointer;
            &:hover{
                transform: scale(1.05);
            }
        }
    }
`
const BigDiv=styled.div`
    margin-left:60px;
    
`
const H2=styled.h2`
    margin-top:20px;
`
const Div=styled.div`
    display:flex;
    flex-direction:column;

`
const DivTwo=styled.div`
    margin-left:20px;
`
const Buttons=styled.div`
    display:flex;
    flex-wrap:wrap;
    input{
        &:last-child{
            margin-left:20px;
        }
    }
`
const Divs=styled.div`
    display:flex;
    flex-wrap:wrap;
    h2{
        margin-top:20px;
    }
`
export default CreditComp
