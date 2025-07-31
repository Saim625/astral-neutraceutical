"use client";

import Image from "next/image";

export default function AboutPage() {
  const team = [
    {
      name: "Sultan Saleem",
      role: "Founder & CEO",
      image: "/team/ceo.jpeg",
      description:
        "With 23+ years in marketing, including 11 in poultry & livestock, Sultan leads Astral with vision, industry insight, and unmatched dedication.",
    },
    {
      name: "Muhammad Ashraf",
      role: "Managing Director",
      image: "/team/cto.jpeg",
      description:
        "Mohammed brings over 35 years of pharmaceutical production and administrative experience, ensuring product excellence and operational strength.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
            About Astral Neutraceuticals
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Since 2021, we&#39;ve redefined animal healthcare in Pakistan with
            cutting-edge, reliable, and accessible products.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-blue-50 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            Behind every breakthrough is a passionate team driven by excellence,
            care, and innovation.
          </p>

          <div className="grid sm:grid-cols-2 gap-12">
            {team.map((person, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-300 text-center"
              >
                <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-orange-400 mb-6">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={144}
                    height={144}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-1">
                  {person.name}
                </h3>
                <p className="text-orange-500 font-medium mb-3">
                  {person.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {person.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 px-6 md:px-12 bg-blue-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="p-8 border-l-4 border-orange-500 shadow-md rounded-lg bg-white">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-md leading-relaxed">
              To enhance the lives of poultry and livestock through safe,
              effective healthcare solutions—empowering farmers and
              veterinarians nationwide.
            </p>
          </div>
          <div className="p-8 border-l-4 border-blue-500 shadow-md rounded-lg bg-white">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 text-md leading-relaxed">
              To become Pakistan&#39;s most trusted name in poultry and
              livestock wellness through quality, innovation, and nationwide
              reach.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
