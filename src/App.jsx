
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import CP from './components/CP'
import VisitorCreation from './components/VisitorCreation'
import Property from './components/Property'
import VisitorTReport from './components/VisitorTReport'

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<CP/>} />
        <Route path='/creation' element={<VisitorCreation/>}/>
        <Route path='/property' element={<Property/>}/>
        <Route path='/report' element={<VisitorTReport/>}/>
      </Routes>
    </>
  )
}

export default App
