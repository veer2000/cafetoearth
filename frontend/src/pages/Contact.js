import { useState } from 'react';
import ContourPattern from '../components/ContourPattern';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Coffee Street', 'San Francisco, CA 94102'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@contourcafe.com'],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 7am - 8pm', 'Sat-Sun: 8am - 9pm'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1d] relative overflow-hidden">
      <ContourPattern />
      
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-space-grotesk text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#e9c46a] to-[#f4a261] mb-4">
              Get In Touch
            </h1>
            <p className="font-manrope text-lg text-gray-300 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="backdrop-blur-xl bg-[#252529]/60 border border-[#2a9d8f]/20 rounded-xl p-8">
              <h2 className="font-space-grotesk text-2xl font-bold text-white mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block font-manrope text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1d]/60 border border-[#2a9d8f]/30 rounded-lg text-white font-manrope focus:outline-none focus:border-[#e9c46a] transition-colors"
                    placeholder="Your name"
                    data-testid="contact-name-input"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-manrope text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1d]/60 border border-[#2a9d8f]/30 rounded-lg text-white font-manrope focus:outline-none focus:border-[#e9c46a] transition-colors"
                    placeholder="your.email@example.com"
                    data-testid="contact-email-input"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-manrope text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#1a1a1d]/60 border border-[#2a9d8f]/30 rounded-lg text-white font-manrope focus:outline-none focus:border-[#e9c46a] transition-colors resize-none"
                    placeholder="Tell us what's on your mind..."
                    data-testid="contact-message-input"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#e9c46a] text-[#1a1a1d] font-space-grotesk font-bold py-3 rounded-full hover:bg-[#f4a261] transition-all hover:scale-105 shadow-lg"
                  data-testid="contact-submit-button"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="font-space-grotesk text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div
                    key={idx}
                    className="backdrop-blur-xl bg-[#252529]/60 border border-[#2a9d8f]/20 rounded-xl p-6 hover:border-[#2a9d8f]/40 transition-all"
                    data-testid={`contact-info-${info.title.toLowerCase()}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#2a9d8f]/20 rounded-full flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#2a9d8f]" />
                      </div>
                      <div>
                        <h3 className="font-space-grotesk text-lg font-bold text-white mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIdx) => (
                          <p key={detailIdx} className="font-manrope text-gray-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Map placeholder */}
              <div className="backdrop-blur-xl bg-[#252529]/60 border border-[#2a9d8f]/20 rounded-xl overflow-hidden h-64">
                <div className="w-full h-full bg-gradient-to-br from-[#264653] to-[#1a1a1d] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#2a9d8f] mx-auto mb-3" />
                    <p className="font-manrope text-gray-300">Interactive map coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
