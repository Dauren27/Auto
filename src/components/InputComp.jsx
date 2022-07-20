import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import data from '../data/base2.json'
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
const InputComp = () => {
    const [open,setOpen]=useState(false)
    const [title,setTitle]=useState('')
    let dataArray=Object.keys(data.list)
    const dispatch=useDispatch()
    const car=useSelector(state=>state.carReducer.car)
    

    const showCar=()=>{
        dispatch({type:'GET_CAR',payload: title});
    }
  return (
    <div>
            <Search>
                <FlexDiv>
                    <InputDiv>
                        <Input placeholder="Поиск" value={title} onChange={event =>setTitle(event.target.value)}/>
                        <div>
                            <p onClick={()=>setOpen(!open)}>Все бренды</p>
                            <Link to='/buy'><AiOutlineSearch onClick={()=>{showCar();setOpen(false)}}/></Link>
                        </div>
                    </InputDiv>
                    <Icons>
                        <Link to='/favorites'><AiOutlineHeart/></Link>
                        <Link to='/compare'><img src="/images/frame 4.png" alt="" /></Link>
                        <button>Заказать звонок</button>
                    </Icons> 
                </FlexDiv>
                <AllModels style={{display: open?'flex':'none'}}>
                    <div>
                        <ul>
                            {dataArray.map((model)=>
                                <li key={model}><a onClick={()=>setTitle(model)}>{model}</a><span>{data.list[model].length}</span></li>
                            )}
                        </ul>
                    </div>
                    <div>
                        <div>
                            <img src="/images/BMW.png" alt="" />
                            <a href="">BMW</a>
                        </div>
                        <div>
                            <img src="/images/Hyundai.png" alt="" />
                            <a href="">Hyundai</a>
                        </div>
                        <div>
                            <img src="/images/Mercedes.png" alt="" />
                            <a href="">Mercedes</a>
                        </div>
                        <div>
                            <img src="/images/Kia.png" alt="" />
                            <a href="">Kia</a>
                        </div>
                        <div>
                            <img src="/images/Lada.png" alt="" />
                            <a href="">Lada</a>
                        </div>
                        <div>
                            <img src="/images/Toyota.png" alt="" />
                            <a href="">Toyota</a>
                        </div>
                    </div>
                </AllModels>
            </Search>
    </div>
  )
}
const Search=styled.div`
    width:100%;
    button{
        width: 224px;
        height:38px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        border:none;
        font-weight: 500;
        font-size: 18px;
        line-height: 32px;
        color: #fff;
    }
`
const FlexDiv=styled.div`
    display:flex;
    align-items:center;
    flex-wrap:wrap;
`
const InputDiv=styled.div`
    width:664px;
    height:42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px 11px 11px;
    position:relative;
    div{
        position:absolute;
        right:0;
        display:flex;
        align-items:center;
        p{
            cursor:pointer;
            margin-right:20px;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color:#fff;
        }
    }
    svg{
        cursor:pointer;
        width:32px;
        height:32px;
        color:#fff;
        background:rgba(255, 255, 255, 0.1);
        border-radius:8px;
        padding:3px;
        &:hover{
            transform: scale(1.05);
        }
    }
    @media(max-width:735px){
        width:95%;
    }
`
const Input=styled.input`
    padding: 0 10px;
    width:664px;
    height:42px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    border:none;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.6);
    &:focus{
        outline:none;
    }
   
`
const AllModels=styled.div`
    margin-left:15px;
    width:95%;
    background:#fff;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding:10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    padding-right:0;
    margin-right:0;
    color: #152026;
    display:flex;
    justify-content:space-between;
    div{
        &:last-child{
            width:40%;
            display:flex;
            flex-wrap:wrap;
            div{
                margin-left:20px;
                width:180px;
                height:130px;
                justify-content:center;
                display:flex;
                flex-direction:column;
                align-items:center;
                background: #FFFFFF;
                box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
                border-radius: 8px;
                border: 1px solid #F4F6F8;
                &:hover{
                    transform:scale(1.05);
                }
                a{
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 22px;
                    color: #333333;
                    margin-top:20px;
                }
            }
            @media(max-width:1500px){
                display:none;
            }
        }
    }
    ul{
        width:60%;
        height:480px;
        border-radius:8px;
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
        li{
            background:rgba(158, 171, 184, 0.1);
            padding-top:10px;
            margin-left:20px;
            padding-left:15px;
            width:200px;
            display:flex;
            justify-content:space-between;
            span{
                margin-right:15px;
                color: #152026;
                opacity: 0.5;
            }
            a{
                &:hover{
                    text-decoration:underline;
                    cursor:pointer;
                }
            }
        }
        @media(max-width:1500px){
            flex-direction:row;
        }


    }
    @media(max-width:1500px){
        height:100%;
        flex-direction:column;
        div{
            &:last-child{
                display:flex;
                flex-direction:row;
            }
        }
    }
`
const Icons=styled.div`
    display:flex;
    img,svg{
        cursor:pointer;
        margin-left:10px;
        width:35px;
        height:35px;
        font-size:10px;
        color:#fff;
        background:rgba(255, 255, 255, 0.1);
        border-radius:8px;
        &:hover{
            transform:scale(1.05);
        }
    }
    svg{
        padding:3px;
    }
    img{
        width:40px;
        height:40px;
    }
    button{
        margin-left:10px;
        cursor:pointer;
    }
`
export default InputComp
