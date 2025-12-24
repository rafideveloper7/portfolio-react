// src/App.tsx
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "/public/assets/css/particles.css";

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <main id="home" className="w-full">
        {/* Floating light elements contained within the hero section */}

        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>

        {/* #### HERO SECTION #### */}

        <section className="pt-20 md:pt-0 bg-white dark:bg-black">

          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 relative z-1000000">
            <div className="mr-auto place-self-center lg:col-span-7 md:mt-[120px]">
              <h1
                id="dynamicHeadline"
                className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
              >
                Hey I'm a {" "}
                <span id="dynamicWords" className="text-green-500 font-bold">
                  Full Stack Developer
                </span>
              </h1>

              <p className="md:font-light mb-6 text-gray-500 lg:mb-8 text-3xl dark:text-gray-300">
                Specializing in the MERN ecosystem, I craft dynamic web applications that bridge beautiful interfaces with powerful backend functionality.
              </p>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text:3xl text-center dark:text-white text-gray-700 border rounded-2xl  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-green-200 dark:focus:ring-primary-900"
              >
                More About Me
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-4 text-base font-medium text:3xl text-center text-gray-900 border rounded-[20px] border-green-300  hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
              >
                Contact Me!
              </a>
            </div>
            <div
              id="hacker-logo"
              className="lg:mt-0 md:mt-3 m-auto lg:col-span-5 lg:flex relative z-10"
              style={{ opacity: 0 }}
            >
              <div className="border rounded-full w-full h-full aspect-square overflow-hidden">
                <img
                  src="./assets/images/hacker.png"
                  alt="Full Stack Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* #### ACCOLADES SECTION #### */}
        <section className="bg-white dark:bg-black ">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-28 lg:px-6 border-4 border-solid border-green-700 rounded-3xl bg-white dark:bg-black relative z-20">
            <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                  <span data-counter-target="5">1</span>+
                </dt>
                <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Years of Experience</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                  <span data-counter-target="50">5</span>+
                </dt>
                <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Projects Completed</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                  <span data-counter-target="10000">0</span>+
                </dt>
                <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Lines of Code Written</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* #### SERVICES SECTION #### */}
        <section id="services" className="pt-8 pb-12 bg-white dark:bg-black flex justify-center items-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">
            <div className="max-w-screen-md mb-8 lg:mb-12 mx-auto">
              <h2 className="mb-4 text-3xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Full Stack Development Services
              </h2>
              <p className="text-gray-500 text-2xl dark:text-gray-400">
                From concept to deployment, I deliver complete web solutions using the MERN stack, ensuring seamless integration between frontend and backend.
              </p>
            </div>

            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div className="transform transition-all duration-300 hover:scale-105 group">
                <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 12v4m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-3xl font-bold dark:text-white">React Development</h3>
                <p className="text-gray-500 text-xl dark:text-gray-400">
                  Building responsive, interactive user interfaces with React.js, Redux, and modern hooks for optimal user experience and performance.
                </p>
              </div>

              <div className="transform transition-all duration-300 hover:scale-105 group">
                <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-3xl font-bold dark:text-white">Node.js Backend</h3>
                <p className="text-gray-500 text-xl dark:text-gray-400">
                  Developing robust RESTful APIs and server-side applications with Node.js, Express.js, and MongoDB for scalable backend solutions.
                </p>
              </div>

              <div className="transform transition-all duration-300 hover:scale-105 group">
                <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9" />
                  </svg>
                </div>
                <h3 className="mb-2 text-3xl font-bold dark:text-white">Database Design</h3>
                <p className="text-gray-500 text-xl dark:text-gray-400">
                  Creating efficient database schemas with MongoDB, implementing data models, and optimizing queries for maximum performance.
                </p>
              </div>

              <div className="transform transition-all duration-300 hover:scale-105 group">
                <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 18v-5m-5 5v-5m10-2V8a1 1 0 0 0-1-1h-3M9 6H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-3M9 6V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M9 6H7m12 12H5m0-12h2" />
                  </svg>
                </div>
                <h3 className="mb-2 text-3xl font-bold dark:text-white">Full Stack Integration</h3>
                <p className="text-gray-500 text-xl dark:text-gray-400">
                  Seamlessly connecting frontend and backend systems, ensuring smooth data flow and optimal application architecture.
                </p>
              </div>

              <div className="transform transition-all duration-300 hover:scale-105 group">
                <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-3xl font-bold dark:text-white">Authentication & Security</h3>
                <p className="text-gray-500 text-xl dark:text-gray-400">
                  Implementing secure authentication systems with JWT, OAuth, and best practices for data protection and user privacy.
                </p>
              </div>

              <div className="transform transition-all duration-300 hover:scale-105 group">
                <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 7h8m0 0v8m0-8-8 8-4-4-6 6m0 0h4m10 4v4m-6-10h.01M6 16h.01M7 12h.01M8 8h.01M12 12h.01M16 8h.01M17 12h.01M18 16h.01" />
                  </svg>
                </div>
                <h3 className="mb-2 text-3xl font-bold dark:text-white">Deployment & DevOps</h3>
                <p className="text-gray-500 text-xl dark:text-gray-400">
                  Deploying applications to cloud platforms, configuring CI/CD pipelines, and ensuring smooth production releases.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* #### LOGOS SECTION #### */}

        <section className="bg-gray-100 dark:bg-black lg:py-18 lg:px-6 border-t-4 border-b-4 border-solid border-green-700 bg-white dark:bg-black relative z-20">
          <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4 ">
            <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">Technologies & Tools</h2>
            <marquee behavior="scroll" loop >
              <div className="flex gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                <div className="flex justify-center items-center">
                  <span className="text-2xl font-bold dark:text-white">React</span>
                </div>
                <div className="flex justify-center items-center">
                  <span className="text-2xl font-bold dark:text-white">Node.js</span>
                </div>
                <div className="flex justify-center items-center">
                  <span className="text-2xl font-bold dark:text-white">MongoDB</span>
                </div>
                <div className="flex justify-center items-center">
                  <span className="text-2xl font-bold dark:text-white">Express.js</span>
                </div>
                <div className="flex justify-center items-center">
                  <span className="text-2xl font-bold dark:text-white">TypeScript</span>
                </div>
                <div className="flex justify-center items-center">
                  <span className="text-2xl font-bold dark:text-white">Next.js</span>
                </div>
              </div>
            </marquee>
          </div>
        </section>

        {/* #### ABOUT SECTION #### */}
        <section id="about" className="bg-white dark:bg-black pt-8">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                About Me, Full Stack Developer
              </h2>
              <p className="mb-4 text-2xl">
                I specialize in building complete web applications using the MERN stack (MongoDB, Express.js, React, Node.js). My passion lies in creating seamless digital experiences that solve real-world problems.
              </p>
              <p className="text-xl">
                With expertise across the entire development stack, I bridge the gap between beautiful frontend interfaces and robust backend systems, ensuring every application is performant, scalable, and maintainable.
              </p>
              <a href="#" className="inline-flex mt-8 items-center justify-center px-5 py-4 text-base font-medium text:3xl text-center text-gray-900 border-4 border-green-300  hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
              >
                Download Resume
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full transition-all duration-300 hover:saturate-150 hover:brightness-75 hover:hue-rotate-15"
                src="./assets/images/office-long-2.png"
                alt="code workspace 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 transition-all duration-300 hover:saturate-150 hover:brightness-75 hover:hue-rotate-15"
                src="./assets/images/office-long-1.png"
                alt="code workspace 2"
              />
            </div>
          </div>
          <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="transform transition-all duration-300 hover:scale-125">
                <p className="text-xl font-medium py-8 text-gray-900 dark:text-white">
                  "I had the pleasure of mentoring this developer, and I must say, their growth has been phenomenal. In just a few months, they went from learning the basics of MERN stack to building production-ready applications. Their dedication to mastering React hooks, Node.js optimization, and MongoDB best practices is truly impressive. They don't just write code - they architect solutions that are scalable, maintainable, and performant. A rare combination of technical depth and practical problem-solving skills."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-6 h-6 rounded-full transition-opacity duration-300 hover:opacity-70"
                  src="./assets/images/osama.jpg"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    M Osama
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    Trainer at SMIT
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="contact" className="bg-white dark:bg-black">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
              className="w-full h-[600px] transition-opacity rounded-lg duration-300 hover:opacity-70"
              src="./assets/images/data.png"
              alt="dashboard image"
            />
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Ready to Build Your Next Project?
              </h2>
              <p className="mb-6 font-light text-gray-500 text-xl lg:text-2xl dark:text-gray-400">
                Let's connect and discuss how I can help bring your web application ideas to life using modern MERN stack technologies.
              </p>
              <p className="mb-6 font-light text-gray-500 text-xl lg:text-2xl dark:text-gray-400">
                Whether you need a complete full-stack solution, API development, or frontend enhancements, I'm here to provide expert development that fits your project's unique requirements.
              </p>
            </div>
          </div>
        </section>

        {/* #### CONTACT SECTION #### */}
        <section className="bg-white dark:bg-black transition-all duration-300 hover:scale-105">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Start Your Project Today
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 text-xl lg:text-2xl">
              Let's collaborate to create innovative web solutions that drive your business forward.
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border-4 border-green-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border-4 border-green-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Project Type
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50  border-4 border-green-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="e.g., E-commerce, SaaS, Web Application"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  shadow-sm border-4 border-green-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Tell me about your project requirements, timeline, and goals..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-lx font-medium text-center text-white bg-green-600 hover:bg-green-700 border-2 border-green-600 rounded-none sm:w-fit focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:border-green-600 dark:focus:ring-green-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;