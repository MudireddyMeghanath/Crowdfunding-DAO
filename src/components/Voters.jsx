import { Bytecode } from 'hardhat/internal/hardhat-network/stack-traces/model';
import React, { useEffect, useState } from 'react'
import { voted } from '../Blockchain';

const Voters = ({id}) => {
 
  const [vote,setvote]=useState([]);
  useEffect(async() =>{
    const vote=await voted(id);
    console.log(vote);
    setvote(vote);


  },[id]);
  

  

  return (
   <>
   {vote.length==0 ? (
    <h1>true</h1>
   ) : (
   
    <div>
      <address>0x 124135376</address>
      <h3>accespted</h3>
    </div>
    

   ) }
   
   
  
   
   </>
  )
}

export default Voters