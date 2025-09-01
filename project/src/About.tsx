import React from "react";

const About: React.FC = () => {
  return (
    <main className="min-h-screen bg-base-100 text-base-content flex flex-col items-center px-4 pt-20">
      <section className="max-w-3xl w-full mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Story</h1>
        <p className="text-lg opacity-80">Altverse was born from a passion for innovation and community. Our journey began with a simple idea: to create a space where creativity and technology meet, empowering individuals to connect, learn, and grow together.</p>
      </section>
      <section className="max-w-3xl w-full mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-3">Team</h2>
        <p className="text-lg opacity-80 mb-6">We are a diverse group of dreamers, builders, and doers. Our team brings together expertise in design, development, and community engagement to deliver a seamless experience for everyone.</p>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Example team members, replace with real data */}
          <div className="bg-white/10 rounded-xl p-4 w-48 shadow-md">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-2" />
            <div className="font-bold">Alex Doe</div>
            <div className="text-sm opacity-70">Founder & CEO</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4 w-48 shadow-md">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-2" />
            <div className="font-bold">Jamie Lee</div>
            <div className="text-sm opacity-70">Lead Developer</div>
          </div>
        </div>
      </section>
      <section className="max-w-3xl w-full mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-3">Mission & Vision</h2>
        <p className="text-lg opacity-80">Our mission is to foster a vibrant, inclusive community where ideas flourish and technology is accessible to all. We envision a future where everyone can participate in shaping the digital world.</p>
      </section>
      <section className="max-w-3xl w-full text-center mt-8">
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <p className="mb-4 opacity-80">Want to collaborate or have questions? Reach out to us!</p>
        <a href="/" className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary-focus transition">Contact Us</a>
      </section>
    </main>
  );
};

export default About;
