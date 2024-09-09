import React, { useEffect, useState } from "react";
import wing from "../assets/wing.png";
import { useInView } from 'react-intersection-observer';


const Qoutesbar = () => {
  const [quote, setQoute] = useState(null);
  const [loading, setLoading] = useState(true);

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random  ")
      .then((res) => res.json())
      // .then(console.log)
      .then((data) => {
        setQoute(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("error while fetching", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-red p-7 flex justify-center">
        <svg
          className="w-16 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M12 3V6M12 18V21M6 12H3M21 12H18M5.63672 5.63672L7.75977 7.75977M16.2422 16.2422L18.3633 18.3633M18.3652 5.63477L16.2441 7.75586M7.75781 16.2422L5.63477 18.3652"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className="">
      {quote && (
        <div key={quote.id}>
          <h2 className="font-bold text-rose-200 text-2xl text-center p-2">
            Quote of the day
          </h2>
          <h3 className="text-center text-rose-200">
            {quote.quote}{" "}
            <strong>
              <br /> - {quote.author}
            </strong>
          </h3>
        </div>
      )}
      <div className="lg:flex items-center text-rose-200">
        <h1
          ref={ref}
          className={`transform transition-transform duration-700 font-bold text-2xl text-center bebasregular lg:text-6xl pt-7 lg:p-8 ${
            inView ? "translate-x-0" : "translate-x-6"
          }`}
        >
          Trying Foodies is a dedicated page <br />
          <h1 className="p-4"> for your receipe making Needs.</h1>
          <br />
        </h1>
        <div className="w-full lg:w-1/2">
          <div className=" lg:flex lg:justify-end">
            <img
              className="scale-100  hover:-translate-y-6 duration-500 md:scale-150 lg:pt-28 "
              src={wing}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-auto">
        <a className="" href="#receipe">
          <p className="text-center text-rose-200 barlow font-bold lg:text-left">
            Scroll to Continue
          </p>
          <button className="lg:px-7 px-20 animate-pulse flex justify-center items-center">
            <svg
              className="w-14 h-18"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#faf4f4"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#d6bdbd"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 6V14"
                  stroke="#d6bdbd"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#d6bdbd"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Qoutesbar;
