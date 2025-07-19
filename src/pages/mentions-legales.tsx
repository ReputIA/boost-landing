'use client'

import Link from 'next/link'

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">Mentions légales</h1>

        <p className="mb-4">
          Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004
          pour la Confiance dans l’économie numérique, dite L.C.E.N., nous portons à la connaissance
          des utilisateurs et visiteurs du site <span className="font-semibold text-yellow-300">ReputIA</span> les informations suivantes :
        </p>

        <h2 className="text-2xl font-semibold text-yellow-300 mt-8 mb-2">Éditeur du site</h2>
        <p className="mb-4">
          Dénomination sociale : <strong>ReputIA</strong><br />
          Forme juridique : SASU<br />
          Responsable de la publication : Anthony RUIZ<br />
          Adresse : 24 av Marie Curie, 31600 Seysses<br />
          Email : support@reputia.fr<br />
          Numéro SIRET : 989 088 604 XXXXX<br />
        </p>

        <h2 className="text-2xl font-semibold text-yellow-300 mt-8 mb-2">Hébergement</h2>
        <p className="mb-4">
          Le site est hébergé par :<br />
          Nom : Vercel Inc.<br />
          Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
          Site :{' '}
          <a href="https://vercel.com" className="text-yellow-400 underline" target="_blank" rel="noopener noreferrer">
            https://vercel.com
          </a>
        </p>

        <h2 className="text-2xl font-semibold text-yellow-300 mt-8 mb-2">Propriété intellectuelle</h2>
        <p className="mb-4">
          Le site ReputIA et l’ensemble de son contenu (textes, images, logos, etc.) sont protégés par
          le droit d’auteur. Toute reproduction ou représentation totale ou partielle sans autorisation
          préalable écrite est interdite.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-300 mt-8 mb-2">Responsabilité</h2>
        <p className="mb-4">
          L’éditeur s’efforce de fournir des informations fiables et à jour, mais ne saurait être tenu
          responsable d’erreurs, d’omissions ou de résultats obtenus par un mauvais usage de ces informations.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-300 mt-8 mb-2">Données personnelles</h2>
        <p className="mb-4">
          Les données personnelles éventuellement collectées sur ce site (via les formulaires de
          contact ou paiement) sont traitées dans le respect du RGPD. Pour plus d’informations, consultez notre page{' '}
          <Link href="/confidentialite">
            <span className="text-yellow-400 underline">Politique de confidentialité</span>
          </Link>.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-300 mt-8 mb-2">Cookies</h2>
        <p className="mb-4">
          Le site peut utiliser des cookies à des fins de mesure d’audience ou de fonctionnement.
          En poursuivant votre navigation, vous acceptez l’utilisation des cookies.
        </p>

        <p className="text-sm text-gray-400 mt-12">Dernière mise à jour : 19 juillet 2025</p>
      </div>
    </div>
  )
}
