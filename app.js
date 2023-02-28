let main1 = document.getElementById("main-container-1")
let main2 = document.getElementById("main-container-2")
let main3 = document.getElementById("main-container-3")
let main4 = document.getElementById("main-container-4")
let kontakt = document.getElementById("main-container-kontakt")
let menuNav = document.getElementById("menu-nav")
let menuText = document.getElementById("menu-text")
menuText.textContent = "Home"

let slides = [main1, main2, main3, main4]

let i = 0;

function nachLinks() {
    
    if (i <= 3 && i >= 1) {
        i = i - 1
        addClass()
        console.log(i)
    } else {
        i = 3
        console.log(i)
        addClass()
    }
}

function nachRechts() {
    
    if (i <= 2) {
        i ++
        addClass()
        console.log(i)
    } else {
        i = 0
        console.log(i)
        addClass()
    }
}

function addClass() {
    if(i === 0) {
        main1.classList.add("aktiv")
        main2.classList.add("inaktiv")
        main3.classList.add("inaktiv")
        main4.classList.add("inaktiv")

        main2.classList.remove("aktiv")
        main3.classList.remove("aktiv")
        main4.classList.remove("aktiv")
        menuText.textContent = "Home"
    } else if(i === 1) {
        main1.classList.add("inaktiv")
        main2.classList.add("aktiv")
        main3.classList.add("inaktiv")
        main4.classList.add("inaktiv")

        main1.classList.remove("aktiv")
        main3.classList.remove("aktiv")
        main4.classList.remove("aktiv")
        menuText.textContent = "About Me"
    } else if(i === 2) {
        main1.classList.add("inaktiv")
        main2.classList.add("inaktiv")
        main3.classList.add("aktiv")
        main4.classList.add("inaktiv")

        main1.classList.remove("aktiv")
        main2.classList.remove("aktiv")
        main4.classList.remove("aktiv")
        menuText.textContent = "Skills"
    } else if(i === 3) {
        main1.classList.add("inaktiv")
        main2.classList.add("inaktiv")
        main3.classList.add("inaktiv")
        main4.classList.add("aktiv")

        main1.classList.remove("aktiv")
        main2.classList.remove("aktiv")
        main3.classList.remove("aktiv")
        menuText.textContent = "Beispiele"
    }
}


 function openKontakt() {
        main1.classList.add("inaktiv")
        main2.classList.add("inaktiv")
        main3.classList.add("inaktiv")
        main4.classList.add("inaktiv")
        kontakt.classList.add("aktiv")
        main1.classList.remove("aktiv")
        main2.classList.remove("aktiv")
        main3.classList.remove("aktiv")
        main4.classList.remove("aktiv")
        menuNav.classList.add("weg")
        menuText.textContent = "Kontakt"
 }

 function openHome() {
    main1.classList.add("aktiv")
    kontakt.classList.remove("aktiv")
    menuNav.classList.remove("weg")
    main2.classList.add("inaktiv")
    main3.classList.add("inaktiv")
    main4.classList.add("inaktiv")
    main2.classList.remove("aktiv")
    main3.classList.remove("aktiv")
    main4.classList.remove("aktiv")
    menuText.textContent = "Home"
}