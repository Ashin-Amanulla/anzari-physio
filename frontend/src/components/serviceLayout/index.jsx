import {
  ChevronRightIcon
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Illustration1 from "public/condition1.svg";
import Illustration2 from "public/condition2.svg";
import Illustration3 from "public/condition3.svg";
import Illustration4 from "public/condition4.svg";



const features = [
 
  {
    name: "Ortho rehabilitation",
    icon: ChevronRightIcon,
  },
  {
    name: "Sports injury rehabilitation",
    icon: ChevronRightIcon,
  },
  {
    name: "Neuro rehabilitation",
    icon: ChevronRightIcon,
  },
  {
    name: "Pediatric rehabilitation",
    icon: ChevronRightIcon,
  },
  {
    name: "Pulmonary rehabilitation",
    icon: ChevronRightIcon,
  },
  {
    name: "Cardiac rehabilitation",
    icon: ChevronRightIcon,
  },
  {
    name: "Geriatric rehabilitation",
    icon: ChevronRightIcon,
  },
  {
    name: "Manual therapy",
    icon: ChevronRightIcon,
  },
];

export default function Services() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7">
                What we Serve
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Conditions We Treat!
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At our physiotherapy clinic, we provide comprehensive treatment
                and care for a wide range of conditions.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 icon-color"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                  </div>
                ))}
                </div>
              </dl>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
    <div className="rounded overflow-hidden">
      <Image className="w-full" src={Illustration1} alt="" />
    </div>
    <div className="rounded overflow-hidden">
      <Image className="w-full" src={Illustration2} alt="" />
    </div>
    <div className="rounded overflow-hidden">
      <Image className="w-full" src={Illustration3} alt="" />
    </div>
    <div className="rounded overflow-hidden">
      <Image className="w-full" src={Illustration4} alt="" />
    </div>
    </div>

        </div>
      </div>
    </div>
  );
}
