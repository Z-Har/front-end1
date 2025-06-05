import React from 'react'

function ServicesBody() {
  return (
<div className="services-body bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto mt-10">
  <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">
    🌿 Nos Services Médicaux
  </h2>
  <ul className="space-y-5 text-gray-700 text-lg leading-relaxed">
    <li className="flex items-start">
      <span className="text-teal-500 text-2xl mr-3">🩺</span>
      <div>
        <strong className="text-gray-900">Consultations Générales :</strong> Prise en charge de tous vos besoins médicaux quotidiens.
      </div>
    </li>
    <li className="flex items-start">
      <span className="text-teal-500 text-2xl mr-3">🏥</span>
      <div>
        <strong className="text-gray-900">Consultations Spécialisées :</strong> Cardiologie, dermatologie, pédiatrie, gynécologie, et plus.
      </div>
    </li>
    <li className="flex items-start">
      <span className="text-teal-500 text-2xl mr-3">🧪</span>
      <div>
        <strong className="text-gray-900">Analyses et Examens :</strong> Prélèvements sanguins, ECG, échographies, et autres examens.
      </div>
    </li>
    <li className="flex items-start">
      <span className="text-teal-500 text-2xl mr-3">💉</span>
      <div>
        <strong className="text-gray-900">Vaccinations :</strong> Vaccins pour enfants et adultes, conseils personnalisés.
      </div>
    </li>
    <li className="flex items-start">
      <span className="text-teal-500 text-2xl mr-3">🩹</span>
      <div>
        <strong className="text-gray-900">Soins Infirmiers :</strong> Pansements, injections, suivi de traitements.
      </div>
    </li>
    <li className="flex items-start">
      <span className="text-teal-500 text-2xl mr-3">🧑‍⚕️</span>
      <div>
        <strong className="text-gray-900">Prévention et Suivi :</strong> Bilans de santé, dépistages, accompagnement des maladies chroniques.
      </div>
    </li>
  </ul>
</div>
  )
}

export default ServicesBody