import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import PageRoutes from './routes'

function App() {

  return (
    <div className="App">
      {/* <Header/> */}
      <Sidebar />
    </div>
  )
}

export default App
