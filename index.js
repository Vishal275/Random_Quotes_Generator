function randomQuote() {
  // Used dictionary to store quotes and authors
  var quotes = {
    "- Arnold Schwarzenegger":
      '"The meaning of life is not simply to exist, to survive, but to move ahead, to go up, to conquer."',
    "- Jessie Hilgenberg":
      '"Don’t be scared to LIFT HEAVY! You won’t get huge and bulky, you’ll just get amazing."',
    "- Lou Ferrigno":
      '"Forget failure. Forget Mistakes. Forget Everything, except what you’re going to do now. And do it."',
    "- Franco Columbu": '"Winners do what they fear."',
    "- Kai Greene":
      '"Victory isn’t defined by wins and losses, it’s defined by effort."',
    "- Phil Heath":
      '"If you want something you’ve never had before, you have to be willing to do something you’ve never done before."',
    "- Ronnie Coleman": '"The real workout starts when you want to stop."',
    "- Flex Lewis":
      '"Don’t let someone who gave up on their dreams talk you out of yours."',
    "- Dwayne ‘The Rock’ Johnson": '"Wake up determined. Go to bed satisfied."',
    "- Henry Rollins":
      '"The Iron never lies to you. You can walk outside and listen to all kinds of talk, get told that you’re a god or a total bastard. The Iron will always kick you the real deal. The Iron is the great reference point, the all-knowing perspective giver. Always there like a beacon in the pitch black. I have found the Iron to be my greatest friend. It never freaks out on me, never runs. Friends may come and go. But two hundred pounds is always two hundred pounds."',
    "- Tom Platz":
      '"Everyone has the ability to accomplish unique feats, everyone. You choose this. Become someone great in one other life. Forget about failing to many. Who cares? Does’nt matter when you start or finish, just start, no deviations, no excuses."',
    "- Stuart McRobert":
      '"Once you can squat with 180 kilograms, your arms and shoulders will come along much more receptively...If you want big arms and shoulders, your first priority is to be sure that your leg/hip/back structure is growing and becoming powerful"',
    "- Samuel Wilson Fussell":
      '"The gym was the one place I had control. I didn’t have to speak, I didn’t have to listen. I just had to push or pull. It was so much simpler, so much more satisfying than life outside. I didn’t have to think. I didn’t have to care. I didn’t have to feel. I simply had to lift.”',
    "- Tom Hanks":
      '"Of course it’s hard. It’s supposed to be hard. If it were easy, everybody would do it. Hard is what makes it great."',
    "- Arnold Schwarzenegger":
      '"The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion."',
    "- Andrew Murphy":
      '"Your body can stand almost anything. It’s your mind that you have to convince."',
  };

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() * authors.length)];

  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}

document.querySelector("#generate").addEventListener("click", randomQuote);
randomQuote();
