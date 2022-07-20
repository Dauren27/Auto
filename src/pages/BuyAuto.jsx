import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import InputComp from '../components/InputComp'
import SearchComp from '../components/SearchComp'
import data from '../data/base2.json'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const BuyAuto = () => {
    let dataArray=Object.keys(data.list)
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const car=useSelector(state=>state.carReducer.car);
    const carName=useSelector(state=>state.carReducer.carName)
    const favoritesCar=useSelector(state=>state.carReducer.favoritesCar);
    const addFavoritesCar=(auto)=>{
        dispatch({type:'ADD_CAR',payload: auto})
        localStorage.setItem('FavoritesCar',JSON.stringify(favoritesCar))
    }
    const removeCar=(auto)=>{
        dispatch({type:'GET_OFF_CAR',payload:auto})
    }
    function getCarName(carName){
        dispatch({type:'GET_CAR_NAME',payload: carName});
    }
  return (
    <Container>
        <ContainerBackground>
            <Header/>
            <LayoutCont>
                <InputComp/>
                <SearchComp/>
            </LayoutCont>
        </ContainerBackground>
        <LayoutCont>
            <H2><Link to='/'>Главная</Link>/ <span>Каталог</span></H2>
            {data.list[car]?<h1>{car}</h1>:''}
            <Autos>
                {
                    car ? 
                    (
                        data.list[car] ?
                        data.list[car].map((model,index)=>
                            <div style={{marginTop:'40px'}} key={model}>
                                <ImgDiv>
                                    {
                                        !favoritesCar.includes(`${car} ${model}`) ?
                                        <AiOutlineHeart onClick={()=>{addFavoritesCar(`${car} ${model}`)}}/>
                                        :<AiFillHeart onClick={()=>{removeCar(`${car} ${model}`)}}/>
                                    }
                                    <img src="/images/frame 4.png"/>
                                </ImgDiv>
                                <h2 onClick={()=> {navigate(`/buy/${model}`);getCarName(`${car} ${model}`)}}>{car} {model}</h2>
                                <p>{car} {model}, 2020 г.в, 83 478 км,<br/>   внедорожник, РКПП, бензин, 333 лс</p>
                                <Card>
                                    <div>
                                        <h1>783 000 Сом</h1> 
                                        <p>870 000 Сом</p>
                                    </div>
                                </Card>
                                <a onClick={()=> {navigate(`/buy/${model}`);getCarName(`${car} ${model}`)}}>Смотреть авто</a>
                            </div>
                        ):
                        <h1>Машина не найдена</h1>
                    )
                    :
                    dataArray.map(auto=>
                        data.list[auto].map((model)=>
                            <div style={{marginTop:'40px'}} key={model}>
                                <ImgDiv>
                                    {
                                        !favoritesCar.includes(`${auto} ${model}`) ?
                                        <AiOutlineHeart onClick={()=>{addFavoritesCar(`${auto} ${model}`)}}/>
                                        :<AiFillHeart onClick={()=>{removeCar(`${auto} ${model}`)}}/>
                                    }   
                                    <img src="/images/frame 4.png"/>
                                </ImgDiv>
                                <h2 onClick={()=>{navigate(`/buy/${model}`);getCarName(`${auto} ${model}`)}}>{auto} {model}</h2>
                                <p>{auto} {model}, 2020 г.в, 83 478 км,<br/>   внедорожник, РКПП, бензин, 333 лс</p>
                                <Card>
                                    <div>
                                        <h1>783 000 Сом</h1> 
                                        <p>870 000 Сом</p>
                                    </div>
                                </Card>
                                <a onClick={()=>{navigate(`/buy/${model}`);getCarName(`${auto} ${model}`)}}>Смотреть авто</a>
                            </div> 
                        )
                    )
                }
            </Autos>
        </LayoutCont>
    </Container>
  )
}

export default BuyAuto
const Container=styled.div`
    width:100%;
    min-height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const H2=styled.h2`
    margin-top:20px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    cursor:pointer;
    span{
        text-decoration:underline;
    }
    a{
        color:#333;
        &:hover{
            text-decoration:underline;
            cursor:pointer;

        }
    }
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
    h1{
        margin-top:40px;
    }
`
const Autos=styled.div`
    width:100%;
    margin-top:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
    font-family: monospace !important;
    button{
        background: rgba(182, 193, 204, 0.9);
        border-radius: 0px 8px;
        padding:10px;
    }
    img,svg{
        position:absolute;
        right:60px;
        width:45px;
        height:45px;
        &:nth-child(2){
            right:10px;
        }
        &:hover{
            cursor:pointer;
            transform: scale(1.05);
        }
    }
    svg{
        top:8px;
    }
    h2{
        font-weight: 700;
        font-size: 20px;
        line-height: 26px;
        color: #152026;
        margin-top:5px;
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
        cursor:pointer;
    }
`
const ImgDiv=styled.div`
    position:relative;
    border-radius:8px;
    width:330px;
    height:200px;
    background: url('https://motor.ru/imgs/2020/11/18/13/4350718/f34cb9cbb5d09706013e957c0bdbb69dafc84a17.jpg');
    background-size:cover;
    svg{
        width:30px;
        height:30px;
        color:#fff;
    }
`
const Card=styled.div`
background: rgba(158, 171, 184, 0.2);
border-radius:8px;
padding-left:15px;
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
    p{
        margin-top:5px;
        margin-left:10px;
        font-size:18px;
    }
}
`