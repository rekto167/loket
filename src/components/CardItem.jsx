// assets
import dunia from '../assets/dunia-mencekam.jpg'

const CardItem = () => {
    return(
        <div className="bg-white shadow-lg w-80 h-82">
            <img src={dunia} alt="banner" className="w-fit" />
            <div>
                <div className="bg-orange-500 w-full text-white font-normal">
                    <p className="ml-3">15 Jan - 16 Jan 2022</p>
                </div>
                <p className="font-semibold ml-3 mt-2">Dunia Mencekam</p>
                <p className="font-semibold ml-3 mt-2">Rp 85.000</p>
            </div>
        </div>
    )
}

export default CardItem