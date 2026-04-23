import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-gray-900 mb-2">Address</h3>
                <p className="text-gray-700 leading-relaxed">
                  123 Ayurveda Lane, Wellness District<br />
                  New Delhi, India 110001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-gray-900 mb-2">Phone</h3>
                {/* <p className="text-gray-700">
                  DM us at<br />
                </p> */}
                <a 
                  href="https://www.instagram.com/skin.devi?r=nametag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline cursor-pointer">
                    DM us at{" "}
                    <span className="text-pink-500 font-medium">Skindevi</span>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-gray-900 mb-2">Email</h3>
                <p className="text-gray-700">
                  <a href="https://mail.google.com/mail/?view=cm&to=Enquiries@skindevi.com" className="hover:underline cursor-pointer">Enquiries@skindevi.com<br /></a>
                  <a href="https://mail.google.com/mail/?view=cm&to=Info@skindevi.com" className="hover:underline cursor-pointer">Info@skindevi.com<br /></a>
                  <a href="https://mail.google.com/mail/?view=cm&to=Feedback@skindevi.com" className="hover:underline cursor-pointer">Feedback@skindevi.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3962692726304!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
