"use client";

import { FaWhatsapp, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
export default function Contact() {
  return (
    <div class="container my-24 mx-auto md:px-6">
      <section class="mb-32">
        <div class="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://somacare.co.in/wp-content/uploads/2019/02/contact-us-banner.png')]"></div>
        <div class="container px-6 md:px-12">
          <div class="block rounded-lgbg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <div class="flex flex-wrap items-center">
              <div class="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <div class="h-[500px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15767.019240734488!2d76.6829286!3d8.9023724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e325930dc415%3A0xfb139b7eaef985c4!2sActioplus%20Physiotherapy%20%26%20Pain%20Clinic!5e0!3m2!1sen!2sin!4v1688712644037!5m2!1sen!2sin"
                    class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div class="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
                  <div class="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <div class="inline-block rounded-md bg-primary-100 p-4 text-primary  text-xl">
                          <FaPhoneAlt />
                        </div>
                      </div>
                      <div class="ml-6 grow">
                        <p class="mb-2 font-bold dark:text-white">Phone</p>

                        <p class="text-neutral-500 dark:text-neutral-200">
                          +91 81291 39739
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <div class="inline-block rounded-md bg-primary-100 p-4 text-primary text-xl">
                          <FaMailBulk />
                        </div>
                      </div>
                      <div class="ml-6 grow">
                        <p class="mb-2 font-bold dark:text-white">Mail</p>
                        <p class="text-neutral-500 dark:text-neutral-200">
                          info@actioplus.in
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
                    <div class="align-start flex">
                      <div class="shrink-0">
                        <div class="inline-block rounded-md bg-primary-100 p-4 text-primary text-xl">
                          <GoLocation />
                        </div>
                      </div>
                      <div class="ml-6 grow">
                        <p class="mb-2 font-bold dark:text-white">Location</p>
                        <p class="text-neutral-500 dark:text-neutral-200">
                          Actioplus Physiotherapy & Pain Clinic, Vadakkemukku,
                          Kannanalloor,Kollam, Kerala 691576
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                    <div class="align-start flex">
                      <div class="shrink-0">
                        <div class="inline-block rounded-md bg-primary-100 p-4 text-primary text-xl">
                          <span>
                            <FaWhatsapp />
                          </span>
                        </div>
                      </div>
                      <div class="ml-6 grow">
                        <p class="mb-2 font-bold dark:text-white">WhatsApp</p>

                        <p class="text-neutral-500 dark:text-neutral-200">
                          +91 81291 39739
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
