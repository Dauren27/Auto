import React from 'react'
import styled from 'styled-components'
const QuestionComp = () => {
  return (
    <Container>
        <h1>Есть вопросы? Мы свяжемся с вами</h1>
        <div>
            <input type="text" placeholder="Имя"/>
            <input type="text" placeholder="Телефон"/>
            <input type="text" placeholder="Тип обращения"/>
            <button>Заказать звонок</button>
        </div>
        <p>Обработка сведений о Пользователях осуществляется  в соответствии с <span>Политикой в области обработки и обеспечения безопасности персональных данных.</span></p>
    </Container>
  )
}
const Container=styled.div`
    width:100%;
    height:40vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    background:none;
    background: rgba(158, 171, 184, 0.2) !important;
    div{
        display:flex;
        align-items:center;
        flex-wrap:wrap;
    }
    h1{
        margin-top:40px;
        font-style: normal;
        font-weight: 700;
        font-size: 38px;
        line-height: 42px;
        text-align: center;
        color: #333333;
    }
    input{
        margin-left:15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 11px 71px 11px 11px;
        background: rgba(51, 51, 51, 0.1);
        border-radius: 8px;
        border:none;
        color:rgba(51, 51, 51, 0.4);
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
    }
    button{
        background: #eb5757;
        border-radius: 8px;
        padding: 8px 41px;
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
        margin-left:15px;
        &:hover{
            transform: scale(1.05);
        }
    }
    p{
        width:650px;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        color: #152026;
        opacity: 0.5;
        span{
            font-weight:bold;
            cursor:pointer;
            text-decoration:underline;
        }
    }
`
export default QuestionComp
