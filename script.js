// const input = document.querySelector('input');
// const button = document.querySelector('button');
// const ul = document.querySelector('ul')

//day-27 fetch api and apply  css 

const app_id = '24f68854';
const app_key = 'dd14c09d9c91c91a3a073b8fd19c4250';
const recipesContainer = document.querySelector('.results')

const loaderContainer = document.querySelector('.loader-container');
const input = document.querySelector('input');
const button = document.querySelector('button');

const showLoader = () => {
    loaderContainer.style = "display:flex";
}

const hideLoader = () => {
    loaderContainer.style = "display: none";
}

const generateCard = (image, title) => `
<div style="width:300px" class='bg-white rounded-3xl shadow-xl overflow-hidden'>
<div class='max-w-md mx-auto'>


    <div style="height: 200px; background-image: url('${image}');
        background-position: center;
        background-size: cover;">
        </div>

    <div class='p-4 sm:p-6'>
        
        <p class='font-bold text-gray-700 text-[18px] leading-7 mb-1'>${title}</p>
        <div class='flex flex-row'>
            <p class='text-[#3C3C4399] text-[17px] mr-2 line-through'>MVR 700</p>
            <p class='text-[17px] font-bold text-[#0FB478]'>MVR 700</p>
        </div>
        <p class='text-[#7C7C80] font-[15px] mt-2'>
        <ul>
            <li>Our shrimp sauce is made with mozarella, a creamy
                taste of shrimp with extra kick of spices. Our shrimp sauce is made with mozarella, a creamy.</li>
           
        </ul>
        </p>


        <a target='_blank' href='foodiesapp://food/1001'
            class='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
            View on foodies
        </a>

    </div>
</div>
</div>
</div>
</div>`

const getRecipes = async () => {
    try {
        recipesContainer.innerHTML = " ";
        showLoader()

        const searchString = input.value;
        const response = await fetch(generatendpoint(searchString));
        console.log(response);
        const data = await response.json();
        console.log(data);
        const recipes = data.hits;

        recipesContainer.innerHTML = " ";
        recipes.forEach((recipe) => {
            const { image, label } = recipe.recipe;
            // recipesContainer.innerHTML = generateCard(image, label)
            const card = document.createElement("div");
            card.innerHTML = generateCard(image, label);
            recipesContainer.append(card);
        });
    }
    catch (error) {
        console.log(error)
    }
    finally {
        hideLoader();
        input.value = "";
    }
}

//day 27
//creating a utility function

// const generatendpoint = (searchString ='') => {
//     `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${app_id}&app_key=${app_key}`
// }

const generatendpoint = (searchString = '') => `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${app_id}&app_key=${app_key}`
// console.log(generateEndpoint('pizza'));

button.addEventListener('click', getRecipes);













//fetch api day-26
// const searchForReceipe = async() =>{
//     try {
//         ul.innerHTML = " "
//         const searchString = input.value;
//         const endpoint =  `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${app_id}&app_key=${app_key}`

//         const response = await fetch(endpoint);
//         const data = await response.json();
// console.log(data);
//         const recipes = data.hits;
//         console.log(recipes)

//        recipes.forEach(obj => {
//           const { recipe } = obj
// console.log(recipe);

//         const li = document.createElement('li')
//         const img = document.createElement('img');

//         img.src = recipe.image;

//        li.innerHTML = recipe.label
//        li.appendChild(img)
//        ul.appendChild(li)
//        })

//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// button.addEventListener('click', searchForReceipe);
