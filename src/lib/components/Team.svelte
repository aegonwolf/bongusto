<script>
  import TeamSection from './TeamSection.svelte';

  const teamMembers = [
    {
      name: "Hansi",
      role: "Founder and Gelato Maker",
      description: "Hotelier from the famous Swiss Hotel School in Lausanne, a service industry expert with extensive experience.",
      imgSrc: "images/avatars/team-01.jpg",
      favoriteFlavor: "Stracciatella"
    },
    {
      name: "Brigitte",
      role: "Founder and Gelato Maker",
      description: "Learned nurse, caring for newborns before embarking on her gelato adventure.",
      imgSrc: "images/avatars/team-02.jpg",
      favoriteFlavor: "Pistachio"
    },
    {
      name: "Oliver",
      role: "ML Engineer and Administrator",
      description: "",
      imgSrc: "images/avatars/team-02.jpg",
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
      imgSrc: "images/avatars/team-05.jpg",
      favoriteFlavor: "Chocolate"
    },
    {
      name: "Simon",
      role: "Matcha Connoisseur",
      description: "",
      imgSrc: "images/avatars/team-06.jpg",
      favoriteFlavor: "Raspberry"
    },
    {
      name: "Janis",
      role: "Green Thumb",
      description: "",
      imgSrc: "images/avatars/team-07.jpg",
      favoriteFlavor: "Coconut"
    },
    {
      name: "Esha",
      role: "Smile Ambassador",
      description: "",
      imgSrc: "images/avatars/team-08.jpg",
      favoriteFlavor: "Lemon"
    },
    {
      name: "Saya",
      role: "Youthful Spirit",
      description: "",
      imgSrc: "images/avatars/team-09.jpg",
      favoriteFlavor: "Hazelnut"
    }
  ];
</script>

<TeamSection teamMembers={teamMembers} />
