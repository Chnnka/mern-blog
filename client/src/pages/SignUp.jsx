import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 gap-5 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/*left side*/}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-gray-500 via-black-500 to-slate-500 rounded-lg text-white">
              Story
            </span>
            Store
          </Link>
          <p className="text-sm mt-5">
            This is a demo project, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quaerat iusto Repudiandae hic eveniet omnis maxime
            consectetur quae qui earum cumque veritatis, iure esse nam, aut
            doloremque officia amet.
          </p>
        </div>
        {/*right side*/}

        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Username"></Label>
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div className="">
              <Label value="Your Email"></Label>
              <TextInput
                type="text"
                placeholder="name@example.com"
                id="email"
              />
            </div>
            <div className="">
              <Label value="Your Password"></Label>
              <TextInput type="text" placeholder="Password" id="username" />
            </div>
            <Button gradientDuoTone="purpleToBlue" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Already Have An Account? </span>
            <Link to="/sign-in" className="text-blue-600">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
