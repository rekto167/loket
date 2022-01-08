// components
import NavbarBeranda from './components/beranda/Navbar'
import Container from './components/Container'
import SwipeImage from './components/SwipeImage'
import Card from './components/Card'
import CardTopSelling from './components/CardTopSelling'

function App() {
  return (
    <>
      <NavbarBeranda />
      <Container className="flex">
        {/* <SwipeImage /> */}
        {/* <Card /> */}
        <CardTopSelling />
      </Container>
    </>
  );
}

export default App;
