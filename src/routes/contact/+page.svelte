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

<!-- Contact Hero -->
<section class="relative overflow-hidden bg-amber-100 pt-16 sm:pt-24">
    <!-- Heading Container -->
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div
        class="mx-auto flex max-w-lg flex-col items-center sm:max-w-xl md:max-w-2xl lg:mx-0 lg:max-w-none"
      >
        <h1
          class="text-center text-4xl font-semibold leading-snug text-slate-900 sm:text-5xl sm:leading-snug md:mx-auto md:max-w-4xl xl:mx-0"
        >
          {lang === 'en' ? 'Contact us' : 'Kontaktieren Sie uns'}
        </h1>
        <p
          class="mx-auto mt-5 max-w-xl text-center text-lg leading-relaxed text-slate-700 sm:mt-6"
        >
          {lang === 'en'
            ? 'Lorem ipsum dolor sit amet dapibus fusce sed. Aliquet porta bibendum est platea fermentum tempus egestas.'
            : 'Lorem ipsum dolor sit amet dapibus fusce sed. Aliquet porta bibendum est platea fermentum tempus egestas.'}
        </p>
      </div>
    </div>

    <div class="relative pt-16">
      <!-- Background -->
      <div class="absolute inset-0 flex flex-col" aria-hidden="true">
        <div class="flex-1 bg-amber-100"></div>
        <div class="w-full flex-1 bg-vanilla"></div>
        <div class="flex-1 bg-vanilla"></div>
      </div>

      <!-- Contact Cards Container -->
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <!-- Contact Cards -->
        <div
          class="relative mx-auto grid max-w-lg gap-x-6 gap-y-8 sm:max-w-xl md:max-w-2xl md:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8"
        >
          <!-- Card 1 -->
          <div
            class="flex flex-col border border-gray-secondary-400/60 bg-gray-secondary-50 p-8 lg:px-12 lg:py-10"
          >
            <div class="flex-1">
              <div class="flex w-full pb-6 lg:justify-end lg:pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="81"
                  height="77"
                  viewBox="0 0 81 77"
                  class="h-12 w-12 lg:h-16 lg:w-16"
                >
                  <!-- SVG path here -->
                </svg>
              </div>
              <h2 class="text-2xl font-semibold text-slate-900 lg:text-3xl">
                {lang === 'en' ? 'Chat with us now' : 'Chatten Sie jetzt mit uns'}
              </h2>
              <p class="mt-3 max-w-sm leading-relaxed text-slate-600">
                {lang === 'en'
                  ? 'Lorem ipsum dolor sit amet aliqua vitae curabitur libero urna dolore orci adipiscing.'
                  : 'Lorem ipsum dolor sit amet aliqua vitae curabitur libero urna dolore orci adipiscing.'}
              </p>
            </div>

            <div>
              <a
                href="#"
                class="group mt-8 inline-flex w-full items-center justify-center border border-slate-800 px-5 py-2.5 text-base font-medium text-slate-800 duration-150 ease-in-out hover:bg-slate-800 hover:text-white lg:w-auto"
              >
                {lang === 'en' ? 'Chat with us' : 'Chatten Sie mit uns'}
              </a>
            </div>
          </div>

          <!-- Card 2 -->
          <div
            class="flex flex-col border border-gray-secondary-400/60 bg-gray-secondary-50 p-8 lg:px-12 lg:py-10"
          >
            <div class="flex-1">
              <div class="flex w-full pb-6 lg:justify-end lg:pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="81"
                  height="77"
                  viewBox="0 0 81 77"
                  class="h-12 w-12 lg:h-16 lg:w-16"
                >
                  <!-- SVG path here -->
                </svg>
              </div>
              <form action="https://api.staticforms.xyz/submit" method="post" class="space-y-4">
                <!-- Replace with accessKey sent to your email -->
                <input type="hidden" name="accessKey" value="773800d3-eb8c-4eae-9fe5-9b8165c10c00"> <!-- Required -->
                
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700">
                    {lang === 'en' ? 'Name' : 'Name'}
                  </label>
                  <input type="text" name="name" id="name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder={lang === 'en' ? 'Your name' : 'Ihr Name'}>
                </div>
                
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700">
                    {lang === 'en' ? 'Subject' : 'Betreff'}
                  </label>
                  <input type="text" name="subject" id="subject" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder={lang === 'en' ? 'Subject' : 'Betreff'}>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">
                    {lang === 'en' ? 'Email' : 'E-Mail'}
                  </label>
                  <input type="text" name="email" id="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder={lang === 'en' ? 'Your email' : 'Ihre E-Mail'}>
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700">
                    {lang === 'en' ? 'Phone' : 'Telefon'}
                  </label>
                  <input type="text" name="phone" id="phone" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder={lang === 'en' ? 'Your phone number' : 'Ihre Telefonnummer'}>
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700">
                    {lang === 'en' ? 'Message' : 'Nachricht'}
                  </label>
                  <textarea name="message" id="message" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder={lang === 'en' ? 'Your message' : 'Ihre Nachricht'}></textarea>
                </div>
              
                <input type="hidden" name="replyTo" value="@"> <!-- Optional -->
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
    </div>

    <div class="h-16 bg-vanilla sm:h-24"></div>
</section>
