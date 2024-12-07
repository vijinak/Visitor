/* import React, { useState } from 'react'
import CP from './CP'
import VisitorCreation from './VisitorCreation'

function ParentComponent() {
const [cpName, setCpName]=useState('')
    const handleCpNameChange=(name)=>{
        setCpName(name);
    }

  return (
    <div>
            <CP onCpNameSubmit={handleCpNameChange} />
            <VisitorCreation cpName={cpName} />
        </div>
  )
}

export default ParentComponent */