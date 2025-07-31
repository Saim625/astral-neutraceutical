import { FaLeaf, FaFlask, FaShieldAlt, FaMedkit } from "react-icons/fa";

export default function WhyAstral() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      {/* WHY CHOOSE ASTRAL - ICON CARDS */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
          Why Choose Astral Neutraceuticals?
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Trusted by livestock and poultry professionals nationwide, we combine
          science with nature to deliver effective, safe, and reliable products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-24">
        {/* Natural Ingredients */}
        <div className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-300 border-t-4 border-orange-400">
          <FaLeaf className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-blue-800">100% Natural</h3>
          <p className="text-gray-600 mt-2 text-sm">
            We use only nature-sourced, safe ingredients that promote real
            health outcomes.
          </p>
        </div>

        {/* Scientifically Backed */}
        <div className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-300 border-t-4 border-orange-400">
          <FaFlask className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-blue-800">
            Scientifically Proven
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            Every product is backed by veterinary science and field-tested for
            real impact.
          </p>
        </div>

        {/* Trusted Quality */}
        <div className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-300 border-t-4 border-orange-400">
          <FaShieldAlt className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-blue-800">
            Reliable & Safe
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            Manufactured under strict quality control with zero compromise on
            safety.
          </p>
        </div>

        {/* Veterinary Support */}
        <div className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-300 border-t-4 border-orange-400">
          <FaMedkit className="text-4xl text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-blue-800">
            Veterinary Support
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            Our expert team supports farmers and vets with tailored product
            guidance.
          </p>
        </div>
      </div>

      {/* ABOUT + MISSION + VISION SECTION */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            About Astral Neutraceuticals
          </h2>
          <p className="text-gray-700 text-lg">
            Since 2021, we’ve been providing high-quality, research-backed
            healthcare solutions for poultry and livestock across Pakistan.
            Through innovation, integrity, and a passionate team, we’ve earned
            the trust of farmers, veterinarians, and partners nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-orange-50 p-8 rounded-xl shadow-md border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold text-orange-600 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              To empower animal health by offering effective, affordable, and
              natural products built on scientific innovation — supporting every
              farmer and vet with trust and care.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-blue-50 p-8 rounded-xl shadow-md border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-700 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              To become a national leader in poultry and livestock healthcare by
              building long-term partnerships, ensuring wide product reach, and
              maintaining excellence through a dedicated distributor network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
