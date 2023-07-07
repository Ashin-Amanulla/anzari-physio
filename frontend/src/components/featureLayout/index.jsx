import { ArrowPathIcon,  BarsArrowUpIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Personalized Treatment Plans',
    description:
      'Our experienced physiotherapists create customized treatment plans tailored to your specific needs and goals, ensuring effective and targeted therapy.',
    icon: ArrowRightOnRectangleIcon,
  },
  {
    name: 'Evidence-Based Practices',
    description:
      'We follow the latest evidence-based practices in physiotherapy to deliver treatments that are supported by scientific research and proven to be effective.',
    icon: ArrowRightOnRectangleIcon,
  },
  {
    name: 'One-on-One Sessions',
    description:
      'We provide dedicated one-on-one therapy sessions, allowing our physiotherapists to focus on your individual progress and provide personalized attention throughout your journey.',
    icon: ArrowRightOnRectangleIcon,
  },
  {
    name: 'Pain Management',
    description:
      'Our specialized pain management techniques help alleviate pain, reduce inflammation, and improve your overall comfort and well-being.',
    icon: ArrowRightOnRectangleIcon,
  },
  {
    name: 'Injury Rehabilitation',
    description:
      'We offer comprehensive injury rehabilitation programs to help you recover from sports injuries, accidents, or surgeries, and regain your strength, mobility, and function.',
    icon: ArrowRightOnRectangleIcon,
  },
  {
    name: 'Sports Performance Enhancement',
    description:
      'Our sports-focused physiotherapy programs are designed to optimize athletic performance, prevent injuries, and enhance your overall physical abilities.',
    icon: ArrowRightOnRectangleIcon,
  },
];


export default function Feature() {
  return (
    <div className="bg-sky-50 py-12 sm:py-12 my-12 rounded">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose Us?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Expertise and Care for Your Well-being
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          We are dedicated to providing top-quality physiotherapy services to help you achieve optimal health and well-being. Our experienced team of professionals is committed to delivering personalized care tailored to your unique needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500">
                    <feature.icon className="h-6 w-6 text-white " aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}