import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AboutUs() {
  return (
    <div className='flex flex-col gap-10'>
        <Header/>
        <div className=''>
        <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-blue-600 mb-8">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side: Image or Visual */}
          <div className="flex justify-center ">
            <img 
              src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="About Edgecore Technologies"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right side: Company Information */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-blue-600 mb-4">
              Who We Are
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              At Edgecore Technologies, we are committed to bridging the gap between businesses and top-tier IT professionals. We offer innovative technology solutions and staff augmentation services that drive growth and success.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our mission is to empower organizations by providing skilled IT professionals who are equipped to handle complex challenges and deliver exceptional results. We specialize in technology services and customized staff augmentation, ensuring your business achieves its full potential.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs