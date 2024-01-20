import { createI18n } from 'vue-i18n'

const messages = {
    fr: {
        greeting: 'Bonjour !',

        // Navbar
        home: 'Accueil',
        help: 'Aide',
        search: 'Recherche',
        my_account: 'Mon compte',
        logout: 'Déconnexion',

        // Home
        section1_text1: 'Quand la mobilité devient un jeu d\'enfant !',

        typed_text1: 'Que vous cherchiez à louer une voiture pour une escapade',
        typed_text2: 'Que vous cherchiez à acheter la voiture de vos rêves',
        typed_text3: 'Que vous cherchiez à trouver des gros engins pour vos projets',
        typed_text4: 'Que vous cherchiez à réserver des billets de bus pour vos voyages',
        typed_text5: 'Hupe est là pour simplifier chaque étape de votre parcours',

        section2_title: 'Que voulez-vous faire ?',
        section3_title: 'Compagnies de locations populaires',
        section4_title: 'Véhicules populaires',
        section5_title: 'Compagnies de transport populaires',
        section6_title: 'Destinations populaires',
        section7_title: 'Compagnies de location de gros engins populaires',
        section8_title: 'Gros engins populaires',
        section9_title: 'Compagnies de vente de véhicules populaires',
        section10_title: 'Ventes populaires',
        section11_title: 'Actualités',

        title1: 'Louer un véhicule',
        title2: 'Réserver un ticket de bus',
        title3: 'Louer un gros engin',
        title4: 'Acheter un véhicule',

        text1: 'Découvrez le confort, la flexibilité et l\'aventure avec Hupe',
        text2: 'Embarquez pour l\'aventure avec nos réservations de bus',
        text3: 'Des engins puissants pour des résultats exceptionnels',
        text4: 'Le plaisir de conduire débute avec la sélection Hupe',
        
        see_much: 'Voir plus',

        popular_text1: 'Explorez les compagnies de location les plus appréciées par les voyageurs du monde entier. Faites confiance à l\'expérience et à la qualité',
        popular_text2: 'Découvrez les véhicules les plus prisés pour votre prochain voyage. Confort, style et fiabilité, nous avons tout ce dont vous avez besoin',
        popular_text3: 'Simplifiez votre trajet en choisissant parmi les compagnies de transport les plus populaires. Voyagez en toute tranquillité avec nos partenaires de confiance',
        popular_text4: 'Explorez les destinations les plus en vogue du moment. Trouvez l\'inspiration pour votre prochain voyage et vivez des expériences inoubliables',
        popular_text5: 'Simplifiez votre trajet en choisissant parmi les compagnies de transport les plus populaires. Voyagez en toute tranquillité avec nos partenaires de confiance',
        popular_text6: 'Découvrez les véhicules les plus prisés pour votre prochain voyage. Confort, style et fiabilité, nous avons tout ce dont vous avez besoin',
        popular_text7: 'Simplifiez votre trajet en choisissant parmi les compagnies de transport les plus populaires. Voyagez en toute tranquillité avec nos partenaires de confiance',
        popular_text8: 'Découvrez les véhicules les plus prisés pour votre prochain voyage. Confort, style et fiabilité, nous avons tout ce dont vous avez besoin',
        popular_text9: 'Restez a jour avec les dernières nouvelles du monde du voyage . Les informations les plus récentes sur les destinations, les promotion et plus encore',

        card_title1: 'Comment Hupe Simplifie Vos Voyages Quotidiens',
        card_title2: 'Les Avantages de Louer un Véhicule avec Hupe',
        card_title3: 'Top 10 Destinations Incontournables à Explorer',
        card_title4: 'L\'Impact de Hupe sur l\'Industrie de la Location',

        card_date: '8 mars 2023',

        card_text1: 'Dans le tourbillon quotidien de la vie urbaine, chaque instant compte',
        card_text2: 'Louer un véhicule avec Hupe va bien au-delà d\'une simple transaction',
        card_text3: 'À travers les huit joyaux de l\'UEMOA, Hupe vous invite à découvrir',
        card_text4: 'L\'évolution rapide de l\'industrie de la location de véhicules a trouvé un nouveau',

        newsletter_title: 'Inscrivez vous à notre Newsletter',
        newsletter_text: 'Veuillez renseignez votre adresse mail, pour être au courant de toutes nos nouveautés',
        newsletter_placeholder: 'Adresse email',
        newsletter_submit: 'Envoyer',

        // Footer
        news: 'Informations',
        faq: ''
    },
    en: {
        greeting: 'Hello!',

        // Navbar
        home: 'Home',
        help: 'Help',
        search: 'Search',
        my_account: 'My account',
        logout: 'Logout',

        // Home
        section1_text1: 'When mobility becomes child\'s play!',

        typed_text1: 'Whether you\'re looking to rent a car for a getaway',
        typed_text2: 'Whether you\'re looking to buy the car of your dreams',
        typed_text3: 'Whether you\'re looking to find big machines for your projects',
        typed_text4: 'Whether you are looking to book bus tickets for your travels',
        typed_text5: 'Hupe is here to simplify every step of your journey',

        section2_title: 'What do you want to do?',
        section3_title: 'Popular Rental Companies',
        section4_title: 'Popular Vehicles',
        section5_title: 'Popular Transportation Companies',
        section6_title: 'Popular Destinations',
        section7_title: 'Popular Large Gear Rental Companies',
        section8_title: 'Popular Large Machines',
        section9_title: 'Popular Vehicle Sales Companies',
        section10_title: 'Popular Sales',
        section11_title: 'News',

        title1: 'Rent a vehicle',
        title2: 'Book a bus ticket',
        title3: 'Renting a large machine',
        title4: 'Buying a Vehicle',

        text1: 'Discover comfort experience, flexibility and adventure with Hupe',
        text2: 'Embark on an adventure with our bus bookings',
        text3: 'Powerful machines for exceptional results',
        text4: 'Driving pleasure starts with the Hupe selection',

        see_much: 'See more',

        popular_text1: 'Explore the most popular rental companies for travelers around the world. Rely on experience and quality',
        popular_text2: 'Discover the most sought-after vehicles for your next trip. Comfort, style and reliability, we have everything you need',
        popular_text3: 'Simplify your journey by choosing from the most popular transportation companies. Travel with peace of mind with our trusted partners',
        popular_text4: 'Explore today\'s hottest destinations. Get inspired for your next trip and enjoy unforgettable experiences',
        popular_text5: 'Simplify your journey by choosing from the most popular transportation companies. Travel with peace of mind with our trusted partners',
        popular_text6: 'Discover the most sought-after vehicles for your next trip. Comfort, style and reliability, we have everything you need',
        popular_text7: 'Simplify your journey by choosing from the most popular transportation companies. Travel with peace of mind with our trusted partners',
        popular_text8: 'Discover the most sought-after vehicles for your next trip. Comfort, style and reliability, we have everything you need',
        popular_text9: 'Stay up to date with the latest news from the world of travel. The most up-to-date information on destinations, promotions and more',

        card_title1: 'How Hupe simplifies your daily journeys',
        card_title2: 'The Advantages of Renting a Car with Hupe',
        card_title3: 'Top 10 Must-See Destinations to Explore',
        card_title4: 'Hupe\'s Impact on the Rental Industry',

        card_date: 'March 8, 2023',

        card_text1: 'In the daily hustle and bustle of city life, every moment counts',
        card_text2: 'Renting a vehicle with Hupe is much more than just a transaction',
        card_text3: 'Through the eight jewels of the WAEMU, Hupe invites you to discover',
        card_text4: 'The rapidly evolving car rental industry has found a new',

        newsletter_title: 'Subscribe to our Newsletter',
        newsletter_text: 'Please enter your email address to keep up to date with all our news',
        newsletter_placeholder: 'Email address',
        newsletter_submit: 'Send'
    }
}

const i18n = createI18n({
    locale: 'fr',
    allowComposition: true,
    messages
})

export default i18n