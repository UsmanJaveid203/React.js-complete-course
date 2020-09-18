import React,{useState} from 'react'
import { FaPlusCircle } from 'react-icons/fa';
import List from './showList';
import style from './main.module.css';
import Button from '@material-ui/core/Button';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Main() {
    const[item,setItem]=useState("");
    const[arr,setArr]=useState([]);

    const ChangeHandler=(event)=>{
        setItem(event.target.value)
    }

    const ListOfItem=()=>{
        setArr((preval)=>{
            return [...preval,item]
        })
        setItem('')
    }

    const RemoveRecord=(id)=>{
        setArr((olditem)=>{
           return olditem.filter((dd,index)=>{
                return id!==index;
           })
        })
    }
    return (
        <>
            <div className={style.main_div}>
                <div className={style.center_div}>
                <div className="alert alert-primary" role="alert">
                <h1>Todo List</h1>
                </div>
                    <br/>
                    <input  type="text" placeholder="Enter Item" name="item" value={item} onChange={ChangeHandler}/>
                    <Button variant="outlined" color="primary" onClick={ListOfItem}><FaPlusCircle/></Button>
                    <ol>
                        {arr.map(function(data , index){
                           return <List data={data} id={index} index={index} onSelect={RemoveRecord}/>
                        })
                    }
            </ol>
                </div>
            </div>
        </>
    )
}
export default Main;