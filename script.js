// Text Adventure Game
const start = `Dinner with Bob Ross. Click 'OK' to start the game.`;

const enter = "Please enter 1 or 2 for your answer";

const gameOver = "";

const q1 = `You see Bob sitting at the dinner table in [insert fancy restaurant name]. How do you greet him?
1. Hey..so..uh idk
OR
2. Hello, how are you tonight?
${enter}`;

const gameOver1 = `Oh Bob felt like you weren't excited for the dinner and looks sad. '^' ${gameOver}`;

const q2 = `(Bob smiles) Thank you for asking, I'm just fine, what about yourself?
1. I'm good so what do you do besides painting on TV?
OR
2. Huh? oh I guess I'm ok..um..(you sit there awkwardly in the silence)
${enter}`;

const gameOver2 = `(Bob fidgets with his silverware and halfway smiles but his smile drops a bit) Alrighty then.. ${gameOver}`;

const q3 = `(Bob begins to tell you stories about what he does and use to do) So when I was a boy I use to go out to the woods and play with the woodland critters since there wasn't anyone to really play with..
1. (You pick up your phone in the middle of the story and start looking through apps) uh huh..oh..neat
OR
2. Oh wow, that's so sweet that you have a love for woodland creatures..so is that why you usually have a squirrel in your pocket?
${enter}`;

const gameOver3 = `(Bob glances at you and frowns a bit) Are you bored with my stories? I'm sorry if you want I can hush. '^'  ${gameOver}`;

const q4 = `(Bob looks so happy) Yes! Their name is Peapod, such a sweet little buddy, So what do you enjoy doing?
1. Oh oks well..I enjoy [insert what you enjoy/hobbies]
OR
2. Cool..I guess I just kinda of sit around and don't do much of anything else
${enter}`;

const gameOver4 = `(Bob looks a bit worried) I'm sorry to hear that.. ${gameOver}`;

const q5 = `(Bob seems so interested in your hobbies and such) That is wonderful to hear..this was a lovely dinner with you!
1. Ehh..I didn't care much for it but you're a good guy..
OR
2. I'm so glad to hear that..this was a great dinner with you!
${enter}`;

const gameOver5 = `(Bob looks sorrow and leaves the dinner early) I'm sorry it was terrible..I'll just go..goodbye
[you made Bob sad, you are terrible at dinner and a mean person, go think about what you did.] ${gameOver}`;

const win = `You did it! Bob enjoyed having dinner with you that he'll plan another one again next time. I think this is the start of a amazing friendship. Thank you for playing..Wish to replay?`;

alert(start);
let userInput = prompt(q1);

if (userInput == 2) {
    userInput = prompt(q2);
} else {
    alert(gameOver1);
}
if (userInput == 1) {
    userInput = prompt(q3);
} else {
    alert(gameOver2);
}
if (userInput == 2) {
    userInput =prompt(q4);
} else {
    alert(gameOver3);
}
if (userInput == 1) {
    userInput = prompt(q5);
} else {
    alert(gameOver4);
}
if (userInput == 2) {
    alert(win);
} else {
    alert(gameOver5);
} 
