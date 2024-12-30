import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Toastify CSS
import emailjs from '@emailjs/browser';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4mf5glg',
        'template_9c1xo59',
        form.current,
        {
          publicKey: '-NqujA1MUK8TEit6S',
        }
      )
      .then(
        () => {
          // Toast for success
          toast.success('Message sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });

          // Clear form fields
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          // Toast for failure
          toast.error('Failed to send message. Try again!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }
      );
  };

  return (
    <section id="contact" className="z-50 bg-gray-800 relative py-10 px-5 md:px-0">
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">Get in Touch</h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free to reach out!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
                <img src={facebook} alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
                <img src={instagram} alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
                <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
              </a>
            </div>
            <Lottie animationData={contact} className="w-[350px] mx-auto lg:w-[500px]" />
          </div>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10"
          >
            <h1 className="text-gray-900 text-4xl font-bold mb-7">Contact Me</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <button type="submit" className="bg-red-500 text-white px-3 py-2 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
