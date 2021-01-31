import React from 'react';
import './index.css';

const TaskComponent = () => {
    return(
        <div className={'task-wrapper_wrapper wrapper'}>
            <div className={'wrapper_text-wrapper text-wrapper'}>
                <p className={'text-wrapper_text'}>
                    hello
                </p>
            </div>
            <div className={'wrapper_delete-button-wrapper delete-button-wrapper'}>
                <button className={'delete-button-wrapper_delete-button'}>
                    x
                </button>
            </div>
        </div>
    )
}

export default React.memo(TaskComponent);