import React from 'react';
import { useState } from 'react';
import '../App.css';

const Tugas9 = (props) => {

  const [angka, setAngka] = useState(1) 

  const tambahAngka = () => {
    setAngka(angka + 1)
  }

  return (
    <>
      <div class="container">
        <center>{angka}</center>
        <br />
        <div>
            <button onClick={tambahAngka}>Tambah</button>
        </div>
        <br />
        {angka >= 10 ? "State Count Sudah Lebih dari 10!" : ""}
      </div>
    </>
  );
}

export default Tugas9;
