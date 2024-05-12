import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer>
      <div className="w-full md:flex text-white">
        <div className="md:w-1/2 bg-dark10 p-5 flex md:justify-end justify-center py-12">
          <div className="md:w-2/3 text-center">
            <h1 className="font-semibold text-xl pb-4">CONTACT US</h1>
            <p className="text-sm leading-6">
              123 ABS Street, Uni 21, Bangladesh <br />
              +88 123456789 <br />
              Mon - Fri: 08:00 - 22:00 <br />
              Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
        <div className="md:w-1/2 bg-dark09 p-5 flex md:justify-start justify-center py-12">
          <div className="md:w-2/3 text-center">
            <h1 className="font-semibold text-xl ">Follow US</h1>
            <p className="text-sm py-4">Join us on social media</p>
            <div className="flex justify-center items-center ">
              <a className="bg-dark03 p-3 rounded-full mx-1.5 hover:bg-dark01 transition-all duration-300">                
                <FaFacebookF ></FaFacebookF>                
              </a>
              <a className="bg-dark03 p-3 rounded-full mx-1.5 hover:bg-dark01 transition-all duration-300">
              <FaYoutube ></FaYoutube>
              </a>
              <a className="bg-dark03 p-3 rounded-full mx-1.5 hover:bg-dark01 transition-all duration-300">
              <FaTwitter ></FaTwitter>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer footer-center p-4 bg-dark01 text-white">
        <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
