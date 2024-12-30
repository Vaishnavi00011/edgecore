import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer"

const services = [
  {
    id: 1,
    title: "IT Recruitment Services",
    description:"We offer a comprehensive range of IT recruitment solutions tailored to meet the unique needs of your business. Whether you're looking to hire full-time staff, contract workers, or specialized project teams, we have the expertise to find the right talent quickly and efficiently. Our extensive network and deep understanding of the IT landscape ensure that we connect you with professionals who possess the skills and experience to drive your business forward.",
    icon: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162618/1533-768x591.png",
  },
  {
    id: 2,
    title: "IT Training Programs",
    description:"In today's fast-paced tech environment, staying ahead of the curve is essential. Our IT training programs are designed to equip professionals with the latest industry knowledge and technical skills. From software development to cybersecurity and cloud computing, we offer a wide range of courses that cater to all levels—from beginners to advanced learners. Our training is hands-on, practical, and aligned with current market trends, ensuring that participants gain the expertise needed to thrive in their careers"
,
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzu_TwySPtxzmk9fTRY2oxEiZwQT98GISy-HAM0yBSH28L6qI3fSzza0G8YM4XmDpt8As&usqp=CAU",
  },
  {
    id: 2,
    title: "Placement Services",
    description:"Our placement services bridge the gap between skilled IT professionals and companies seeking top talent. We take the time to understand the goals and requirements of both candidates and employers, ensuring a perfect match that benefits both parties. Whether you're a job seeker looking for the next big opportunity or a company in need of qualified professionals, our placement services are designed to make the process seamless, efficient, and successful."
,
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzu_TwySPtxzmk9fTRY2oxEiZwQT98GISy-HAM0yBSH28L6qI3fSzza0G8YM4XmDpt8As&usqp=CAU",
  },
];

function Service() {
  return (
    <div className='flex flex-col gap-10'>
        <Header/>
        
        <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          Our Services
        </h2>
        <p>At EDGECORE TECHNOLOGIES LLP, we specialize in providing top-notch IT recruitment, training, and placement services. As a leading provider in the industry, we understand the dynamic nature of technology and the evolving demands of the IT sector. Our mission is to connect businesses with highly skilled professionals while helping individuals enhance their technical expertise and advance their careers.
        </p>
        </div>
        <div className="grid grid-cols-1  mb-8 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 ">{service.description}</p>
              
            </div>
          ))}
          
        </div>
        <div className='flex p-4   w-[100%] justify-center '>
          <p className='w-[80%]  text-center'>At EDGECORE TECHNOLOGIES LLP, we pride ourselves on our commitment to excellence, customer satisfaction, and our ability to provide flexible, results-driven solutions. Let us help you achieve your IT recruitment, training, and placement goals—partner with us today to take your business and career to the next level.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Service