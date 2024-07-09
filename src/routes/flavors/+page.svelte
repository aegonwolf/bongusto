<script>
    let flavor = {
      name: 'Delightful Strawberry Gelato',
      description: 'Our Strawberry Gelato is made from fresh, locally sourced strawberries, offering a burst of flavor in every bite. Creamy, delicious, and sustainable.',
      image: 'images/himbeerlimette.jpg',
      testimonial: {
        quote: "The best strawberry gelato I've ever had. Perfect balance of sweetness and creaminess.",
        person: 'Alex Johnson',
        role: 'Food Enthusiast',
        avatar: 'images/avatars/avatar-01.jpg'
      },
      ingredients: [
        'Fresh Strawberries',
        'Organic Cream',
        'Cane Sugar',
        'Natural Flavoring'
      ],
      nutritionFacts: {
        servingSize: '100g',
        calories: 200,
        totalFat: '10g',
        saturatedFat: '6g',
        cholesterol: '40mg',
        sodium: '30mg',
        totalCarbohydrates: '26g',
        dietaryFiber: '1g',
        totalSugars: '22g',
        protein: '3g',
        vitaminD: '2mcg',
        calcium: '100mg',
        iron: '0.2mg',
        potassium: '200mg'
      }
    };
  </script>
  
  <section class="relative overflow-hidden bg-amber-100 pt-16 md:pt-20 xl:pt-32">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-5 flex flex-col-reverse md:flex-row items-start">
      <div class="max-w-lg pb-14 md:max-w-none md:pb-48 lg:pb-52 xl:max-w-xl xl:pb-14">
        <h2 class="text-4xl font-semibold 
                    leading-tighter text-slate-900 
                    md:max-w-2xl xl:text-left xl:text-5xl xl:leading-tighter">
          {flavor.name}
        </h2>
        <p class="mt-6 text-slate-700 md:mt-8 md:max-w-3xl xl:text-left xl:text-lg mr-10">
          {flavor.description}
        </p>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/3 flex justify-center md:justify-end">
        <img src={flavor.image} class="h-auto w-full object-cover rounded-lg" alt={flavor.name} />
      </div>
    </div>
  </section>
  <section class="relative overflow-hidden bg-white pt-16 md:pt-20 xl:pt-32">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-lg pb-14 md:mx-0 md:max-w-none md:pb-48 lg:pb-52 xl:max-w-xl xl:pb-14">
        <h2 class="text-3xl font-semibold leading-tighter text-slate-900 md:mx-auto md:max-w-2xl md:text-center xl:mx-0 xl:text-left xl:text-4xl xl:leading-tighter">
          Ingredients & Nutrition Facts
        </h2>
        <ul class="mt-6 flex flex-col space-y-4 md:mx-auto md:mt-8 md:max-w-3xl md:flex-row md:space-x-2 md:space-y-0 lg:space-x-4 xl:mx-0 xl:flex-col xl:space-x-0 xl:space-y-4">
          {#each flavor.ingredients as ingredient}
            <li class="flex items-center md:items-start xl:items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 shrink-0 text-slate-800 md:h-6 md:w-6 xl:h-5 xl:w-5">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"/>
              </svg>
              <p class="ml-3 text-slate-700 lg:ml-4 xl:ml-5 xl:text-lg">
                {ingredient}
              </p>
            </li>
          {/each}
        </ul>
        <div class="mt-10">
          <h3 class="px-10 text-2xl font-semibold leading-tighter text-slate-900 xl:text-left xl:text-3xl xl:leading-tighter">
            Nutritional Facts
          </h3>
          <div class="px-10 mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-slate-700 xl:text-lg">
            <p><span class="font-medium">Serving Size:</span> {flavor.nutritionFacts.servingSize}</p>
            <p><span class="font-medium">Calories:</span> {flavor.nutritionFacts.calories}</p>
            <p><span class="font-medium">Total Fat:</span> {flavor.nutritionFacts.totalFat}</p>
            <p><span class="font-medium">Saturated Fat:</span> {flavor.nutritionFacts.saturatedFat}</p>
            <p><span class="font-medium">Cholesterol:</span> {flavor.nutritionFacts.cholesterol}</p>
            <p><span class="font-medium">Sodium:</span> {flavor.nutritionFacts.sodium}</p>
            <p><span class="font-medium">Total Carbohydrates:</span> {flavor.nutritionFacts.totalCarbohydrates}</p>
            <p><span class="font-medium">Dietary Fiber:</span> {flavor.nutritionFacts.dietaryFiber}</p>
            <p><span class="font-medium">Total Sugars:</span> {flavor.nutritionFacts.totalSugars}</p>
            <p><span class="font-medium">Protein:</span> {flavor.nutritionFacts.protein}</p>
            <p><span class="font-medium">Vitamin D:</span> {flavor.nutritionFacts.vitaminD}</p>
            <p><span class="font-medium">Calcium:</span> {flavor.nutritionFacts.calcium}</p>
            <p><span class="font-medium">Iron:</span> {flavor.nutritionFacts.iron}</p>
            <p><span class="font-medium">Potassium:</span> {flavor.nutritionFacts.potassium}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  