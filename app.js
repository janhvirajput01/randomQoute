const qoute = document.querySelector(".qoute");

const person = document.querySelector(".person");
const btn = document.querySelector(".new-qoute");

const newQoutes = [
  {
    qoute: "“Progress is quiet until it isn't.”",
    person: "Kierra C.T. Banks",
  },
  {
    qoute: "“And sometimes it's as simple as changing your environment.”",
    person: "Kierra C.T. Banks",
  },
  {
    qoute: " “Every battle is lost or won in the arena of the mind.”",
    person: " Kierra C.T. Banks",
  },
  {
    qoute:
      "“Yes, you may love them to death, but are they willing to love you to life?”",
    person: "Kierra C.T. Banks ",
  },
  {
    qoute: "“Time the time before the time time you”",
    person: "― Bello Salihu",
  },
  {
    qoute:
      "“Rise up & attack the day with Passion. The struggle you're in today is developing the strength you need for tomorrow.”",
    person: " ― Napz Cherub Pellazo",
  },
  {
    qoute: "“Life is an outward projection of one's perceived self value.”",
    person: "― Kierra C.T. Banks",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * newQoutes.length);

  qoute.innerText = newQoutes[random].qoute;
  person.innerText = newQoutes[random].person;
});
