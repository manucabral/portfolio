import Navbar from './components/Navbar'
import Separator from './components/Separator'
import Profile from './components/Profile'
import About from './components/About'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    return (
        <main className="main">
            <Navbar />
            <div className="intermediate" />
            <Separator Content={Profile} />
            <Separator id="about" title="About me" Content={About} />
            <Separator id="techs" title="Technologies" Content={Technologies} />
            <Separator
                id="projects"
                title="Projects"
                subtitle={
                    'Some own projects, if you are interested visit my github profile for more. '
                }
                Content={Projects}
            />
            <Separator id="contact" title="Contact" Content={Contact} />
            <Footer />
        </main>
    )
}
