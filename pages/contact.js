import Header from '@/components/Header';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
      

      <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#fce4ec] p-6 md:p-16 text-gray-800">
        <Header/>
       
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
                No 33/3 Ground Floor, 20&quot; 'C' Cross,<br />
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
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=Viveknagar,Bangalore&zoom=15&size=800x300&markers=color:red%7Clabel:G%7C12.9381,77.6278&key=YOUR_GOOGLE_MAPS_API_KEY"
              alt="Google Map - Gayatri Enterprise"
              className="w-full object-cover"
            />
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
    </>
  );
}
