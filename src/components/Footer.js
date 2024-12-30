import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-200 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-black">Edgecore Technologies</h3>
            <p className="text-lg mb-4 text-black">
              Leading IT recruitment, training, and placement services provider.
            </p>
            <p className="text-lg text-black">Your trusted partner in technology solutions.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-black">Quick Links</h3>
            <ul className="space-y-2 text-black">
              <li>
                <a href="#home" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-200 ">
                  {/* Contact No. : <span className=" text-black font-bold">+91-8109472820</span> */}
                  contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold mb-4  text-black">Address</h3>
            <div className="text-black">
            EDGECORE TECHNOLOGIES LLP Company office Address: 113 , SETHI NAGAR, LAL BAG , RTO CHOURAHA,  Indore- 452002, Madhya Pradesh, India
            </div>
            <div className="text-black">
            Contact No. : <span className=" text-black font-bold">+91-8109472820</span>

            </div>
            <div className="flex items-center gap-3">
          <label className=" text-blue-950 font-semibold ">Follow Us on :</label>
        <div className="flex gap-3 ">

        <a href="" target="_blank"><i class="fa fa-facebook-f text-blue-600"></i></a>
        <a href="" target="_blank"><i class="fa fa-instagram text-red-300"></i></a>
        <a href=""><i class="fa fa-whatsapp text-green-500" target="_blank"></i></a>
        <a href="#"><i class="fa fa-linkedin text-blue-800 " target="_blank"></i></a>





        </div>
            </div>
                         {/* <div className="flex ">
                        <ul>
                           <li>Follow Us On :</li>
                           <li><a href="" target="_blank"><i class="fa fa-facebook-f"></i></a></li>
                           <li><a href="" target="_blank"><i class="fa fa-instagram"></i></a></li>
                           <li><a href=""><i class="fa fa-whatsapp" target="_blank"></i></a></li>
                           <li><a href="#"><i class="fa fa-linkedin-in" target="_blank"></i></a></li>
                          
                        </ul>
                        </div>  */}
                         
          </div>
        </div>

        <div className="text-center mt-8 border-t pt-4 text-black">
          <p>&copy; 2024 Edgecore Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
