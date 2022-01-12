// library
import Navbar from '../components/white/Navbar'
import Container from '../components/Container'
import {useState} from 'react';
// Material UI
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// CKEditor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// assets
import bannerEvent from '../assets/banner-event.jpg'
// styles
import './CreateEvent.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 2 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };


  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const CreateEvent = () => {
    const [value, setValue] = useState(0);
    const [showSyarat, setShowSyarat] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleShowSyarat = () => {
        setShowSyarat(!showSyarat);
    }

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
                                    <input type="text" placeholder="Nama Organizer" className="focus:placeholder:text-transparent outline-0" />
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

            <Container width="w-[70%] shadow-lg border border-gray-300 h-50 m-auto mt-20 flex flex-col">
                <div className="w-full mx-auto">
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', widht: '100%' }}>
                            <Tabs value={value} onChange={handleChange} sx={{ width:'100%' }} centered >
                                <Tab label="Kategori Tiket" {...a11yProps(0)}  sx={{ width:'100%' }} />
                                <Tab label="Deskripsi Event" {...a11yProps(1)} sx={{ width:'100%' }} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            Kategori Tiket
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <CKEditor
                                editor={ ClassicEditor }
                                data=""
                                onReady={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    console.log( { event, editor, data } );
                                } }
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }
                            />
                            <button className="text-gray-500 hover:text-orange-500 flex mt-5 mb-5" onClick={handleShowSyarat} >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {showSyarat ?
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0   11-18 0 9 9 0 0118 0z" />
                                    :

                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                }
                                </svg>
                                <p>Syarat & Ketentuan</p>
                            </button>

                            <div className={showSyarat ? 'block' : 'hidden'}>
                                <CKEditor
                                    editor={ ClassicEditor }
                                    data=""
                                    onReady={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        console.log( { event, editor, data } );
                                    } }
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
                                />
                            </div>


                        </TabPanel>
                    </Box>
                </div>
            </Container>
        </>
    )
}
export default CreateEvent