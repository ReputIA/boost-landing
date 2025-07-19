'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.paypal.com/sdk/js?client-id=ASunnmubagP9G5Dsrr0p9MLbLQt_Lsjc7sORbKDlAH4GFY8ErCX5zye9FEMKU405NL8VWQe8NhaO82Qj&currency=EUR'
    script.addEventListener('load', () => {
      if (window.paypal) {
        window.paypal.Buttons({
          style: {
            color: 'gold',
            shape: 'pill',
            label: 'pay',
            layout: 'vertical',
          },
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: '99.00',
                  currency_code: 'EUR',
                },
                description: 'Optimisation fiche Google My Business',
              }],
            })
          },
          onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              alert(`Merci ${details.payer.name.given_name}, votre paiement a été validé ✅`)
            })
          },
          onError: (err: any) => {
            console.error('Erreur PayPal :', err)
            alert('Une erreur est survenue lors du paiement.')
          },
        }).render('#paypal-button-container')
      }
    })
    document.body.appendChild(script)
  }, [])

  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-white">
      <main className="flex flex-col items-center justify-center text-center px-4 py-12">
        {/* Logo ReputIA */}
        <div className="mb-6">
          <Image src="/logo.png" alt="ReputIA Logo" width={80} height={80} />
        </div>

        {/* Titre principal */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400">
          Optimisez votre fiche Google
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Gagnez en visibilité locale avec notre offre unique à <span className="font-bold text-yellow-300">99 €</span>.
        </p>

        {/* Liste des bénéfices */}
        <ul className="mt-8 text-left space-y-3 text-lg">
          <li>✅ Analyse complète de votre fiche</li>
          <li>✅ Mots-clés locaux optimisés</li>
          <li>✅ Stratégie d’avis clients</li>
          <li>✅ Boost sur Google Maps</li>
        </ul>

        {/* Témoignages clients */}
<div className="mt-12 w-full max-w-3xl">
  <h2 className="text-2xl font-bold text-yellow-400 text-center mb-6">Ils nous ont fait confiance</h2>
  <div className="grid gap-4">
    <div className="bg-black border border-gray-700 p-4 rounded-xl text-left">
      <p className="text-sm text-white">“J'ai vu une hausse immédiate de mes appels après l'optimisation. Un service pro et efficace.”</p>
      <p className="text-yellow-300 mt-2 font-medium text-sm">— Julien D., Plombier à Lyon</p>
    </div>
    <div className="bg-black border border-gray-700 p-4 rounded-xl text-left">
      <p className="text-sm text-white">“Simple, rapide, et super bien expliqué. Je recommande les yeux fermés !”</p>
      <p className="text-yellow-300 mt-2 font-medium text-sm">— Sarah M., Coiffeuse à Paris</p>
    </div>
    <div className="bg-black border border-gray-700 p-4 rounded-xl text-left">
      <p className="text-sm text-white">“Mon salon est passé de la 4e à la 1re position sur Google Maps en 2 semaines.”</p>
      <p className="text-yellow-300 mt-2 font-medium text-sm">— Mehdi R., Gérant d’un barber shop</p>
    </div>
    <div className="bg-black border border-gray-700 p-4 rounded-xl text-left">
      <p className="text-sm text-white">“Enfin une vraie solution pour booster ma visibilité sans me ruiner.”</p>
      <p className="text-yellow-300 mt-2 font-medium text-sm">— Claire B., Photographe indépendante</p>
    </div>
  </div>
</div>


        {/* Bouton PayPal */}
        <div id="paypal-button-container" className="mt-10" />

        <p className="text-sm italic text-gray-400 mt-4">
          Paiement sécurisé par carte bancaire ou compte PayPal
        </p>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-800 py-4 text-center text-sm text-gray-400 px-4">
  <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
    <span className="mb-2 md:mb-0">© 2025 ReputIA — Tous droits réservés</span>
    <div className="space-x-4 text-center md:text-right">
      <a href="/mentions-legales" className="hover:text-yellow-400">Mentions légales</a>
      <a href="/cgu" className="hover:text-yellow-400">CGU</a>
      <a href="/confidentialite" className="hover:text-yellow-400">Confidentialité</a>
      <span className="text-yellow-300">Contact : support@reputia.fr</span>
    </div>
  </div>
</footer>

    </div>
  )
}
