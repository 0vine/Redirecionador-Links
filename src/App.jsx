import "./components/styles/GlobalStyles.scss"
import { Header } from "./components/Header"
import { Link } from "./components/Links"
import { links } from "../src/data/data"
import { AboutMe } from "./components/AboutMe"
import { Footer } from "./components/Footer"

function App() {


  return (
    <>
      <main className="main-container">
        <Header></Header>
        <Link link={links}>
        </Link>
        <AboutMe></AboutMe>
        <Footer></Footer>
      </main>
    </>
  )
}

export default App
