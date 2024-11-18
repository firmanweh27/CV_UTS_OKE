"use client";

import React, { useState, useEffect } from "react";

export default function WarnaFavorit() {
  const [warna, setWarna] = useState("brown");

  const pilihanWarna = ["black", "brown", "white"];

  useEffect(() => {
    document.body.style.backgroundColor = warna;
  }, [warna]);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "10vh", // Mengisi tinggi layar sepenuhnya
        textAlign: "center",
        padding: "20px", // Menambahkan padding untuk memberikan ruang di dalam section
        gap: "30px", // Jarak antar elemen dalam section
      }}
    >
      <h1
        style={{
          fontSize: "1.5rem", // Ukuran font lebih besar agar lebih menonjol
          color: "#fff",
          margin: "0", // Menghapus margin default
        }}
      >
        PILIH TEMA
      </h1>

      {/* Pilihan warna */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px", // Jarak antar tombol lebih konsisten
        }}
      >
        {pilihanWarna.map((warnaPilihan) => (
          <button
            key={warnaPilihan}
            onClick={() => setWarna(warnaPilihan)}
            style={{
              backgroundColor: warnaPilihan,
              color: warnaPilihan.toLowerCase() === "white" ? "black" : "white", // Warna teks hitam untuk latar belakang putih
              padding: "12px 24px", // Menambahkan padding untuk tombol
              border: "none",
              cursor: "pointer",
              borderRadius: "10px", // Estetika dengan sudut membulat
              fontSize: "1rem",
              fontWeight: "bold",
              boxShadow: warna === warnaPilihan ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none", // Sorotan jika tombol dipilih
              transition: "transform 0.2s, box-shadow 0.2s", // Animasi saat tombol dihover
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {warnaPilihan.toUpperCase()}
          </button>
        ))}
      </div>
    </section>
  );
}
