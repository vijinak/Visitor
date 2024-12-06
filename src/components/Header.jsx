import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    // <div className='text-danger'>Header</div>
<>
<Navbar /* bg="primary" */ data-bs-theme="dark" >
        <Container>
          
          <Nav style={{marginLeft:'360px', marginTop:'20px'}}>
            <Nav.Link href="/" className='me-5' style={{fontSize:'25px',color:'rgb(103, 107, 107)',fontWeight:'bold'}}>CP</Nav.Link>
            <Nav.Link href="/creation" className='me-5' style={{fontSize:'25px',color:'rgb(103, 107, 107)',fontWeight:'bold'}}>Visitor Creation</Nav.Link>
            <Nav.Link href="/property" style={{fontSize:'25px',color:'rgb(103, 107, 107)',fontWeight:'bold'}}>Property</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
</>
  )
}

export default Header