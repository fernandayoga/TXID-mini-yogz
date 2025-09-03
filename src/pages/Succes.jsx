import { Link, useLocation } from 'react-router-dom'
import '../styles/succses.css'

const Succes = () => {
  const location = useLocation();

  const nomorVA = () => {
    const nomor = Math.floor(Math.random() * 1000000000) + 1000000000;
    return nomor;
  };

  return (
    <div className="success-container">
      <div className="success-card">
        <h1>Pembelian Berhasil 🎉</h1>
        <p>Terima kasih sudah membeli tiket untuk film <strong>{location.state.title}</strong>.</p>
        <p>Film akan tayang di bioskop: <strong>{location.state.bioskop}</strong></p>
        <p>Pada tanggal: <strong>{location.state.jadwal}</strong></p>
        <p>Total Bayar: <strong>Rp{location.state.total.toLocaleString()}</strong></p>
        <p>Pembayaran dapat dilakukan via Virtual Account</p>
        <p className="va-number">VA: {nomorVA()}</p>

        <Link to="/"><button>Kembali ke Home</button></Link>
      </div>
    </div>
  );
};

export default Succes;
