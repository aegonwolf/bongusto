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
        {$language === 'en' ? 'Visit Us at Glattpark' : 'Besuchen Sie uns im Glattpark'}
      </h2>
      <p class="mt-6 text-slate-700 md:mx-auto md:mt-8 md:max-w-3xl md:text-center xl:mx-0 xl:text-left xl:text-lg">
        {$language === 'en' ? 
          "We are located near the basketball court with our ice cream stand. Offering fresh flavors every day, as well as smoothies, drinks, coffee, and fruits. Come by and enjoy a refreshing treat in the heart of Opfikon's Glattpark." : 
          "Wir befinden uns in der Nähe des Basketballplatzes mit unserem Eistand. Jeden Tag bieten wir frische Geschmacksrichtungen sowie Smoothies, Getränke, Kaffee und Früchte an. Kommen Sie vorbei und genießen Sie eine erfrischende Leckerei im Herzen des Glattparks in Opfikon."
        }
      </p>
    </div>
  </div>

  <div class="pb-10">
    <div class="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="absolute bottom-0 right-6 hidden w-1/3 bg-gray-secondary-100 md:block lg:right-12 xl:-right-0 xl:w-full xl:max-w-xl 2xl:-right-32 2xl:max-w-[640px]">
        <img src="images/glattpark.jpg" class="h-auto w-full object-cover rounded-lg" alt="Glattpark Location Image" />
      </div>
    </div>
  </div>
</section>

  
  <section class="relative overflow-hidden bg-white pt-16 md:pt-20 xl:pt-32 pb-16">
    <div class="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="mt-16 grid grid-cols-12 gap-3 sm:mt-24 lg:gap-5">
        <div class="col-span-6 flex flex-col gap-3 sm:col-span-4 lg:gap-5">
          <img
            class="h-auto w-full object-cover object-center"
            src="images/stock/gallery-01.jpg"
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
            src="images/stock/gallery-03.jpg"
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
  