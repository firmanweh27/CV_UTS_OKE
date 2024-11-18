import Hero from "./components/hero";
import PersonalInfo from "./components/PersonalInfo";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import RowRiwayat from "./components/rowRiwayat";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RowPekerjaan from "./components/rowPekerjaan";
import Skills from "./components/Skills";
import "./style.css";
import WarnaFavorit from "./components/warnaFaforit";
import ContactForm from "./components/ContactForm";
import GalleryHobbies from "./components/Gallery";

export default function Gallery() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px", // Jarak umum antar elemen
        margin: "0",
        padding: "0",
      }}
    >
      <Hero />
      <WarnaFavorit />
      <PersonalInfo />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Skills />
      <GalleryHobbies />
      <div style={{ marginBottom: "20px" }} /> {/* Jarak khusus antara hobi dan rating */}
      <ContactForm />
    </section>
  );
}
