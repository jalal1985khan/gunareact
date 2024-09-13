import TopHeader from '../../src/components/TopHeader';
import Banner from '../../src/components/Banner/Banner';
import Footer from '../../src/components/Footer'
import Image from 'next/image'; 

function Awards() {
    const divStyle = {
        backgroundColor: '#333', // Set your desired background color
      };

    const awardsList = [
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
            backgroundImage="/images/awards.jpg" // Place your image in the public folder
        />
    
    <section class=" mx-auto w-9/12 gap-4 py-10 font-montserrat"><div><p class="mb-4 text-xl">The only testimony to hard work, dedication, commitment and love for one’s profession is praise from the public and accolades from the community. Dr. KV Prakash has been fortunate enough to get the opportunity to serve people that in turn has helped him win multiple awards and at times rewards.</p></div><div class="mt-16">
        <ul class="list-disc space-y-2 pl-5 text-xl text-gray-700">
            {awardsList.map((item,index)=>(
                <li><span class="font-semibold">{item.year} :</span> {item.desc} </li>
            ))}
        </ul>
            </div></section>
        <div style={divStyle}> <Footer></Footer> </div>
    </>
  );
}

export default Awards;