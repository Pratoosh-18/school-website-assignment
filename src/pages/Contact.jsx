import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page bg-gray-100 text-gray-800 py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
          <h3 className="text-3xl font-semibold mb-4">Address</h3>
          <p className="text-lg">Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
          <h3 className="text-3xl font-semibold mb-4">Contact Information</h3>
          <p className="text-lg"><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p className="text-lg"><strong>Email:</strong> <a href="mailto:info@springdale.edu" className="text-blue-600 underline">info@springdale.edu</a></p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
          <h3 className="text-3xl font-semibold mb-4">Contact Form</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Send Message</button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.912647837631!2d-122.08424968469094!3d37.422065379826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e65b4b1e5b%3A0x1c42aaeb39f4!2sGoogleplex!5e0!3m2!1sen!2sus!4v1593574352893!5m2!1sen!2sus"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
