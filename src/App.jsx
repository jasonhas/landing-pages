import Hero from "./components/Hero"
import Benefits from "./components/Benefits"

function App() {

  return (
    <div className="pt-8 px-8 md:px-32 md:py-32">

        <Hero/>  
        <section className="">
          <Benefits/>
        </section>
    </div>
  )
}

export default App
