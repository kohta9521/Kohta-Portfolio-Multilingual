import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <header className='text-grey-700 border-b border-grey-200'>
      <div className='flex container  mx-auto p-5 flex-col md:flex-row items-center'>
        <a href="#" className='font-medium test-grey-900 mb-4 md:mb-0'>
          <span className='text-xl ml-3'>Kohta Portdolio</span>
        </a>
        <nav className='md:ml-auto test-base'>
          <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>HOME</a>
          <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>ABOUT</a>
          <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>SKILLS</a>
          <a href="#blog" className='mr-5 hover:text-blue-400 duration-300'>BLOG</a>
          <a href="#blog" >CONTACT</a>
        </nav>
      </div>
    </header>
  )
}

export default App
