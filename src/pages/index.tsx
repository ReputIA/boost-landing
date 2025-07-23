'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

type PayPalActions = {
  order: {
    create: (options: Record<string, unknown>) => Promise<string>
    capture: () => Promise<{
      payer: {
        name: {
          given_name: string
        }
      }
    }>
  }
}

declare global {
  interface Window {
    paypal: {
      Buttons: (options: Record<string, unknown>) => {
        render: (selector: string) => void
      }
    }
  }
}

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.paypal.com/sdk/js?client-id=ASunnmubagP9G5Dsrr0p9MLbLQt_Lsjc7sORbKDlAH4GFY8ErCX5zye9FEMKU405NL8VWQe8NhaO82Qj&currency=EUR'
    script.addEventListener('load', () => {
      if (typeof window !== 'undefined' && window.paypal) {
        window.paypal.Buttons({
          style: {
            color: 'gold',
            shape: 'pill',
            label: 'pay',
            layout: 'vertical',
          },
          createOrder: (_data: unknown, actions: PayPalActions) => {
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
          onApprove: (_data: unknown, actions: PayPalActions) => {
            return actions.order.capture().then((details) => {
              alert(`Merci ${details.payer.name.given_name}, votre paiement a été validé ✅`)
            })
          },
          onError: (err: unknown) => {
            console.error('Erreur PayPal :', err)
            alert('Une erreur est survenue lors du paiement.')
          },
        }).render('#paypal-button-container')
      }
    })
    document.body.appendChild(script)
  }, [])

  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-white relative">
      <main className="flex flex-col items-center justify-center text-center px-4 py-12">
        <div className="mb-6">
          <Image src="/logo.png" alt="ReputIA Logo" width={80} height={80} />
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400">Optimisez votre fiche Google</h1>
        <p className="mt-4 text-lg md:text-xl">
          Gagnez en visibilité locale avec notre offre unique à <span className="font-bold text-yellow-300">99 € TTC</span>.
        </p>

        <ul className="mt-8 text-left space-y-3 text-lg">
          <li>✅ Analyse complète de votre fiche</li>
          <li>✅ Mots-clés locaux optimisés</li>
          <li>✅ Stratégie d’avis clients</li>
          <li>✅ Boost sur Google Maps</li>
        </ul>

        <div className="mt-12 w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-yellow-400 text-center mb-6">Ils nous ont fait confiance</h2>
          <div className="grid gap-4">
            {[
              {
                message: '“J’ai vu une hausse immédiate de mes appels après l’optimisation. Un service pro et efficace.”',
                name: '— Julien D., Plombier à Lyon',
              },
              {
                message: '“Simple, rapide, et super bien expliqué. Je recommande les yeux fermés !”',
                name: '— Sarah M., Coiffeuse à Paris',
              },
              {
                message: '“Mon salon est passé de la 4ᵉ à la 1ʳᵉ position sur Google Maps en 2 semaines.”',
                name: '— Mehdi R., Gérant d’un barber shop',
              },
              {
                message: '“Enfin une vraie solution pour booster ma visibilité sans me ruiner.”',
                name: '— Claire B., Photographe indépendante',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-black border border-gray-700 p-4 rounded-xl text-left">
                <p className="text-sm text-white">{testimonial.message}</p>
                <p className="text-yellow-300 mt-2 font-medium text-sm">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION COMMENT ÇA MARCHE */}
        <div className="mt-12 w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-yellow-400 text-center mb-6">🛠️ Comment ça marche ?</h2>
          <ol className="space-y-4 text-left text-base text-gray-300 px-4">
            <li><strong>1.</strong> Cliquez sur le bouton de paiement sécurisé via PayPal.</li>
            <li><strong>2.</strong> Effectuez le paiement avec une adresse e-mail valide.</li>
            <li><strong>3.</strong> Sous 24h, notre équipe vous recontacte par e-mail pour débuter l’optimisation.</li>
            <li><strong>4.</strong> Vous recevez un compte rendu détaillé et les actions mises en place.</li>
          </ol>
          <p className="mt-6 text-sm text-center text-gray-400">
            Aucun compte à créer, service simple et rapide.
          </p>
        </div>

        {/* BOUTON PAYPAL */}
        <div id="paypal-button-container" className="mt-10" />
        <p className="text-sm italic text-gray-400 mt-4">
          Paiement sécurisé par carte bancaire ou compte PayPal
        </p>
      </main>

      {/* ✅ BOUTON FLOTTANT WHATSAPP */}
      <Link
        href="https://wa.me/33674326186" // ← remplace ici par ton numéro
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition duration-200"
        aria-label="Contact WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          width="28"
          height="28"
        >
          <path d="M20.52 3.48a11.82 11.82 0 00-16.7 0 11.77 11.77 0 00-3.43 8.39 11.63 11.63 0 001.59 5.86l-1.63 5.95 6.12-1.6a11.76 11.76 0 0015.05-5.81 11.82 11.82 0 00-1-12.79zM12 21.26a9.3 9.3 0 01-4.74-1.29l-.34-.2-3.63.95.96-3.52-.22-.35a9.3 9.3 0 0114.5-11.08 9.36 9.36 0 01-6.53 15.49zm5-6.93c-.27-.13-1.6-.79-1.85-.88s-.43-.13-.61.14-.7.88-.85 1.06-.31.2-.58.07a7.7 7.7 0 01-3.77-3.3c-.29-.5.29-.46.82-1.54.09-.19 0-.36 0-.49s-.61-1.5-.84-2.06a.44.44 0 00-.63-.2c-.27.12-1.43.69-1.43 1.7a6.68 6.68 0 001.4 3.72 7.83 7.83 0 006.4 3.55c.45 0 .87 0 1.27-.06a2.05 2.05 0 001.3-.9c.2-.28.2-.5.13-.57s-.24-.18-.5-.3z" />
        </svg>
      </Link>

      <footer className="w-full border-t border-gray-800 py-4 text-center text-sm text-gray-400 px-4 mt-6">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
          <span className="mb-2 md:mb-0">© 2025 ReputIA — Tous droits réservés</span>
          <div className="space-x-4 text-center md:text-right">
            <Link href="/mentions-legales" className="hover:text-yellow-400">Mentions légales</Link>
            <Link href="/cgu" className="hover:text-yellow-400">CGU</Link>
            <Link href="/confidentialite" className="hover:text-yellow-400">Confidentialité</Link>
            <span className="text-yellow-300">Contact : support@reputia.fr</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
