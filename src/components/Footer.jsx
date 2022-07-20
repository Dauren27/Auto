import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Container>
        <div>
        <ul>
            <h2>Купить авто</h2>
            <li><a href="">Каталог авто</a></li>
            <li><a href="">Рассчитать кредит</a></li>
            <li><a href="">Подбор автомобиля</a></li>
            <li><a href="">Записаться на Test Drive</a></li>
        </ul>
        <ul>
            <h2>Продать авто</h2>
            <li><a href="">Оценить авто</a></li>
            <li><a href="">Trade in/Обмен</a></li>
            <li><a href="">Комиссионная продажа</a></li>
        </ul>
        <ul>
            <h2>Услуги</h2>
            <li><a href="">Автокредитирование</a></li>
            <li><a href="">Автострахование</a></li>
        </ul>
        <ul>
            <h2>О компании</h2>
            <li><a href="">Новости</a></li>
            <li><a href="">Вакансии</a></li>
            <li><a href="">Контакты</a></li>
        </ul>
        <ul>
            <h2>+996 709 271 103</h2>
            <li><a href="">Авито магазин</a></li>
        </ul>
        </div>
    </Container>
  )
}
const Container=styled.div`
    width:100%;
    height:30vh;
    background: url('/images/Rectangle 12 (1).png');
    display:flex;
    justify-content:center;
    align-items:center;
    div{
        width:70%;
        display:flex;
        justify-content:space-evenly; 
    }
    h2{
        font-weight: 700;
        font-size: 18px;
        line-height: 26px;
        color: #FFFFFF;
    }
    ul{
        li{
            &:first-child{
                margin-top:15px;
            }
            margin-top:8px;
            a{
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                color:#fff;
                opacity:0.5;
                &:hover{
                    text-decoration:underline;
                }
            }
        }
    }

`
export default Footer
