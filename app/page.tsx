import TopHeader from '../src/components/TopHeader'
import Banner from '../src/components/Banner/Banner'
import About from '../src/components/Home/About'
import Vision from '../src/components/Home/Vision'
import Spec from '../src/components/Home/Spec'
import Footer from '../src/components/Footer'
import Image from 'next/image'

export default function Home() {
  const divStyle = {
    backgroundColor: '#333', // Set your desired background color
  }
  return (
    <div>
      <TopHeader />
      <Banner
        title="Welcome to My Website"
        subtitle="This is a full-width banner"
        backgroundImage="/images/experience.jpg" // Place your image in the public folder
      />
      <About />
      <Vision />
      <Spec />
      <div style={divStyle}>
        {' '}
        <Footer />
      </div>
    </div>
  )
}
