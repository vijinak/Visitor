
import React from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Property() {
  return (
  <>
    <div className=' d-flex justify-content-center align-items-center'style={{ width: '50%', height: '50vh', marginLeft:'350px' }}>
        <div >
        {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
        <form className='mt-5'>
          <div className="mb-3">
            <TextField id="outlined-basic" label="Property" variant="outlined" className='w-100' />
          </div>
          <div className="mb-3">
            <TextField id="outlined-basic" label="Location" variant="outlined" className='w-100'/>
          </div>
          
          <div className="d-flex justify-content-between w-100 mt-4">
            <Button variant="contained" color='success' style={{width:'150px', height:'50px', marginRight:'20px', marginLeft:'15px'}}>Submit</Button>
            {/* <Button variant="outlined"  style={{width:'150px', height:'50px', marginRight:'20px', marginLeft:'15px'}}>Edit</Button> */}
          </div>
        </form>
        </div>
    </div>
    </>
  )
}

export default Property