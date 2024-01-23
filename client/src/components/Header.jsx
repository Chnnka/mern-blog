import React from 'react';
import { Button, Navbar, NavbarLink, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gray-300 rounded-lg">Story</span>
        Store
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray">
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button color="gray" pill>
            Sign In
          </Button>
        </Link>
        <Navbar.toggle />
        <Navbar.Collapse>
          <NavbarLink>
            <Link to="/">Home</Link>
          </NavbarLink>
          <NavbarLink>
            <Link to="/about">About</Link>
          </NavbarLink>
          <NavbarLink>
            <Link to="/projects">Projects</Link>
          </NavbarLink>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
