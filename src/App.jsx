
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-white text-gray-800 p-8">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-orange-600">Nasaktian Solusi Bersama</h1>
        <p className="mt-2 text-lg text-gray-600">Crafting Industrial Excellence</p>
      </header>
      <main className="max-w-3xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700">Layanan Kami</h2>
          <ul className="list-disc list-inside mt-4 space-y-1">
            <li>Interior & Exterior Design & Landscape</li>
            <li>Audio Visual & Noise Insulation</li>
            <li>Industrial Equipment Supply</li>
            <li>Company Branding (Logo, Video, Visual)</li>
          </ul>
        </section>
        <section className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Kenapa Pilih Nasaktian?</h3>
          <p>Kami bantu wujudkan visi Anda lewat brainstorming, visualisasi solusi, dan pendekatan konsultatif — semua sebelum Anda bayar sepeser pun.</p>
        </section>
      </main>
      <footer className="mt-12 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Nasaktian Solusi Bersama. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
