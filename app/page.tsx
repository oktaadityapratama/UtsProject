import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import Personalinfo from "./components/personalinfo";
import Skills from "./components/skills";
import GalleryHobbies from "./components/Gallery";
import ContactForm from "./components/contactform";
import WarnaFavorit from "./components/warnafavorit";
import FavColor from "./components/favColor";
import "./adit_style.css";



export default function MyApp() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan/>
      <Personalinfo/>
      <Skills/>
      <GalleryHobbies/>
      <ContactForm/>
      <WarnaFavorit/>
      <FavColor />

    </section>
  )
}