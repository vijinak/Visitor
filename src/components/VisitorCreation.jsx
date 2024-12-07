import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
// import { styled } from '@mui/system';
import axios from 'axios';


function VisitorCreation(/* {cpName} */) {
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
    /* const StyledMenuItem = styled(MenuItem)({
        backdropFilter: 'blur(8px)', // Apply the backdrop-filter
        background: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.9)', // Slightly less transparent on hover
        },
      }); */
    //   cp name box
    const [leadSource, setLeadSource] = useState('');
    const [formData, setFormData] = useState({
        visitorName: '',
        phoneNumber: '',
        email: '',
        leadSource: '',
        cpName: '',
        property: '',
        budget: '',
    });

      const handleLeadSourceChange = (e) => {
        setLeadSource(e.target.value);
        setFormData({ ...formData, leadSource: e.target.value });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
      try {
          await axios.post('http://localhost:5005/submit', formData);
          alert('Data submitted successfully!');
          setFormData({
              visitorName: '',
              phoneNumber: '',
              email: '',
              leadSource: '',
              cpName: '',
              property: '',
              budget: '',
          });
          setLeadSource('');
      } catch (error) {
          console.error('Error submitting data:', error);
      }
  };
    
  return (
    <>
    <div className=' d-flex justify-content-center align-items-center'style={{ width: '50%', height: '80vh', marginLeft:'350px' }}>
        
        {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
        <form className='mt-5' onSubmit={(e) => e.preventDefault()}>
          <div className="mb-2">
            <TextField id="outlined-basic" label="Visitor Name" variant="outlined" className='w-100 mb-3' name='visitorName' value={formData.visitorName} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <TextField id="outlined-basic" label="Phone Number" type='number' variant="outlined" className='w-100' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <TextField id="outlined-basic" label="Email id" type="email" variant="outlined" className='w-100' name='email'  value={formData.email} onChange={handleChange}/>
          </div>
          {/* drop */}
          <div className="mb-3">

            <TextField
          id="select-lead"
          select
          label="Lead Source"
          variant="outlined"
          className='w-100' 
          value={leadSource}
          onChange={handleLeadSourceChange}
        >
          {lead.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>

          </div>
          {leadSource==='CP' &&(
            <div className="mb-3">
            <TextField id="outlined-basic" label="CP Name" variant="outlined" className='w-100' name='cpName' value={formData.cpName}
            onChange={handleChange}/>
          </div>
          )}
          
          <div className="mb-3">
            <TextField id="outlined-basic" label="Property" variant="outlined" className='w-100' name='property' value={formData.property} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <TextField id="outlined-basic" label="Budget" variant="outlined" className='w-100' name='budget' value={formData.budget} onChange={handleChange}/>
          </div>
          <div className="d-flex justify-content-between w-100 mt-4">
            <Button variant="contained" color='success' style={{width:'350px', height:'50px', marginRight:'20px', marginLeft:'15px'}} onClick={handleSubmit}>Submit</Button>
            {/* <Button variant="outlined"  style={{width:'150px', height:'50px', marginRight:'20px', marginLeft:'15px'}}>Edit</Button> */}
          </div>
        </form>
        </div>
    
    </>
  )
}

export default VisitorCreation