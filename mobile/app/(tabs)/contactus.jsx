import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "client",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        role: "client",
        subject: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen max-h-screen overflow-y-auto bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto flex flex-col space-y-16">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Connect With Us
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Bridging clients with trusted middlemen for seamless transactions
          </p>
        </header>

        {/* Contact Form */}
        <section className="bg-white shadow-xl rounded-lg p-10 flex flex-col space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Send us a message</h2>

          {isSubmitted ? (
            <SuccessMessage />
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              <InputGroup
                label="Full Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <InputGroup
                label="Email Address"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <SelectGroup
                label="I am a"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="client">Client (Looking for services)</option>
                <option value="middleman">Middleman (Service provider)</option>
              </SelectGroup>
              <InputGroup
                label="Subject"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <TextareaGroup
                label="Your Message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
              >
                Send Message
              </button>
            </form>
          )}
        </section>

        {/* Contact Information */}
        <section className="bg-gray-900 text-white rounded-lg p-10 flex flex-col space-y-8">
          <h2 className="text-3xl font-bold">Contact Information</h2>

          <ContactInfoItem
            title="For Clients"
            email="clients@connecthub.com"
            description="Email us at"
          />
          <ContactInfoItem
            title="For Middlemen"
            email="middlemen@connecthub.com"
            description="Email us at"
          />
          <ContactInfoItem
            title="Phone Support"
            phone="+1 (123) 456-7890"
            description="Monday-Friday: 9am-6pm"
          />
          <ContactInfoItem
            title="Our Office"
            addressLines={["123 Connection Street", "San Francisco, CA 94107"]}
          />

          <div className="pt-8 border-t border-gray-800">
            <h3 className="text-lg font-semibold mb-4 text-blue-300">
              Why choose us?
            </h3>
            <ul className="space-y-3">
              {[
                "Verified middlemen with background checks",
                "Secure payment escrow system",
                "24/7 dispute resolution",
              ].map((text) => (
                <li key={text} className="flex items-start space-x-2">
                  <CheckIcon />
                  <span className="text-gray-300">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="text-center">
          <h3 className="text-lg font-medium text-gray-500 mb-6">
            TRUSTED BY THOUSANDS OF CLIENTS AND MIDDLEMEN
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <Badge
              iconPath="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              label="Verified Professionals"
            />
            <Badge
              iconPath="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              label="Secure Platform"
            />
            <Badge
              iconPath="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
              label="24/7 Support"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

/* ==== Reusable Form Components ==== */

const InputGroup = ({ label, id, name, type = "text", value, onChange, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

const SelectGroup = ({ label, id, name, value, onChange, children }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      {children}
    </select>
  </div>
);

const TextareaGroup = ({ label, id, name, value, onChange, rows = 4, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      required={required}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

/* ==== Contact Info Component ==== */

const ContactInfoItem = ({ title, email, phone, addressLines, description }) => (
  <div>
    <h3 className="text-xl font-semibold mb-1">{title}</h3>
    {email && (
      <p>
        {description}{" "}
        <a href={`mailto:${email}`} className="underline hover:text-blue-400">
          {email}
        </a>
      </p>
    )}
    {phone && (
      <p>
        {description}{" "}
        <a href={`tel:${phone}`} className="underline hover:text-blue-400">
          {phone}
        </a>
      </p>
    )}
    {addressLines && (
      <address className="not-italic">
        {addressLines.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </address>
    )}
  </div>
);

/* ==== Success Message Component ==== */

const SuccessMessage = () => (
  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
    <svg
      className="h-12 w-12 text-green-500 mx-auto mb-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <h3 className="text-lg font-medium text-green-800 mb-2">Message Sent Successfully!</h3>
    <p className="text-green-600">We'll get back to you within 24 hours.</p>
  </div>
);

/* ==== Icons ==== */

const CheckIcon = () => (
  <svg
    className="w-6 h-6 text-green-400 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

/* ==== Badge ==== */

const Badge = ({ iconPath, label }) => (
  <div className="flex flex-col items-center space-y-2 text-gray-700 dark:text-gray-300">
    <svg
      className="w-16 h-16 text-blue-600"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d={iconPath} />
    </svg>
    <span className="font-semibold">{label}</span>
  </div>
);

export default ContactPage;
