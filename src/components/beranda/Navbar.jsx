import LoketWhite from '../../assets/logo-loket-white.png'
// library
import {useState, useRef, useEffect} from 'react'
import Button from '@mui/material/Button'
import MenuList from '@mui/material/MenuList'
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuItem from '@mui/material/MenuItem';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const theme = createTheme({
    palette: {
      teal: {
        main: '#14b8a6',
        ':hover': {
            main: '#fff'
        }
      },
    },
});


const NavbarBeranda = () => {
    const [open, setOpen] = useState(false)
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        } else if (event.key === 'Escape') {
          setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
    if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
    }

    prevOpen.current = open;
    }, [open]);



    return(
        <nav className='bg-teal-900 p-5 flex items-center justify-between'>
            <div className="flex">
                <img src={LoketWhite} className='w-32 mr-5' alt='logo loket white' />
                <input type="text" placeholder="Pencarian" className="p-2 w-52" />
                <button className="flex p-2 bg-teal-500 h-10 w-10 items-center text-white font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 white " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
            <div className="flex flex-wrap items-center">
                <div className="mr-3 flex items-center ">
                    <a href="#" className="text-teal-500 mr-3 uppercase hover:text-white">Cari Event</a>
                    <ThemeProvider theme={theme}>
                        <Button
                        color="teal"
                        ref={anchorRef}
                        onClick={handleToggle}
                        highlightSelectedOnly
                        className="hover:text-white"
                        >
                            <p>Buat Event</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </Button>
                    </ThemeProvider>
                    <Popper
                    sx={{ my: 10 }}
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                    >
                    {({ TransitionProps, placement }) => (
                        <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                            placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                        >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                                autoFocusItem={open}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                onKeyDown={handleListKeyDown}
                            >
                                <MenuItem onClick={handleClose}>
                                    <button className="bg-white text-black border-2 border-teal-900 p-1 rounded">
                                        Buat Event
                                    </button>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <a href="#">
                                        Biaya
                                    </a>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <a href="#">
                                        Event Creator Center
                                    </a>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <a href="#">
                                        Blog
                                    </a>
                                </MenuItem>
                            </MenuList>
                            </ClickAwayListener>
                        </Paper>
                        </Grow>
                    )}
                    </Popper>
                </div>
                <div>
                    <button className="text-white flex flex-wrap items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavbarBeranda