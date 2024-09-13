import Image from 'next/image';
function About() {
    return (
      <>
          <section class=" font-montserrat mx-auto grid w-9/12 gap-4 py-10 lg:grid-cols-2">
          <div class="order-1 lg:order-1"><h2 class="mb-4 text-4xl font-medium">About Us</h2><p class="text-xl ">Dr. K.V. Prakash, a Sports Physician, comes with over 3 decades of experience in offering winning treatments for sports persons across all age groups. Backed by a M.B.B.S degree from J.J.M.M.C Davanagere in the year 1992, he is also equipped with a Diploma in Sports Medicine from National Institute of Sports in Patiala (1995) (Punjabi University).</p><p class="mt-10 text-xl">Passionate about sports, Dr. K.V. Prakash brings with him a sporty spirit of looking at every injury or challenge with positivity and team work – just what is expected from a sports physician. He also brings with him the ability to stay calm while offering the best treatment, to ensure patients get back to their daily activities quickly and fully.</p></div><div class="order-1 flex flex-col items-center justify-center lg:order-2 home-sec-img">
            <img src="/images/dr.jpeg" alt="Dr. K.V. Prakash" class="w-9/12" />
            <p class="py-1 text-xl w-9/12">Dr. K.V. Prakash</p></div>
          </section>
      </>
    );
  }
  
  export default About;