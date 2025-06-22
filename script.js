//about me script
var facts = [
    'I have been involved in FRC for the past 4 years. Currently I focus on awards and programming, but this year I want to learn more about strategy and hopefully make the scouting apps for competitions!',
    'My first Hackathon was Apocalypse which was run by Hack Club in Toronto 2024. It was my first experience with coding and it has led me to partcipate in hackathons all over southern Ontario, and going to the Scrapyard Flagship in AUS, TX!',
    'July 2024, I participated in the Shad Canada program at UBC in Vancouver. It was mt first time travelling in Canada outside the province and it was awesome! I met the coolest people and discovered a community that I an yearning to go back to (UBC pls accept me)',
    'I love music! My main instrument is piano, but in school I played Electric Guitar, Electric Bass, Tenor Sax, Flute, and Clarinet. I also played Violin for a year, but my teacher went back to school, so I stopped but I still want to learn! Hopefully I can get a Electric Guitar for University so I still can practice something.',
    'I have two dogs named Zuko and Katara! I named them obviously. They are both Belgian Malinois and they are a handful.',
    'Since I live outside the GTA, I do a lot of commuting for hackathons and social functions. It is very tiring, but I do not mind it since I get to meet and hangout with the coolest people! When I take my friends out, I am the designated GPS.',
]


function getRandomFact() {
    document.getElementById("textbox").innerHTML = facts[Math.floor(Math.random() * facts.length)];
}

// accordion button script 

const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector(".accordion-content");

    accordionContents.forEach((content) => {
      if (content !== accordionContent) {
        content.classList.remove("active");
        content.style.maxHeight = "0";
      }
    });

    accordionContent.classList.toggle("active");

    if (accordionContent.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = "0";
    }
  });
});
