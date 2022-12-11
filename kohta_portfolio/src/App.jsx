import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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

    <section className='text-grey-700' id='home'>
      <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center justify-center'>
        <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
          <h1 className='text-3xl sm:text-6xl text-grey-900 font-medium mb-4'>
              Hi! 
              <br />
              I'm Kohta
              <br />
              WEB developer
          </h1>
          <p className='mb-8 leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt 
            maxime optio quidem magnam fugit tenetur! Quibusdam dicta quisqu
            am facilis a! Aliquid voluptatibus unde facere harum fugit cupiditate iu
            sto rem!
          </p>
          <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>CONTACT</button>
        </div>
        <div className='md:w-1/2 lg:max-w-lg w-5/6'>
          <img src="./img/main.jpg" alt="" />
        </div>
      </div>
    </section>
    </>
  )
}

export default App
