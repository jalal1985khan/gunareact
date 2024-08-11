import TopHeader from '../../src/components/TopHeader';
import Banner from '../../src/components/Banner/Banner';
import Footer from '../../src/components/Footer'
import Image from 'next/image'; 

function Awards() {
    const divStyle = {
        backgroundColor: '#333', // Set your desired background color
      };
  return (
    <>
        <TopHeader></TopHeader>
        <Banner
            title="Welcome to My Website"
            subtitle="This is a full-width banner"
            backgroundImage="/images/awards.jpg" // Place your image in the public folder
        />
    
    <section class=" mx-auto w-9/12 gap-4 py-10 font-montserrat"><div><p class="mb-4 text-xl">The only testimony to hard work, dedication, commitment and love for one’s profession is praise from the public and accolades from the community. Dr. KV Prakash has been fortunate enough to get the opportunity to serve people that in turn has helped him win multiple awards and at times rewards.</p></div><div class="mt-16"><ul class="list-disc space-y-2 pl-5 text-xl text-gray-700"><ul class="list-disc space-y-2 pl-5 text-gray-700"><li><span class="font-semibold">1978-79:</span> Secured 3rd place in National level rural games at Jagannath Puri, Orissa</li><li><span class="font-semibold">1979:</span> Won the title in National level rural games at Amritsar, Punjab</li><li><span class="font-semibold">1980:</span> Won the title in National level sub-junior championship in Dhule, Maharashtra (Kho-Kho)</li><li><span class="font-semibold">1981-82:</span> Won the title in National level junior championship at Karim Nagar, Andhra Pradesh (Kho-Kho)</li><li><span class="font-semibold">1983:</span> Won the title of South Zone Kho-Kho championship at Puducherry</li><li><span class="font-semibold">1983:</span> Won the title of National level Men’s Kho-Kho at Adilabad, Andhra Pradesh</li><li><span class="font-semibold">1983-84:</span> Secured 2nd place in Men’s Kho-Kho at Pune, Maharashtra</li><li><span class="font-semibold">1985:</span> Secured 2nd place in the first Indira Gandhi Memorial National Games at New Delhi (Kho-Kho)</li><li><span class="font-semibold">1980:</span> Was awarded Karnataka State Sports Award</li><li><span class="font-semibold">1982:</span> Was awarded Veer Abhimanyu Award</li><li><span class="font-semibold">2016:</span> Vydya Ratna Award, Kolar</li></ul></ul></div></section>
        <div style={divStyle}> <Footer></Footer> </div>
    </>
  );
}

export default Awards;