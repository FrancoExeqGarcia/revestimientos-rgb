import {
  ContactForm,
  FirstSection,
  FlooringSections,
  Navbar,
  QuienesSomos,
  Footer,
  OpinionesCarousel,
  ProjectSection
} from "./components"

import { LanguageProvider } from "./context/LanguageProvider"
import "./fullpage.css"
function App() {
  
  
  const opiniones = [
    { id: 1, name: 'María G.', comment: 'Excelente trabajo!', date: '2024-12-10', approved: true },
    { id: 2, name: 'Carlos R.', comment: 'Muy profesionales.', date: '2024-12-15', approved: true },
    { id: 3, name: 'Lucía P.', comment: 'Todo impecable.', date: '2024-12-20', approved: true },
    { id: 4, name: 'Nico T.', comment: 'Los recomiendo.', date: '2024-12-22', approved: true },
    { id: 5, name: 'Ana F.', comment: 'Excelente atención.', date: '2024-12-25', approved: true },
    { id: 6, name: 'Pedro M.', comment: 'Volveré a contratar.', date: '2025-01-05', approved: true },
    { id: 7, name: 'Pedro M.', comment: 'Volveré a contratar.', date: '2025-01-05', approved: true },
  ];
  return (
    <>
      <LanguageProvider>
        <div className="fullpage">
        <Navbar/>
        <FirstSection/>
        </div>
        {/*<Fondo></Fondo>*/}
        <QuienesSomos/>
        <FlooringSections/>
        <ProjectSection/>
        <OpinionesCarousel
        opinionsData={opiniones}
        itemsPerSlide={3}
        autoSlideInterval={5000}
        title="RESEÑAS"
      />
        <ContactForm/>
        <Footer/>
      </LanguageProvider>
    </>
  )
}

export default App
