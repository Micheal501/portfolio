/* eslint-disable no-unused-vars */
import './App.css';
import React, { useEffect, useState } from 'react';

export default function Page() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <Footer />
    </>
  );
}

function Navigation() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleHamburger = () => {
    setIsHamburgerActive((prevState) => !prevState);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsHamburgerActive(false);
    }
  };

  return (
    <header
      className={`absolute top-0 left-0 w-full flex items-center ${
        isNavbarFixed ? 'navbar-fixed' : ''
      }`}
    >
      <div className='container'>
        <div className='flex items-center justify-between relative'>
          <div className='px-4 pt-3'>
            <a
              href='#home'
              className=''
            >
              <img
                src='src/assets/img/boy.png'
                alt='Logo'
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className='flex items-center px-4'>
            <button
              id='hamburger'
              name='hamburger'
              type='button'
              className={`block absolute right-4 lg:hidden ${
                isHamburgerActive ? 'hamburger-active' : ''
              }`}
              onClick={toggleHamburger}
            >
              <span className='hamburger-line transition duration-300 ease-in-out origin-top-left' />
              <span className='hamburger-line' />
              <span className='hamburger-line transition duration-300 ease-in-out origin-bottom-left' />
            </button>
            <nav
              id='nav-menu'
              className={`${
                isHamburgerActive ? 'block' : 'hidden'
              } absolute py-5 bg-slate-900 shadow-lg rounded-lg max-w-[250px] w-full right-3 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
            >
              <ul className='block lg:flex'>
                <li className='group lg:flex justify-center items-center'>
                  <a
                    href='#home'
                    className='text-base text-headline lg:text-xl py-2 mx-8 flex group-hover:text-button'
                    onClick={() => scrollToSection('home')}
                  >
                    Home
                  </a>
                </li>
                <li className='group'>
                  <a
                    href='#about'
                    className='text-base text-headline lg:text-xl py-2 mx-8 flex group-hover:text-button'
                    onClick={() => scrollToSection('about')}
                  >
                    About Me
                  </a>
                </li>
                <li className='group'>
                  <a
                    href='#portfolio'
                    className='text-base text-headline lg:text-xl py-2 mx-8 flex group-hover:text-button'
                    onClick={() => scrollToSection('portfolio')}
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <div>
      <section
        id='home'
        className='pt-52 bg-slate-900'
      >
        <div className='container'>
          <div className='flex flex-wrap'>
            <div className='w-full self-center px-4 lg:w-1/2'>
              <h1 className='text-base font-semibold text-headline md:text-xl'>
                Hello Everyone 👋, My name is
                <span className='block font-bold text-highlight text-4xl mt-1'>
                  Micheal Owen
                </span>
              </h1>
              <h2 className='font-medium text-headline text-lg mb-5 lg:text-2xl'>
                Front-End Developer
              </h2>
              <blockquote className='font-medium text-headline mb-10 leading-relaxed'>
                <q>
                  The Web as I envisaged it, we have not seen it yet. The future
                  is still so much bigger than the past.
                </q>
                Tim Berners-Lee - Inventor of the World Wide Web
              </blockquote>
              <a
                href='#'
                className='text-based font-semibold text-white bg-button py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-200 ease-in-out'
              >
                Contact Me
              </a>
            </div>
            <div className='w-full self-end px-4 lg:w-1/2'>
              <div className='relative mt-10 lg:mt-9 lg:right-0 z-30'>
                <img
                  src='src/assets/img/boy2.png'
                  alt='Micheal Owen'
                  className='max-w-full mx-auto'
                />
                <span className='absolute -bottom-12 -z-10 left-1/2 -translate-x-1/2 md:scale-110'>
                  <svg
                    width={400}
                    height={400}
                    viewBox='0 0 200 200'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill='#FF8906'
                      d='M56.4,-61C72.6,-53.7,84.8,-35.4,82.1,-19.2C79.4,-2.9,61.7,11.3,49.5,24.9C37.2,38.6,30.4,51.7,20.1,55.5C9.8,59.3,-3.9,53.9,-15.8,47.7C-27.7,41.5,-37.8,34.6,-50.1,23.9C-62.3,13.1,-76.7,-1.5,-75.9,-14.7C-75.1,-27.9,-59.1,-39.7,-44,-47.2C-28.8,-54.6,-14.4,-57.8,2.9,-61.2C20.1,-64.6,40.3,-68.3,56.4,-61Z'
                      transform='translate(100 100)'
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutSection() {
  return (
    <section
      id='about'
      className='pt-36 pb-32 bg-slate-900'
    >
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 mb-10 lg:w-1/2'>
            <h4 className='font-bold uppercase text-button text-lg mb-3'>
              About Me
            </h4>
            <p className='font-medium text-base text-paragraph lg:text-lg'>
              I am a passionate web development enthusiast currently pursuing my
              education in Informatics at Amikom Yogyakarta. As I embark on my
              7th semester, I've developed a deep interest and specialization in
              web programming, with a strong focus on front-end development.
            </p>
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            <h3 className='font-semibold text-dark text-2xl mb-2 text-button'>
              Let's Connect
            </h3>
            <p className='text-base text-paragraph mb-5'>
              You can connect or contact me through all this social media👌
            </p>
            <div className='flex items-center'>
              {/* Linkedin */}
              <a
                href='https://www.linkedin.com/in/micheal-owen/'
                className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-white hover:bg-primary hover:bg-button transition duration 500'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-linkedin'
                >
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                  <rect
                    width={4}
                    height={12}
                    x={2}
                    y={9}
                  />
                  <circle
                    cx={4}
                    cy={4}
                    r={2}
                  />
                </svg>
              </a>
              <a
                href='https://www.instagram.com/micowen293/'
                className='w-9 h-9 mr-3 rounded-full flex justify-center items-center text-white border hover:bg-primary hover:bg-button transition duration 500'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-instagram'
                >
                  <rect
                    width={20}
                    height={20}
                    x={2}
                    y={2}
                    rx={5}
                    ry={5}
                  />
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                  <line
                    x1='17.5'
                    x2='17.51'
                    y1='6.5'
                    y2='6.5'
                  />
                </svg>
              </a>
              <a
                href='https://github.com/Micheal501'
                className='w-9 h-9 mr-3 rounded-full flex justify-center items-center text-white border hover:bg-primary hover:bg-button transition duration 500'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-github'
                >
                  <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                  <path d='M9 18c-4.51 2-5-2-7-2' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section
      id='portfolio'
      className='pt-24 pb-16 bg-slate-800'
    >
      <div className='container'>
        <div className='w-full px-4'>
          <div className='max-w-xl mx-auto text-center mb-16 text-headline'>
            <h4 className='font-semibold text-lg text-button mb-4 uppercase'>
              Portfolio
            </h4>
            <h2 className='font-bold text-3xl mb-4'>Projects</h2>
            <p className='text-paragraph font-medium'>
              Explore my world of web development through these standout
              projects:
            </p>
          </div>
        </div>
        <div className='w-full flex flex-wrap justify-center xl:w-11/12 xl:mx-auto'>
          <div className='mb-12 p-4 md:w-1/2'>
            <div className='rounded-md overflow-hidden'>
              <img
                src='src/assets/img/landing-page.png'
                alt='Landing Page'
                className='h-80 w-full'
              />
              <h3 className='font-semibold text-xl text-headline mt-5 mb-3'>
                Landing Page
              </h3>
              <p className='font-medium text-base text-paragraph'>
                This website endeavor aims to create a vibrant and engaging
                online presence for badminton enthusiasts and players. The
                Badminton Hub Landing Page will serve as a central hub for
                information, resources, and community engagement related to the
                sport.
              </p>
            </div>
          </div>
          <div className='p-4 md:w-1/2'>
            <div className='rounded-md overflow-hidden'>
              <img
                src='src/assets/img/gamer-store.png'
                alt='gamer-store'
                className='h-80 w-full'
              />
              <h3 className='font-semibold text-xl text-headline mt-5 mb-3'>
                Gamer Store
              </h3>
              <p className='font-medium text-base text-paragraph'>
                Create a comprehensive online platform that allows gamers to
                effortlessly recharge their in-game credits for a variety of
                popular online games. The website should provide a user-friendly
                interface, ensuring a seamless experience for gamers looking to
                enhance their gaming experience through in-game purchases.
              </p>
            </div>
          </div>
          <div className='p-4 md:w-1/2'>
            <div className='rounded-md overflow-hidden'>
              <img
                src='src/assets/img/login-page.png'
                alt='login-page'
                className='h-80 w-full'
              />
              <h3 className='font-semibold text-xl text-headline mt-5 mb-3'>
                Login Page
              </h3>
              <p className='font-medium text-base text-paragraph'>
                The User Authentication System is a web application designed to
                provide a secure and seamless login experience for users. The
                system incorporates both traditional email/password
                authentication and the option for users to log in through their
                Google accounts.
              </p>
            </div>
          </div>
          <div className='p-4 md:w-1/2'>
            <div className='rounded-md overflow-hidden'>
              <img
                src='src/assets/img/programming-class.png'
                alt='programming-class'
                className='h-80 w-full'
              />
              <h3 className='font-semibold text-xl text-headline mt-5 mb-3'>
                Programming Class
              </h3>
              <p className='font-medium text-base text-paragraph'>
                The Programming Class Hub is a comprehensive website designed to
                serve as an interactive platform for programming enthusiasts and
                learners. It facilitates an engaging learning experience through
                a variety of features, resources, and tools tailored for
                individuals interested in honing their programming skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <>
      <footer className='pt-5 pb-5 bg-slate-900'>
        <p className='text-center text-paragraph'>
          &copy; 2023 Micheal Owen. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
