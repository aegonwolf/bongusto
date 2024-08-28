<script>
  import { language } from '$lib/stores/languages'; // Import the language store

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

<section class="relative overflow-hidden bg-amber-100 pt-16 md:pt-20 xl:pt-32">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-5">
    <div class="mx-auto max-w-lg pb-14 md:mx-0 md:max-w-none md:pb-48 lg:pb-52 xl:max-w-xl xl:pb-14">
      <h2 class="text-4xl font-semibold leading-tighter text-slate-900 md:mx-auto md:max-w-2xl md:text-center xl:mx-0 xl:text-left xl:text-5xl xl:leading-tighter">
        {$language === 'en' ? 'Visit Us in Säntispark' : 'Besuchen Sie uns im Säntispark'}
      </h2>
      <p class="mt-6 text-slate-700 md:mx-auto md:mt-8 md:max-w-3xl md:text-center xl:mx-0 xl:text-left xl:text-lg">
        {$language === 'en' ? 
          'At Säntispark is where we have our kitchen, here is where the magic happens and Bongusto Gelato is made. We bring our fresh fruits and ingredients here, Hansi and Brigitte make the mix and prepare it to be served right here or delivered to our other locations. Säntispark is open 365 days a year, so you can enjoy Bongusto during any weather.' : 
          'Im Säntispark befindet sich unsere Küche, hier geschieht die Magie und Bongusto Gelato wird hergestellt. Wir bringen unsere frischen Früchte und Zutaten hierher, Hansi und Brigitte machen die Mischung und bereiten sie vor, um sie direkt hier zu servieren oder an unsere anderen Standorte zu liefern. Der Säntispark ist das ganze Jahr über geöffnet, damit Sie Bongusto bei jedem Wetter genießen können.'
        }
      </p>
    </div>
  </div>

  <div class="relative bg-gradient-to-r from-vanilla via-amber-50 to-amber-100 pb-10">
    <div class="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="absolute top-1/2 transform -translate-y-1/2 right-6 hidden w-1/2 bg-gray-secondary-100 md:block lg:right-12 xl:-right-0 xl:w-full xl:max-w-xl 2xl:-right-32 2xl:max-w-[640px] z-10">
        <img src="images/saentispark.jpg" class="h-auto w-full object-cover rounded-lg" alt="Säntispark Location Image" />
      </div>
    </div>
  </div>
</section>

<section class="relative overflow-visible bg-white pt-16 md:pt-20 xl:pt-32 pb-16">
  <div class="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="mt-16 grid grid-cols-12 gap-3 sm:mt-24 lg:gap-5">
      <div class="col-span-6 flex flex-col gap-3 sm:col-span-4 lg:gap-5">
        <img
          class="h-auto w-full object-cover object-center"
          src="images/saentis/saentis-1.jpg"
          alt="Gallery 01"
        />
        <img
          class="ml-auto h-auto w-full object-cover object-center md:w-2/3"
          src="images/stock/gallery-02.jpg"
          alt="Gallery 02"
        />
      </div>
      <div
        class="col-span-4 hidden flex-col gap-3 sm:flex md:col-span-2 lg:gap-5"
      >
        <img
          class="h-auto w-full object-cover object-center md:mt-12"
          src="images/saentis/saentis-3.jpg"
          alt="Gallery 03"
        />
        <img
          class="ml-auto hidden h-auto w-full object-cover object-center md:block"
          src="images/stock/gallery-04.jpg"
          alt="Gallery 04"
        />
      </div>
      <div class="col-span-6 flex flex-col gap-3 sm:col-span-4 lg:gap-5">
        <img
          class="ml-auto h-auto w-full object-cover object-center md:w-1/2"
          src="images/stock/gallery-06.jpg"
          alt="Gallery 06"
        />
        <img
          class="h-auto w-full object-cover object-center"
          src="images/stock/gallery-05.jpg"
          alt="Gallery 05"
        />
      </div>
      <div class="col-span-2 hidden flex-col gap-3 md:flex lg:gap-5">
        <img
          class="mt-12 h-auto w-full object-cover object-center"
          src="images/stock/gallery-07.jpg"
          alt="Gallery 07"
        />
      </div>
    </div>
  </div>
</section>
