import React from 'react';
import InputModule from './components/inputModule/inputModule';
import TaskComponent from './components/task/taskComponent';
import './index.css'

const Todo = () => {
    return(
        <div className={'todo-wrapper'}>
            <InputModule/>
            <div className={'todo-wrapper_task-wrapper'}>
                <TaskComponent />
            </div>
        </div>
    )
}

export default React.memo(Todo);