import Image from 'next/image'
function Vision() {
  const vision = [
    {
      title: 'VISION',
      icon: '/images/4055993.png',
      desc: `To encourage participation in sports for all youngsters and aim at
              high medal tally in all the tournaments (National and
              International).`,
    },
    {
      title: 'MISSION',
      icon: '/images/9254658.png',
      desc: `Provide high quality healthcare to sports persons.`,
    },
    {
      title: 'MISSION',
      icon: '/images/9254658.png',
      desc: `Provide high quality healthcare to sports persons.`,
    },
    {
      title: 'MISSION',
      icon: '/images/9254658.png',
      desc: `Provide high quality healthcare to sports persons.`,
    },
  ]

  return (
    <>
      <section class=" font-montserrat mx-auto mt-10 w-9/12 py-8">
        <h2 class="mb-4 text-center text-4xl font-medium">
          VISION &amp; MISSION
        </h2>
        <div class="mx-auto grid justify-items-center gap-4 py-8 md:grid-cols-2 lg:grid-cols-2">
          {vision.map((item, index) => (
            <div class="flex max-w-sm items-center bg-white p-6 text-center d-flex flex-column">
              <img src={item.icon} alt="" />
              <h5 class="mb-2 py-4 text-2xl font-semibold tracking-tight text-gray-900">
                {item.title}
              </h5>
              <p class="mb-3 text-xl font-normal text-black">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Vision
