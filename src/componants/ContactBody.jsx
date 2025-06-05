import React from 'react'

function ContactBody() {
  return (
    <div className="contact-body bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Left Side: Info Card + Image */}
    <div className="space-y-6">
      {/* Contact Card */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-teal-600 mb-4">📞 Contactez-Nous</h3>
        <p className="text-gray-700 mb-2">
          <strong>📍 Adresse :</strong> 123 Rue de la Santé, 75000 Paris
        </p>
        <p className="text-gray-700 mb-2">
          <strong>📧 Email :</strong> contact@cliniqueparis.fr
        </p>
        <p className="text-gray-700 mb-2">
          <strong>📱 Téléphone :</strong> +33 1 23 45 67 89
        </p>
        <p className="text-gray-700">
          <strong>🕒 Horaires :</strong> Lundi - Vendredi : 8h - 18h
        </p>
      </div>

      {/* Decorative Image */}
      <img
        src="https://source.unsplash.com/400x300/?clinic,healthcare"
        alt="Clinique moderne"
        className="rounded-xl shadow-md object-cover w-full h-auto"
      />
    </div>

    {/* Right Side: Contact Form */}
    <form className="bg-white rounded-xl shadow-lg p-8 space-y-6">
      <h3 className="text-2xl font-semibold text-teal-600 mb-4">✉️ Envoyez un Message</h3>
      
      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          required
          className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-teal-500 placeholder-transparent"
          placeholder="Votre nom"
        />
        <label
          htmlFor="name"
          className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-teal-600"
        >
          Nom
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          required
          className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-teal-500 placeholder-transparent"
          placeholder="Votre email"
        />
        <label
          htmlFor="email"
          className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-teal-600"
        >
          Email
        </label>
      </div>

      <div className="relative">
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-teal-500 placeholder-transparent resize-none"
          placeholder="Votre message"
        ></textarea>
        <label
          htmlFor="message"
          className="absolute left-0 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-teal-600"
        >
          Message
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition-colors"
      >
        Envoyer
      </button>
    </form>
  </div>
</div>

  )
}

export default ContactBody