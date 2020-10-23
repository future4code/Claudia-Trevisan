import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../base/Base';

export default function Week (props) {
    const [weekTask, setWeekTask] = useState([{}]);

    const requestGet = () =>{
        axios
        .get(url)
        .then((response) =>{
            setWeekTask(response.data)
        })
        .catch((error) =>{
            alert(error.message)
        })
    };
  
    const requestDelete = (idTask) =>{
        axios
        .delete(`${url}/${idTask}`)
        .then((response) =>{
            alert("Tem certeza que deseja apagar?")
        })
        .catch((error) =>{
            alert(error.message)
        })
    };

    const onClickButtonDelete = (idTask) =>{
        requestDelete(idTask)
    }

    useEffect(() =>{
        requestGet()
    }, []);

    return(
        <div>
            {weekTask && weekTask.map((task) =>{
                return(
                    <div>
                        <p>{task.text}</p>
                        <button>Cumprida</button>
                        <button onClick={()=>onClickButtonDelete(task.id)}>Apagar</button>
                    </div>
                )
            })}
        </div>
    )

}