'use client'

import Link from 'next/link'

export default function CGU() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-6">Conditions Générales d’Utilisation</h1>

        <p className="mb-4">
          Les présentes conditions générales d’utilisation (dites « CGU ») ont pour objet l’encadrement juridique des modalités de mise à disposition du site ReputIA et des services proposés.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-2 text-yellow-300">Article 1 – Accès au site</h2>
        <p className="mb-4">
          Le site est accessible gratuitement en tout lieu à tout utilisateur disposant d’un accès à Internet. Tous les frais supportés par l’utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-2 text-yellow-300">Article 2 – Propriété intellectuelle</h2>
        <p className="mb-4">
          Les marques, logos, signes ainsi que tous les contenus du site (textes, images, sons…) font l’objet d’une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d’auteur.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-2 text-yellow-300">Article 3 – Responsabilité</h2>
        <p className="mb-4">
          ReputIA s’efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes ou des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-2 text-yellow-300">Article 4 – Données personnelles</h2>
        <p className="mb-4">
          L’utilisateur doit consulter la page{' '}
          <Link href="/confidentialite">
            <span className="text-yellow-400 underline">Politique de confidentialité</span>
          </Link>{' '}
          pour connaître l’usage de ses données.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-2 text-yellow-300">Article 5 – Évolution des CGU</h2>
        <p className="mb-4">
          ReputIA se réserve le droit de modifier les clauses de ces CGU à tout moment et sans justification. Les utilisateurs sont invités à les consulter régulièrement.
        </p>

        <p className="mt-8 text-sm text-gray-400 italic">
          Dernière mise à jour : juillet 2025
        </p>
      </div>
    </div>
  )
}
