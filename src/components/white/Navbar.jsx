import loketBlue from '../../assets/logo-loket-blue.png'

import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="bg-white p-10 flex items-center justify-between shadow-lg">
            <div className="flex">
                <img src={loketBlue} className='w-32 mr-5' />
            </div>
            <div className="flex items-center">
                <a href="#" className="uppercase font-bold mr-20 text-gray-500">bantuan</a>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500	" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Navbar