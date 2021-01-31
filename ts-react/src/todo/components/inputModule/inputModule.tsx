import React from 'react';
import './index.css'

const InputModule = () => {
    return(
        <div className={'input-module_wrapper wrapper'}>
            <div className={'wrapper_input-wrapper input-wrapper'}>
                <input className={'input-wrapper_input'} type={'text'}/>
            </div>
            <div className={'wrapper_button-wrapper button-wrapper'}>
                <button className={'button-wrapper_button'}>
                    Add
                </button>
            </div>
        </div>
    )
}

export default React.memo(InputModule);