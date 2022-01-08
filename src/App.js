// components
import NavbarBeranda from './components/beranda/Navbar'
import Container from './components/Container'
import SwipeImage from './components/SwipeImage'
import Card from './components/Card'

function App() {
  return (
    <>
      <NavbarBeranda />
      <Container>
        <SwipeImage />
        <div clasName="flex items-center justify-center h-screen">
          <Card />
        </div>
      </Container>
    </>
  );
}

export default App;
