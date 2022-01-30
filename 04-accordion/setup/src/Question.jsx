import React, { useState } from 'react';
import questions from './data';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  const [readmore,setreadmore]=useState(false);
  return <article className='question'>
  <header>
    <h4>{title}</h4>
    
    <button className='btn' onClick={()=>setreadmore(!readmore)}>
      {readmore?<AiOutlineMinus/>:<AiOutlinePlus/>}
    </button>
  </header>
  {/* (if this part is true) && (this part will execute) */}
  {readmore &&<p>{info}</p>}
  </article>
};

export default Question;
