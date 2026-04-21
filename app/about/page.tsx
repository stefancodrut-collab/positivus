import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "About Us - Positivus",
  description: "Learn more about Positivus and our mission to deliver exceptional digital marketing solutions.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <div className="flex flex-col items-start px-[100px] pr-[99px] max-xl:px-[60px] max-sm:px-[30px] py-0 relative w-full max-w-[1440px] mx-auto">
          {/* Hero Section */}
          <section className="flex flex-col gap-[30px] items-start relative w-full pt-[60px] pb-[60px]">
            <div className="flex flex-col gap-[20px] items-start">
              <h1 className="text-[48px] max-lg:text-[36px] max-md:text-[28px] font-medium leading-[1.2] text-black">
                About Positivus
              </h1>
              <p className="text-[18px] leading-[1.6] text-gray-700 max-w-[600px]">
                We are a digital marketing agency dedicated to helping businesses grow and succeed in the digital landscape.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="flex flex-col gap-[30px] items-start relative w-full pb-[60px]">
            <h2 className="text-[36px] max-lg:text-[28px] font-medium leading-[1.2] text-black">
              Our Mission
            </h2>
            <p className="text-[18px] leading-[1.6] text-gray-700 max-w-[800px]">
              At Positivus, our mission is to empower businesses with innovative digital marketing strategies that drive real, measurable results. We believe in the power of creative thinking combined with data-driven insights to transform brands and accelerate growth.
            </p>
          </section>

          {/* Values Section */}
          <section className="flex flex-col gap-[30px] items-start relative w-full pb-[60px]">
            <h2 className="text-[36px] max-lg:text-[28px] font-medium leading-[1.2] text-black">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] w-full">
              <div className="flex flex-col gap-[15px]">
                <h3 className="text-[24px] font-medium text-black">Innovation</h3>
                <p className="text-[18px] leading-[1.6] text-gray-700">
                  We stay ahead of industry trends and constantly explore new ways to help our clients succeed in an ever-changing digital landscape.
                </p>
              </div>
              <div className="flex flex-col gap-[15px]">
                <h3 className="text-[24px] font-medium text-black">Integrity</h3>
                <p className="text-[18px] leading-[1.6] text-gray-700">
                  We maintain the highest standards of honesty and transparency in all our client relationships and business practices.
                </p>
              </div>
              <div className="flex flex-col gap-[15px]">
                <h3 className="text-[24px] font-medium text-black">Excellence</h3>
                <p className="text-[18px] leading-[1.6] text-gray-700">
                  We are committed to delivering exceptional work that exceeds expectations and drives meaningful business outcomes.
                </p>
              </div>
              <div className="flex flex-col gap-[15px]">
                <h3 className="text-[24px] font-medium text-black">Collaboration</h3>
                <p className="text-[18px] leading-[1.6] text-gray-700">
                  We work closely with our clients to understand their unique needs and develop strategies tailored to their goals.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
