import Navbar from '../components/white/Navbar'
import Container from '../components/Container'
import bannerEvent from '../assets/banner-event.jpg'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CreateEvent = () => {
    return(
        <>
            <Navbar />
            <Container width="w-[70%] shadow-lg border border-gray-300 h-50 m-auto mt-20 flex flex-col">
                <div className="w-full mx-auto relative flex justify-center aligns-center">
                    <img src={bannerEvent} className="w-full" />
                    <div className=" flex flex-col text-white absolute justify-self-center self-center">
                        <button className="m-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        <p className="font-semibold text-3xl mx-auto">Unggah gambar/poster/banner</p>
                        <p className="m-auto">Direkomendasikan 724 x 340px dan tidak lebih dari 2Mb</p>
                    </div>
                </div>
                <div className="p-10 divide-y">
                    <div>
                        <input type="text" placeholder="Nama Event*" className="focus:placeholder:text-transparent text-3xl w-full outline-0 mb-10" />
                        <a href="" className="hover:text-orange-500 mb-10">Pilih Kategori*</a>
                    </div>
                        <div className="mt-5 flex justify-around w-full">
                            <div className="flex flex-col mt-5">
                                <p className="font-semibold" >Diselenggarakan Oleh</p>
                                <div className="flex items-center">
                                    <button className="mr-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </button>
                                    <input type="text" placeholder="Nama Organizer" className="focus:placeholder:text-transparent " />
                                </div>
                            </div>
                            <div className="flex flex-col mt-5">
                                <p className="font-semibold">Tanggal & Waktu</p>
                                <div className="mt-3">
                                    <button className="flex text-gray-700 hover:text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <p>Pilih Tanggal</p>
                                    </button>
                                </div>
                                <div className="mt-3">
                                    <button className="flex text-gray-700 hover:text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p>Pilih Waktu</p>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-5 flex flex-col">
                                <p className="font-semibold">Lokasi</p>
                                <div>
                                    <button className="flex text-gray-700 hover:text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <p>Pilih Lokasi</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>

            <Container>

            </Container>
        </>
    )
}
export default CreateEvent