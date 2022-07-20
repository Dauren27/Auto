import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import data from '../data/base2.json'
import { useDispatch, useSelector } from 'react-redux';
const SearchComp = ({city}) => {
    let dataArray=Object.keys(data.list)
    const [state,setState]=useState(true)
    const [open,setOpen]=useState(true)
    const [model,setModel]=useState(true)
    const [title, setTitle] = useState('')
    const [rotateBtn,setRotateBtn]=useState('')
    const [modelsArr,setModelsArr]=useState([])
    const [modelName,setModelName]=useState('')
    let closeBtn=false;

    const dispatch=useDispatch();
    const car=useSelector(state=>state.carReducer.car)

    const sortedCars=(arr)=>{
        return arr.filter((val)=>{
            if(title==""){
                return val
            }else if(val.toLowerCase().includes(title.toLocaleLowerCase())){
                return val
            }
        })
    }
    const sortedModels=(arr)=>{
        return arr.filter((val)=>{
            if(modelName==""){
                return val
            }else if(val.toLowerCase().includes(modelName.toLocaleLowerCase())){
                return val
            }
        })
    }
    function showCar(){
        dispatch({type:'GET_CAR',payload: title});
    }
    function switchButton(){
        if(state) return 'none'
        else return 'flex'
    }
    function openDiv(open){
        if(open){
            return 'none'
        }else{
            return 'block'
        }
    }
    function openFunction(func,arg){
        func(!arg);
        arg ? setRotateBtn('rotate(180deg)'):setRotateBtn('rotate(360deg)');
    }
  return (
    <Container>
        <ChooseDiv>
            <div>
                <input type="text" placeholder="Марка " value={title}
                    onChange={event =>setTitle(event.target.value)}/>
                <MdOutlineKeyboardArrowDown 
                    style={{transform: rotateBtn}} 
                    onClick={()=>openFunction(setOpen,open)}/>
                <div style={{display: openDiv(open)}}>
                    <ul>
                        {sortedCars(dataArray).map((car,key)=>
                            <li key={car} onClick={()=>{setTitle(car);setOpen(!open);if(!model)setModel(!model);setModelName('')}}>{car}</li>
                        )}
                    </ul>
                    {
                        sortedCars(dataArray).length==0 ?
                        <p>Марка машины не найдена</p> : ''
                    }
                </div>
            </div>
            <div>
                <input type="text" placeholder="Модель" value={modelName} onChange={e=>setModelName(e.target.value)}/><MdOutlineKeyboardArrowDown 
                    style={{transform: rotateBtn}} onClick={()=>{openFunction(setModel,model);setModelsArr(data.list[title])}}
                />
                <div style={{display: openDiv(model)}}>
                    <ul>
                        {modelsArr!=undefined ?
                            sortedModels(modelsArr).map((md)=>
                                <li key={md} onClick={()=>{openFunction(setModel,model);setModelName(md)}}>{md}</li>
                            ):<p>Укажите марку машины</p>
                        }
                    </ul>
                </div>
            </div>
            <input type="text" placeholder="Цена от"/>
            <input type="text" placeholder="Цена до"/>
            <div><input type="text" placeholder="Коробка"/><MdOutlineKeyboardArrowDown/></div>
        </ChooseDiv>
        <BigChooseDiv style={{display: switchButton()}}>
            <input type="select" placeholder="Год, от"/>
            <input type="text" placeholder="Год, до"/>
            <input type="text" placeholder="Пробег, от"/>
            <input type="text" placeholder="Пробег, до"/>
            <div><input type="text" placeholder="Тип кузова"/><MdOutlineKeyboardArrowDown/></div>
            <div><input type="select" placeholder="Привод"/><MdOutlineKeyboardArrowDown/></div>
            <input type="text" placeholder="Двигатель"/>
            <input type="text" placeholder="Объем, от"/>
            <input type="text" placeholder="Объем, до"/>
            <div><input type="text" placeholder="Цвет"/><MdOutlineKeyboardArrowDown/></div>
            <input type="select" placeholder="Мощость, от"/>
            <input type="text" placeholder="Мощность, до"/>
        </BigChooseDiv>
        <Categories onClick={(event)=>{
            if(event.target.tagName=="BUTTON"){
                console.log(event.target.val);
                event.target.val=!event.target.val;
                if(event.target.val){
                    closeBtn=true;
                    event.target.style.background='#eb5757';
                }else{
                    closeBtn=false;
                    event.target.style.background='rgba(255, 255, 255, 0.2)';
                    
                }
            }
            //background: #eb5757;
        }}>
            <button val={'true'}>Продает собственник</button>
            <button val={'true'}>Новые поступления</button>
            <button val={'true'}>Выгодная цена</button>
        </Categories>
        <hr />
        <SearchButtons>
            <div>
                <label>
                    <input type="checkbox" onClick={()=>setState(!state)}/>
                    <span></span>
                </label>
                <p>Расширенный поиск</p>
            </div>
            <div>
                <button onClick={()=>{setTitle('');setModelName('')}}>Очистить поиск</button>
                <button onClick={()=>showCar()}>Показать авто</button>
            </div>

        </SearchButtons>
    </Container>
  )
}
const Container=styled.div`
    hr{
        border: 1px solid rgba(255, 255, 255, 0.2);
        margin-top:20px;
    }
`
const ChooseDiv=styled.div`
    width:90%;
    display:flex;
    justify-content: space-between;
    flex-wrap:wrap;
    margin-top:10px;
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
            top:30px;
            cursor:pointer;
            &:hover{
                transform:scale(1.1);
            }
        }
    }
    input{
        margin-top:20px;
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
    @media(max-width:550px){
        input{
            width:45%;
        }
        justify-content:spae-evenly;
    }
    @media(max-width:800px){
        width:100%;
        justify-content:space-evenly;
        input{
            width:150px;
        }
    }
    

`
const BigChooseDiv=styled.div`
    width:90%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    div{
        position:relative;
        svg{
            color:rgba(21, 32, 38, 0.6);
            width:25px;
            height:25px;
            position:absolute;
            right:10px;
            top:30px;
            cursor:pointer;
            &:hover{
                transform:scale(1.1);
            }
        }
    }
    input{
        margin-top:20px;
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
    @media(max-width:800px){
        width:100%;
        justify-content:space-evenly;
        input{
            width:150px;
        }
    }
    @media(max-width:550px){
        justify-content:space-between;

        input{
            width:45%;
        }
    }
`
const Categories=styled.div`
    margin-top:18px;
    display:flex;
    flex-wrap:wrap;
    button{
        margin-left:15px;
        margin-top:10px;
        width: 200px;
        height: 35px;
        background: rgba(255, 255, 255, 0.2);
        opacity: 0.9;
        border-radius: 20px;
        border:none;
        color:#fff;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        cursor:pointer;
        display:flex;
        align-items:center;
        justify-content:space-evenly;
        svg{
            font-size:20px;
        }
        &:first-child{
            margin-left:0;
        }
        &:hover{
            transform: scale(1.05);
        }
    }
    hr{
        margin-top:25px;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
`
const SearchButtons=styled.div`
    margin-top:30px;
    margin-bottom:20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    div{
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        p{
            font-family: 'Commissioner';
            margin-left:10px;
            font-style: normal;
            font-weight: 500;
            font-size: 17px;
            line-height: 24px;
            color:#fff;
        }
    }
    label{
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        input{
            color:#fff;
            display:none;
            &:checked + span{
                background: #EB5757;
            }
            &:focus + span{
                box-shadow: 0 0 1px #2196F3;
            }
            &:checked + span:before {
                -webkit-transform: translateX(26px);
                -ms-transform: translateX(26px);
                transform: translateX(26px);
              }
        }
        span{
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.2);
            -webkit-transition: .4s;
            transition: .4s;
            border-radius:34px;
            &:before{
                border-radius: 50%;
            }
            &:before{
                position: absolute;
                content: "";
                height: 26px;
                width: 26px;
                left: 4px;
                bottom: 4px;
                background-color: white;
                -webkit-transition: .4s;
                transition: .4s;
            }
        }
    }
    button{
        background: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        padding: 8px 71px;
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
    @media(max-width:990px){
        flex-direction:column;
        align-items:flex-start;
        button{
            margin-top:20px;
        }
    }
    @media(max-width:600px){
        div{
            &:last-child{
                justify-content:center;
            }
        }
        button{
            padding: 8px 51px;
            &:last-child{
                margin-left:0;
            }
        }
    }

`
export default SearchComp
