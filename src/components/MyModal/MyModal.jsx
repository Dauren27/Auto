import React, { useState } from 'react'
import cl from './mymodal.module.css'
const MyModal = ({children,visible,detVisible}) => {
    const rootClasses=[cl.modal]
    if(visible){
        rootClasses.push(cl.active)
    }
    return (
    <div className={rootClasses.join(' ')}>
        <div className={cl.modalContent}>
            {children}
        </div>
    </div>
  )
}

export default MyModal
