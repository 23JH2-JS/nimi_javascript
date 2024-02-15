console.log("Ulkoinen JS");

function createParagraph() {
// viittaus talteen muuttujaan = luodaan uusi elementti "paragraph"
    const para = document.createElement("p");
    // Määritetään kappale-elementtiin teksti
    para.textContent = "You clicked the button!";
    // Lisätään uusi elementti osaksi "body"-elementtiä
    document.body.appendChild(para);
  }
  
  //      nodelist        Haetaan kaikki "button"-elementit
  const buttons = document.querySelectorAll("button");
  
  // Tässä iteroidaan nodelist (käydään yksi kerrallaan läpi)
  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }
  