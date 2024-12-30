import React from "react";

const services = [
  {
    id: 1,
    title: "Technology Services",
    description:
      "We provide end-to-end IT solutions including software development, cloud computing, and cybersecurity to drive innovation and growth.",
    icon: "https://cdn.logojoy.com/wp-content/uploads/2018/05/30162618/1533-768x591.png",
  },
  {
    id: 2,
    title: "Staff Augmentation",
    description:
      "Our staff augmentation services help businesses scale by providing skilled IT professionals for short-term or long-term projects.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzu_TwySPtxzmk9fTRY2oxEiZwQT98GISy-HAM0yBSH28L6qI3fSzza0G8YM4XmDpt8As&usqp=CAU",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-blue-50 py-16" id="services">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-950 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
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
              <h3 className="text-2xl font-semibold text-blue-950 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
