import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const Header = () => {
    const [open,setOpen]=useState(false);
    const cityes=['Ош','Бишкек','Талас','Нарын','Иссык-куль','Баткен','Джалал-Абад']
    const [value,setValue]=useState(cityes[1])
    const [navbar,setNavbar]=useState(false)
    const dispatch=useDispatch()
    const city=useSelector(state=>state.cityReducer.city)
    useEffect(()=>{
        dispatch({type:'GET_CITY',payload:value})

    },[value])
    const getCity=()=>{
        dispatch({type:'GET_CITY',payload:value})
    }
    return (
    <div  style={{width:'100%',height: open ? '100%':'68px'}}>
    <Container>
            <Logo>
                <h2>ДауренАвто</h2>
            </Logo>
            <Ul>
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/buy'>Купить авто</Link></li>
                <li><Link to='/sale'>Продать авто</Link></li>
                <li><Link to='/profile'>Профиль</Link></li>
                <li><a href="">Контакты</a></li>
            </Ul>
            <Contacts>
                <div>
                    <span onClick={()=>setOpen(!open)}><p>{value}</p> <MdOutlineKeyboardArrowDown style={{transform: open? 'rotate(180deg)':'rotate(360deg)'}}/></span>
                    <div style={{display: open ? 'block':'none'}}>
                        <ul>
                            {
                                cityes.map(city=>
                                    <li key={city}><a onClick={()=>{setValue(city);setOpen(!open)}}>{city}</a></li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                <a>+996 709 271 103</a>
            </Contacts>
            <BurgerSvg>
                <GiHamburgerMenu onClick={()=>setNavbar(!navbar)}/>
            </BurgerSvg>
    </Container>
    </div>
    
  )
}

export default Header
const Container=styled.div`
    width:100%;
    height:68px;
    background: rgba(255, 255, 255, 0.1);
    z-index:1;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    z-index:1;
    @media(max-width:1000px){
        justify-content:space-between;
    }
`
const Logo=styled.div`
    background: url('/images/vector.png');
    color:#fff;
    @media(max-width:1000px){
        margin-left:1.5em;
    }
`
const Ul=styled.ul`
    z-index:10;
    display:flex;
    justify-content:space-evenly;
    list-style:none;
    width:40%;
    li{
        a{
            color: #fff;
            opacity:0.7;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            &:hover{
                text-decoration:underline;
            }
        }
    }
    @media(max-width:1000px){
        display:none;
        flex-direction:column;
    }
    @media(min-width:1000px){
        display:flex;
    }
`
const Contacts=styled.div`
    z-index:10;
    color:#fff;
    font-weight:500;
    line-height:24px;
    font-style:normal;
    font-size:18px;
    cursor:pointer;
    display:flex;
    div{
        div{
            position:absolute;
            ul{
                li{
                    &:hover{
                        text-decoration:underline;
                    }
                }
            }
        }
        span{
            display:flex;
            align-items:center;
            :hover{
                text-decoration:underline;
            }
        }
        margin-right:20px;
        svg{
            font-size:20px;
            margin-left:5px;
        }
        &:hover{
        }
    }
    a{
        &:hover{
            text-decoration:underline;
        }
        &:first-child{
            margin-right:20px;
        }
    }
    select{
        border:1px solid #fff;
        border-radius:5px;
        margin-right:10px;
        background:transparent;
        color: #EB5757;
        font-weight:500;
        line-height:24px;
        font-style:normal;
        font-size:18px;
        cursor:pointer;
        option{
            background:#fff;
        }
    }
    @media(max-width:1000px){
        display:none;
    }
    
`
const BurgerSvg=styled.div`
    @media(min-width:1000px){
        display:none;
    }
    svg{
        margin-right:1.5em;
        background: rgba(255, 255, 255, 0.1);
        width:30px;
        height:30px;
        color:#fff;
        padding:6px;
        border-radius:8px;
        cursor:pointer;
        &:hover{
            transform:scale(1.05);
        }
    }
`