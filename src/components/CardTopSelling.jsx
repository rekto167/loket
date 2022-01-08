// assets
import dunia from '../assets/dunia-mencekam.jpg';
import brotosLogo from '../assets/brotos-logo.jpg';

const CardTopSelling = () => {
    return(
        <div className="flex flex-wrap bg-white shadow-lg w-102 h-100 p-2">
            <div>
                <img src={dunia} alt='dunia mencekam' className="w-28 h-28" />
            </div>
            <div className="ml-5">
                <div className="font-semibold text-black">
                    <p>Dunia Mencekam</p>
                </div>
                <div className="flex flex-wrap items-center justify-between ">
                    <div>
                        <div className="flex flex-wrap items-center">
                            <img src={brotosLogo} alt="logo vendor" className="w-5 h-5 mr-1" />
                            <p className="font-normal">PT. Brotos Global Indonesia</p>
                        </div>
                        <div className="flex flex-wrap items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="font-normal">15 Jan - 16 Jan 2022</p>
                        </div>
                        <div className="flex flex-wrap items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                            <p className="font-semibold text-sm">Rp 75.000</p>
                        </div>
                    </div>
                    <div className="ml-5">
                        <div className=" flex items-center">
                            <button className="uppercase text-white font-semibold bg-orange-500 w-32 h-8">beli</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardTopSelling