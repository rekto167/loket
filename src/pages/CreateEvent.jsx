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
            <Container width="w-3/5 shadow-lg border border-gray-300 h-50 m-auto mt-20 flex flex-col">
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
                <div className="p-5">
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                    </Box>
                </div>
            </Container>
        </>
    )
}
export default CreateEvent