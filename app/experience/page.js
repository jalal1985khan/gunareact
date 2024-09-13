import TopHeader from '../../src/components/TopHeader'
import Banner from '../../src/components/Banner/Banner'
import Footer from '../../src/components/Footer'
import Image from 'next/image'

function Experience() {
  const divStyle = {
    backgroundColor: '#333', // Set your desired background color
  }
  const experienceSpc =[
    {
      list: "Medical Officer at Sports Authority of India (SAI), South Centre, Bengaluru during Corona Pandemic (2020)",
    },
    {
      list: 'Team Physician to the Indian Men’s Hockey Team (Junior) for Asian Championship at Kuala Lumpur, Malaysia in 2012',
    }
  ]
  const ExperienceList = [
    {   year:'1978-79',
        desc: 'Secured 3rd place in National level rural games at Jagannath Puri, Orissa',
    },
    {   year:'1979',
        desc: 'Won the title in National level rural games at Amritsar, Punjab',
    },
    {   year:'1980',
        desc: 'Won the title in National level sub-junior championship in Dhule, Maharashtra (Kho-Kho)',
    },
    {   year:'1981-82',
        desc: 'Won the title in National level junior championship at Karim Nagar, Andhra Pradesh (Kho-Kho)',
    },
    {   year:'1983',
        desc: 'Won the title of South Zone Kho-Kho championship at Puducherry',
    },
    {   year:'1983',
        desc: 'Won the title of National level Men’s Kho-Kho at Adilabad, Andhra Pradesh',
    },
    {   year:'1983-84',
        desc: 'Secured 2nd place in Men’s Kho-Kho at Pune, Maharashtra',
    },
    {   year:'1985',
        desc: 'Secured 2nd place in the first Indira Gandhi Memorial National Games at New Delhi (Kho-Kho)',
    },
    {   year:'1980',
        desc: 'Was awarded Karnataka State Sports Award',
    },
    {   year:'1982',
        desc: 'Was awarded Veer Abhimanyu Award',
    },
    {   year:'2016',
        desc: 'Vydya Ratna Award, Kolar',
    },
]
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
          {ExperienceList.map((item,index)=>(
                <li><span class="font-semibold">{item.year} :</span> {item.desc} </li>
            ))}
            
          </ul>
        </div>
        <h2 class="mb-4 mt-10 text-4xl font-medium">Special Assignments</h2>
        <div class="mt-4">
          <ul class="list-disc space-y-2 pl-5 text-xl text-gray-700">
            {experienceSpc.map((item,index)=>(
              <li>{item.list}</li>
            ))}
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
