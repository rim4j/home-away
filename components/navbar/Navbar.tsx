import DarkMode from "./DarkMode";
import LinksDropDown from "./LinksDropDown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";

const Navbar = () => {
  return (
    <nav className='border-b'>
      <div className='container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
        <Logo />
        <NavSearch />
        <div className='flex gap-4 items-center'>
          <LinksDropDown />
          <DarkMode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
