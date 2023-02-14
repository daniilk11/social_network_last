import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {



    useEffect(() => { // функции получает функцию, которую нужно запустить после отрисовки всего, если не ставим зависимости в []
        setStatus(props.status)
    }, [props.status]) // in [] brakets we write dependencies, when status changed we start useEffect
       

    const [editMode, setEditMode] = useState(false)  // функции хук в первую ячейку получаем  данные state во вторую получаем функцию для изменения первой ячейки то есть state
    const [status, setStatus] = useState(props.status)  // функции хук 


    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false) 
            props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode &&
                <div>
                    <span onClick={activateMode}  >{props.status || "---"}</span>
                </div>}

            {editMode &&
                <div>
                    <input onChange={onStatusChange} autofocus={true} onBlur={deactivateEditMode}
                        value={status} ></input>
                </div>}

        </div>
    );

}
export default ProfileStatusWithHooks;