/*  jshint esversion: 11 */

/**
 * Define an array of quotes and author for the quiz game
 */
const guessWhoSaid = [
    {
        question: "“The great master key to riches is nothing more or less than the self-discipline necessary to help you take full and complete possession of your own mind.”",
        options: [
            "Napoleon Hill",
            "Theodore Roosevelt",
            "Dwayne 'The Rock' Johnson",
            "Lou Holtz"
        ],
        correct: "Napoleon Hill"
    },
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
        question: "“Winners embrace hard work. They love the discipline of it, the trade-off they're making to win. Losers, on the other hand, see it as a punishment. And that's the difference.”",
        options: [
            "Lou Holtz",
            "Darren Hardy",
            "Jim Rohn",
            "Charles M. Schwab"
        ],
        correct: "Lou Holtz"
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
        question: "“The successful person has the habit of doing the things failures don't like to do. They don't like doing them either necessarily. But their disliking is subordinated to the strength of their purpose.”",
        options: [
            "E.M. Gray",
            "John C. Maxwell",
            "Dwayne 'The Rock' Johnson",
            "Jim Rohn"
        ],
        correct: "E.M. Gray"
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
        question: "“There is no easy way. There is only hard work, late nights, early mornings, practice, rehearsal, repetition, study, sweat, blood, toil, frustration, and discipline.”",
        options: [
            "Jocko Willink",
            "Marcus Aurelius",
            "George Washington",
            "Lou Holtz"
        ],
        correct: "Jocko Willink"
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
    }
];
