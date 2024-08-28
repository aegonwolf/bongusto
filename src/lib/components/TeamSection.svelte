<script>
  import { language } from '../stores/languages'; // Import the language store
  import TeamMember from './TeamMember.svelte';

  export let teamMembers = [];

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

<section class="relative overflow-hidden bg-vanilla pb-16 sm:pb-20 lg:pb-24">
  <div class="bg-amber-100 py-16 sm:pb-24 sm:pt-28 lg:pt-32">
    <!-- Container -->
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mx-auto max-w-lg items-center sm:max-w-3xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-16">
        <div class="flex flex-col items-center lg:items-start">
          <p class="flex items-center space-x-3.5 text-xl font-medium text-amber-900/70">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="3" viewBox="0 0 28 3" fill="none">
              <line y1="1.5" x2="28" y2="1.5" stroke="currentColor" stroke-opacity="0.65" stroke-width="3" />
            </svg>
            <span>{$language === 'en' ? 'Our team' : 'Unser Team'}</span>
          </p>
          <h1 class="mt-5 text-center text-4xl font-semibold leading-snug text-slate-900 sm:max-w-xl sm:text-5xl sm:leading-snug md:mx-auto lg:text-left xl:mx-0">
            {$language === 'en' ? 'The people behind Bongusto' : 'Die Menschen hinter Bongusto'}
          </h1>
        </div>
        <div>
          <p class="mx-auto mt-5 max-w-lg text-center text-lg leading-relaxed text-slate-700 lg:ml-auto lg:mr-0 lg:mt-0 lg:text-left">
            {$language === 'en' ? 'Meet the diverse team that makes Bongusto possible, from our passionate gelato makers Hansi and Brigitte to our dedicated ML Engineer Oliver and our supportive ETH Zurich community.' : 'Lernen Sie das vielfältige Team kennen, das Bongusto möglich macht, von unseren leidenschaftlichen Gelato-Machern Hansi und Brigitte bis hin zu unserem engagierten ML-Ingenieur Oliver und unserer unterstützenden ETH-Zürich-Gemeinschaft.'}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="relative bg-vanilla">
    <div class="absolute inset-x-0 h-40 bg-amber-100"></div>
    <!-- Container -->
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <!-- Team -->
      <div class="mx-auto grid max-w-lg gap-x-8 gap-y-14 sm:max-w-xl lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {#each teamMembers as member}
          <TeamMember 
            name={member.name}
            role={member.role}
            description={member.description}
            imgSrc={member.imgSrc}
            favoriteFlavor={member.favoriteFlavor}
          />
        {/each}
      </div>
    </div>
  </div>
</section>
