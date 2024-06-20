<script>
  import TeamSection from './TeamSection.svelte';

  const teamMembers = [
    {
      name: "Hansi",
      role: "Founder and Gelato Maker",
      description: "Hotelier from the famous Swiss Hotel School in Lausanne, a service industry expert with extensive experience.",
      imgSrc: "images/avatars/hansi.png",
      favoriteFlavor: "Stracciatella"
    },
    {
      name: "Brigitte",
      role: "Founder and Gelato Maker",
      description: "Learned nurse, caring for newborns before embarking on her gelato adventure.",
      imgSrc: "images/avatars/brigitte.png",
      favoriteFlavor: "Pistachio"
    },
    {
      name: "Oliver",
      role: "ML Engineer and Administrator",
      description: "",
      imgSrc: "images/avatars/oli.png",
      favoriteFlavor: "Vanilla"
    },
    {
      name: "ETH Zurich Friends",
      role: "Supportive Community",
      description: "",
      imgSrc: "images/avatars/team-03.jpg",
      favoriteFlavor: "Mango"
    },
    {
      name: "Ghazi",
      role: "Collaborator, Family",
      description: "",
      imgSrc: "images/avatars/eshaghazi.png",
      favoriteFlavor: "Chocolate"
    },
    {
      name: "Simon",
      role: "Matcha Connoisseur",
      description: "",
      imgSrc: "images/avatars/simon.png",
      favoriteFlavor: "Raspberry"
    },
    {
      name: "Janis",
      role: "Green Thumb",
      description: "",
      imgSrc: "images/avatars/janis.png",
      favoriteFlavor: "Coconut"
    },
    {
      name: "Esha",
      role: "Smile Ambassador",
      description: "",
      imgSrc: "images/avatars/eshaghazi.png",
      favoriteFlavor: "Lemon"
    },
    {
      name: "Saya",
      role: "Youthful Spirit",
      description: "",
      imgSrc: "images/avatars/saya.png",
      favoriteFlavor: "Nutella"
    }
  ];
</script>

<TeamSection teamMembers={teamMembers} />
