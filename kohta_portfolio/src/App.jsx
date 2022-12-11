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

    <section className='text-grey-700 border-t border-grey-200'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-grey-900'>ABOUT ME</h1>
          <p className='pb-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod hic odit et
            velit maxime illo voluptatibus necessitatibus quisquam minus explicabo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quod conse
            ctetur blanditiis vero maiores repudiandae architecto veniam possimus tem
            pora, dolores nihil ducimus eius est iusto, eaque culpa quas illum, harum ev
            eniet veritatis ex officia. Quidem deleniti reprehenderit totam soluta cumque
            libero vel maiores ea veniam, nihil quia laudantium nesciunt est amet dolore
            s necessitatibus, fuga recusandae earum, iusto numquam assumenda! Quo, 
            quaerat in quas deserunt adipisci atque eos architecto voluptate sint id recu
          </p>
        </div>
        {/* カードのdivタグ */}
        <div className='flex flex-wrap'>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-200 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 8C4.55228 8 5 7.55228 5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8 7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6C7.55228 6 8 6.44772 8 7Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10 8C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6C9.44771 6 9 6.44772 9 7C9 7.55228 9.44771 8 10 8Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM21 5H3C2.44772 5 2 5.44772 2 6V9H22V6C22 5.44772 21.5523 5 21 5ZM2 18V11H22V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className='text-grey-900 text-lg font-medium ml-2'>
                  WEB Developer
                  </h2>
              </div>
              <div>
              <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, voluptatem
                    ! Reiciendis eum nam nisi consequuntur a non dolores blanditiis voluptate!
                  </p>
                  <a href="#" className='flex mt-3 text-green-500 items-center'>
                    MORE
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.9164 7.75739L23.1662 11.9929L18.9305 16.2426L17.5139 14.8308L19.3325 13.0061L2.8338 13.0285V15.0299H0.833801V9.02988H2.8338V11.0285L19.3429 11.0061L17.5046 9.17398L18.9164 7.75739Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
              </div>
            </div>
          </div>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-200 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 8C4.55228 8 5 7.55228 5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8 7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6C7.55228 6 8 6.44772 8 7Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10 8C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6C9.44771 6 9 6.44772 9 7C9 7.55228 9.44771 8 10 8Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM21 5H3C2.44772 5 2 5.44772 2 6V9H22V6C22 5.44772 21.5523 5 21 5ZM2 18V11H22V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className='text-grey-900 text-lg font-medium ml-2'>
                  WEB Developer
                  </h2>
              </div>
              <div>
              <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, voluptatem
                    ! Reiciendis eum nam nisi consequuntur a non dolores blanditiis voluptate!
                  </p>
                  <a href="#" className='flex mt-3 text-green-500 items-center'>
                    MORE
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.9164 7.75739L23.1662 11.9929L18.9305 16.2426L17.5139 14.8308L19.3325 13.0061L2.8338 13.0285V15.0299H0.833801V9.02988H2.8338V11.0285L19.3429 11.0061L17.5046 9.17398L18.9164 7.75739Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
              </div>
            </div>
          </div>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-200 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 8C4.55228 8 5 7.55228 5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8 7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6C7.55228 6 8 6.44772 8 7Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10 8C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6C9.44771 6 9 6.44772 9 7C9 7.55228 9.44771 8 10 8Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM21 5H3C2.44772 5 2 5.44772 2 6V9H22V6C22 5.44772 21.5523 5 21 5ZM2 18V11H22V18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className='text-grey-900 text-lg font-medium ml-2'>
                  WEB Developer
                  </h2>
              </div>
              <div>
              <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, voluptatem
                    ! Reiciendis eum nam nisi consequuntur a non dolores blanditiis voluptate!
                  </p>
                  <a href="#" className='flex mt-3 text-green-500 items-center'>
                    MORE
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.9164 7.75739L23.1662 11.9929L18.9305 16.2426L17.5139 14.8308L19.3325 13.0061L2.8338 13.0285V15.0299H0.833801V9.02988H2.8338V11.0285L19.3429 11.0061L17.5046 9.17398L18.9164 7.75739Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      
    </section>
    </>
  )
}

export default App
