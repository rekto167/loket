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
      <Container width="w-full mt-20">
        <SwipeImage />
        <div className="w-4/5 mx-auto flex flex-wrap justify-between mt-10">
          {/* Featured Event */}
          <div>
            <h3 className="font-bold text-black text-4xl mb-4">Featured Event</h3>
            <Card />
          </div>
          {/* End Featured Event */}
          {/* Start - Top Selling */}
          <div>
            <h3 className="font-bold text-black text-4xl mb-4">Top Selling</h3>
            <CardTopSelling />
            <CardTopSelling />
            <CardTopSelling />
          </div>
          {/* End - Top Selling */}
          {/* Start Event Recommended */}
          <div className="mt-20">
            <h3 className="font-bold text-black text-2xl mb-4">Event Recommendation</h3>
            <div className="flex flex-wrap item-center">
              <CardItem />
              <CardItem />
              <CardItem />
            </div>
          </div>
          {/* End Event Recommended */}
        </div>
      </Container>
    </>
  );
}

export default App;
