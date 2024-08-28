<script>
  import { language } from '../stores/languages'; // Import the language store
  import TeamSection from './TeamSection.svelte';

  let currentLanguage;

  // Subscribe to the language store
  const unsubscribe = language.subscribe(value => {
    currentLanguage = value;
  });

  const teamMembers = [
    {
      name: "Hansi",
      role: $language === 'en' ? "Founder and Gelato Maker" : "Gründer und Gelato-Macher",
      description: $language === 'en' ? 
        "Hotelier from the famous Swiss Hotel School in Lausanne, a service industry expert with extensive experience." : 
        "Hotelier von der berühmten Schweizer Hotelfachschule in Lausanne, ein Branchenexperte mit umfangreicher Erfahrung.",
      imgSrc: "images/avatars/hansi.png",
      favoriteFlavor: "Stracciatella"
    },
    {
      name: "Brigitte",
      role: $language === 'en' ? "Founder and Gelato Maker" : "Gründerin und Gelato-Macherin",
      description: $language === 'en' ? 
        "Learned nurse, caring for newborns before embarking on her gelato adventure." : 
        "Gelernte Krankenschwester, die sich um Neugeborene kümmerte, bevor sie ihr Gelato-Abenteuer begann.",
      imgSrc: "images/avatars/brigitte.png",
      favoriteFlavor: "Pistachio"
    },
    {
      name: "ETH Zurich Friends",
      role: $language === 'en' ? "Supportive Community" : "Unterstützende Gemeinschaft",
      description: "", // Assuming no description needed for this role
      imgSrc: "images/avatars/ethfriends.png",
      favoriteFlavor: "Mango"
    },
    {
      name: "Ghazi",
      role: $language === 'en' ? "Collaborator, Family" : "Mitarbeiter, Familie",
      description: "", // Assuming no description needed for this role
      imgSrc: "images/avatars/eshaghazi.png",
      favoriteFlavor: "Chocolate"
    },
    {
      name: "Simon",
      role: $language === 'en' ? "Matcha Connoisseur" : "Matcha-Kenner",
      description: "", // Assuming no description needed for this role
      imgSrc: "images/avatars/simon.png",
      favoriteFlavor: "Raspberry"
    },
    {
      name: "Janis",
      role: $language === 'en' ? "Green Thumb" : "Grüner Daumen",
      description: "", // Assuming no description needed for this role
      imgSrc: "images/avatars/janis.png",
      favoriteFlavor: "Coconut"
    },
    {
      name: "Oliver",
      role: $language === 'en' ? "ML Engineer and Administrator" : "ML-Ingenieur und Administrator",
      description: "", // Assuming no description needed for this role
      imgSrc: "images/avatars/oli.png",
      favoriteFlavor: "Vanilla"
    },
    {
      name: "Esha",
      role: $language === 'en' ? "Smile Ambassador" : "Lächel-Botschafter",
      description: "", // Assuming no description needed for this role
      imgSrc: "images/avatars/eshaghazi.png",
      favoriteFlavor: "Lemon"
    },
    {
      name: "Saya",
      role: $language === 'en' ? "Youthful Spirit" : "Jugendlicher Geist",
      description: "", // Assuming no description needed for this role
      imgSrc: "images/avatars/saya.png",
      favoriteFlavor: "Nutella"
    }
  ];
</script>

<TeamSection teamMembers={teamMembers} />
