import {useState} from 'react'

export default function useCustomHook() {
    const [state, setstate] = useState(0);
    const incrementState=()=>{
        setstate(state+50);
    }
    return [state,incrementState]
}
