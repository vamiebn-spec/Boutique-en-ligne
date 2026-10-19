
localStorage.setItem("nom","Calice")

const Affiche = localStorage.getItem("nom")

if(Affiche==="Calice") { 
    console.log("Bienvenue")
}

else{
    console.log("Veillez vous connecter")
}