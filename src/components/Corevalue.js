import React from "react";

const coreValues = [
  {
    id: 1,
    title: "Integrity",
    description:
      "We uphold the highest standards of integrity in all our actions and decisions. Honesty and transparency guide everything we do.",
    bgColor: "bg-green-100",
  },
  {
    id: 2,
    title: "Commitment",
    description:
      "We are dedicated to delivering our best efforts, ensuring quality results, and building long-lasting relationships.",
    bgColor: "bg-yellow-100",
  },
  {
    id: 3,
    title: "Collaboration",
    description:
      "We believe in working together as one team, sharing ideas and expertise to achieve common goals.",
    bgColor: "bg-blue-100",
  },
];

const CoreValuesSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="core-values">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-blue-950 mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {coreValues.map((value) => (
            <div
              key={value.id}
              className={`${value.bgColor} p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out`}
            >
              <h3 className="text-3xl font-semibold text-blue-950 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-700 text-lg mb-8">{value.description}</p>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
