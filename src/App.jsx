"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Send, MapPin, Phone, Mail, ChevronRight } from "lucide-react"

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message. We will get back to you shortly.")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 mix-blend-difference">
        <div className="max-w-[1800px] mx-auto px-8 py-8">
          <div className="flex justify-between items-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg tracking-[0.2em]"
            >
              LUXE
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-12"
            >
              <a href="#properties" className="text-sm tracking-wider hover:opacity-50 transition-opacity">
                PROPERTIES
              </a>
              <a href="#about" className="text-sm tracking-wider hover:opacity-50 transition-opacity">
                ABOUT
              </a>
              <a href="#testimonials" className="text-sm tracking-wider hover:opacity-50 transition-opacity">
                TESTIMONIALS
              </a>
              <a href="#contact" className="text-sm tracking-wider hover:opacity-50 transition-opacity">
                CONTACT
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,15vw,12rem)] font-light leading-none tracking-tighter mb-8"
          >
            LUXURY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-xl tracking-wider max-w-xl mx-auto mb-12"
          >
            EXCEPTIONAL PROPERTIES FOR EXTRAORDINARY LIVES
          </motion.p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-32 px-8">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-16"
          >
            <div className="text-center">
              <p className="text-[5rem] font-light leading-none">500+</p>
              <p className="text-sm tracking-[0.2em] mt-4">PROPERTIES</p>
            </div>
            <div className="text-center">
              <p className="text-[5rem] font-light leading-none">4.9</p>
              <p className="text-sm tracking-[0.2em] mt-4">RATING</p>
            </div>
            <div className="text-center">
              <p className="text-[5rem] font-light leading-none">15+</p>
              <p className="text-sm tracking-[0.2em] mt-4">EXPERIENCE</p>
            </div>
            <div className="text-center">
              <p className="text-[5rem] font-light leading-none">1K+</p>
              <p className="text-sm tracking-[0.2em] mt-4">CLIENTS</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Us Section */}
      <div id="about" className="py-32 px-8 bg-zinc-900">
        <div className="max-w-[1800px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-[3rem] tracking-tighter mb-24"
          >
            About LUXE
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl tracking-tight mb-8">Our Philosophy</h3>
              <p className="text-gray-300 tracking-wider leading-relaxed mb-6">
                Founded in 2008, LUXE has established itself as the premier luxury real estate agency, specializing in
                extraordinary properties for discerning clients worldwide.
              </p>
              <p className="text-gray-300 tracking-wider leading-relaxed mb-6">
                Our approach is simple yet effective: we understand that luxury is personal. We take the time to
                understand your unique preferences and lifestyle needs, ensuring that each property we present exceeds
                your expectations.
              </p>
              <p className="text-gray-300 tracking-wider leading-relaxed">
                With a team of experienced professionals and a global network of connections, we offer unparalleled
                service and access to the most exclusive properties on the market.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80"
                  alt="Luxury Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-black p-8 max-w-xs">
                <p className="text-xl tracking-tight">"We don't just sell properties, we curate lifestyles."</p>
                <p className="text-gray-400 mt-4 text-sm tracking-wider">— ALEXANDRA REYNOLDS, FOUNDER</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div id="properties" className="py-32 px-8">
        <div className="max-w-[1800px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-[3rem] tracking-tighter mb-24"
          >
            Featured Properties
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Property 1 */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
                  alt="Luxury Property 1"
                  className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700"></div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl tracking-tight">Seaside Villa</h3>
                <p className="text-gray-400 mt-2 tracking-wider text-sm">Malibu, California</p>
              </div>
            </motion.div>

            {/* Property 2 */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
                  alt="Luxury Property 2"
                  className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700"></div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl tracking-tight">Mountain Retreat</h3>
                <p className="text-gray-400 mt-2 tracking-wider text-sm">Aspen, Colorado</p>
              </div>
            </motion.div>

            {/* Property 3 */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
                  alt="Luxury Property 3"
                  className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700"></div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl tracking-tight">City Penthouse</h3>
                <p className="text-gray-400 mt-2 tracking-wider text-sm">New York, NY</p>
              </div>
            </motion.div>

            {/* Property 4 */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
                  alt="Luxury Property 4"
                  className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700"></div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl tracking-tight">Beachfront Estate</h3>
                <p className="text-gray-400 mt-2 tracking-wider text-sm">Miami, Florida</p>
              </div>
            </motion.div>

            {/* Property 5 */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
                  alt="Luxury Property 5"
                  className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700"></div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl tracking-tight">Vineyard Chateau</h3>
                <p className="text-gray-400 mt-2 tracking-wider text-sm">Napa Valley, California</p>
              </div>
            </motion.div>

            {/* Property 6 */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
                  alt="Luxury Property 6"
                  className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700"></div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl tracking-tight">Lakeside Mansion</h3>
                <p className="text-gray-400 mt-2 tracking-wider text-sm">Lake Tahoe, Nevada</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-32 px-8 bg-zinc-900">
        <div className="max-w-[1800px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-[3rem] tracking-tighter mb-24"
          >
            Client Testimonials
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="bg-zinc-800/50 p-12 relative"
            >
              <div className="flex mb-6">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                ))}
              </div>
              <p className="text-gray-300 tracking-wider leading-relaxed italic mb-8">
                "LUXE exceeded all our expectations. Their attention to detail and understanding of our needs made
                finding our dream home an absolute pleasure. The process was seamless from start to finish."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-gray-400 text-sm">Malibu, CA</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="bg-zinc-800/50 p-12 relative"
            >
              <div className="flex mb-6">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                ))}
              </div>
              <p className="text-gray-300 tracking-wider leading-relaxed italic mb-8">
                "Working with LUXE to sell our property was the best decision we made. Their marketing strategy and
                global network brought in multiple offers above asking price within just two weeks."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Michael Chen</p>
                  <p className="text-gray-400 text-sm">New York, NY</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="bg-zinc-800/50 p-12 relative"
            >
              <div className="flex mb-6">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-5 h-5 ${index < 4 ? "fill-yellow-400 text-yellow-400" : "fill-zinc-700 text-zinc-700"} mr-1`}
                  />
                ))}
              </div>
              <p className="text-gray-300 tracking-wider leading-relaxed italic mb-8">
                "As international buyers, we were concerned about navigating the US real estate market. LUXE made the
                entire process straightforward and handled everything with professionalism."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Elena Rodriguez</p>
                  <p className="text-gray-400 text-sm">Madrid, Spain</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div id="contact" className="py-32 px-8">
        <div className="max-w-[1800px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-[3rem] tracking-tighter mb-24"
          >
            Contact Us
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl tracking-tight mb-8">Get in Touch</h3>
              <p className="text-gray-300 tracking-wider leading-relaxed mb-12">
                Whether you're looking to buy, sell, or simply explore the world of luxury real estate, our team is here
                to assist you every step of the way.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Our Office</p>
                    <p className="text-gray-400">1234 Luxury Lane, Beverly Hills, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-gray-400">contact@luxe.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-zinc-700 p-4 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-zinc-700 p-4 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-transparent border border-zinc-700 p-4 focus:outline-none focus:border-white transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center border border-white py-4 px-8 hover:bg-white hover:text-black transition-colors group"
                >
                  <span className="tracking-wider mr-2">SEND MESSAGE</span>
                  <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-32 px-8 border-t border-white/10">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-lg tracking-[0.2em] mb-8">LUXE</h3>
              <p className="text-gray-400 tracking-wider">Redefining luxury real estate.</p>
              <div className="mt-8">
                <a
                  href="#"
                  className="flex items-center text-sm tracking-wider text-gray-400 hover:text-white transition-colors group"
                >
                  <span>VIEW OUR PRIVACY POLICY</span>
                  <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm tracking-[0.2em] mb-8">CONTACT</h3>
              <p className="text-gray-400 tracking-wider">contact@luxe.com</p>
              <p className="text-gray-400 tracking-wider mt-4">+1 (555) 123-4567</p>
              <p className="text-gray-400 tracking-wider mt-4">1234 Luxury Lane, Beverly Hills, CA 90210</p>
            </div>
            <div>
              <h3 className="text-sm tracking-[0.2em] mb-8">SOCIAL</h3>
              <div className="flex space-x-8">
                <a href="#" className="text-gray-400 tracking-wider hover:text-white transition-colors">
                  IG
                </a>
                <a href="#" className="text-gray-400 tracking-wider hover:text-white transition-colors">
                  FB
                </a>
                <a href="#" className="text-gray-400 tracking-wider hover:text-white transition-colors">
                  TW
                </a>
                <a href="#" className="text-gray-400 tracking-wider hover:text-white transition-colors">
                  LI
                </a>
              </div>
              <div className="mt-8">
                <p className="text-gray-400 tracking-wider text-sm">
                  © {new Date().getFullYear()} LUXE. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


export default App;