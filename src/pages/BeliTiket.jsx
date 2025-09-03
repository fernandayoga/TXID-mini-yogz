import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/belitiket.css'

const BeliTiket = () => {
    const navigate = useNavigate()
  const location = useLocation();
  const  title  = location.state.title;

  const [jadwal, setJadwal] = useState("");
  const [bioskop, setBioskop] = useState("");
  const [jumlah, setJumlah] = useState(0);
  const hargaTiket = 50000;
  const total = jumlah * hargaTiket;


  const [nama,setNama] = useState('')
  const [email,setEmail] = useState('')
  const [telpon,setTelpon] = useState('')

  function checkout(event){
    event.preventDefault()
    if (!jadwal || !bioskop || jumlah === 0){
        alert('Pilih jadwal, Bioskop, dan Tiket dulu')
        return
    }

    console.log(nama)
    console.log(email)
    console.log(telpon)
    navigate('/succes', {
        state : {title,jadwal, bioskop, total, nama, email, telpon, jumlah}
    })
  }

  return (
    <div className="belitiket-container">
      <h1>Beli Tiket: {title}</h1>

      <div className="form-section">
        <label>Jadwal Tayang</label>
        <select value={jadwal} onChange={(e) => setJadwal(e.target.value)}>
          <option value="" disabled>Pilih Jadwal</option>
          <option value="10-09-2025 14:00">10 Sept 2025 - 14:00</option>
          <option value="10-09-2025 19:00">10 Sept 2025 - 19:00</option>
          <option value="11-09-2025 16:30">11 Sept 2025 - 16:30</option>
        </select>

        <label>Pilih Bioskop</label>
        <select value={bioskop} onChange={(e) => setBioskop(e.target.value)}>
          <option value="" disabled>Pilih Bioskop</option>
          <option value="XXI Mall A">XXI Mall A</option>
          <option value="CGV Mall B">CGV Mall B</option>
          <option value="Cinepolis C">Cinepolis C</option>
        </select>

        <label>Jumlah Tiket</label>
        <input
          type="number"
          min="1"
          max="10"
        //   value={jumlah}
          onChange={(e) => setJumlah(Number(e.target.value))}
        />

        <p>Harga per Tiket: Rp{hargaTiket.toLocaleString()}</p>
        <h3>Total: Rp{total.toLocaleString()}</h3>

        <h4>Data Pemesan</h4>

        <form action="" onSubmit={checkout}>
        <input type="text" placeholder="Nama Lengkap" onChange={(e) => setNama(e.target.value)} required/>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
        <input type="tel" placeholder="Nomor HP" onChange={(e) => setTelpon(e.target.value)} required/>
        <button className="checkout-btn">Checkout</button>
        </form>
      </div>
    </div>
  );
};

export default BeliTiket;
