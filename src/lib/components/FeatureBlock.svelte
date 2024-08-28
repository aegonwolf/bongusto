<script>
  import { language } from '../stores/languages'; // Import the language store

  let currentLanguage;

  // Subscribe to the language store
  const unsubscribe = language.subscribe(value => {
    currentLanguage = value;
  });

  // Optional: Cleanup on destroy
  import { onDestroy } from 'svelte';
  onDestroy(() => {
    unsubscribe();
  });
</script>

<!-- Feature Blocks -->
<section class="relative overflow-hidden bg-vanilla pb-20 pt-32 lg:pb-28 lg:pt-24">
  <!-- Container -->
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    
    <!-- Block 1: Our Locations -->
    <div class="relative mx-auto w-full max-w-lg sm:max-w-xl lg:mx-0 lg:max-w-none">
      <!-- Image with Stats -->
      <div class="left-0 top-1/2 z-10 w-full lg:absolute lg:w-1/2 lg:-translate-y-1/2">
        <img src="images/rorschach.jpg" class="h-auto w-full" alt="Our Locations"/>
        <div class="absolute right-0 top-0 w-64 -translate-y-24 bg-gray-secondary-100/95 p-6 backdrop-blur-sm sm:py-7 lg:bottom-0 lg:left-0 lg:top-[unset] lg:translate-y-24 2xl:-translate-x-16">
          <p class="text-4xl font-semibold text-slate-900 xl:text-5xl">
            {$language === 'en' ? 'Multiple Times' : 'Mehrfach'}
          </p>
          <p class="mt-5 text-slate-700">
            {$language === 'en' ? 'in Zurich, St. Gallen and the Bodensee Area' : 'in Zürich, St. Gallen und der Bodenseeregion'}
          </p>
        </div>
      </div>

      <!-- Content -->
      <div class="w-full border border-gray-secondary-400/60 bg-gray-secondary-50 px-6 py-10 sm:p-14 lg:ml-auto lg:w-7/12 lg:py-32 lg:pl-28 xl:pl-36 xl:pr-20">
        <h2 class="text-4xl font-semibold leading-tight text-slate-900 xl:text-5xl xl:leading-tight">
          {$language === 'en' ? 'Visit us in the most beautiful locations' : 'Besuchen Sie uns an den schönsten Orten'}
        </h2>
        <p class="mt-6 leading-relaxed text-slate-700 sm:mt-8 sm:text-lg sm:leading-8">
          {$language === 'en' ? 'Experience our gelato at our various locations across Switzerland, Zürich, St. Gallen, Rorschach.' : 'Erleben Sie unser Gelato an verschiedenen Standorten in der Schweiz, Zürich, St. Gallen, Rorschach.'}
        </p>
        <a href="/locations" class="group mt-10 inline-flex items-center justify-center border border-slate-800 px-5 py-2.5 text-base font-medium text-slate-800 duration-150 ease-in-out hover:bg-slate-800 hover:text-white sm:mt-12">
          {$language === 'en' ? 'Find a Location' : 'Einen Standort finden'}
        </a>
      </div>
    </div>

    <!-- Block 2: Catering Events -->
    <div class="relative mx-auto mt-48 w-full max-w-lg sm:max-w-xl lg:mx-0 lg:mt-32 lg:max-w-none">
      <!-- Video with Stats -->
      <div class="right-0 top-1/2 z-10 w-full lg:absolute lg:w-1/2 lg:-translate-y-1/2">
        <video src="/kp24.mp4" class="h-auto w-full" autoplay muted loop playsinline>
          Your browser does not support the video tag.
        </video>
        <div class="absolute left-0 top-0 w-64 -translate-y-24 bg-gray-secondary-100/95 p-6 backdrop-blur-sm sm:py-7 lg:bottom-0 lg:left-[unset] lg:right-0 lg:top-[unset] lg:translate-y-24 2xl:translate-x-16">
          <p class="text-4xl font-semibold text-slate-900 xl:text-5xl">500+</p>
          <p class="mt-5 text-slate-700">
            {$language === 'en' ? 'Events Catered' : 'Veranstaltungen beliefert'}
          </p>
        </div>
      </div>
    
      <!-- Content -->
      <div class="w-full border border-gray-secondary-400/60 bg-gray-secondary-50 px-6 py-10 sm:p-14 lg:w-7/12 lg:py-32 lg:pr-28 xl:pl-16 xl:pr-36">
        <h2 class="text-4xl font-semibold leading-tight text-slate-900 xl:text-5xl xl:leading-tight">
          {$language === 'en' ? 'Bring Gelato to Your Event' : 'Bringen Sie Gelato zu Ihrer Veranstaltung'}
        </h2>
        <p class="mt-6 leading-relaxed text-slate-700 sm:mt-8 sm:text-lg sm:leading-8">
          {$language === 'en' ? 'Make your event unforgettable with Bongusto Catering. From our charming "carretino" to trailers, ice cream carts, and flexible, portable table displays, we have the perfect setup for any occasion. We also offer self-serve fridges with prefilled cups for convenient and enjoyable service at corporate events, festivals, and more.' : 'Machen Sie Ihre Veranstaltung unvergesslich mit Bongusto Catering. Von unserem charmanten "carretino" bis hin zu Anhängern, Eiskarren und flexiblen, tragbaren Tischdisplays bieten wir die perfekte Ausstattung für jeden Anlass. Wir bieten auch Selbstbedienungskühlschränke mit vorgefüllten Bechern für bequemen und angenehmen Service bei Firmenveranstaltungen, Festivals und mehr.'}
        </p>
        <a href="/catering" class="group mt-10 inline-flex items-center justify-center border border-slate-800 px-5 py-2.5 text-base font-medium text-slate-800 duration-150 ease-in-out hover:bg-slate-800 hover:text-white sm:mt-12">
          {$language === 'en' ? 'Book Now' : 'Jetzt buchen'}
        </a>
      </div>
      
    </div>
    

    <!-- Block 3: Delivery & Vending Machines -->
    <div class="relative mx-auto mt-48 w-full max-w-lg sm:max-w-xl lg:mx-0 lg:mt-32 lg:max-w-none">
      <!-- Image with Stats -->
      <div class="left-0 top-1/2 z-10 w-full lg:absolute lg:w-1/2 lg:-translate-y-1/2">
        <img src="images/vending.jpg" class="h-auto w-full" alt="Delivery & Vending Machines"/>
        <div class="absolute right-0 top-0 w-64 -translate-y-24 bg-gray-secondary-100/95 p-6 backdrop-blur-sm sm:py-7 lg:bottom-0 lg:left-0 lg:top-[unset] lg:translate-y-24 2xl:-translate-x-16">
          <p class="text-4xl font-semibold text-slate-900 xl:text-5xl">
            {$language === 'en' ? 'New' : 'Neu'}
          </p>
          <p class="mt-5 text-slate-700">
            {$language === 'en' ? 'Gelato Delivery & Vending' : 'Gelato-Lieferung & Verkauf'}
          </p>
        </div>
      </div>

      <!-- Content -->
      <div class="w-full border border-gray-secondary-400/60 bg-gray-secondary-50 px-6 py-10 sm:p-14 lg:ml-auto lg:w-7/12 lg:py-32 lg:pl-28 xl:pl-36 xl:pr-20">
        <h2 class="text-4xl font-semibold leading-tight text-slate-900 xl:text-5xl xl:leading-tight">
          {$language === 'en' ? 'Convenient Gelato Solutions' : 'Praktische Gelato-Lösungen'}
        </h2>
        <p class="mt-6 leading-relaxed text-slate-700 sm:mt-8 sm:text-lg sm:leading-8">
          {$language === 'en' ? 'Enjoy Bongusto at your office or any location with our delivery service and vending machines. Perfect for employees, customers, and guests.' : 'Genießen Sie Bongusto in Ihrem Büro oder an jedem anderen Ort mit unserem Lieferservice und unseren Verkaufsautomaten. Perfekt für Mitarbeiter, Kunden und Gäste.'}
        </p>
        <a href="/vending.jpg" class="group mt-10 inline-flex items-center justify-center border border-slate-800 px-5 py-2.5 text-base font-medium text-slate-800 duration-150 ease-in-out hover:bg-slate-800 hover:text-white sm:mt-12">
          {$language === 'en' ? 'Get Started' : 'Jetzt anfangen'}
        </a>
      </div>
    </div>

  </div>
</section>
