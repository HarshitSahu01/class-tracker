import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    topic: '',
    description: '',
    attachment: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      attachment: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    if (formData.attachment) {
      console.log('Attachment:', formData.attachment.name);
    }
    alert('Message sent successfully with attachment!');
    
    setFormData({
      topic: '',
      description: '',
      attachment: null
    });
  };

  return (
    
    <div className="max-w-4xl mb-12 mx-auto p-8 bg-white text-gray-800 shadow-md rounded-lg">
      <header className="text-center mb-10 bg-orange-500 p-6 rounded-lg shadow-lg">
        <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        <p className="text-white mt-2">We’re here to help! Reach out with any questions.</p>
      </header>
      <section>
        <h2 className="text-black-500 text-2xl font-semibold mb-6">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-8 mt-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="topic">Topic</label>
            <input
              type="text"
              name="topic"
              id="topic"
              required
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              value={formData.topic}
              onChange={handleChange}
              placeholder="Enter the topic"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              required
              rows="10"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter your message description"
            ></textarea>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="attachment">Attachment (if any)</label>
            <div className="border border-dashed border-gray-300 p-4 rounded-md hover:border-solid hover:bg-gray-50 transition duration-300">
              <input
                type="file"
                name="attachment"
                id="attachment"
                className="block w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600"
                onChange={handleFileChange}
              />
            </div>
            {formData.attachment && (
              <p className="mt-2 text-sm text-gray-600">Selected File: {formData.attachment.name}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition duration-300 transform hover:scale-105 shadow-md"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;