<script>
  import { onMount, onDestroy } from 'svelte';
  import { page } from '$app/stores';
  import { language } from '../stores/languages'; // Import the language store

  let mobileMenuOpen = false;
  let pagesDropdownOpen = false;
  let currentLanguage = 'en';

  // Subscribe to the language store
  $: $language = currentLanguage;

  // Function to toggle language
  function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'de' : 'en';
    language.set(currentLanguage);
  }

  onMount(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.mobile-menu') && !event.target.closest('.toggle-mobile-menu')) {
        mobileMenuOpen = false;
      }
      if (!event.target.closest('.pages-dropdown') && !event.target.closest('.toggle-pages-dropdown')) {
        pagesDropdownOpen = false;
      }
    };
    document.addEventListener('click', handleClickOutside);

    const unsubscribe = page.subscribe(() => {
      pagesDropdownOpen = false;
      mobileMenuOpen = false;
    });

    return () => {
      document.removeEventListener('click', handleClickOutside);
      unsubscribe();
    };
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
          <a href="/" class="inline-block px-4 py-2 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">
            {$language === 'en' ? 'Home' : 'Startseite'}
          </a>
          <a href="/about" class="inline-block px-4 py-2 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">
            {$language === 'en' ? 'About' : 'Über uns'}
          </a>
          <a href="/catering" class="inline-block px-4 py-2 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">
            {$language === 'en' ? 'Catering' : 'Catering'}
          </a>
          <a href="/contact" class="inline-block px-4 py-2 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">
            {$language === 'en' ? 'Contact' : 'Kontakt'}
          </a>

          <!-- Template pages dropdown container -->
          <div class="relative pages-dropdown">
            <button type="button" class="toggle-pages-dropdown group flex items-center px-4 py-2 font-medium duration-150 ease-in-out" on:click={() => pagesDropdownOpen = !pagesDropdownOpen} class:open={pagesDropdownOpen}>
              <span>{$language === 'en' ? 'Locations' : 'Standorte'}</span>
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
                <a href="/niederdorf" class="block px-5 py-3.5 font-medium text-slate-700 transition duration-300 ease-in-out hover:bg-gray-secondary-100/60 hover:text-slate-900">Niederdorf</a>
              </div>
            {/if}
          </div>
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <button on:click={toggleLanguage} class="text-slate-700 hover:bg-amber-50 hover:text-slate-900 px-4 py-2 font-medium">
          {$language === 'en' ? 'DE' : 'EN'}
        </button>
        
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
            <a href="/" class="block px-4 pb-2 pt-4 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">
              {$language === 'en' ? 'Home' : 'Startseite'}
            </a>
            <a href="/about" class="block px-4 pb-2 pt-4 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">
              {$language === 'en' ? 'About' : 'Über uns'}
            </a>
            <a href="/pricing" class="block px-4 pb-2 pt-4 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">
              {$language === 'en' ? 'Pricing' : 'Preise'}
            </a>
            <a href="/contact" class="block px-4 pb-2 pt-4 font-medium text-slate-700 hover:bg-amber-50 hover:text-slate-900">
              {$language === 'en' ? 'Contact' : 'Kontakt'}
            </a>

            <!-- Pages dropdown -->
            <div class="relative pages-dropdown">
              <button class="toggle-pages-dropdown group flex w-full items-center justify-between px-4 pb-2 pt-4 font-medium duration-150 ease-in-out" on:click={() => pagesDropdownOpen = !pagesDropdownOpen}>
                <span>{$language === 'en' ? 'Locations' : 'Standorte'}</span>
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
                  <div class="mt-2">
                    <a href="/niederdorf" class="block px-3 py-3 font-medium text-slate-700 transition duration-300 ease-in-out hover:bg-amber-50 hover:text-slate-900">Niederdorf</a>
                  </div>
                </div>
              {/if}
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>
