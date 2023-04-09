import React from "react";
import { FaAngleRight, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const Trip = () => {
  const { data: trips = [] } = useQuery({
    queryKey: ["trips"],
    queryFn: () =>
      fetch("http://localhost:5000/trips").then((res) => res.json()),
  });

  return (
    <section className="mt-32 mb-16">
       <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <span className="font-semibold text-lg text-primary mb-2 block">
              Upcoming Tour
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
              Tour are coming soon
            </h2>
            <p className="text-base text-body-color">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-32">
        <div className="grid grid-cols-3 gap-6 items-center justify-center ">
          {trips?.map((trip) => (
            <div className="h-full w-full shadow-2xl rounded-lg">
              <div className="relative w-full p-4">
                <img
                  src="https://plus.unsplash.com/premium_photo-1673970474453-7c49815647ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  className="mb-3 h-64 object-cover w-full rounded-xl 3xl:w-full"
                  alt=""
                />
                <button
                  className="absolute top-6 right-6 flex items-center justify-center 
                      rounded-full bg-primary text-white p-2 text-brand-500 hover:cursor-pointer">
                  <div
                    className="flex h-full w-full items-center justify-center 
                          rounded-full text-xl hover:bg-gray-50">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>

              <div className="px-6 py-3">
                <div className="flex justify-between">
                  <div className="order-first text-xl font-bold">
                    {trip?.title}
                  </div>
                  <div className="text-xl font-bold">$ {trip?.price}</div>
                </div>

                <ul className="flex flex-wrap gap-2 mt-5">
                {trip?.facility?.map((fac) =>   <li
                      className="flex items-center gap-3 bg-slate-200 py-1 px-4 rounded text-slate-500">
                      <span>
                        <FaAngleRight />
                      </span>
                      <p>{fac?.name}</p>
                    </li>
                )}
                </ul>
                <p className="flex gap-3 items-center my-4 text-slate-500 ">
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  450 Vine st # 310, peru
                </p>
                <Link
                  to={`/trips/${trip?._id}`}
                  className="bg-primary hover:bg-transparent border border-primary 
                      transition-all duration-200 ease-linear flex justify-center py-2 px-8 
                      text-white hover:text-black items-center gap-4 mb-3 w-full rounded-full"
                >
                  Details
                  <span>
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trip;