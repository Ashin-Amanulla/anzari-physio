import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Illustration from "public/physio.webp";

const features = [
  {
    name: "Sports injuries.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Back pain.",
    icon: LockClosedIcon,
  },
  {
    name: "Muscle strains.",
    icon: ServerIcon,
  },
  {
    name: "Sprains.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Neck pain.",
    icon: LockClosedIcon,
  },
  {
    name: "Shoulder strains.",
    icon: ServerIcon,
  },
  {
    name: "Knee Injuries.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Tendonities.",
    icon: LockClosedIcon,
  },
  {
    name: "Scratica.",
    icon: ServerIcon,
  },
  {
    name: "Scratica2.",
    icon: ServerIcon,
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
          <Image className="box-shadow rounded" src={Illustration} alt="" />
        </div>
      </div>
    </div>
  );
}
