import TopHeader from '../../src/components/TopHeader'
import Banner from '../../src/components/Banner/Banner'
import Footer from '../../src/components/Footer'
import Image from 'next/image'

function Experience() {
  const divStyle = {
    backgroundColor: '#333', // Set your desired background color
  }
  return (
    <>
      <TopHeader></TopHeader>
      <Banner
        title="Welcome to My Website"
        subtitle="This is a full-width banner"
        backgroundImage="/images/experience.jpg" // Place your image in the public folder
      />

      <section class=" mx-auto w-9/12 gap-4 py-10 font-montserrat">
        <div>
          <p class="mb-4 text-xl">
            They say hard work beats talent and there’s no way to describe Dr.
            K.V. Prakash any better. While his ability to see things clearly and
            an eye for detail make him an expert, it is also his decades of
            dedication and hard work that makes him who he is today. Here’s a
            timeline of how he has been instrumental in shaping and changing the
            face of sports medicine.
          </p>
        </div>
        <div class="mt-16">
          <h2 class="mb-4 mt-10 text-4xl font-medium">Experience</h2>
          <ul class="list-disc space-y-2 pl-5 text-xl text-gray-700">
            <li>
              <span class="font-semibold">1992-93:</span> Senior Resident at St.
              Martha’s Hospital, Bengaluru
            </li>
            <li>
              <span class="font-semibold">1996:</span> Senior Resident at
              Santosh Hospital, Bengaluru
            </li>
            <li>
              <span class="font-semibold">1996-97:</span> Nodal Officer for
              National Games, Bengaluru
            </li>
            <li>
              <span class="font-semibold">1997:</span> Medical Officer for
              National Hockey Championship at Sports Authority of India (SAI),
              South Centre, Bangalore
            </li>
            <li>
              <span class="font-semibold">2009-10:</span> Medical Officer for
              Commonwealth Games players at Sports Authority of India (SAI),
              South Centre, Bengaluru
            </li>
            <li>
              <span class="font-semibold">2011-2021:</span> Medical Officer at
              Sports Authority of India (SAI), South Centre, Bengaluru
            </li>
            <li>
              <span class="font-semibold">2020:</span> Medical Officer for
              Indian Hockey Team (India Vs. New Zealand test series) at Sports
              Authority of India (SAI), South Centre, Bengaluru
            </li>
            <li>
              <span class="font-semibold">2022 - Present:</span> Practicing
              Sports and General Medicine
            </li>
          </ul>
        </div>
        <h2 class="mb-4 mt-10 text-4xl font-medium">Special Assignments</h2>
        <div class="mt-4">
          <ul class="list-disc space-y-2 pl-5 text-xl text-gray-700">
            <li>
              Medical Officer at Sports Authority of India (SAI), South Centre,
              Bengaluru during Corona Pandemic (2020)
            </li>
            <li>
              Team Physician to the Indian Men’s Hockey Team (Junior) for Asian
              Championship at Kuala Lumpur, Malaysia in 2012
            </li>
          </ul>
        </div>
      </section>
      <div style={divStyle}>
        {' '}
        <Footer></Footer>{' '}
      </div>
    </>
  )
}

export default Experience
