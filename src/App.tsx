import './App.css'
import CoreConcept from './components/CoreConcepts'
import Header from './components/Header'
import { CORE_CONCEPTS } from './data'

function App() {

  return (
   <div>
    <Header/>
    <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
    </section>
   </div>
  )
}

export default App
