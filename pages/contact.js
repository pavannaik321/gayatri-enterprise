import Header from '@/components/Header';
import Herosection from '@/components/Herosection';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    
      <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
            {/* Header */}
      <Header />
      <Herosection />
      <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#fce4ec] p-6 md:p-16 text-gray-800">
        
       
        <Head>
      
        <title>Contact Us | Gayatri Enterprise</title>
      </Head>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-white/70 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/20"
        >
          <motion.h1
            className="text-4xl font-bold mb-4 text-center text-[#2c3e50]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact Us
          </motion.h1>

          <motion.p
            className="text-center text-lg mb-10 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Reach out to us for premium printing solutions tailored to your needs.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-[#34495e]">📍 Address</h2>
              <p>
                No 33/3 Ground Floor, 20&quot; C Cross,<br />
                Ejipura, Viveknagar Post,<br />
                Bangalore - 560047
              </p>
            </div>
            

            <div>
              <h2 className="text-xl font-semibold mb-2 text-[#34495e]">📞 Phone</h2>
              <p>
                <a href="tel:+919833782857" className="hover:underline text-blue-600">+91 98337 82857</a><br />
                <a href="tel:+917676491757" className="hover:underline text-blue-600">+91 76764 91757</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-[#34495e]">📧 Email</h2>
              <p>
                <a href="mailto:gayatrienterprise260@gmail.com" className="hover:underline text-pink-600">gayatrienterprise260@gmail.com</a><br />
                <a href="mailto:sales.gayatrienterprise26@gmail.com" className="hover:underline text-pink-600">sales.gayatrienterprise26@gmail.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-[#34495e]">⏰ Business Hours</h2>
              <p>
                Monday – Saturday: 9:00 AM – 7:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {/* Google Map */}
          <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <iframe
  width="100%"
  height="100%"
  style={{ minHeight: "300px", border: "0" }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4517336621707!2d77.62532117546012!3d12.942920387369911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159722692247%3A0xe4cd25fbf9f79a7e!2sGAYATRI%20ENTERPRISE!5e0!3m2!1sen!2sin!4v1748154522079!5m2!1sen!2sin">
</iframe>
          </div>

         
          </motion.div>

          <motion.div
            className="mt-12 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {/* Google Map */}
          <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <iframe
  width="100%"
  height="100%"
  style={{ minHeight: "300px", border: "0" }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1749208878164!2d77.6460209!3d12.960656300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1405b6ba45cb%3A0xbcca6eccee4ae61a!2sShivam%20Computers%20Stationery!5e0!3m2!1sen!2sin!4v1748434302952!5m2!1sen!2sin">
</iframe>
          </div>

         
          </motion.div>

          <motion.div
            className="mt-12 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {/* Google Map */}
          <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
          <iframe
  width="100%"
  height="100%"
  style={{ minHeight: "300px", border: "0" }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.980812779021!2d77.6656338!3d12.844515699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8f8e96a417%3A0xa5e07c691fefdcce!2sA%20TO%20Z%20COPY%20CENTER%20(%20Printing%20and%20Binding)!5e0!3m2!1sen!2sin!4v1748432759062!5m2!1sen!2sin">
</iframe>
          </div>

         
          </motion.div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <p className="text-gray-700 italic text-lg">
              “We love what we do — and love bringing your ideas to life.”
            </p>
          </motion.div>
        </motion.div>
        <Footer/>
      </div>
    </div>
  );
}


