import React, {Fragment} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// component
import Beranda from './pages/Beranda'
import CreateEvent from './pages/CreateEvent'
import Discover from './pages/Discover'

const App = () => {
  return(
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<Beranda />} />
          <Route exact path='/buat-event' element={<CreateEvent />} />
          <Route exact path='/discover' element={<Discover />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default App