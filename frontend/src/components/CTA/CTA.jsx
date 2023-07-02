import Image from "next/image";

export default function CTA() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl ">
        <div className="relative isolate overflow-hidden bg-green-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          
          <div className="mx-auto  text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Transform your well-being.
              <br />
              Start your journey to a pain-free life.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Experience personalized physiotherapy solutions tailored to your needs. Our expert team is here to help you regain mobility, reduce pain, and improve your overall quality of life.
            </p>
            <div className="m-10 flex items-center justify-center  ">
              <a
                href="#"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book Appoinment
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
