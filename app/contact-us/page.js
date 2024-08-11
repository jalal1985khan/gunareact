import TopHeader from '../../src/components/TopHeader';
import Banner from '../../src/components/Banner/Banner';
import Footer from '../../src/components/Footer'
import Image from 'next/image'; 

function ContactUs() {
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
    
    <section class="mx-auto mt-12 w-full bg-[#e5e5e5] py-6 font-montserrat text-black">
    <div class="mx-auto grid w-9/12 items-center gap-5 py-12 lg:grid-cols-2">
    <div>
    <img src="/images/contact.jpg" />
    </div>
    <div class="grid grid-cols-1 gap-4"><h3 class="text-2xl font-medium">Phone</h3><div class="grid gap-4 text-start text-2xl lg:grid-cols-3"><p class="flex gap-3 text-xl"><a href="tel:+919538903545"> 9538903545</a></p></div><h3 class="text-2xl font-medium">Our Clinic Address</h3><div class="text-start text-2xl"><p class="text-xl">No 12, Ground Floor, 5th Cross, 2nd Main Road, Opp Cambridge English School, Azad Nagar, Chamarajpet, Bengaluru-560018</p></div></div></div></section>

    <div style={divStyle}> <Footer></Footer> </div>
    </>
  );
}

export default ContactUs;