<script>
    import "../app.css";
    import Header from '../lib/components/Header.svelte';
    import Footer from '../lib/components/Footer.svelte';
    import { onMount } from 'svelte';

    let ipInfo = {};

    onMount(async () => {
        const request = await fetch("https://ipinfo.io/json?token=cdd985fd4d9857");
        const jsonResponse = await request.json();
        ipInfo = jsonResponse;

        console.log(ipInfo.ip, ipInfo.country);
    });
</script>

<svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
      rel="stylesheet"
    />
    
    <!-- AlpineJS -->
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
  
    <link rel="icon" type="image/ico" href="/favicon.ico" />
  
    <title>Gelateria Bongusto - Swiss Gelato</title>
    <meta
      name="description"
      content="Gelateria Bongusto makes Swiss Handmade Gelato with love, locally sourced, and organic ingredients. Visit us in Zurich, and St. Gallen."
    />
</svelte:head>

<body class="bg-gray-100 text-gray-900">
    <Header />
    <slot></slot>
    <Footer />
</body>
