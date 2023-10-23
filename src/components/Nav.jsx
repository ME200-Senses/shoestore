import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className='md:bg-[#EBEEFE] md:rounded-full md:mt-5 padding-x md:w-[90%] md:ml-[5%] py-4 z-10 h-[9%] w-full md:fixed md:top-0 shadow-3xl'>
      <nav className='flex justify-between items-center max-container '>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16  max-lg:gap-4 max-lg:justify-end '>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal max-lg:leading-tight text-lg text-slate-gray md:hover:text-coral-red max-lg:text-sm max-lg:justify-end'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className=' md:bg-white md:py-3 md:px-6 md:rounded-full flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
        </div>
        
      </nav>
    </header>
  );
};

export default Nav;
