import React from "react";
import { FaBook, FaUsers, FaCogs } from "react-icons/fa";
import { ModeToggle } from "../components/mode-toggle"; 

function About() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4 font-playfair">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-poppins">
            Welcome to our Library Management System
          </p>
        </div>

        <div className="mb-16 text-center">
          <img
            src="https://www.blogtyrant.com/wp-content/uploads/2011/02/best-about-us-pages.png"
            alt="About Us"
            className="w-full max-w-4xl mx-auto h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center p-8 bg-gray-300 dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <FaBook className="text-6xl mb-6 text-blue-600" />
            <h2 className="text-2xl font-semibold mb-4 font-playfair">Our Mission</h2>
            <p className="text-center">
              Our mission is to provide a comprehensive, efficient, and user-friendly library management system for seamless book tracking, lending, and administration.
            </p>
          </div>

          <div className="flex flex-col items-center p-8 bg-gray-300 dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <FaUsers className="text-6xl mb-6 text-blue-600" />
            <h2 className="text-2xl font-semibold mb-4 font-playfair">Our Vision</h2>
            <p className="text-center">
              Our vision is to revolutionize the library experience by integrating technology to enhance user interaction, accessibility, and resource management.
            </p>
          </div>

          <div className="flex flex-col items-center p-8 bg-gray-300 dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <FaCogs className="text-6xl mb-6 text-blue-600" />
            <h2 className="text-2xl font-semibold mb-4 font-playfair">Why Choose Us?</h2>
            <p className="text-center">
              We offer innovative solutions for managing library resources, easy-to-use interfaces, and personalized features that help streamline library operations and improve user experience.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center font-playfair">Meet the Team</h2>
          <div className="flex justify-center gap-12 flex-wrap">
            {["John Doe", "Alice Smith", "Michael Brown"].map((name, index) => (
              <div key={index} className="text-center">
                <img src="https://icon2.cleanpng.com/20180403/ape/kisspng-computer-icons-businessperson-clip-art-bussines-5ac3d947bc09b4.6464791915227845837702.jpg" alt="Team Member" className="rounded-full w-40 h-40 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{index === 0 ? "Lead Developer" : index === 1 ? "UI/UX Designer" : "Project Manager"}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-6">What Our Users Say</h2>
          <div className="max-w-xl mx-auto">
            <p className="italic text-gray-600 dark:text-gray-400">"The Library Management System has transformed how we manage our collections. It's intuitive, efficient, and makes book tracking a breeze!"</p>
            <p className="font-semibold mt-2">– Jane Doe, Library Manager</p>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 py-12 px-6 rounded-xl max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="p-4 bg-gray-300 dark:bg-gray-700 shadow rounded-lg">
              <h3 className="font-medium text-lg">How do I borrow books from the library?</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Simply log in, search for a book, and click "Borrow" to check it out.</p>
            </div>
            <div className="p-4 bg-gray-300 dark:bg-gray-700 shadow rounded-lg">
              <h3 className="font-medium text-lg">Can I reserve a book online?</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Yes, our system allows you to reserve books online and get notified once they are available.</p>
            </div>
            <div className="p-4 bg-gray-300 dark:bg-gray-700 shadow rounded-lg">
              <h3 className="font-medium text-lg">How do I return a borrowed book?</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">You can return books by visiting the library and scanning the book's barcode at the return station.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold mb-4">Need Help?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Reach out to us for any queries.</p>
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default About;
