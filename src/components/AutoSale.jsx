import React from 'react'
import styled from 'styled-components'
import data from '../data/base2.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
const AutoSale = () => {
    let dataArray=Object.keys(data.list)
    const city=useSelector(state=>state.cityReducer.city)
  return (
    <Container>
        <LeftMenu>
            <div>
                <h2>По типу кузова</h2>
                <ul>
                    <li><a href="">Седан</a></li>
                    <li><a href="">Внедорожники</a></li>
                    <li><a href="">Хэтчбеки</a></li>
                    <li><a href="">Универсалы</a></li>
                    <li><a href="">Купе</a></li>
                    <li><a href="">Показать все 175 авто</a></li>
                </ul>
            </div>
        </LeftMenu>
        <Main>
            <div>
                <H1>Продажа авто с пробегом в <span>{city}е </span></H1>
                <Buttons>
                    <button>По размеру скидки</button>
                    <button>До 300.000 Сом</button>
                    <button>До 500.000 Сом</button>
                    <button>До 800.000 Сом</button>
                    <button>До 1.500.000 Сом</button>
                    <button>больше 1.500.000 сом</button>
                </Buttons>
                <Cars>
                    <Carousel 
                        arrows={true}
                        dots={false}
                        slidesToShow={3}
                        slidesToScroll={2}
                        autoplay={true}
                        autoplaySpeed={1000}
                    >
                        {
                            dataArray.map(car=>
                                <Car key={car}>
                                    <img src="https://economist.kg/wp-content/uploads/2021/12/5d405a0aec05c4645f000015.jpeg" alt="" />
                                    <h2>{car}</h2>
                                    <p>{car}, 2020 г.в, 83 478 км,<br/>   внедорожник, РКПП, бензин, 333 лс</p>
                                    <Card>
                                        <div>
                                            <h1>783 000 Сом</h1> 
                                            <p>870 000 Сом</p>
                                        </div>
                                        <p>кредит <span>от 6 000 сом/мес</span></p>
                                    </Card>
                                    <a href="">Смотреть авто</a>
                                </Car>
                            )
                        }
                    </Carousel>
                </Cars>
            </div>
        </Main>
    </Container>
  )
}
const Container=styled.div`
    width:100%;
    height: 100%;
    background:#fff;
    display:flex;

`
const LeftMenu=styled.div`
    background: rgba(158, 171, 184, 0.2);
    width:25%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    h2{
        color:rgba(21, 32, 38, 1);
        font-family: 'Commissioner';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        border-radius:8px;
    }
    ul{
        margin-top:10px;
        li{
            margin-top:5px;
            a{
                opacity:0.7;
                font-family: 'Commissioner';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 22px;
                color: #152026;
            }
            &:hover{
                text-decoration: underline;
            }
        }
    }
    @media(max-width:1230px){
        display:none;
    }
`
const Main=styled.div`
`
const H1=styled.div`
    margin-top:60px;
        margin-left:50px;
        font-style: normal;
        font-weight: 700;
        font-size: 38px;
        line-height: 42px;
        color:#152026;
        span{
            color:#eb5757;
        }
`
const Buttons=styled.div`
    width:80%;
    margin-left:40px;
    margin-top:20px;
    button{
        margin-top:10px;
        margin-left:15px;
        width: 180px;
        height: 35px;
        background: rgba(158, 171, 184, 1);
        border-radius: 20px;
        border:none;
        opacity:0.9;
        color:#fff;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        cursor:pointer;
        &:hover{
            background: #eb5757;
        }
    }
`
const Cars=styled.div`
    margin-top:40px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    width:100%;
    overflow:hidden;
    div{
        width:1100px;
        
    }
`
const Car=styled.div`
    overflow:hidden;
    margin-left:40px;
    img{
        width:316px;
        height:auto;
        border-radius:8px;
    }
    h2{
        font-weight: 700;
        font-size: 20px;
        line-height: 26px;
        color: #152026;
        margin-top:15px;
        cursor:pointer;
        &:hover{
            text-decoration: underline;
        }
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: rgba(21,32,38,0.5);
    }
    p:first-child{
        margin-top:10px;
    }
    div{
        padding-left:10px;
        div{
            
            h1{
                color:rgba(21, 32, 38, 1);
                font-weight: 700;
                font-size: 24px;
                line-height: 32px;
                font-family: 'Commissioner';
                margin-left:-10px;
            }
            div{
                display:flex;
                align-items:center;
                p{
                    text-decoration: line-through;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 24px
                    
                }
            }
        }
    }
    a{
        margin-top:195px;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 32px;
        text-decoration-line: underline;
        color: #EB5757;
    }
    @media(max-width:1150px){
        width:100%;
        overflow:hidden;    
    }
`
const Carousel=styled(Slider)`
    @media(max-width:1150px){
        width:100%;
        overflow:hidden;    
    }
`
const Card=styled.div`
    overflow:hidden;
    background:rgba(158, 171, 184, 0.1);
    margin-left:
    border-radius:8px;
    padding-left:10px;
    padding-top:10px;
    padding-bottom:15px;
    p{
        font-weight:500;
        span{
            color:#152026;
            opacity:1 !important;
        }
    }
    div{
        display:flex;
        p{
            margin-top:5px;
            margin-left:10px;
            font-size:18px;
        }
    }
`
export default AutoSale
