import dunia from '../assets/dunia-mencekam.jpg'
// styles
import styles from './Card.module.css'

const Card = () => {
    return(
            <div className="bg-white text-white font-bold rounded-lg border shadow-lg w-100 h-100">
                <img src={dunia} className="w-fit rounded-t-lg" />
                <div className="p-3">
                    <h6 className="text-lg font-semibold text-black">DUNIA MENCEKAM</h6>
                    <p className="text-black font-normal">Tanggal 5 Januari Dunia Mencekam buka kembali! Siap-siap ya, menjelajahi hutan angker lengkap dengan hantu ala Jepang yang serem abis!</p>
                </div>
                <div className="flex items-center justify-between p-3">
                    <p className="font-normal text-black">Harga Mulai: <strong>Harga Mulai: Rp 85.000</strong></p>
                    <button className="uppercase bg-orange-600 text-white font-semibold p-2 w-40 rounded drop-shadow-lg">beli tiket</button>
                </div>

            </div>
    )
}

export default Card;