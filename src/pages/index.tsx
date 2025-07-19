
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
    <div className="min-h-screen flex flex-col justify-between bg-black text-white">
      <main className="flex flex-col items-center justify-center text-center px-4 py-12">
        <div className="mb-6">
          <Image src="/logo.png" alt="ReputIA Logo" width={80} height={80} />
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400">Optimisez votre fiche Google</h1>
        <p className="mt-4 text-lg md:text-xl">
          Gagnez en visibilité locale avec notre offre unique à <span className="font-bold text-yellow-300">99 €</span>.
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

        <div id="paypal-button-container" className="mt-10" />
        <p className="text-sm italic text-gray-400 mt-4">
          Paiement sécurisé par carte bancaire ou compte PayPal
        </p>
      </main>

      <footer className="w-full border-t border-gray-800 py-4 text-center text-sm text-gray-400 px-4">
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
