// Random Quote


const blessedBy = ['The Horse God', 'Father', 'Smith', 'Warrior', 'Mother', 'Maiden', 'Crone', 'Stranger', 'The Drowned God', 'The Many-Faced God (also known as the God of Death)', 'The Red God (also known as the Lord of Light)', 'The Old Gods'];

const quote = [
    'Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.', 
    'Any man who must say, \'I am the king,\' is no true king. I\'ll make sure you understand that when I\'ve won your war for you.',
    'The things I do for love',
    'There is only one thing we say to death: Not today',
    'If you think this has a happy ending, you haven\'t been paying attention.',
    'You\'re going to die tomorrow, Lord Bolton. Sleep well.',
    'That\'s what I do: I drink and I know things.',
    'Yes. All men must die, but we are not men.',
    'The man who passes the sentence should swing the sword.',
    'Chaos isn\'t a pit. Chaos is a ladder.',
    'Tell Cersei. I want her to know it was me.',
    'I don\'t plan on knitting by the fire while men fight for me. I might be small, Lord Glover, and I might be a girl, but I am every bit as much a Northerner as you… and I don\'t need your permission to defend the North.',
    'You know nothing, Jon Snow.',
    'When you play the game of thrones, you win or you die. There is no middle ground.'
];

const author = ['Tywin Lannister', 'Tyrion Lannister', 'Jaime Lannister', 'Syrio Forel the First Sword of Bravos', 'Ramsay Bolton',  'Sansa Stark', 'Daenerys Targaryen', 'Ned Stark', 'Littlefinger', 'Olenna Tyrell', 'Lyanna Mormont', 'Ygritte', 'Cersei Lannister'];


// Function will choose a random number from 0 - [number of indexes of requested array] return this number that can be later used to access specific element of that array
const randomNumberGenerator = arrayLength => {

    return Math.floor(Math.random() * arrayLength);

}
