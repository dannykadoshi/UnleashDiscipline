// Array of quotes
const quotes = [
    {
        text: '"The only way to do great work is to love what you do."',
        author: "Steve Jobs"
    },
    {
        text: '"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."',
        author: "Albert Schweitzer"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    },
    {
        text: "I hated every minute of training, but I said, Don't quit. Suffer now and live the rest of your life as a champion.”",
        author: "Muhammad Ali"
    },
    {
        text: "We are what we repeatedly do. Excellence then is not an act but a habit.",
        author: "Aristotele"
    },
    {
        text: "The body achieves what the mind believes.",
        author: "Napoleon Hill"
    },
    {
        text: "The hard days are the best because that's when champions are made, so if you push through, you can push through anything.",
        author: "Dana Vollmer"
    },
    {
        text: "If you don't find the time, if you don't do the work, you don't get the results.",
        author: "Arnold Schwarzenegger"
    },
    {
        text: "Dead last finish is greater than did not finish, which trumps did not start.",
        author: "Unknown"
    },
    {
        text: "Push harder than yesterday if you want a different tomorrow.",
        author: "Vincent Williams Sr."
    },
    {
        text: "The real workout starts when you want to stop.",
        author: "Ronnie Coleman"
    },
    {
        text: "Take care of your body. It's the only place you have to live.",
        author: "Jim Rohn"
    },
    {
        text: "I've failed over and over again in my life and that is why I succeed.",
        author: "Michael Jordan"
    },
    {
        text: "Once you are exercising regularly, the hardest thing is to stop it.",
        author: "Erin Gray"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "Exercise should be regarded as tribute to the heart",
        author: "Gene Tunney"
    },
    {
        text: "You're going to have to let it hurt. Let it suck. The harder you work, the better you will look. Your appearance isn't parallel to how heavy you lift, it's parallel to how hard you work.",
        author: "Joe Mangianello"
    },
    {
        text: "Most people fail, not because of lack of desire, but, because of lack of commitment.",
        author: "Vince Lombardi"
    },
    {
        text: "You miss one hundred percent of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        text: "If something stands between you and your success, move it. Never be denied.",
        author: "Dwayne “The Rock” Johnson"
    },
    {
        text: "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak"
    },
    {
        text: "Just believe in yourself. Even if you don't, just pretend that you do and at some point, you will.",
        author: "Venus Williams"
    },
    {
        text: "The harder you work and the more prepared you are for something, you're going to be able to persevere through anything.",
        author: "Carli Lloyd"
    },
    {
        text: "Enduring means accepting. Accepting things as they are and not as you would wish them to be, and then looking ahead, not behind.",
        author: "Rafael Nadal"
    },
    {
        text: "If you want something you've never had, you must be willing to do something you've never done.",
        author: "Thomas Jefferson"
    },
    {
        text: "The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character.",
        author: "Arnold Schwarzenegger"
    },
    {
        text: "Continuous improvement is better than delayed perfection.",
        author: "Mark Twain"
    },
    {
        text: "Once you learn to quit, it becomes a habit.",
        author: "Vince Lombardi"
    },
    {
        text: "It's hard to beat a person who never gives up.",
        author: "Babe Ruth"
    },
    {
        text: "Do something today that your future self will thank you for.",
        author: "Sean Patrick Flanery"
    },
    {
        text: "Success is usually the culmination of controlling failure.",
        author: "Sylvester Stallone"
    },
    {
        text: "Think of your workouts as important meetings you schedule with yourself. Bosses don't cancel",
        author: "Unknown"
    },
    {
        text: "Workout till you feel that pain and soreness in muscles. This one is good pain. No pain, no gain.",
        author: "Invajy"
    },
    {
        text: "Confidence comes from discipline and training.",
        author: "Robert Kiyosaki"
    },
    {
        text: "I don't count my sit-ups. I only start counting when it starts hurting because they're the only ones that count.",
        author: "Muhammad Ali"
    },
    {
        text: "What hurts today makes you stronger tomorrow",
        author: "Jay Cutler"
    },
    {
        text: "Strength does not come from physical capacity. It comes from an indomitable will",
        author: "Mahatma Gandhi"
    },
    {
        text: "You must expect things of yourself before you can do them.",
        author: "Michael Jordan"
    },
    {
        text: "The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.",
        author: "Arnold Schwarzenegger"
    },
    {
        text: "If you fail to prepare, you're prepared to fail.",
        author: "Mark Spitz"
    },
    {
        text: "Motivation is what gets you started. Habit is what keeps you going.",
        author: "Jim Ryun"
    },
    {
        text: "A champion is someone who gets up when they can't.",
        author: "Jack Dempsey"
    },
    {
        text: "The difference between the impossible and the possible lies in a person's determination.",
        author: "Tommy Lasorda"
    },
    {
        text: "When you have a clear vision of your goal, it's easier to take the first step toward it.",
        author: "LL Cool J"
    },
    {
        text: "When I feel tired, I just think about how great I will feel once I finally reach my goal.",
        author: "Michael Phelps"
    },
    {
        text: "You have to think about it before you can do it. The mind is what makes it all possible.",
        author: "Kai Greene"
    },
    {
        text: "The only bad workout is the one that didn't happen.",
        author: "Unknown"
    },
    {
        text: "Don't be afraid of failure. This is the way to succeed.",
        author: "LeBron James"
    },
    {
        text: "You should never stay at the same level. Always push yourself to the next.",
        author: "Marnelli Dimzon"
    },
    {
        text: "You did not wake up today to be mediocre.",
        author: "Robin Arzon"
    },
    {
        text: "Action is the foundational key to all success.",
        author: "Pablo Picasso"
    },
    {
        text: "If it doesn't challenge you, it doesn't change you.",
        author: "Fred DeVito"
    },
    {
        text: "You can either suffer the pain of discipline or the pain of regret.",
        author: "Jim Rohn"
    },
    {
        text: "We can push ourselves further. We always have more to give.",
        author: "Simone Biles"
    },
    {
        text: "If you want to be the best, you have to do things other people aren't willing to do.",
        author: "Michael Phelps"
    },
    {
        text: "Every champion was once a contender who refused to give up.",
        author: "Rock Balboa"
    },
    {
        text: "The difference between try and triumph is a little 'umph'.",
        author: "Marvin Phillips"
    },
    {
        text: "If you are not pissed off for greatness, that just means you're okay with being mediocre.",
        author: "Ray Lewis"
    },
    {
        text: "Keep working even when no one is watching.",
        author: "Alex Morgan"
    },
    {
        text: "Your health account, your bank account, they're the same thing. The more you put in, the more you can take out. Exercise is king and nutrition is queen. Together you have a kingdom.",
        author: "Jack LaLanne"
    },
    {
        text: "Don't dream of winning. Train for it!",
        author: "Mo Farah"
    },
    {
        text: "Most people give you right before the big break comes, don't let that person be you.",
        author: "Michael Boyle"
    },
    {
        text: "Discipline is the bridge between goals and accomplishment.",
        author: "Jim Rohn"
    },
    {
        text: "Fitness is not about being better than someone else. It's about being better than you used to be.",
        author: "Khloe Kardashian"
    },
    {
        text: "Exercise should be regarded as a tribute to the heart.",
        author: "Gene Tunney"
    },
    {
        text: "Keep listening to your body. It will tell you when something is not okay.",
        author: "Emily Infeld"
    },
    {
        text: "Whether you think you can, or you think you can't. you are right",
        author: "Henry Ford"
    },
    {
        text: "All our dreams can come true if we have the courage to pursue them.",
        author: "Walt Disney"
    },
    {
        text: "Great things come from hard work and perseverance. No excuses.",
        author: "Kobe Bryant"
    },
    {
        text: "Always make a total effort, even when the odds are against you.",
        author: "Arnold Palmer"
    },
    {
        text: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    },
    {
        text: "Your mind will quit a thousand times before your body will.",
        author: "Reginald Red"
    },
    {
        text: "I've grown most not from victories, but setbacks. If winning is God's reward, then losing is how he teaches us.",
        author: "Serena Williams"
    },
    {
        text: "Set your goals high, and don't stop until you get there.",
        author: "Bo Jackson"
    },
    {
        text: "Physical fitness can neither be achieved by wishful thinking nor outright purchase.",
        author: "Joseph Pilates"
    },
    {
        text: "If you take time to realize what your dream is and what you really want in life — no matter what it is, whether it's sports or in other fields — you have to realize that there is always work to do, and you want to be the hardest working person in whatever you do, and you put yourself in a position to be successful. And you have to have a passion about what you do.",
        author: "Stephen Curry"
    },
    {
        text: "You shall gain, but you shall pay with sweat, blood, and vomit.",
        author: "Pavel Tsatsouline"
    },
    {
        text: "You have to push past your perceived limits, push past that point you thought was as far as you can go.",
        author: "Drew Brees"
    },
    {
        text: "Get ready, be prepared. So when opportunities finally show themselves, you'll be able to own them.",
        author: "Hannah Gabriels"
    },
    {
        text: "You dream. You plan. You reach. There will be obstacles. There will be doubters. There will be mistakes. But with hard work, with belief, with confidence and trust in yourself and those around you, there are no limits.",
        author: "Michael Phelps"
    },
    {
        text: "Be Humble. Be Hungry. And always be the hardest worker in the room.",
        author: "Dwayne 'The Rock' Johnson"
    },
    {
        text: "Some people want it to happen, some wish it would happen, others make it happen.",
        author: "Michael Jordan"
    },
    {
        text: "A year from now you may wish you had started today.",
        author: "Karen Lamb"
    },
    {
        text: "A goal is just an awesome way to force growth on yourself",
        author: "Deena Kastor"
    },
    {
        text: "If you do not believe in yourself, no one will do it for you",
        author: "Kobe Bryant"
    },
    {
        text: "Our bodies are gardens, our wills are our gardeners.",
        author: "William Shakespeare"
    },
    {
        text: "Get comfortable with being uncomfortable!",
        author: "Jillian Michaels"
    },
    {
        text: "Stop wishing. Start doing. And next time you fix your lips to say 'I wish', perhaps consider replacing it with 'I will'",
        author: "Lita Lewis"
    },
    {
        text: "Discipline is the bridge between goals and accomplishments.",
        author: "Jim Rohn"
    },
    {
        text: "We all have dreams. But in order to make dreams come into reality, it takes an awful lot of determination, dedication, self-discipline, and effort.",
        author: "Jesse Owens"
    },
    {
        text: "Nothing will work unless you do.",
        author: "Unknown"
    },
    {
        text: "You are not defeated when you lose. You are defeated when you quit.",
        author: "Paulo Coelho"
    },
    {
        text: "There is no luck except where there is discipline.",
        author: "Irish proverb"
    },
    {
        text: "Day by day, what you choose, what you think, and what you do is who you become.",
        author: "Heraclitus"
    },
    {
        text: "The only bad workout is the one you didn't do.",
        author: "Unknown"
    },
    {
        text: "What you do today can improve all your tomorrows.",
        author: "Ralph Marston"
    },
    {
        text: "Motivation is what gets you started. Habit is what keeps you going.",
        author: "Jim Rohn"
    },
    {
        text: "Self-discipline is when your conscience tells you to do something and you don't talk back.",
        author: "W. K. Hope"
    },
    {
        text: "With self-discipline, most anything is possible.",
        author: "Theodore Roosevelt"
    },
    {
        text: "If the plan doesn't work, change the plan, not the goal.",
        author: "Unknown"
    },
    {
        text: "My rituals keep me consistent, and consistency is the key to achieving goals.",
        author: "Kelsey Heenan"
    },
    {
        text: "Today I will do what others won't, so tomorrow I can accomplish what others can't.",
        author: "Jerry Rice"
    },
    {
        text: "If you could get up the courage to begin, you have the courage to succeed.",
        author: "David Viscott"
    },
    {
        text: "Self-discipline is the ability to make yourself do what you should do, when you should do it, whether you feel like it or not.",
        author: "Elbert Hubbard"
    },
    {
        text: "The price of excellence is discipline.",
        author: "William Arthur Ward"
    },
    {
        text: "Self-discipline starts with the mastery of your thoughts. If you don't control what you think, you can't control what you do.",
        author: ""
    },
    {
        text: "Discipline is choosing between what you want now and what you want most.",
        author: "Abraham Lincoln"
    },
    {
        text: "Don't stop until you're proud.",
        author: "Unknown"
    },

];

//Get the quote text element
const quoteText = document.getElementById('quote-text');

//Function to add quotation marks to the quote text
function addQuotationMarks() {
    const text = quoteText.textContent;
    quoteText.textContent = `"${text}"`;
}

//Call the function to add quotation marks
addQuotationMarks()

// Get quote container elements
const quoteAuthor = document.getElementById('quote-author');

//Get new quote buttom element
const newQuoteBtn = document.getElementById('new-quote-btn');

//Get share button element
const shareBtn = document.getElementById('share-btn');

//Function to Generate a random quote
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    //Set the quote text and author
    quoteText.textContent = randomQuote.text;
    quoteAuthor.textContent = randomQuote.author;

    //Add quotation marks after setting the quote text
    addQuotationMarks();
}

//Generate a random quote when the page loads
window.addEventListener('load', generateRandomQuote);

//Generate a random quote when the new quote button is clicked
newQuoteBtn.addEventListener('click', generateRandomQuote);