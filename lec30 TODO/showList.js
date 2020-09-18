import React from 'react';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import  './main.module.css';

export default function showList(props) {
    
    return (
        <>
            <li><Button variant="contained" color="primary" href="#contained-buttons"  onClick={()=>props.onSelect(props.id)}><HighlightOffTwoToneIcon/></Button>  {props.data}</li>
        </>
    )
}
  