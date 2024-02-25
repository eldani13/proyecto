import React from "react";
import evento1 from "../../../public/assets/img/evento1.jpg";
import evento2 from "../../../public/assets/img/evento2.png";

export default function Homepage() {
  return (
    <div className="w-full">
      <header className=" bg-[#111827]">
        {/* Nav */}
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* Logo */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              LOGO
            </span>
            <div className="flex md:order-2">
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>

                {/* Input */}
                <input
                  type="text"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                  placeholder="Search"
                />
              </div>
              <div className="flex justify-center items-center pl-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height="20"
                  width="20"
                >
                  <path
                    d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              {/* Var */}
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={evento2.src}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={evento1.src}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={evento1.src}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={evento1.src}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={evento1.src}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div className="bg-[#111827] flex justify-center">
        <span className="text-white">OFERTAS OFERTAS OFERTAS!</span>
      </div>

      {/* Título */}
      <div
        className="flex items-center justify-center"
        style={{
          backgroundColor: "#253049",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1
            className="text-4xl lg:text-5xl text-center m-0 p-0"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "Plus Jakarta Bold, sans-serif",
              fontSize: "52px",
              fontWeight: 700,
              lineHeight: "44px",
              marginTop: "3rem",
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, #fff 2.79%, #fff 156.45%, #fff 156.45%)",
                backgroundSize: "100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "-10px",
                fontSize: "inherit",
                lineHeight: "inherit",
              }}
            >
              Beneficios Principales
            </span>
          </h1>
        </div>
      </div>

      {/* Tarjetas */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:flex lg:flex-row"
        style={{
          backgroundColor: "#253049",
        }}
      >
        {/* Primera tarjeta */}
        <div
          className="bg-cover bg-center p-4 rounded-3xl mx-auto my-32  max-w-xs max-h-[400px] text-center lg:w-1/3 mb-0 lg:mb-0"
          style={{
            backgroundImage: 'url("imgs/Home2/fondo-card.png")',
            backgroundColor: "#111827",
          }}
        >
          <div className="flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              style={{ display: "block", margin: "0 auto" }}
              className="self-center"
            >
              <g clipPath="url(#clip0_143_127)">
                <mask
                  id="mask0_143_127"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                >
                  <path d="M100 0H0V100H100V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_143_127)">
                  <path
                    d="M44.9659 3.06432C47.0784 -1.02144 52.9215 -1.02144 55.034 3.06432L68.4865 29.0822C69.0255 30.1248 69.875 30.9743 70.918 31.5134L96.9355 44.9659C101.021 47.0784 101.021 52.9215 96.9355 55.034L70.918 68.4865C69.875 69.0255 69.0255 69.875 68.4865 70.918L55.034 96.9355C52.9215 101.021 47.0784 101.021 44.9659 96.9355L31.5134 70.918C30.9743 69.875 30.1248 69.0255 29.0822 68.4865L3.06432 55.034C-1.02144 52.9215 -1.02144 47.0784 3.06432 44.9659L29.0822 31.5134C30.1248 30.9743 30.9743 30.1248 31.5134 29.0822L44.9659 3.06432Z"
                    fill="url(#paint0_linear_143_127)"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_143_127"
                  x1="50"
                  y1="1.25e-06"
                  x2="50"
                  y2="100"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#DF99F7" />
                  <stop offset="1" stopColor="#FFDBB0" />
                </linearGradient>
                <clipPath id="clip0_143_127">
                  <rect width="100" height="100" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-center">
            <span
              className="block mx-auto text-center font-plus-jakarta-sans text-lg font-bold leading-6 "
              style={{
                marginTop: "30px",
                background:
                  "linear-gradient(90deg, #FAFBFF 12.78%, #78787A 99.99%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                width: "251px",
                fontSize: "21px",
              }}
            >
              Conecta de manera <br /> significativa
            </span>
            <p
              className="mt-4 text-center font-plus-jakarta-sans text-xl font-bold leading-5"
              style={{
                color: "rgba(237, 240, 253, 0.50)",
                width: "251px",
                fontSize: "15px",
                margin: "auto",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              En Vopper, construye <br /> conexiones auténticas con <br />{" "}
              personas afines a tus intereses, <br /> desde amistades duraderas{" "}
              <br /> hasta colaboraciones <br /> profesionales.
            </p>
          </div>
        </div>

        {/* Segunda tarjeta */}
        <div
          className="bg-cover bg-center p-6 rounded-3xl mx-auto my-32  max-w-xs max-h-[400px] text-center lg:w-1/3 mb-0 lg:mb-0"
          style={{
            backgroundImage: 'url("imgs/Home2/fondo-card.png")',
            backgroundColor: "#111827",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            style={{ display: "block", margin: "0 auto" }}
            className="mx-auto"
          >
            <g clipPath="url(#clip0_143_137)">
              <mask
                id="mask0_143_137"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="100"
                height="100"
              >
                <path d="M100 0H0V100H100V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_143_137)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25 0H0V50C0 77.614 22.3857 100 50 100C77.614 100 100 77.614 100 50V0H75C61.193 0 50 11.1929 50 25C50 11.1929 38.8071 0 25 0Z"
                  fill="url(#paint0_linear_143_137)"
                />
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_143_137"
                x1="50"
                y1="0"
                x2="50"
                y2="100"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A7B5FF" />
                <stop offset="1" stopColor="#F3ACFF" />
              </linearGradient>
              <clipPath id="clip0_143_137">
                <rect width="100" height="100" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span
            className="block mx-auto text-center font-plus-jakarta-sans text-lg font-bold leading-6"
            style={{
              marginTop: "30px",
              background:
                "linear-gradient(90deg, #FAFBFF 12.78%, #78787A 99.99%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              width: "251px",
              fontSize: "21px",
            }}
          >
            Descubre Tus Pasiones <br /> Compartidas
          </span>
          <p
            className="mt-4 text-center mx-auto font-plus-jakarta-sans text-xl font-bold leading-5"
            style={{
              color: "rgba(237, 240, 253, 0.50)",
              width: "251px",
              fontSize: "15px",
            }}
          >
            Vopper va más allá de las <br /> amistades habituales. Explora{" "}
            <br /> comunidades y descubre <br /> personas que comparten tus{" "}
            <br /> mismos intereses.
          </p>
        </div>

        {/* Tercera tarjeta */}
        <div
          className="bg-cover bg-center p-4 rounded-3xl mx-auto my-32  max-w-xs max-h-[400px] text-center lg:w-1/3"
          style={{
            backgroundImage: 'url("imgs/Home2/fondo-card.png")',
            backgroundColor: "#111827",
            height: "450px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            style={{ display: "block", margin: "0 auto" }}
            className="mx-auto"
          >
            <g clipPath="url(#clip0_143_148)">
              <mask
                id="mask0_143_148"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="100"
                height="100"
              >
                <path d="M100 0H0V100H100V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_143_148)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M73.1855 17.2944C73.8145 15.7781 74.136 14.1523 74.1325 12.5109C74.1335 10.0415 73.403 7.62725 72.033 5.57275C70.663 3.51824 68.7155 1.91567 66.4355 0.96735C64.1555 0.0190265 61.6455 -0.232538 59.2225 0.244416C56.8 0.72137 54.5725 1.90546 52.822 3.6472L50.002 6.27355L47.201 3.65581C44.8554 1.31302 41.6752 -0.00201796 38.3599 2.32436e-06C35.0447 0.0020226 31.8661 1.32094 29.5233 3.66659C27.1805 6.01225 25.8654 9.1925 25.8674 12.5077C25.8694 15.8229 27.1884 19.0016 29.534 21.3444L48.7738 40.8687C48.9342 41.0315 49.1254 41.1609 49.3363 41.2491C49.5471 41.3374 49.7733 41.3829 50.002 41.3829C50.2305 41.3829 50.457 41.3374 50.6675 41.2491C50.8785 41.1609 51.0695 41.0315 51.23 40.8687L70.47 21.3444C71.634 20.1872 72.557 18.8106 73.1855 17.2944ZM26.8143 82.7055C26.1856 84.222 25.8638 85.8475 25.8675 87.489C25.8664 89.9585 26.5969 92.373 27.9668 94.4275C29.3368 96.482 31.2847 98.0845 33.5647 99.0325C35.8446 99.981 38.3545 100.232 40.7773 99.7555C43.2002 99.2785 45.4273 98.0945 47.1778 96.353L49.9981 93.7265L52.799 96.344C55.1445 98.687 58.325 100.002 61.64 100C64.9555 99.998 68.134 98.679 70.477 96.3335C72.8195 93.988 74.1345 90.8075 74.1325 87.4925C74.1305 84.177 72.8115 80.9985 70.466 78.6555L51.226 59.1315C51.066 58.9685 50.8745 58.839 50.6635 58.751C50.453 58.6625 50.2265 58.617 49.9981 58.617C49.7695 58.617 49.5432 58.6625 49.3324 58.751C49.1216 58.839 48.9304 58.9685 48.77 59.1315L29.5301 78.6555C28.366 79.813 27.443 81.1895 26.8143 82.7055ZM87.489 74.133C85.8475 74.1365 84.222 73.8145 82.7055 73.186C81.1895 72.5575 79.813 71.634 78.6555 70.47L59.1315 51.2305C58.9685 51.07 58.839 50.8785 58.751 50.668C58.6625 50.457 58.617 50.231 58.617 50.002C58.617 49.7736 58.6625 49.5474 58.751 49.3366C58.839 49.1257 58.9685 48.9345 59.1315 48.7742L78.6555 29.5343C80.9985 27.1887 84.177 25.8697 87.4925 25.8677C90.8075 25.8657 93.988 27.1807 96.3335 29.5235C98.679 31.8663 99.998 35.0449 100 38.3602C100.002 41.6754 98.687 44.8557 96.344 47.2014L93.7265 50.002L96.353 52.8225C98.0945 54.573 99.2785 56.8 99.7555 59.223C100.232 61.646 99.981 64.1555 99.0325 66.4355C98.0845 68.7155 96.482 70.6635 94.4275 72.0335C92.373 73.4035 89.9585 74.134 87.489 74.133ZM17.2944 26.814C15.7781 26.1853 14.1523 25.8635 12.5109 25.8671C10.0415 25.866 7.6272 26.5966 5.57275 27.9665C3.51824 29.3364 1.91567 31.2843 0.96735 33.5644C0.0190262 35.8443 -0.232538 38.3541 0.244416 40.777C0.72137 43.1999 1.90546 45.4271 3.6472 47.1775L6.27355 49.9978L3.65581 52.7985C1.31301 55.1445 -0.002018 58.3245 2.32446e-06 61.64C0.00202264 64.955 1.32093 68.1335 3.66658 70.4765C6.01225 72.8195 9.1925 74.1345 12.5077 74.1325C15.8229 74.1305 19.0016 72.8115 21.3444 70.4655L40.8686 51.226C41.0315 51.0655 41.1609 50.8745 41.2491 50.6635C41.3374 50.4525 41.3829 50.2265 41.3829 49.9977C41.3829 49.7692 41.3374 49.5429 41.2491 49.3321C41.1609 49.1213 41.0315 48.9301 40.8686 48.7697L21.3444 29.5299C20.1872 28.3657 18.8106 27.4426 17.2944 26.814Z"
                  fill="url(#paint0_linear_143_148)"
                />
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_143_148"
                x1="88.5"
                y1="-5.01387e-06"
                x2="19.75"
                y2="76.25"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B0B9FF" />
                <stop offset="1" stopColor="#E7E9FF" />
              </linearGradient>
              <clipPath id="clip0_143_148">
                <rect width="100" height="100" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span
            className="block mx-auto text-center font-plus-jakarta-sans text-lg font-bold leading-6"
            style={{
              marginTop: "30px",
              background:
                "linear-gradient(90deg, #FAFBFF 12.78%, #78787A 99.99%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              width: "251px",
              fontSize: "21px",
            }}
          >
            Comparte y Vive <br /> Experiencias Únicas
          </span>
          <p
            className="mt-4 text-center mx-auto font-plus-jakarta-sans text-xl font-bold leading-5"
            style={{
              color: "rgba(237, 240, 253, 0.50)",
              width: "251px",
              fontSize: "15px",
            }}
          >
            En Vopper, la vida se comparte <br /> mejor. Captura momentos <br />{" "}
            especiales, comparte tus logros <br /> y celebra tus experiencias{" "}
            <br /> únicas con una comunidad que br te apoya.
          </p>
        </div>
      </div>
    </div>
  );
}
