import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8  border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                4TECH
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div className="">
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://burymewithmymoney.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lorem
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  4Tech Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/luanzio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="luanio"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://facebook.com"
              icon={BsFacebook}
              target="_blank"
            />
            <Footer.Icon
              href="https://instagram.com"
              icon={BsInstagram}
              target="_blank"
            />
            <Footer.Icon
              href="https://x.com"
              icon={BsTwitter}
              target="_blank"
            />
            <Footer.Icon
              href="https://github.com/luanio"
              icon={BsGithub}
              target="_blank"
            />
            <Footer.Icon
              href="https://dribble.com"
              icon={BsDribbble}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
