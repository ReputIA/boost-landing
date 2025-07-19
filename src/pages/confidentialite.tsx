'use client'

export default function Confidentialite() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">Politique de confidentialité</h1>

        <p className="mb-4">
          Cette politique de confidentialité décrit la manière dont ReputIA collecte, utilise et protège les données personnelles que vous nous fournissez lors de votre utilisation du site.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-300 mt-8 mb-2">1. Données collectées</h2>
        <p className="mb-4">
          Lorsque vous passez commande ou remplissez un formulaire, nous pouvons collecter :
          votre adresse e-mail, votre nom, le nom de votre entreprise, ainsi que votre moyen de paiement (via PayPal).
        </p>

        <h2 className="text-2xl font-semibold text-yellow-300 mt-8 mb-2">2. Finalité de la collecte</h2>
        <p className="mb-2">Vos données sont utilisées uniquement pour :</p>
        <ul className="list-disc list-inside pl-4 mb-4">
          <li>Traiter vos commandes</li>
          <li>Vous envoyer des informations liées à votre achat</li>
          <li>Émettre des factures</li>
          <li>Améliorer notre service</li>
        </ul>

        <h2 className="text-2xl font-semibold text-yellow-300 mt-8 mb-2">3. Conservation des données</h2>
        <p className="mb-4">
          Les données sont conservées pendant la durée légale nécessaire à des fins fiscales et comptables, ou jusqu’à demande de suppression.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-300 mt-8 mb-2">4. Partage des données</h2>
        <p className="mb-4">
          Vos données ne sont jamais revendues. Elles peuvent être transmises uniquement à nos prestataires techniques (comme PayPal ou l’hébergeur du site) dans le strict cadre de leur mission.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-300 mt-8 mb-2">5. Sécurité</h2>
        <p className="mb-4">
          Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour protéger vos données personnelles (cryptage, accès sécurisé, hébergement sécurisé).
        </p>

        <h2 className="text-2xl font-semibold text-yellow-300 mt-8 mb-2">6. Vos droits</h2>
        <p className="mb-4">
          Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’opposition, de limitation et de suppression de vos données. Pour exercer vos droits, contactez :{' '}
          <span className="text-yellow-300">support@reputia.fr</span>
        </p>

        <h2 className="text-2xl font-semibold text-yellow-300 mt-8 mb-2">7. Cookies</h2>
        <p className="mb-4">
          Le site peut utiliser des cookies de fonctionnement ou de mesure d’audience anonymes. Aucun cookie publicitaire n’est déployé à ce jour.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-300 mt-8 mb-2">8. Contact</h2>
        <p className="mb-4">
          Pour toute question liée à cette politique de confidentialité, vous pouvez écrire à :{' '}
          <span className="text-yellow-300">support@reputia.fr</span>
        </p>

        <p className="mt-8 text-sm text-gray-400 italic">Dernière mise à jour : 19 juillet 2025</p>
      </div>
    </div>
  )
}
