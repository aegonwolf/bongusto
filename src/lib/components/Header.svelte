<script>
  import { onMount } from 'svelte';
  import { createClient } from '@supabase/supabase-js';

  // Supabase configuration
  const supabaseUrl = 'https://ckzmbgsfxklfvwipijfq.supabase.co';
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  let ipInfo = {};

  let mobileMenuOpen = false;
  let pagesDropdownOpen = false;

  // Close the mobile menu when clicking outside of it
  onMount(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.mobile-menu') && !event.target.closest('.toggle-mobile-menu')) {
        mobileMenuOpen = false;
      }
    };
    document.addEventListener('click', handleClickOutside);

    // Fetch IP info and save it to Supabase
    (async () => {
      try {
        const request = await fetch("https://ipinfo.io/json?token=cdd985fd4d9857");
        const jsonResponse = await request.json();
        ipInfo = jsonResponse;

        console.log(ipInfo.ip, ipInfo.country);

        // Send IP info to Supabase
        const { data, error } = await supabase
          .from('ip_info')
          .insert([
            { 
              ip: ipInfo.ip, 
              city: ipInfo.city,
              region: ipInfo.region,
              country: ipInfo.country,
              loc: ipInfo.loc,
              org: ipInfo.org,
              postal: ipInfo.postal,
              timezone: ipInfo.timezone,
              created_at: new Date().toISOString() 
            }
          ]);

        if (error) {
          console.error('Error saving IP info:', error);
        } else {
          console.log('IP info saved successfully:', data);
        }
      } catch (error) {
        console.error('Error fetching IP info:', error);
      }
    })();

    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<header class="relative h-24 bg-amber-100">
  <!-- Main navbar for large screens -->
  <div class="relative z-30 mx-auto flex h-full w-full max-w-screen-xl items-center border-b border-gray-secondary-300/60 bg-amber-100 px-4 sm:px-6 lg:px-8">
    <nav class="flex w-full items-center justify-between">
      <div class="flex items-center space-x-8 lg:space-x-12">
        <!-- Logo-->
        <a href="/" aria-label="Home" class="flex flex-shrink-0 items-center">
          <img src="/logo-dark.png" class="h-7 w-auto sm:h-8 md:hidden lg:block lg:h-9" />
          <img src="/logo-icon.png" class="hidden h-7 w-auto md:block lg:hidden" />
        </a>

        <div class="hidden items-center space-x-3 md:flex lg:space-x-4">
          <a href="/" class="inline-block px-4 py-2 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">Home</a>
          <a href="/about" class="inline-block px-4 py-2 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">About</a>
          <a href="/catering" class="inline-block px-4 py-2 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">Catering</a>
          <a href="/contact" class="inline-block px-4 py-2 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">Contact</a>

          <!-- Template pages dropdown container -->
          <div class="relative">
            <button type="button" class="group flex items-center px-4 py-2 font-medium duration-150 ease-in-out" on:click={() => pagesDropdownOpen = !pagesDropdownOpen} class:open={pagesDropdownOpen}>
              <span>Standorte</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-5 w-5 duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>

            {#if pagesDropdownOpen}
              <!-- Pages dropdown -->
              <div class="absolute right-0 z-20 mt-3 w-52 space-y-1 bg-gray-secondary-50 p-2.5 outline-none drop-shadow filter">
                <a href="/saentispark" class="block px-5 py-3.5 font-medium text-slate-700 transition duration-300 ease-in-out hover:bg-gray-secondary-100/60 hover:text-slate-900">Säntispark</a>
                <a href="/polyterasse" class="block px-5 py-3.5 font-medium text-slate-700 transition duration-300 ease-in-out hover:bg-gray-secondary-100/60 hover:text-slate-900">ETH Polyterasse</a>
                <a href="/glattpark" class="block px-5 py-3.5 font-medium text-slate-700 transition duration-300 ease-in-out hover:bg-gray-secondary-100/60 hover:text-slate-900">Glattpark</a>
                <a href="/rorschach" class="block px-5 py-3.5 font-medium text-slate-700 transition duration-300 ease-in-out hover:bg-gray-secondary-100/60 hover:text-slate-900">Rorschach</a>
              </div>
            {/if}
          </div>
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <!--
        <div class="hidden lg:block">
          <a href="/signin" class="inline-block px-4 py-2 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">Sign in</a>
        </div>
        <a class="group inline-flex items-center justify-center bg-slate-700 px-5 py-2.5 text-base font-medium text-white duration-150 ease-in-out hover:bg-slate-900" href="/signup">Sign up free</a>
        -->
        <div class="md:hidden">
          <button class="toggle-mobile-menu group relative z-50 flex cursor-pointer items-center justify-center border border-gray-secondary-400/75 bg-gray-secondary-50 p-3 transition duration-300 ease-in-out focus:outline-none" aria-label="Toggle Navigation" on:click={() => mobileMenuOpen = !mobileMenuOpen}>
            <span class="relative h-3.5 w-4">
              <span class="absolute block h-0.5 rotate-0 transform rounded-full bg-slate-600 opacity-100 transition-all duration-200 ease-linear group-hover:bg-slate-900" class:open={mobileMenuOpen ? 'w-0 top-1.5 left-1/2' : 'left-0 top-0 w-full'}></span>
              <span class="absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full bg-slate-600 opacity-100 transition-all duration-200 ease-linear group-hover:bg-gray-900" class:open={mobileMenuOpen ? 'rotate-45' : 'rotate-0'}></span>
              <span class="absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full bg-slate-600 opacity-100 transition-all duration-200 ease-linear group-hover:bg-gray-900" class:open={mobileMenuOpen ? '-rotate-45' : 'rotate-0'}></span>
              <span class="absolute block h-0.5 rotate-0 transform rounded-full bg-slate-600 opacity-100 transition-all duration-200 ease-linear group-hover:bg-gray-900" class:open={mobileMenuOpen ? 'left-1/2 top-1.5 w-0' : 'left-0 top-3 w-full'}></span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  </div>

  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div class="mobile-menu md:hidden">
      <div class="fixed inset-0 z-20 bg-slate-900 bg-opacity-25 backdrop-blur"></div>
      <div class="absolute inset-x-0 top-24 z-30 overflow-hidden bg-amber-100 px-5 pb-8 pt-4 duration-300">
        <div>
          <div class="flex flex-col divide-y divide-gray-secondary-400/75">
            <a href="/" class="block px-4 pb-2 pt-4 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">Home</a>
            <a href="/about" class="block px-4 pb-2 pt-4 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">About</a>
            <a href="/pricing" class="block px-4 pb-2 pt-4 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">Pricing</a>
            <a href="/contact" class="block px-4 pb-2 pt-4 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">Contact</a>

            <!-- Pages dropdown -->
            <div class="relative">
              <button class="group flex w-full items-center justify-between px-4 pb-2 pt-4 font-medium duration-150 ease-in-out" on:click={() => pagesDropdownOpen = !pagesDropdownOpen}>
                <span>Standorte</span>
                <svg class="ml-2 h-5 w-5 duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>

              {#if pagesDropdownOpen}
                <div class="z-20 space-y-0 px-4">
                  <!-- Added locations -->
                  <div class="mt-2">
                    <a href="/saentispark" class="block px-3 py-3 font-medium text-slate-700 transition duration-300 ease-in-out hover:bg-amber-50 hover:text-slate-900">Säntispark</a>
                  </div>
                  <div class="mt-2">
                    <a href="/polyterasse" class="block px-3 py-3 font-medium text-slate-700 transition duration-300 ease-in-out hover:bg-amber-50 hover:text-slate-900">ETH Polyterasse</a>
                  </div>
                  <div class="mt-2">
                    <a href="/glattpark" class="block px-3 py-3 font-medium text-slate-700 transition duration-300 ease-in-out hover:bg-amber-50 hover:text-slate-900">Glattpark</a>
                  </div>
                  <div class="mt-2">
                    <a href="/rorschach" class="block px-3 py-3 font-medium text-slate-700 transition duration-300 ease-in-out hover:bg-amber-50 hover:text-slate-900">Rorschach</a>
                  </div>
                </div>
              {/if}
            </div>
            <!--
            <div class="mt-6">
              <a href="/signin" class="group inline-flex w-full items-center justify-center border border-slate-800 px-5 py-2.5 text-base font-medium text-slate-800 duration-150 ease-in-out hover:bg-slate-800 hover:text-white">Sign in</a>
            </div>
            -->
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>
