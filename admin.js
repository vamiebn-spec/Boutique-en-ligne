
//Recuperons les ellements html par les id
const listesproduits = document.getElementById("listesproduits") 
// Le tableau qui regroupe les produits
const TableauProduits = []

//Une fonction qui permet d'afficher nos produits
const AffichesProduits = (nom,prix,Description,photo)=>{
    listesproduits.innerHTML+=`
      <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img class="object-cover" src=" ${photo} " alt="product image" />
  </a>
  <div class="mt-4 px-5 pb-5">
    <a href="#">
      <h5 class="text-xl tracking-tight font-bold text-slate-900">${nom} </h5>
      <p class="text-gray-600 lg:text-xl font-semibold">${Description}</p>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900">${prix} </span>
        <span class="text-sm text-slate-900 line-through">5000fcfa</span>
      </p>
      <div class="flex items-center">
        <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
      </div>
    </div>
    <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Ajouter au panier</a
    >
  </div>
</div>`   

}
  //recuperons les valeur saisir dans les champs

  const form = document.getElementById("form")

  form.addEventListener("submit",(e)=>{

    e.preventDefault()

    //Recuperons les elements
 const nom = document.getElementById("nom").value
 const prix = document.getElementById("prix").value
 const Description = document.getElementById("Description").value
 const photo = document.getElementById("photo").files[0]

  const photoURL = URL.createObjectURL(photo)


 TableauProduits.push({
    nom,
    prix,
    Description,
    photo: photoURL

 })

 //Afficons les produits sur la page

 AffichesProduits(nom, prix,Description,photoURL)

 form.reset()

})