// components
import NavbarBeranda from './components/beranda/Navbar'
import Container from './components/Container'
import SwipeImage from './components/SwipeImage'
import Card from './components/Card'
import CardTopSelling from './components/CardTopSelling'
import CardItem from './components/CardItem'

function App() {
  return (
    <>
      <NavbarBeranda />
      <Container className="flex">
        <CardItem />
      </Container>
    </>
  );
}

export default App;
