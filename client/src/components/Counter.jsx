import { Button, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../state/slice/counterSlice';

export default function Counter(){
    const count = useSelector((state)=>state.counters.value)
    const dispatch = useDispatch();

return (
    <>
    <Typography variant='h1'>
        {count}
    </Typography>
    <Button variant='contained' onClick={()=>dispatch(increment())}>Increment</Button>
    <Button variant='contained'onClick={()=>dispatch(decrement())}>Decrement</Button>
    
    </>
);
};