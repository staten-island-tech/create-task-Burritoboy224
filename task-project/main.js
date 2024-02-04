const questions = [
  {
    question: "1) What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Kieran"],
    correct: "Paris"
  },
  {
    question: "2) Who wrote the Harry Potter book series?",
    answers: ["J.K. Rowling", "Dr. Seuss", "Mark Twain", "Jayla Ye"],
    correct: "J.K. Rowling"
  },
  {
    question: "3) Which planet is closest to the sun?", 
    answers: ["Earth", "Venus", "Mercury", "Mars"],
    correct: "Mercury"
  },
  {
    question: "4) A magnet would most likely attract which of the following?", 
    answers: ["Metal", "Plastic", "Burrito", "Mars"],
    correct: "Metal"
  },
  {
    question: "5) Which planet is closest to Mars?", 
    answers: ["Earth", "Venus", "Mercury", "Mars"],
    correct: "Earth"
  },
  {
    question: "6) Who made the Iphone", 
    answers: ["Steve Jobs", "Jayla Ye", "Steve Trabajo", "Kieran Watt"],
    correct: "Steve Jobs"
  },
  
  {
    question: "7) Who made the Pineapple Iphone", 
    answers: ["Steve Jobs", "Jayla Ye", "Steve Trabajo", "Kieran Watt"],
    correct: "Steve Trabajo"
  },


  {
    question: "8) A geologist would likely be LEAST helpful for answering questions about which of the following?", 
    answers: ["Rocks", "Diamonds", "Granite", "Fruity Pebbles"],
    correct: "Fruity Pebbles"
  },

  {
    question: "9) A person who is not a banker and lends money at an extremely high interest rate is known as what?", 
    answers: ["Loan Shark", "Green Snake", "Paper Tiger", "Loan Eagles"],
    correct: "Loan Shark"
  },

  {
    question: "10) According to studies, what should a typical teenager spend up to 10 hours a night doing?", 
    answers: ["Party", "Tweeting", "Surfing", "Sleeping"],
    correct: "Sleeping"
  },

  {
    question: "11) In the UK, the abbreviation NHS stands for National what Service?", 
    answers: ["Humanities", "Health", "Food", "Honor"],
    correct: "Health"
  },

  {
    question: "12) What is the first pokemon in the pokedex?", 
    answers: ["Charmander", "Bulbasaur", "Tepig", "Squirtle"],
    correct: "Charmander"
  },

  {
    question: "13)The hammer and sickle is one of the most recognisable symbols of which political ideology?", 
    answers: ["Facism", "Communism", "Republicanism", "Liberalism"],
    correct: "Communism"
  },

  {
    question: "14) In Doctor Who, what was the signature look of the fourth Doctor, as portrayed by Tom Baker?", 
    answers: ["Bow-tie, braces and tweed jacket", "Wide-brimmed hat and extra long scarf", "Pinstripe suit and trainers", "Cape velvet jacket and frilly shirt"],
    correct: "Wide-brimmed hat and extra long scarf"
  },

  {
    question: "15) Construction of which of these famous landmarks was completed first?", 
    answers: ["Empire State Building", "Royal Albert Hall", "Eiffel Tower", "Big Ben Clock Tower"],
    correct: "Big Ben Clock Tower"
  },

  {
    question: "16) In 1718, which pirate died in battle off the coast of what is now North Carolina?", 
    answers: ["Calico Jack", "Blackbeard", "Bartholomew Roberts", "Captain Kidd"],
    correct: "Blackbeard"
  },

  {
    question: "17) Who is the only British politician to have held all four “Great Offices of State” at some point during their career?", 
    answers: ["David Lloyd George", "Harold Wilson", "James Callaghan", "John Major"],
    correct: "James Callaghan"
  },

  {
    question: "18) Which of these brands was chiefly associated with the manufacture of household locks?", 
    answers: ["Phillips", "Flymo", "Chubb", "Ronseal"],
    correct: "Chubb"
  },

  {
    question: "19) Obstetrics is a branch of medicine particularly concerned with what?", 
    answers: ["Childbirth", "Broken bones", "Heart conditions", "Old age"],
    correct: "Childbirth"
  },

  {
    question: "20) Where do you live?", 
    answers: ["Your house", "Next to your neighbor", "On my street", "Staten Island Technical High School"],
    correct: "Staten Island Technical High School"
  },
];

let prizeMoney = 0;
let questionIndex = 0;

function updateGame() {
  // Display current question
  document.getElementById("question").textContent = questions[questionIndex].question;
  
  // Clear previous answers
  document.getElementById("answers").innerHTML = "";
  
  // Shuffle answers  
  questions[questionIndex].answers.sort(() => Math.random() - 0.5);

  // Add answer buttons
  questions[questionIndex].answers.forEach(answer => {
    let btn = document.createElement("button");
    btn.textContent = answer;
    
    btn.onclick = () => {
      // Check if user clicked correct answer
      if (answer === questions[questionIndex].correct) {
        prizeMoney += 100;
        questionIndex++;
        updateGame();
      } else {
        alert("Incorrect! Game over.");
      }
    }
    
    document.getElementById("answers").appendChild(btn);
  });
  
  // Update prize money
  document.getElementById("prize-money").textContent = `$${prizeMoney}`;
}

updateGame();