import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Phone from '@/components/Phone';
import { Check, Star } from 'lucide-react';
import Image from 'next/image';

const Home = () => {
  const featureSpecs = [
    { title: 'High quality, durable cases' },
    { title: '5 year print guarantee' },
    { title: 'Modern iPhone and Samsung models supported' },
    { title: 'Free shipping worldwide' },
  ];
  const userImages = [
    '/users/user-1.png',
    '/users/user-2.png',
    '/users/user-3.png',
    '/users/user-4.jpg',
    '/users/user-5.jpg',
  ];
  const stars = Array(5).fill(null);
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image
                  src="/snake-1.png"
                  alt="Phone case"
                  width={112}
                  height={112}
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{' '}
                <span className="bg-green-600 px-2 text-white rounded-xl">
                  Custom
                </span>{' '}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,{' '}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  {featureSpecs.map((spec, index) => (
                    <li key={index} className="flex gap-1.5 items-center">
                      <Check className="w-5 h-5 shrink-0 text-green-600" />
                      {spec.title}
                    </li>
                  ))}
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  {userImages.map((userImage, index) => (
                    <Image
                      key={index}
                      src={userImage}
                      alt="user image"
                      width={40}
                      height={40}
                      className="inline-block w-10 h-10 object-cover rounded-full ring-2 ring-slate-100"
                    />
                  ))}
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    {stars.map((_, index) => (
                      <Star
                        key={index}
                        className="w-4 h-4 shrink-0 text-green-600 fill-green-600"
                      />
                    ))}
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                src="/your-image.png"
                alt="Phone case"
                width={400}
                height={400}
                className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'
              />
              <Image
                src="/line.png"
                alt="Phone case"
                width={400}
                height={400}
                className='absolute w-20 -left-6 -bottom-6 select-none'
              />
              <Phone imgSrc="/testimonials/1.jpg" className='w-64' />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};
export default Home;
