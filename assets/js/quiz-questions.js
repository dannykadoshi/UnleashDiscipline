/*  jshint esversion: 11 */

/**
 * Define an array of quotes and author for the quiz game
 */
const guessWhoSaid = [
    {
        question: "“With self-discipline, most anything is possible.”",
        options: [
            "Theodore Roosevelt",
            "Nikola Tesla",
            "Marcus Aurelius",
            "E.M. Gray"
        ],
        correct: "Theodore Roosevelt"
    },
    {
        question: "“We do today what they won't, so tomorrow we can accomplish what they can't.”",
        options: [
            "Dwayne 'The Rock' Johnson",
            "Lou Holtz",
            "Jocko Willink",
            "Ralph Waldo Emerson"
        ],
        correct: "Dwayne 'The Rock' Johnson"
    },
    {
        question: "“A disciplined mind leads to happiness, and an undisciplined mind leads to suffering.”",
        options: [
            "Dalai Lama",
            "George Washington",
            "Jim Rohn",
            "Robert Kiyosaki"
        ],
        correct: "Dalai Lama"
    },
    {
        question: "“Discipline is the soul of an army. It makes small numbers formidable; procures success to the weak, and esteem to all.”",
        options: [
            "George Washington",
            "E.M. Gray",
            "Bum Philips",
            "Nikola Tesla"
        ],
        correct: "George Washington"
    },
    {
        question: "“The only discipline that lasts is self-discipline.”",
        options: [
            "Bum Philips",
            "Darren Hardy",
            "Napoleon Hill",
            "Robert J. Ringer"
        ],
        correct: "Bum Philips"
    },
    {
        question: "“Success is a result of daily disciplines compounded over time.”",
        options: [
            "Darren Hardy",
            "Jim Rohn",
            "Theodore Roosevelt",
            "Napoleon Hill"
        ],
        correct: "Darren Hardy"
    },
    {
        question: "“Discipline is the bridge between goals and accomplishment.”",
        options: [
            "Jim Rohn",
            "Jocko Willink",
            "Ralph Waldo Emerson",
            "E.M. Gray"
        ],
        correct: "Jim Rohn"
    },
    {
        question: "“We must all suffer one of two things: the pain of discipline or the pain of regret and disappointment.”",
        options: [
            "Jim Rohn",
            "Nikola Tesla",
            "John C. Maxwell",
            "Dwayne 'The Rock' Johnson"
        ],
        correct: "Jim Rohn"
    },
    {
        question: "“I could only achieve success in my life through self-discipline, and I applied it until my wish and my will became one.”",
        options: [
            "Nikola Tesla",
            "Ralph Waldo Emerson",
            "Gary Keller",
            "Robert Kiyosaki"
        ],
        correct: "Nikola Tesla"
    },
    {
        question: "“Self-command is the main discipline.”",
        options: [
            "Ralph Waldo Emerson",
            "John C. Maxwell",
            "Lou Holtz",
            "Adam Sicinski"
        ],
        correct: "Ralph Waldo Emerson"
    },
    {
        question: "“Without self-discipline, success is impossible, period.”",
        options: [
            "Lou Holtz",
            "Jim Rohn",
            "George Washington",
            "Steven Pressfield"
        ],
        correct: "Lou Holtz"
    },
    {
        question: "“One discipline always leads to another discipline.”",
        options: [
            "Jim Rohn",
            "Napoleon Hill",
            "Jocko Willink",
            "William Arthur Ward"
        ],
        correct: "Jim Rohn"
    },
    {
        question: "“He who lives without discipline dies without honor.”",
        options: [
            "Icelandic Proverb",
            "Jim Rohn",
            "Dwayne 'The Rock' Johnson",
            "Lou Holtz"
        ],
        correct: "Icelandic Proverb"
    },
    {
        question: "“The price of excellence is discipline. The cost of mediocrity is disappointment.”",
        options: [
            "William Arthur Ward",
            "Dwayne 'The Rock' Johnson",
            "John C. Maxwell",
            "Adam Sicinski"
        ],
        correct: "William Arthur Ward"
    },
    {
        question: "“You have power over your mind, not outside events. Realize this, and you will find strength.”",
        options: [
            "Marcus Aurelius",
            "Abraham Lincoln",
            "Robert Kiyosaki",
            "Thomas Jefferson"
        ],
        correct: "Marcus Aurelius"
    },
    {
        question: "“Discipline is choosing between what you want now and what you want most.”",
        options: [
            "Abraham Lincoln",
            "Napoleon Hill",
            "Lou Holtz",
            "Jocko Willink"
        ],
        correct: "Abraham Lincoln"
    },
    {
        question: "“Confidence comes from discipline and training.”",
        options: [
            "Robert Kiyosaki",
            "Jim Rohn",
            "Gary Keller",
            "George Washington"
        ],
        correct: "Robert Kiyosaki"
    },
    {
        question: "“Success is a matter of understanding and religiously practicing specific simple habits that always lead to success.”",
        options: [
            "Robert J. Ringer",
            "John C. Maxwell",
            "E.M. Gray",
            "Ralph Waldo Emerson"
        ],
        correct: "Robert J. Ringer"
    },
    {
        question: "“No man is fit to command another that cannot command himself.”",
        options: [
            "William Penn",
            "Charles M. Schwab",
            "Darren Hardy",
            "Nikola Tesla"
        ],
        correct: "William Penn"
    },
    {
        question: "“Success doesn't just happen. You have to be intentional about it, and that takes discipline.”",
        options: [
            "John C. Maxwell",
            "Grenville Kleiser",
            "Adam Sicinski",
            "E.M. Gray"
        ],
        correct: "John C. Maxwell"
    },
    {
        question: "“True freedom is impossible without a mind made free by discipline.”",
        options: [
            "Mortimer J. Adler",
            "Thucydides",
            "Leonardo da Vinci",
            "Gary Keller"
        ],
        correct: "Mortimer J. Adler"
    },
    {
        question: "“Self-control is the chief element in self-respect, and self-respect is the chief element in courage.”",
        options: [
            "Thucydides",
            "Leonardo da Vinci",
            "Ralph Waldo Emerson",
            "Robert Kiyosaki"
        ],
        correct: "Thucydides"
    },
    {
        question: "“The first and greatest victory is to conquer self.”",
        options: [
            "Plato",
            "Nikola Tesla",
            "Jocko Willink",
            "Jim Rohn"
        ],
        correct: "Plato"
    },
    {
        question: "“We must do our work for its own sake, not for fortune or attention or applause.”",
        options: [
            "Steven Pressfield",
            "Hellen Keller",
            "Euripides",
            "Adam Sicinski"
        ],
        correct: "Steven Pressfield"
    },
    {
        question: "“One painful duty fulfilled makes the next plainer and easier.”",
        options: [
            "Hellen Keller",
            "Ralph Waldo Emerson",
            "Euripides",
            "Robert Kiyosaki"
        ],
        correct: "Hellen Keller"
    },
    {
        question: "“There are no limits to what you can accomplish, except the limits you place on your own thinking.”",
        options: [
            "Brian Tracy",
            "Charles M. Schwab",
            "E.M. Gray",
            "Marcus Aurelius"
        ],
        correct: "Brian Tracy"
    },
    {
        question: "“Discipline yourself, and others won't need to.”",
        options: [
            "John Wooden",
            "Napoleon Hill",
            "Lou Holtz",
            "Jocko Willink"
        ],
        correct: "John Wooden"
    },
    {
        question: "“Discipline is the soul of an army. It makes small numbers formidable; procures success to the weak, and esteem to all.”",
        options: [
            "George Washington",
            "E.M. Gray",
            "Bum Philips",
            "Nikola Tesla"
        ],
        correct: "George Washington"
    },
    {
        question: "“We must all suffer one of two things: the pain of discipline or the pain of regret and disappointment.”",
        options: [
            "Jim Rohn",
            "Nikola Tesla",
            "John C. Maxwell",
            "Dwayne 'The Rock' Johnson"
        ],
        correct: "Jim Rohn"
    },
    {
        question: "“I could only achieve success in my life through self-discipline, and I applied it until my wish and my will became one.”",
        options: [
            "Nikola Tesla",
            "Ralph Waldo Emerson",
            "Gary Keller",
            "Robert Kiyosaki"
        ],
        correct: "Nikola Tesla"
    },
    {
        question: "“Self-command is the main discipline.”",
        options: [
            "Ralph Waldo Emerson",
            "John C. Maxwell",
            "Lou Holtz",
            "Adam Sicinski"
        ],
        correct: "Ralph Waldo Emerson"
    },
    {
        question: "“Without self-discipline, success is impossible, period.”",
        options: [
            "Lou Holtz",
            "Jim Rohn",
            "George Washington",
            "Steven Pressfield"
        ],
        correct: "Lou Holtz"
    },
    {
        question: "“One discipline always leads to another discipline.”",
        options: [
            "Jim Rohn",
            "Napoleon Hill",
            "Jocko Willink",
            "William Arthur Ward"
        ],
        correct: "Jim Rohn"
    },
    {
        question: "“He who lives without discipline dies without honor.”",
        options: [
            "Icelandic Proverb",
            "Jim Rohn",
            "Dwayne 'The Rock' Johnson",
            "Lou Holtz"
        ],
        correct: "Icelandic Proverb"
    },
    {
        question: "“The price of excellence is discipline. The cost of mediocrity is disappointment.”",
        options: [
            "William Arthur Ward",
            "Dwayne 'The Rock' Johnson",
            "John C. Maxwell",
            "Adam Sicinski"
        ],
        correct: "William Arthur Ward"
    },
    {
        question: "“You have power over your mind, not outside events. Realize this, and you will find strength.”",
        options: [
            "Marcus Aurelius",
            "Abraham Lincoln",
            "Robert Kiyosaki",
            "Thomas Jefferson"
        ],
        correct: "Marcus Aurelius"
    },
    {
        question: "“Discipline is choosing between what you want now and what you want most.”",
        options: [
            "Abraham Lincoln",
            "Napoleon Hill",
            "Lou Holtz",
            "Jocko Willink"
        ],
        correct: "Abraham Lincoln"
    },
    {
        question: "“Confidence comes from discipline and training.”",
        options: [
            "Robert Kiyosaki",
            "Jim Rohn",
            "Gary Keller",
            "George Washington"
        ],
        correct: "Robert Kiyosaki"
    },
    {
        question: "“Success is a matter of understanding and religiously practicing specific simple habits that always lead to success.”",
        options: [
            "Robert J. Ringer",
            "John C. Maxwell",
            "E.M. Gray",
            "Ralph Waldo Emerson"
        ],
        correct: "Robert J. Ringer"
    },
    {
        question: "“No man is fit to command another that cannot command himself.”",
        options: [
            "William Penn",
            "Charles M. Schwab",
            "Darren Hardy",
            "Nikola Tesla"
        ],
        correct: "William Penn"
    },
    {
        question: "“Success doesn't just happen. You have to be intentional about it, and that takes discipline.”",
        options: [
            "John C. Maxwell",
            "Grenville Kleiser",
            "Adam Sicinski",
            "E.M. Gray"
        ],
        correct: "John C. Maxwell"
    },
    {
        question: "“True freedom is impossible without a mind made free by discipline.”",
        options: [
            "Mortimer J. Adler",
            "Thucydides",
            "Leonardo da Vinci",
            "Gary Keller"
        ],
        correct: "Mortimer J. Adler"
    },
    {
        question: "“Self-control is the chief element in self-respect, and self-respect is the chief element in courage.”",
        options: [
            "Thucydides",
            "Leonardo da Vinci",
            "Ralph Waldo Emerson",
            "Robert Kiyosaki"
        ],
        correct: "Thucydides"
    },
    {
        question: "“The first and greatest victory is to conquer self.”",
        options: [
            "Plato",
            "Nikola Tesla",
            "Jocko Willink",
            "Jim Rohn"
        ],
        correct: "Plato"
    },
    {
        question: "“We must do our work for its own sake, not for fortune or attention or applause.”",
        options: [
            "Steven Pressfield",
            "Hellen Keller",
            "Euripides",
            "Adam Sicinski"
        ],
        correct: "Steven Pressfield"
    },
    {
        question: "“One painful duty fulfilled makes the next plainer and easier.”",
        options: [
            "Hellen Keller",
            "Ralph Waldo Emerson",
            "Euripides",
            "Robert Kiyosaki"
        ],
        correct: "Hellen Keller"
    },
    {
        question: "“There are no limits to what you can accomplish, except the limits you place on your own thinking.”",
        options: [
            "Brian Tracy",
            "Charles M. Schwab",
            "E.M. Gray",
            "Marcus Aurelius"
        ],
        correct: "Brian Tracy"
    },
    {
        question: "“You will never change your life until you change something you do daily. The secret of your success is found in your daily routine.”",
        options: [
            "John C. Maxwell",
            "Dwayne 'The Rock' Johnson",
            "Adam Sicinski",
            "Gary Keller"
        ],
        correct: "John C. Maxwell"
    },
    {
        question: "“Discipline yourself, and others won't need to.”",
        options: [
            "John Wooden",
            "Napoleon Hill",
            "Lou Holtz",
            "Jocko Willink"
        ],
        correct: "John Wooden"
    },
    {
        question: "“Discipline is the soul of an army. It makes small numbers formidable; procures success to the weak, and esteem to all.”",
        options: [
            "George Washington",
            "E.M. Gray",
            "Bum Philips",
            "Nikola Tesla"
        ],
        correct: "George Washington"
    },
    {
        question: "“We must all suffer one of two things: the pain of discipline or the pain of regret and disappointment.”",
        options: [
            "Jim Rohn",
            "Nikola Tesla",
            "John C. Maxwell",
            "Dwayne 'The Rock' Johnson"
        ],
        correct: "Jim Rohn"
    },
    {
        question: "“I could only achieve success in my life through self-discipline, and I applied it until my wish and my will became one.”",
        options: [
            "Nikola Tesla",
            "Ralph Waldo Emerson",
            "Gary Keller",
            "Robert Kiyosaki"
        ],
        correct: "Nikola Tesla"
    },
    {
        question: "“Self-command is the main discipline.”",
        options: [
            "Ralph Waldo Emerson",
            "John C. Maxwell",
            "Lou Holtz",
            "Adam Sicinski"
        ],
        correct: "Ralph Waldo Emerson"
    },
    {
        question: "“Without self-discipline, success is impossible, period.”",
        options: [
            "Lou Holtz",
            "Jim Rohn",
            "George Washington",
            "Steven Pressfield"
        ],
        correct: "Lou Holtz"
    },
    {
        question: "“One discipline always leads to another discipline.”",
        options: [
            "Jim Rohn",
            "Napoleon Hill",
            "Jocko Willink",
            "William Arthur Ward"
        ],
        correct: "Jim Rohn"
    },
    {
        question: "“He who lives without discipline dies without honor.”",
        options: [
            "Icelandic Proverb",
            "Jim Rohn",
            "Dwayne 'The Rock' Johnson",
            "Lou Holtz"
        ],
        correct: "Icelandic Proverb"
    },
    {
        question: "“The price of excellence is discipline. The cost of mediocrity is disappointment.”",
        options: [
            "William Arthur Ward",
            "Dwayne 'The Rock' Johnson",
            "Marcus Aurelius",
            "Robert Kiyosaki"
        ],
        correct: "William Arthur Ward"
    },
    {
        question: "“You have power over your mind, not outside events. Realize this, and you will find strength.”",
        options: [
            "Marcus Aurelius",
            "Abraham Lincoln",
            "Robert Kiyosaki",
            "Thomas Jefferson"
        ],
        correct: "Marcus Aurelius"
    },
    {
        question: "“Discipline is choosing between what you want now and what you want most.”",
        options: [
            "Abraham Lincoln",
            "Napoleon Hill",
            "Lou Holtz",
            "Jocko Willink"
        ],
        correct: "Abraham Lincoln"
    },
    {
        question: "“Confidence comes from discipline and training.”",
        options: [
            "Robert Kiyosaki",
            "Jim Rohn",
            "Gary Keller",
            "George Washington"
        ],
        correct: "Robert Kiyosaki"
    },
    {
        question: "“Success is not final; failure is not fatal: It is the courage to continue that counts.”",
        options: [
            "Winston S. Churchill",
            "Robert Kiyosaki",
            "J.K. Rowling",
            "Maya Angelou"
        ],
        correct: "Winston S. Churchill"
    },
    {
        question: "“It is better to fail in originality than to succeed in imitation.”",
        options: [
            "Herman Melville",
            "Stephen King",
            "Leo Tolstoy",
            "Jane Austen"
        ],
        correct: "“Herman Melville"
    },
    {
        question: "“The road to success and the road to failure are almost exactly the same.”",
        options: [
            "Colin R. Davis",
            "William Shakespeare",
            "Emily Dickinson",
            "Mark Twain"
        ],
        correct: "Colin R. Davis"
    },
    {
        question: "“Success usually comes to those who are too busy looking for it.”",
        options: [
            "Henry David Thoreau",
            "Albert Einstein",
            "Virginia Woolf",
            "F. Scott Fitzgerald"
        ],
        correct: "Henry David Thoreau"
    },
    {
        question: "“Success is getting what you want, happiness is wanting what you get.”",
        options: [
            "W. P. Kinsella",
            "J.R.R. Tolkien",
            "Charles Dickens",
            "Ernest Hemingway"
        ],
        correct: "W. P. Kinsella"
    },
    {
        question: "“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.”",
        options: [
            "Winston Churchill",
            "Nelson Mandela",
            "Abraham Lincoln",
            "Martin Luther King Jr."
        ],
        correct: "“Winston Churchill"
    },
    {
        question: "“Don't let yesterday take up too much of today.”",
        options: [
            "Will Rogers",
            "Theodore Roosevelt",
            "Walt Disney",
            "Steve Jobs"
        ],
        correct: "Will Rogers"
    },
    {
        question: "“Opportunity is missed by most people because it is dressed in overalls and looks like work.”",
        options: [
            "Thomas Edison",
            "Leonardo da Vinci",
            "Pablo Picasso",
            "Vincent van Gogh"
        ],
        correct: "Thomas Edison"
    },
    {
        question: "“Setting goals is the first step in turning the invisible into the visible.”",
        options: [
            "Tony Robbins",
            "Elon Musk",
            "Warren Buffett",
            "Jeff Bezos"
        ],
        correct: "Tony Robbins"
    },
    {
        question: "“Women challenge the status quo because we are never it.”",
        options: [
            "Cindy Gallop",
            "Sheryl Sandberg",
            "Melinda Gates",
            "Oprah Winfrey"
        ],
        correct: "“Cindy Gallop"
    },
    {
        question: "We don't just sit around and wait for other people. We just make, and we do.”",
        options: [
            "Arlan Hamilton",
            "Bill Gates",
            "Richard Branson",
            "Mark Zuckerberg"
        ],
        correct: "Arlan Hamilton"
    },
    {
        question: "“Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.”",
        options: [
            "Oprah Winfrey",
            "Michelle Obama",
            "Ellen DeGeneres",
            "Serena Williams"
        ],
        correct: "Oprah Winfrey"
    },
    {
        question: "“Weight loss doesn't begin in the gym with a dumbbell; it starts in your head with a decision.”",
        options: [
            "Toni Sorenson",
            "Michelle Obama",
            "Serena Williams",
            "Ellen DeGeneres"
        ],
        correct: "Toni Sorenson"
    },
    {
        question: "“Weight loss requires determination, consistency and hard work.”",
        options: [
            "Invajy",
            "Tony Robbins",
            "Richard Branson",
            "Elon Musk"
        ],
        correct: "Invajy"
    },
    {
        question: "“The journey to stronger muscles passes through sore muscles.”",
        options: [
            "Invajy",
            "Bill Gates",
            "Warren Buffett",
            "Jeff Bezos"
        ],
        correct: "Invajy"
    },
    {
        question: "“Success is the sum of small efforts, repeated day-in and day-out.”",
        options: [
            "Robert Collier",
            "Napoleon Hill",
            "Zig Ziglar",
            "Brian Tracy"
        ],
        correct: "Robert Collier"
    },
    {
        question: "“Champions keep playing until they get it right.”",
        options: [
            "Billie Jean King",
            "Roger Federer",
            "Michael Jordan",
            "Usain Bolt"
        ],
        correct: "Billie Jean King"
    },
    {
        question: "“If you aren't going all the way, why go at all?”",
        options: [
            "Joe Namath",
            "Tom Brady",
            "LeBron James",
            "Lionel Messi"
        ],
        correct: "Joe Namath"
    },
    {
        question: "“Every day, in every way, I am getting better and better.”",
        options: [
            "Emilie Coue",
            "Louise Hay",
            "Wayne Dyer",
            "Deepak Chopra"
        ],
        correct: "Emilie Coue"
    },
    {
        question: "“Just believe in yourself. Even if you don't, pretend that you do and, at some point, you will.”",
        options: [
            "Venus Williams",
            "Serena Williams",
            "Simone Biles",
            "Misty Copeland"
        ],
        correct: "Venus Williams"
    },
    {
        question: "“A habit cannot be tossed out the window; it must be coaxed down the stairs a step at a time.”",
        options: [
            "Mark Twain",
            "Albert Einstein",
            "William Shakespeare",
            "Emily Dickinson"
        ],
        correct: "Mark Twain"
    },
    {
        question: "“And once you understand that habits can change, you have the freedom and the responsibility to remake them.”",
        options: [
            "Charles Duhigg",
            "Malcolm Gladwell",
            "Daniel Kahneman",
            "Steven Pinker"
        ],
        correct: "Charles Duhigg"
    },
    {
        question: "“Discipline is choosing between what you want now and what you want most.”",
        options: [
            "Abraham Lincoln",
            "George Washington",
            "Thomas Jefferson",
            "Benjamin Franklin"
        ],
        correct: "Abraham Lincoln"
    },
    {
        question: "“Drop by drop is the water pot filled.”",
        options: [
            "Buddha",
            "Lao Tzu",
            "Confucius",
            "Dalai Lama"
        ],
        correct: "Buddha"
    },
    {
        question: "“First forget inspiration. Habit is more dependable. Habit will sustain you whether you're inspired or not.”",
        options: [
            "Octavia Butler",
            "Margaret Atwood",
            "Ursula K. Le Guin",
            "Toni Morrison"
        ],
        correct: "Octavia Butler"
    },
    {
        question: "“Good habits are worth being fanatical about.”",
        options: [
            "John Irving",
            "Haruki Murakami",
            "J.K. Rowling",
            "Ernest Hemingway"
        ],
        correct: "John Irving"
    },
    {
        question: "“Good habits formed at youth make all the difference.”",
        options: [
            "Aristotle",
            "Plato",
            "Socrates",
            "Homer"
        ],
        correct: "Aristotle"
    },
    {
        question: "“Habit is the intersection of knowledge (what to do), skill (how to do), and desire (want to do).”",
        options: [
            "Stephen R. Covey",
            "Brian Tracy",
            "Robin Sharma",
            "Tony Robbins"
        ],
        correct: "Stephen R. Covey"
    },
    {
        question: "“Habits change into character.”",
        options: [
            "Ovid",
            "Virgil",
            "Horace",
            "Cicero"
        ],
        correct: "Ovid"
    },
    {
        question: "“Happiness is a habit—cultivate it.”",
        options: [
            "Elbert Hubbard",
            "Ralph Waldo Emerson",
            "Henry David Thoreau",
            "Walt Whitman"
        ],
        correct: "Elbert Hubbard"
    }
];
