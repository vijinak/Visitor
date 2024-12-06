import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';

function VisitorCreation() {
    const lead=[
        {
            value:'Direct',
            label:'Direct'
        },
        {
            value:'CP',
            label:'CP'
        }
    ]
    const StyledMenuItem = styled(MenuItem)({
        backdropFilter: 'blur(8px)', // Apply the backdrop-filter
       /*  background: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.9)', // Slightly less transparent on hover
        }, */
      });
    //   cp name box
      const [leadSource, setLeadSource]=useState('')
      const handleLeadSourceChange=(e)=>{
        setLeadSource(e.target.value);
      }
    //   cp name from cp component
    
  return (
    <>
    <div className=' d-flex justify-content-center align-items-center'style={{ width: '50%', height: '80vh', marginLeft:'350px' }}>
        <div >
        {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
        <form className='mt-5' >
          <div className="mb-3">
            <TextField id="outlined-basic" label="Visitor Name" variant="outlined" className='w-100 '/>
          </div>
          <div className="mb-3">
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" className='w-100'/>
          </div>
          <div className="mb-3">
            <TextField id="outlined-basic" label="Email id" variant="outlined" className='w-100' />
          </div>
          {/* drop */}
          <div className="mb-3">

            <TextField
          id="standard-select-currency"
          select
          label="Lead Source"
        //   defaultValue="EUR"
          variant="outlined"
          className='w-100' 
          onChange={handleLeadSourceChange}
        >
          {lead.map((option) => (
            <StyledMenuItem key={option.value} value={option.value} >
              {option.label}
            </StyledMenuItem>
          ))}
        </TextField>

          </div>
          {leadSource==='CP' &&(
            <div className="mb-3">
            <TextField id="outlined-basic" label="CP Name" variant="outlined" className='w-100' />
          </div>
          )}
          
          <div className="mb-3">
            <TextField id="outlined-basic" label="Property" variant="outlined" className='w-100' />
          </div>
          <div className="mb-3">
            <TextField id="outlined-basic" label="Budget" variant="outlined" className='w-100' />
          </div>
          <div className="d-flex justify-content-between w-100 mt-4">
            <Button variant="contained" color='success' style={{width:'350px', height:'50px', marginRight:'20px', marginLeft:'15px'}}>Submit</Button>
            {/* <Button variant="outlined"  style={{width:'150px', height:'50px', marginRight:'20px', marginLeft:'15px'}}>Edit</Button> */}
          </div>
        </form>
        </div>
    </div>
    </>
  )
}

export default VisitorCreation