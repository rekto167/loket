// components
import NavbarBeranda from '../components/beranda/Navbar'
import Container from '../components/Container'
import SwipeImage from '../components/SwipeImage'
import Card from '../components/Card'
import CardTopSelling from '../components/CardTopSelling'
import CardItem from '../components/CardItem'
import SwiperComponent from '../components/SwiperComponent'

const Beranda = () => {
  return (
    <>
      <NavbarBeranda />
      <div className="mt-32">
        <SwipeImage />
      </div>
      <Container width="w-full mt-20">
        <div className="w-4/5 mx-auto flex flex-wrap justify-between mt-10">
          {/* Featured Event */}
          <div>
            <h3 className="font-bold text-black text-4xl mb-4">Featured Event</h3>
            <Card />
          </div>
          {/* End Featured Event */}
          {/* Start - Top Selling */}
          <div className="mb-52">
            <h3 className="font-bold text-black text-4xl mb-4">Top Selling</h3>
            <CardTopSelling />
            <CardTopSelling />
            <CardTopSelling />
          </div>
          {/* End - Top Selling */}
          {/* Start Event Recommended */}
          <SwiperComponent />
          {/* End Event Recommended */}
        </div>
      </Container>

    </>
  );
}

export default Beranda;
