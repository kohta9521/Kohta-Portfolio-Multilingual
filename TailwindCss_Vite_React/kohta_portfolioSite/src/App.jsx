import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
    <>
    <header className='text-gray-900 border-b border-gray-300'>
        <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
            <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
                <span className='text-xl ml-3'>Kohta Portfolio Site</span>
            </a>
            <nav className='md:ml-auto text-base'>
                <a href="" className='mr-5 hover:text-blue-400 duration-200'>Home</a>
                <a href="" className='mr-5 hover:text-blue-400 duration-200'>About</a>
                <a href="" className='mr-5 hover:text-blue-400 duration-200'>Skills</a>
                <a href="" className='mr-5 hover:text-blue-400 duration-200'>Blog</a>
                <a href="" className='hover:text-blue-400 duration-200'>Blog</a>
            </nav>
        </div>
    </header>
    </>
    )
}

export default App
