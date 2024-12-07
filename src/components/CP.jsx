import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function CP(/* {onCpNameSubmit} */) {
    const [formData, setFormData] = useState({
        cpName: '',
        phoneNumber: '',
        emailId: '',
      });
    
      const [submittedData, setSubmittedData] = useState(null);
      const [isEditing, setIsEditing] = useState(false);
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [id]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData); 
        setIsEditing(false); 
        alert('Data submitted successfully!');
      };
    
      const handleEdit = () => {
        setIsEditing(true); 
      };
  return (
    <>
   
          <div className="d-flex flex-column align-items-center " >
      {!submittedData || isEditing ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ marginLeft:'0px', height: '50vh' }}
        >
          <form className="mt-5" style={{width:'350px'}} onSubmit={handleSubmit}>
            <div className="mb-3">
              <TextField
                id="cpName"
                label="CP Name"
                variant="outlined"
                className="w-100"
                value={formData.cpName}
                onChange={handleChange}
                
              />
            </div>
            <div className="mb-3">
              <TextField
                id="phoneNumber"
                label="Phone Number"
                variant="outlined"
                className="w-100"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <TextField
                id="emailId"
                label="Email id"
                variant="outlined"
                className="w-100"
                value={formData.emailId}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex justify-content-between w-100 mt-4">
              <Button
                type="submit"
                variant="contained"
                color="success"
                style={{ width: '150px', height: '50px', marginRight: '20px', marginLeft: '85px' }}
              >
                Submit
              </Button>
              {submittedData && (
                <Button
                  variant="outlined"
                  onClick={() => setIsEditing(false)}
                  style={{ width: '150px', height: '50px', marginRight: '20px', marginLeft: '15px' }}
                >
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </div>
      ) : (
        <div className="mt-5" style={{ margin: '330px' }}>
          <h4>Submitted Details:</h4>
          <p>
            <strong>CP Name:</strong> {submittedData.cpName}
          </p>
          <p>
            <strong>Phone Number:</strong> {submittedData.phoneNumber}
          </p>
          <p>
            <strong>Email ID:</strong> {submittedData.emailId}
          </p>
          
          <Button
            variant="outlined"
            onClick={handleEdit}
            style={{ marginTop: '10px', width: '150px' }}
          >
            Edit
          </Button>
        </div>
      )}
    </div>
    </>
  )
}

export default CP