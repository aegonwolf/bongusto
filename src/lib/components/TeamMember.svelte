<script>
    export let name;
    export let role;
    export let description;
    export let imgSrc;
    export let favoriteFlavor;
  </script>
  
  <div class="relative z-10">
    <!-- image -->
    <div class="aspect-square">
      <img src={imgSrc} alt={name} class="h-full w-full object-cover object-center" />
    </div>
  
    <!-- Team member info -->
    <div class="mt-6">
      <div class="flex items-center justify-between">
        <p class="text-xl font-semibold text-slate-900">{name}</p>
  
        <!-- Social links -->
        <div class="flex items-center gap-2">
          <a href="#" class="group flex h-8 w-8 items-center justify-center border border-gray-secondary-400/75 duration-150 hover:bg-gray-secondary-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="h-3.5 w-3.5 fill-slate-700 duration-150">
              <path d="M7.52866 20L7.5 11.25H3.75V7.5H7.5V5C7.5 1.626 9.58939 0 12.5992 0C14.041 0 15.2801 0.107338 15.6412 0.155313V3.68134L13.5537 3.68229C11.9168 3.68229 11.5998 4.46012 11.5998 5.60155V7.5H16.25L15 11.25H11.5998V20H7.52866Z" />
            </svg>
          </a>
          <a href="#" class="group flex h-8 w-8 items-center justify-center border border-gray-secondary-400/75 duration-150 hover:bg-gray-secondary-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="h-3.5 w-3.5 fill-slate-700 duration-150">
              <path d="M20 3.75C19.25 4.125 18.5 4.25 17.625 4.375C18.5 3.875 19.125 3.125 19.375 2.125C18.625 2.625 17.75 2.875 16.75 3.125C16 2.375 14.875 1.875 13.75 1.875C11.625 1.875 9.75 3.75 9.75 6C9.75 6.375 9.75 6.625 9.875 6.875C6.5 6.75 3.375 5.125 1.375 2.625C1 3.25 0.875 3.875 0.875 4.75C0.875 6.125 1.625 7.375 2.75 8.125C2.125 8.125 1.5 7.875 0.875 7.625C0.875 9.625 2.25 11.25 4.125 11.625C3.75 11.75 3.375 11.75 3 11.75C2.75 11.75 2.5 11.75 2.25 11.625C2.75 13.25 4.25 14.5 6.125 14.5C4.75 15.625 3 16.25 1 16.25C0.625 16.25 0.375 16.25 0 16.25C1.875 17.375 4 18.125 6.25 18.125C13.75 18.125 17.875 11.875 17.875 6.5C17.875 6.375 17.875 6.125 17.875 6C18.75 5.375 19.5 4.625 20 3.75Z" />
            </svg>
          </a>
        </div>
      </div>
  
      <p class="mt-1 text-lg text-slate-600">{role}</p>
      {#if description}
        <p class="mt-1 text-lg text-slate-600">{description}</p>
      {/if}
      <p class="mt-1 text-lg text-slate-600"><strong>Favorite flavor:</strong> {favoriteFlavor}</p>
    </div>
  </div>
  