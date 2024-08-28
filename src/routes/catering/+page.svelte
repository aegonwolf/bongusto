<script>
    import { language } from '$lib/stores/languages';
    import { onMount } from 'svelte';
  
    let lang;
    // let currentLanguage;

  // Subscribe to the language store
  const unsubscribe = language.subscribe(value => {
    lang = value;
  });

  // Cleanup on destroy
  import { onDestroy } from 'svelte';
  onDestroy(() => {
    unsubscribe();
  });
  </script>
  
  <!-- Catering Section -->
  <section class="relative overflow-hidden bg-amber-100 pt-16 sm:pt-24">
      <!-- Header -->
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto flex max-w-lg flex-col items-center sm:max-w-xl md:max-w-2xl lg:mx-0 lg:max-w-none">
              <h1 class="text-center text-4xl font-semibold leading-snug text-slate-900 sm:text-5xl sm:leading-snug md:mx-auto md:max-w-4xl xl:mx-0">
                  {lang === 'en' ? 'Choose a Catering Plan That Suits Your Needs' : 'Wählen Sie einen Catering-Plan, der Ihren Bedürfnissen entspricht'}
              </h1>
              <p class="mx-auto mt-5 max-w-xl text-center text-lg leading-relaxed text-slate-700 sm:mt-6">
                  {lang === 'en'
                      ? 'At our Gelateria, we offer a range of catering services to make your event unforgettable. Whether it\'s a small gathering or a large celebration, we have the perfect solution for you.'
                      : 'In unserer Gelateria bieten wir eine Reihe von Catering-Services an, um Ihre Veranstaltung unvergesslich zu machen. Ob kleine Feier oder große Veranstaltung, wir haben die perfekte Lösung für Sie.'}
              </p>
          </div>
      </div>
      <div class="relative pt-20">
          <!-- Background -->
          <div class="absolute inset-0 flex flex-col" aria-hidden="true">
              <div class="flex-1 bg-amber-100"></div>
              <div class="w-full flex-1 bg-vanilla"></div>
              <div class="flex-1 bg-vanilla"></div>
          </div>
  
          <!-- Cards Container -->
          <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <!-- Cards -->
              <div class="relative mx-auto grid max-w-lg divide-x-0 divide-y divide-gray-secondary-400/75 border border-gray-secondary-400/60 sm:max-w-xl md:max-w-2xl lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                  <!-- Small Catering -->
                  <div class="bg-gray-secondary-50 p-8 sm:p-10">
                      <h3 class="text-lg font-semibold text-slate-900">{lang === 'en' ? 'Small Catering' : 'Kleines Catering'}</h3>
                      <p class="mt-4 text-slate-600">
                          {lang === 'en' ? 'Perfect for intimate gatherings and small parties.' : 'Perfekt für kleine Zusammenkünfte und Partys.'}
                      </p>
                      <!-- Added image -->
                      <img src="images/catering/dreier.jpg" alt="Catering Image" class="mt-4 w-full h-auto rounded-md shadow-md">
                      <p class="mt-12">
                          <span class="text-4xl font-semibold text-slate-900">CHF 120</span>
                          <span class="ml-2.5 text-lg font-medium text-slate-500">/ {lang === 'en' ? 'Case' : 'Kiste'}</span>
                      </p>
                      <a href="signup.html" class="group mt-8 inline-flex w-full items-center justify-center bg-slate-700 px-6 py-3 text-base font-medium text-white duration-150 ease-in-out hover:bg-slate-900 xl:px-7 xl:py-4 xl:text-lg">
                          {lang === 'en' ? 'Book Now' : 'Jetzt buchen'}
                      </a>
                      <hr class="my-10 border-gray-secondary-400/30" />
                      <p class="font-medium text-slate-900">{lang === 'en' ? 'Includes:' : 'Enthält:'}</p>
                  
                      <!-- Features -->
                      <ul class="mt-6 space-y-4">
                          <li class="flex items-center space-x-6">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 shrink-0 text-slate-800">
                                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                              </svg>
                              <p class="text-slate-600">{lang === 'en' ? '3 to 9 cases (5 Litres), each enough for 80 scoops' : '3 bis 9 Kisten (5 Liter), jede reicht für 80 Kugeln'}</p>
                          </li>
                          <li class="flex items-center space-x-6">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 shrink-0 text-slate-800">
                                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                              </svg>
                              <p class="text-slate-600">{lang === 'en' ? 'Help yourself, scooping service optional' : 'Selbstbedienung, Portionierservice optional'}</p>
                          </li>
                          <li class="flex items-center space-x-6">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 shrink-0 text-slate-800">
                                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                              </svg>
                              <p class="text-slate-600">{lang === 'en' ? 'Display, waffles, cups, spoons, and napkins' : 'Display, Waffeln, Becher, Löffel und Servietten'}</p>
                          </li>
                          <li class="flex items-center space-x-6">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 shrink-0 text-slate-800">
                                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                              </svg>
                              <p class="text-slate-600">{lang === 'en' ? 'Extra services available on request' : 'Zusätzliche Dienstleistungen auf Anfrage verfügbar'}</p>
                          </li>
                      </ul>
                  </div>
                  
                  <!-- Medium Catering -->
                  <div class="bg-gray-secondary-50 p-8 sm:p-10">
                      <h3 class="text-lg font-semibold text-slate-900">{lang === 'en' ? 'Medium Catering' : 'Mittleres Catering'}</h3>
                      <p class="mt-4 text-slate-600">
                          {lang === 'en' ? 'Ideal for medium-sized events and celebrations.' : 'Ideal für mittelgroße Veranstaltungen und Feiern.'}
                      </p>
                      <!-- Added image -->
                      <img src="images/catering/carretino_catering.jpg" alt="Medium Catering Image" class="mt-4 w-full h-auto rounded-md shadow-md">
                      <p class="mt-12">
                          <span class="text-4xl font-semibold text-slate-900">CHF 180</span>
                          <span class="ml-2.5 text-lg font-medium text-slate-500">/ {lang === 'en' ? 'Case' : 'Kiste'}</span>
                      </p>
                      <a href="signup.html" class="group mt-8 inline-flex w-full items-center justify-center bg-slate-700 px-6 py-3 text-base font-medium text-white duration-150 ease-in-out hover:bg-slate-900 xl:px-7 xl:py-4 xl:text-lg">
                          {lang === 'en' ? 'Book Now' : 'Jetzt buchen'}
                      </a>
                      <hr class="my-10 border-gray-secondary-400/30" />
                      <p class="font-medium text-slate-900">{lang === 'en' ? 'Includes:' : 'Enthält:'}</p>
                  
                      <!-- Features -->
                      <ul class="mt-6 space-y-4">
                          <li class="flex items-center space-x-6">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 shrink-0 text-slate-800">
                                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                              </svg>
                              <p class="text-slate-600">{lang === 'en' ? '10 to 11 cases, each enough for 80 scoops' : '10 bis 11 Kisten, jede reicht für 80 Kugeln'}</p>
                          </li>
                          <li class="flex items-center space-x-6">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 shrink-0 text-slate-800">
                                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                              </svg>
                              <p class="text-slate-600">{lang === 'en' ? 'Includes scooping service' : 'Inklusive Portionierservice'}</p>
                          </li>
                          <li class="flex items-center space-x-6">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 shrink-0 text-slate-800">
                                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                              </svg>
                              <p class="text-slate-600">{lang === 'en' ? 'Display, waffles, cups, spoons, and napkins' : 'Display, Waffeln, Becher, Löffel und Servietten'}</p>
                          </li>
                          <li class="flex items-center space-x-6">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 shrink-0 text-slate-800">
                                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                              </svg>
                              <p class="text-slate-600">{lang === 'en' ? 'Extra services available on request' : 'Zusätzliche Dienstleistungen auf Anfrage verfügbar'}</p>
                          </li>
                          <li class="flex items-center space-x-6">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 shrink-0 text-slate-800">
                                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                              </svg>
                              <p class="text-slate-600">{lang === 'en' ? 'Carretino available for 12 cases or more' : 'Carretino für 12 oder mehr Kisten verfügbar'}</p>
                          </li>
                      </ul>
                  </div>
                  
                  <!-- Large Catering -->
                  <div class="bg-purple-light p-8 sm:p-10">
                      <h3 class="text-lg font-semibold text-slate-900">{lang === 'en' ? 'Large Catering' : 'Großes Catering'}</h3>
                      <p class="mt-4 text-slate-600">
                          {lang === 'en' ? 'Designed for large events and corporate functions.' : 'Entwickelt für große Veranstaltungen und Firmenfeiern.'}
                      </p>
                      <!-- Added image -->
                      <img src="images/polyterasse.jpg" alt="Large Catering Image" class="mt-4 w-full h-auto rounded-md shadow-md">
                      <p class="mt-12">
                          <span class="text-4xl font-semibold text-slate-900">{lang === 'en' ? 'Price on Request' : 'Preis auf Anfrage'}</span>
                      </p>
                      <a href="signup.html" class="group mt-8 inline-flex w-full items-center justify-center bg-slate-700 px-6 py-3 text-base font-medium text-white duration-150 ease-in-out hover:bg-slate-900 xl:px-7 xl:py-4 xl:text-lg">
                          {lang === 'en' ? 'Contact Us' : 'Kontaktieren Sie uns'}
                      </a>
                      <hr class="my-10 border-gray-secondary-400/30" />
                      <p class="font-medium text-slate-900">{lang === 'en' ? 'Includes:' : 'Enthält:'}</p>
                  
                      <!-- Features -->
                      <ul class="mt-6 space-y-4">
                          <li class="flex items-center space-x-6">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 shrink-0 text-slate-800">
                                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                              </svg>
                              <p class="text-slate-600">{lang === 'en' ? 'More than 12 cases, each enough for 80 scoops' : 'Mehr als 12 Kisten, jede reicht für 80 Kugeln'}</p>
                          </li>
                          <li class="flex items-center space-x-6">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 shrink-0 text-slate-800">
                                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                              </svg>
                              <p class="text-slate-600">{lang === 'en' ? 'Includes scooping service' : 'Inklusive Portionierservice'}</p>
                          </li>
                          <li class="flex items-center space-x-6">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 shrink-0 text-slate-800">
                                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                              </svg>
                              <p class="text-slate-600">{lang === 'en' ? 'Display, waffles, cups, spoons, and napkins' : 'Display, Waffeln, Becher, Löffel und Servietten'}</p>
                          </li>
                          <li class="flex items-center space-x-6">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 shrink-0 text-slate-800">
                                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                              </svg>
                              <p class="text-slate-600">{lang === 'en' ? 'Extra services available on request' : 'Zusätzliche Dienstleistungen auf Anfrage verfügbar'}</p>
                          </li>
                          <li class="flex items-center space-x-6">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 shrink-0 text-slate-800">
                                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                              </svg>
                              <p class="text-slate-600">{lang === 'en' ? 'Ice cream trailer available for rent' : 'Eiswagen zur Miete verfügbar'}</p>
                          </li>
                      </ul>
                  </div>
                  
              </div>
  
              <!-- Free Pricing -->
              <div class="relative mx-auto mt-12 max-w-lg border border-gray-secondary-400/60 bg-gray-secondary-50 p-8 sm:max-w-xl sm:p-12 md:max-w-2xl lg:max-w-5xl">
                  <div class="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    <div class="w-full lg:w-1/2">
                      <h3 class="text-lg font-semibold text-slate-900">{lang === 'en' ? 'Taste before you buy' : 'Kosten Sie vor dem Kauf'}</h3>
                      <p class="mt-4 text-slate-600">
                        {lang === 'en'
                          ? "Not sure which catering plan to choose? Let us help you craft the perfect gelato experience! Contact us for a free consultation, and together we'll find the ideal sweet treat for your event."
                          : 'Nicht sicher, welches Catering-Paket das richtige ist? Lassen Sie uns Ihnen helfen, das perfekte Gelato-Erlebnis zu gestalten! Kontaktieren Sie uns für eine kostenlose Beratung und gemeinsam finden wir die perfekte süße Lösung für Ihre Veranstaltung.'}
                      </p>
                    </div>
                    <form action="https://api.staticforms.xyz/submit" method="post" class="w-full lg:w-1/2 space-y-4 mt-8 lg:mt-0">
                      <!-- Replace with accessKey sent to your email -->
                      <input type="hidden" name="accessKey" value="773800d3-eb8c-4eae-9fe5-9b8165c10c00"> <!-- Required -->
                      
                      <div>
                        <label for="name" class="block text-sm font-medium text-gray-700">{lang === 'en' ? 'Name' : 'Name'}</label>
                        <input type="text" name="name" id="name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder={lang === 'en' ? 'Your name' : 'Ihr Name'}>
                      </div>
                      
                      <div>
                        <label for="subject" class="block text-sm font-medium text-gray-700">{lang === 'en' ? 'Subject' : 'Betreff'}</label>
                        <input type="text" name="subject" id="subject" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder={lang === 'en' ? 'Subject' : 'Betreff'}>
                      </div>
                      
                      <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">{lang === 'en' ? 'Email' : 'E-Mail'}</label>
                        <input type="text" name="email" id="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder={lang === 'en' ? 'Your email' : 'Ihre E-Mail'}>
                      </div>
                      
                      <div>
                        <label for="phone" class="block text-sm font-medium text-gray-700">{lang === 'en' ? 'Phone' : 'Telefon'}</label>
                        <input type="text" name="phone" id="phone" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder={lang === 'en' ? 'Your phone number' : 'Ihre Telefonnummer'}>
                      </div>
                      
                      <div>
                        <label for="message" class="block text-sm font-medium text-gray-700">{lang === 'en' ? 'Message' : 'Nachricht'}</label>
                        <textarea name="message" id="message" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder={lang === 'en' ? 'Your message' : 'Ihre Nachricht'}></textarea>
                      </div>
                    
                      <!-- If you want replyTo to be set to specific email -->
                      <input type="hidden" name="replyTo" value="info@bongusto.me"> <!-- Optional -->
                      <!-- Specify @ as reply to value if you want it to be customers email -->
                      <input type="hidden" name="replyTo" value="@"> <!-- Optional -->
                      <!-- If you want form to redirect to a specific url after submission -->
                      <input type="hidden" name="redirectTo" value="https://bongusto.me"> <!-- Optional -->
                      
                      <div>
                        <button type="submit" class="group inline-flex w-full items-center justify-center border border-slate-800 px-5 py-2.5 text-base font-medium text-slate-800 duration-150 ease-in-out hover:bg-slate-800 hover:text-white lg:w-auto">
                          {lang === 'en' ? 'Send message' : 'Nachricht senden'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                
                
          </div>
      </div>
  
      <div class="h-16 bg-vanilla sm:h-24"></div>
  </section>
  