const data = {
    grade1: {
        math: {
            name: "Mathematics",
            topics: [
                {
                    title: "NUMBERS",
                    subtopics: [
                        {
                            title: "Counting 1-100",
                            notes: [
                                { type: "text", content: "Counting means saying numbers in order." },
                                { type: "text", content: "We count from 1 up to 100." },
                                { type: "example", content: "Example: 1, 2, 3, 4, 5..." }
                            ],
                            questions: [
                                { type: "input", question: "What number comes after 5?", answer: "6" },
                                { type: "input", question: "What number comes before 10?", answer: "9" }
                            ]
                        },
                        {
                            title: "Number Symbols",
                            notes: [
                                { type: "text", content: "Numbers are written using symbols called digits." },
                                { type: "example", content: "Example: 'three' is written as 3." }
                            ],
                            questions: [
                                { type: "input", question: "Write the symbol for seven.", answer: "7" }
                            ]
                        },
                        {
                            title: "Addition up to 20",
                            notes: [
                                { type: "text", content: "Addition means putting numbers together." },
                                { type: "example", content: "Example: 2 + 3 = 5" }
                            ],
                            questions: [
                                { type: "input", question: "4 + 5 = ?", answer: "9" }
                            ]
                        },
                        {
                            title: "Subtraction up to 20",
                            notes: [
                                { type: "text", content: "Subtraction means taking away." },
                                { type: "example", content: "Example: 5 - 2 = 3" }
                            ],
                            questions: [
                                { type: "input", question: "10 - 4 = ?", answer: "6" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "What number comes after 9?", answer: "10" },
                        { question: "2 + 2 = ?", answer: "4" },
                        { question: "5 - 1 = ?", answer: "4" }
                    ]
                },
                {
                    title: "MEASUREMENT",
                    subtopics: [
                        {
                            title: "Length",
                            notes: [
                                { type: "text", content: "Length tells us how long or short something is." },
                                { type: "example", content: "Example: long pencil, short pencil" }
                            ],
                            questions: [
                                { type: "input", question: "Which is longer, a bus or a car?", answer: "bus" }
                            ]
                        },
                        {
                            title: "Time",
                            notes: [
                                { type: "text", content: "Time tells us morning, afternoon, evening, and night." }
                            ],
                            questions: [
                                { type: "input", question: "When do we sleep?", answer: "night" }
                            ]
                        },
                        {
                            title: "Money",
                            notes: [
                                { type: "text", content: "Money is used to buy things." },
                                { type: "example", content: "Example: coins and notes." }
                            ],
                            questions: [
                                { type: "input", question: "What do we use to buy things?", answer: "money" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Which is shorter, a pen or a ruler?", answer: "pen" },
                        { question: "When does the sun rise?", answer: "morning" }
                    ]
                },
                {
                    title: "GEOMETRY",
                    subtopics: [
                        {
                            title: "Shapes",
                            notes: [
                                { type: "text", content: "Common shapes include circle, square, triangle, and rectangle." }
                            ],
                            questions: [
                                { type: "input", question: "What shape is a ball?", answer: "circle" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Name a shape with 3 sides.", answer: "triangle" }
                    ]
                }
            ]
        },
        english: {
            name: "English",
            topics: [
                {
                    title: "LETTERS AND SOUNDS",
                    subtopics: [
                        {
                            title: "Alphabet",
                            notes: [
                                { type: "text", content: "The English alphabet has 26 letters from A to Z." }
                            ],
                            questions: [
                                { type: "input", question: "How many letters are in the alphabet?", answer: "26" }
                            ]
                        },
                        {
                            title: "Vowels",
                            notes: [
                                { type: "text", content: "Vowels are a, e, i, o, u." }
                            ],
                            questions: [
                                { type: "input", question: "Give one vowel.", answer: "a" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "How many vowels are there?", answer: "5" },
                        { question: "Which letter comes after A?", answer: "B" }
                    ]
                },
                {
                    title: "READING",
                    subtopics: [
                        {
                            title: "Simple Words",
                            notes: [
                                { type: "text", content: "Simple words are short and easy to read." },
                                { type: "example", content: "Example: cat, dog, sun" }
                            ],
                            questions: [
                                { type: "input", question: "Spell the word for an animal that barks.", answer: "dog" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Spell the word for the animal that says meow.", answer: "cat" }
                    ]
                }
            ]
        },
        science: {
            name: "Environmental Activities",
            topics: [
                {
                    title: "MY ENVIRONMENT",
                    subtopics: [
                        {
                            title: "Home",
                            notes: [
                                { type: "text", content: "Home is where we live with our family." }
                            ],
                            questions: [
                                { type: "input", question: "Where do we live?", answer: "home" }
                            ]
                        },
                        {
                            title: "School",
                            notes: [
                                { type: "text", content: "School is where we go to learn." }
                            ],
                            questions: [
                                { type: "input", question: "Where do we go to learn?", answer: "school" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Where do we live?", answer: "home" },
                        { question: "Where do we learn?", answer: "school" }
                    ]
                }
            ]
        }
    },
    grade2: {
        math: {
            name: "Mathematics",
            topics: [
                {
                    title: "NUMBERS",
                    subtopics: [
                        {
                            title: "Counting up to 1000",
                            notes: [
                                { type: "text", content: "We can count numbers up to 1000." },
                                { type: "example", content: "Example: 100, 200, 300..." }
                            ],
                            questions: [
                                { type: "input", question: "What comes after 99?", answer: "100" }
                            ]
                        },
                        {
                            title: "Place Value",
                            notes: [
                                { type: "text", content: "Place value shows the value of a digit (ones, tens, hundreds)." },
                                { type: "example", content: "In 345: 3 hundreds, 4 tens, 5 ones." }
                            ],
                            questions: [
                                { type: "input", question: "In 56, what is the tens digit?", answer: "5" }
                            ]
                        },
                        {
                            title: "Addition",
                            notes: [
                                { type: "text", content: "Adding two-digit numbers." },
                                { type: "example", content: "Example: 23 + 14 = 37" }
                            ],
                            questions: [
                                { type: "input", question: "20 + 15 = ?", answer: "35" }
                            ]
                        },
                        {
                            title: "Subtraction",
                            notes: [
                                { type: "text", content: "Subtraction of two-digit numbers." },
                                { type: "example", content: "Example: 30 - 12 = 18" }
                            ],
                            questions: [
                                { type: "input", question: "25 - 10 = ?", answer: "15" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "What comes after 199?", answer: "200" },
                        { question: "10 + 10 = ?", answer: "20" }
                    ]
                },
                {
                    title: "MEASUREMENT",
                    subtopics: [
                        {
                            title: "Length",
                            notes: [
                                { type: "text", content: "Length is measured in metres and centimetres." }
                            ],
                            questions: [
                                { type: "input", question: "Unit of length?", answer: "metre" }
                            ]
                        },
                        {
                            title: "Mass",
                            notes: [
                                { type: "text", content: "Mass is measured in kilograms." }
                            ],
                            questions: [
                                { type: "input", question: "Unit of mass?", answer: "kilogram" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Name a unit of length.", answer: "metre" },
                        { question: "Name a unit of mass.", answer: "kilogram" }
                    ]
                }
            ]
        },
        english: {
            name: "English",
            topics: [
                {
                    title: "GRAMMAR",
                    subtopics: [
                        {
                            title: "Nouns",
                            notes: [
                                { type: "text", content: "A noun names a person, place, animal, or thing." },
                                { type: "example", content: "Example: boy, school, dog" }
                            ],
                            questions: [
                                { type: "input", question: "Give one noun.", validation: "text" }
                            ]
                        },
                        {
                            title: "Pronouns",
                            notes: [
                                { type: "text", content: "Pronouns replace nouns." },
                                { type: "example", content: "Examples: he, she, it" }
                            ],
                            questions: [
                                { type: "input", question: "Give one pronoun.", answer: "he" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Give one noun.", validation: "text" },
                        { question: "Give one pronoun.", answer: "she" }
                    ]
                }
            ]
        },
        science: {
            name: "Environmental Activities",
            topics: [
                {
                    title: "WEATHER",
                    subtopics: [
                        {
                            title: "Types of Weather",
                            notes: [
                                { type: "text", content: "Weather includes sunny, rainy, windy, and cloudy days." }
                            ],
                            questions: [
                                { type: "input", question: "Name one type of weather.", answer: "sunny" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "What kind of weather brings water?", answer: "rainy" }
                    ]
                }
            ]
        }
    },
    grade3: {
        math: {
            name: "Mathematics",
            topics: [
                {
                    title: "NUMBERS",
                    subtopics: [
                        {
                            title: "Numbers up to 10000",
                            notes: [
                                { type: "text", content: "We can read and write numbers up to 10,000." },
                                { type: "example", content: "Example: 1,250" }
                            ],
                            questions: [
                                { type: "input", question: "Write the number 'one thousand'.", answer: "1000" }
                            ]
                        },
                        {
                            title: "Multiplication",
                            notes: [
                                { type: "text", content: "Multiplication is repeated addition." },
                                { type: "example", content: "Example: 2 × 3 = 6" }
                            ],
                            questions: [
                                { type: "input", question: "4 × 2 = ?", answer: "8" }
                            ]
                        },
                        {
                            title: "Division",
                            notes: [
                                { type: "text", content: "Division means sharing equally." },
                                { type: "example", content: "Example: 10 ÷ 2 = 5" }
                            ],
                            questions: [
                                { type: "input", question: "12 ÷ 3 = ?", answer: "4" }
                            ]
                        },
                        {
                            title: "Fractions",
                            notes: [
                                { type: "text", content: "A fraction shows part of a whole." },
                                { type: "example", content: "Example: 1/2, 1/4" }
                            ],
                            questions: [
                                { type: "input", question: "Write a fraction.", validation: "fraction" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "5 × 5 = ?", answer: "25" },
                        { question: "20 ÷ 4 = ?", answer: "5" }
                    ]
                },
                {
                    title: "MEASUREMENT",
                    subtopics: [
                        {
                            title: "Time",
                            notes: [
                                { type: "text", content: "We tell time using hours and minutes." },
                                { type: "example", content: "60 minutes = 1 hour" }
                            ],
                            questions: [
                                { type: "input", question: "How many minutes are in 1 hour?", answer: "60" }
                            ]
                        },
                        {
                            title: "Money",
                            notes: [
                                { type: "text", content: "Kenyan money is the shilling." }
                            ],
                            questions: [
                                { type: "input", question: "Currency of Kenya?", answer: "shilling" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Hours in a day?", answer: "24" },
                        { question: "Currency of Kenya?", answer: "shilling" }
                    ]
                }
            ]
        },
        english: {
            name: "English",
            topics: [
                {
                    title: "GRAMMAR",
                    subtopics: [
                        {
                            title: "Verbs",
                            notes: [
                                { type: "text", content: "Verbs are action words." },
                                { type: "example", content: "Examples: jump, run, sing" }
                            ],
                            questions: [
                                { type: "input", question: "Give one verb.", validation: "text" }
                            ]
                        },
                        {
                            title: "Adjectives",
                            notes: [
                                { type: "text", content: "Adjectives describe nouns." },
                                { type: "example", content: "Examples: big, small, red" }
                            ],
                            questions: [
                                { type: "input", question: "Give one adjective.", validation: "text" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Give one verb.", validation: "text" },
                        { question: "Give one adjective.", validation: "text" }
                    ]
                }
            ]
        },
        science: {
            name: "Environmental Activities",
            topics: [
                {
                    title: "LIVING AND NON-LIVING THINGS",
                    subtopics: [
                        {
                            title: "Living Things",
                            notes: [
                                { type: "text", content: "Living things grow, move, and reproduce." },
                                { type: "example", content: "Examples: people, animals, plants" }
                            ],
                            questions: [
                                { type: "input", question: "Give one living thing.", answer: "plant" }
                            ]
                        },
                        {
                            title: "Non-Living Things",
                            notes: [
                                { type: "text", content: "Non-living things do not grow or move on their own." },
                                { type: "example", content: "Examples: stone, table" }
                            ],
                            questions: [
                                { type: "input", question: "Give one non-living thing.", answer: "stone" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Is a tree living?", answer: "yes" },
                        { question: "Is a chair living?", answer: "no" }
                    ]
                }
            ]
        }
    },
    grade4: {
        math: {
            name: "Mathematics",
            topics: [
                {
                    title: "NUMBERS",
                    subtopics: [
                        {
                            title: "Whole Numbers",
                            notes: [
                                { type: "text", content: "Whole numbers are numbers without fractions or decimals." },
                                { type: "text", content: "They start from 0, 1, 2, 3 and continue." },
                                { type: "text", content: "They are used for counting objects." },
                                { type: "example", content: "Examples: 0, 5, 12, 100" }
                            ],
                            questions: [
                                { type: "input", question: "Write a whole number.", validation: "wholeNumber" },
                                { type: "input", question: "Is 1/2 a whole number? (yes/no)", answer: "no" }
                            ]
                        },
                        {
                            title: "Addition",
                            notes: [
                                { type: "text", content: "Addition is combining numbers." },
                                { type: "example", content: "Example: 12 + 8 = 20" }
                            ],
                            questions: [
                                { type: "input", question: "12 + 8 = ?", validation: "number", answer: "20" }
                            ]
                        },
                        {
                            title: "Subtraction",
                            notes: [
                                { type: "text", content: "Subtraction means taking away." },
                                { type: "example", content: "Example: 15 - 5 = 10" }
                            ],
                            questions: [
                                { type: "input", question: "15 - 5 = ?", validation: "number", answer: "10" }
                            ]
                        },
                        {
                            title: "Multiplication",
                            notes: [
                                { type: "text", content: "Multiplication is repeated addition." },
                                { type: "example", content: "Example: 3 × 4 = 12" }
                            ],
                            questions: [
                                { type: "input", question: "3 × 4 = ?", validation: "number", answer: "12" }
                            ]
                        },
                        {
                            title: "Division",
                            notes: [
                                { type: "text", content: "Division is sharing equally." },
                                { type: "example", content: "Example: 20 ÷ 5 = 4" }
                            ],
                            questions: [
                                { type: "input", question: "20 ÷ 5 = ?", validation: "number", answer: "4" }
                            ]
                        },
                        {
                            title: "Fractions",
                            notes: [
                                { type: "text", content: "Fractions represent parts of a whole." },
                                { type: "example", content: "Example: 1/2" }
                            ],
                            questions: [
                                { type: "input", question: "Write a fraction.", validation: "fraction" }
                            ]
                        },
                        {
                            title: "Decimals",
                            notes: [
                                { type: "text", content: "Decimals represent parts of a whole using a point." },
                                { type: "example", content: "Example: 0.5" }
                            ],
                            questions: [
                                { type: "input", question: "Write a decimal number.", validation: "decimal" }
                            ]
                        },
                        {
                            title: "Use of Letters",
                            notes: [
                                { type: "text", content: "Letters can represent numbers." },
                                { type: "example", content: "Example: x + 2 = 5" }
                            ],
                            questions: [
                                { type: "input", question: "What does x represent?", answer: "a number" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "12 + 8 = ?", answer: "20" },
                        { question: "20 ÷ 5 = ?", answer: "4" },
                        { question: "Write a fraction.", validation: "fraction" }
                    ]
                },
                {
                    title: "MEASUREMENT",
                    subtopics: [
                        {
                            title: "Length",
                            notes: [
                                { type: "text", content: "Length measures how long something is." },
                                { type: "example", content: "Example: meter (m)" }
                            ],
                            questions: [
                                { type: "input", question: "Name a unit of length.", answer: "meter" }
                            ]
                        },
                        {
                            title: "Area",
                            notes: [
                                { type: "text", content: "Area measures surface." },
                                { type: "example", content: "Example: cm²" }
                            ],
                            questions: [
                                { type: "input", question: "Write the unit of area.", answer: "cm2" }
                            ]
                        },
                        {
                            title: "Volume",
                            notes: [
                                { type: "text", content: "Volume is space occupied." }
                            ],
                            questions: [
                                { type: "input", question: "Volume measures what?", answer: "space" }
                            ]
                        },
                        {
                            title: "Capacity",
                            notes: [
                                { type: "text", content: "Capacity is how much a container holds." },
                                { type: "example", content: "Example: litres" }
                            ],
                            questions: [
                                { type: "input", question: "Unit of capacity?", answer: "litres" }
                            ]
                        },
                        {
                            title: "Mass",
                            notes: [
                                { type: "text", content: "Mass is how heavy something is." },
                                { type: "example", content: "Example: kilogram (kg)" }
                            ],
                            questions: [
                                { type: "input", question: "Unit of mass?", answer: "kilogram" }
                            ]
                        },
                        {
                            title: "Time",
                            notes: [
                                { type: "text", content: "Time tells when events happen." },
                                { type: "example", content: "Example: 60 minutes = 1 hour" }
                            ],
                            questions: [
                                { type: "input", question: "How many minutes are in one hour?", answer: "60" }
                            ]
                        },
                        {
                            title: "Money",
                            notes: [
                                { type: "text", content: "Money is used to buy goods." },
                                { type: "example", content: "Example: Kenyan Shilling (KES)" }
                            ],
                            questions: [
                                { type: "input", question: "What is the currency of Kenya?", answer: "shilling" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Unit of length?", answer: "meter" },
                        { question: "Unit of mass?", answer: "kilogram" },
                        { question: "Minutes in one hour?", answer: "60" }
                    ]
                },
                {
                    title: "GEOMETRY",
                    subtopics: [
                        {
                            title: "Position and Direction",
                            notes: [
                                { type: "text", content: "Shows location and movement." },
                                { type: "example", content: "Example: North, South, East, West" }
                            ],
                            questions: [
                                { type: "input", question: "Give one example of direction.", answer: "north" }
                            ]
                        },
                        {
                            title: "Angles",
                            notes: [
                                { type: "text", content: "Angles are formed by two lines." }
                            ],
                            questions: [
                                { type: "input", question: "Angles are formed by what?", answer: "lines" }
                            ]
                        },
                        {
                            title: "Plane Figures",
                            notes: [
                                { type: "text", content: "Plane figures are flat shapes." },
                                { type: "example", content: "Example: triangle, square" }
                            ],
                            questions: [
                                { type: "input", question: "Give an example of a plane figure.", answer: "triangle" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Give one direction.", answer: "north" },
                        { question: "Give a plane figure.", answer: "triangle" }
                    ]
                }
            ]
        },
        english: {
            name: "English",
            topics: [
                {
                    title: "GRAMMAR",
                    subtopics: [
                        {
                            title: "Nouns",
                            notes: [
                                { type: "text", content: "A noun is a naming word." },
                                { type: "example", content: "Examples: boy, school, Nairobi" }
                            ],
                            questions: [
                                { type: "input", question: "Give one noun.", validation: "text" }
                            ]
                        },
                        {
                            title: "Verbs",
                            notes: [
                                { type: "text", content: "A verb is an action word." },
                                { type: "example", content: "Examples: run, eat, jump" }
                            ],
                            questions: [
                                { type: "input", question: "Give one verb.", validation: "text" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Give one noun.", validation: "text" },
                        { question: "Give one verb.", validation: "text" }
                    ]
                }
            ]
        },
        science: {
            name: "Science",
            topics: [
                {
                    title: "LIVING THINGS",
                    subtopics: [
                        {
                            title: "Plants",
                            notes: [
                                { type: "text", content: "Plants are living things." },
                                { type: "example", content: "They need water, sunlight, and air." }
                            ],
                            questions: [
                                { type: "input", question: "What do plants need to grow?", answer: "water" }
                            ]
                        },
                        {
                            title: "Animals",
                            notes: [
                                { type: "text", content: "Animals are living things that move." },
                                { type: "example", content: "Examples: dog, cow, lion" }
                            ],
                            questions: [
                                { type: "input", question: "Give one example of an animal.", validation: "text" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "What do plants need to grow?", answer: "water" },
                        { question: "Give one animal.", validation: "text" }
                    ]
                }
            ]
        }
    },
    grade5: {
        math: {
            name: "Mathematics",
            topics: [
                {
                    title: "FRACTIONS",
                    subtopics: [
                        {
                            title: "Proper Fractions",
                            notes: [
                                { type: "text", content: "A proper fraction has a smaller numerator than denominator." },
                                { type: "example", content: "Example: 1/4" }
                            ],
                            questions: [
                                { type: "input", question: "Write a proper fraction.", validation: "fraction" }
                            ]
                        },
                        {
                            title: "Improper Fractions",
                            notes: [
                                { type: "text", content: "Improper fractions have larger numerators." },
                                { type: "example", content: "Example: 5/2" }
                            ],
                            questions: [
                                { type: "input", question: "Write an improper fraction.", validation: "fraction" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Write a proper fraction.", validation: "fraction" },
                        { question: "Write an improper fraction.", validation: "fraction" }
                    ]
                }
            ]
        },
        english: {
            name: "English",
            topics: [
                {
                    title: "SENTENCES",
                    subtopics: [
                        {
                            title: "Simple Sentences",
                            notes: [
                                { type: "text", content: "A simple sentence has one complete idea." },
                                { type: "example", content: "Example: The boy is running." }
                            ],
                            questions: [
                                { type: "input", question: "Write a simple sentence.", validation: "text" }
                            ]
                        },
                        {
                            title: "Questions",
                            notes: [
                                { type: "text", content: "Questions ask something." },
                                { type: "example", content: "Example: Where are you going?" }
                            ],
                            questions: [
                                { type: "input", question: "Write a question sentence.", validation: "text" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Write a simple sentence.", validation: "text" },
                        { question: "Write a question sentence.", validation: "text" }
                    ]
                }
            ]
        },
        science: {
            name: "Science",
            topics: [
                {
                    title: "HUMAN BODY",
                    subtopics: [
                        {
                            title: "Teeth",
                            notes: [
                                { type: "text", content: "Teeth help us to chew food." }
                            ],
                            questions: [
                                { type: "input", question: "What do teeth help us do?", answer: "chew food" }
                            ]
                        },
                        {
                            title: "Bones",
                            notes: [
                                { type: "text", content: "Bones support the body." }
                            ],
                            questions: [
                                { type: "input", question: "What supports the body?", answer: "bones" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "What do teeth help us do?", answer: "chew food" },
                        { question: "What supports the body?", answer: "bones" }
                    ]
                }
            ]
        }
    },
    grade6: {
        math: {
            name: "Mathematics",
            topics: [
                {
                    title: "ALGEBRA",
                    subtopics: [
                        {
                            title: "Expressions",
                            notes: [
                                { type: "text", content: "Algebraic expressions contain letters and numbers." },
                                { type: "example", content: "Example: x + 5" }
                            ],
                            questions: [
                                { type: "input", question: "Write an algebraic expression.", validation: "text" }
                            ]
                        },
                        {
                            title: "Equations",
                            notes: [
                                { type: "text", content: "Equations contain an equals sign." },
                                { type: "example", content: "Example: x + 2 = 5" }
                            ],
                            questions: [
                                { type: "input", question: "What sign does an equation contain?", answer: "=" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Write an algebraic expression.", validation: "text" },
                        { question: "What sign does an equation contain?", answer: "=" }
                    ]
                }
            ]
        },
        english: {
            name: "English",
            topics: [
                {
                    title: "COMPOSITION",
                    subtopics: [
                        {
                            title: "Paragraph Writing",
                            notes: [
                                { type: "text", content: "A paragraph contains related sentences." }
                            ],
                            questions: [
                                { type: "input", question: "What does a paragraph contain?", answer: "related sentences" }
                            ]
                        },
                        {
                            title: "Creative Writing",
                            notes: [
                                { type: "text", content: "Creative writing uses imagination." }
                            ],
                            questions: [
                                { type: "input", question: "What does creative writing use?", answer: "imagination" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "What does a paragraph contain?", answer: "related sentences" },
                        { question: "What does creative writing use?", answer: "imagination" }
                    ]
                }
            ]
        },
        science: {
            name: "Science",
            topics: [
                {
                    title: "ENVIRONMENT",
                    subtopics: [
                        {
                            title: "Pollution",
                            notes: [
                                { type: "text", content: "Pollution makes the environment dirty." }
                            ],
                            questions: [
                                { type: "input", question: "What does pollution do?", answer: "makes the environment dirty" }
                            ]
                        },
                        {
                            title: "Conservation",
                            notes: [
                                { type: "text", content: "Conservation protects natural resources." }
                            ],
                            questions: [
                                { type: "input", question: "What does conservation protect?", answer: "natural resources" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "What does pollution do?", answer: "makes the environment dirty" },
                        { question: "What does conservation protect?", answer: "natural resources" }
                    ]
                }
            ]
        }
    },
    grade7: {
        math: {
            name: "Mathematics",
            topics: [
                {
                    title: "NUMBERS",
                    subtopics: [
                        {
                            title: "Integers",
                            notes: [
                                { type: "text", content: "Integers include positive numbers, negative numbers, and zero." },
                                { type: "example", content: "Examples: -3, -2, -1, 0, 1, 2, 3" }
                            ],
                            questions: [
                                { type: "input", question: "Is -5 an integer? (yes/no)", answer: "yes" }
                            ]
                        },
                        {
                            title: "Squares and Square Roots",
                            notes: [
                                { type: "text", content: "A square is a number multiplied by itself." },
                                { type: "example", content: "Example: 4² = 16, √16 = 4" }
                            ],
                            questions: [
                                { type: "input", question: "What is 5² ?", answer: "25" },
                                { type: "input", question: "√9 = ?", answer: "3" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Is 0 an integer? (yes/no)", answer: "yes" },
                        { question: "What is 6²?", answer: "36" }
                    ]
                },
                {
                    title: "ALGEBRA",
                    subtopics: [
                        {
                            title: "Linear Equations",
                            notes: [
                                { type: "text", content: "A linear equation has variables to the first power." },
                                { type: "example", content: "Example: x + 3 = 7, so x = 4" }
                            ],
                            questions: [
                                { type: "input", question: "Solve: x + 2 = 6", answer: "4" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Solve: x - 3 = 5", answer: "8" }
                    ]
                }
            ]
        },
        english: {
            name: "English",
            topics: [
                {
                    title: "GRAMMAR",
                    subtopics: [
                        {
                            title: "Tenses",
                            notes: [
                                { type: "text", content: "Tenses show the time of an action: past, present, future." },
                                { type: "example", content: "Example: I eat (present), I ate (past), I will eat (future)" }
                            ],
                            questions: [
                                { type: "input", question: "Past tense of 'go'?", answer: "went" }
                            ]
                        },
                        {
                            title: "Adverbs",
                            notes: [
                                { type: "text", content: "Adverbs describe verbs, adjectives, or other adverbs." },
                                { type: "example", content: "Example: quickly, slowly" }
                            ],
                            questions: [
                                { type: "input", question: "Give one adverb.", validation: "text" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Past tense of 'run'?", answer: "ran" },
                        { question: "Give one adverb.", validation: "text" }
                    ]
                }
            ]
        },
        science: {
            name: "Integrated Science",
            topics: [
                {
                    title: "MATTER",
                    subtopics: [
                        {
                            title: "States of Matter",
                            notes: [
                                { type: "text", content: "Matter exists in three states: solid, liquid, and gas." },
                                { type: "example", content: "Examples: ice (solid), water (liquid), steam (gas)" }
                            ],
                            questions: [
                                { type: "input", question: "Name the three states of matter.", answer: "solid liquid gas" }
                            ]
                        },
                        {
                            title: "Mixtures",
                            notes: [
                                { type: "text", content: "A mixture contains two or more substances." },
                                { type: "example", content: "Example: salt and water" }
                            ],
                            questions: [
                                { type: "input", question: "Give an example of a mixture.", answer: "salt and water" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "What state is ice?", answer: "solid" },
                        { question: "Give an example of a mixture.", answer: "salt and water" }
                    ]
                }
            ]
        }
    },
    grade8: {
        math: {
            name: "Mathematics",
            topics: [
                {
                    title: "ALGEBRA",
                    subtopics: [
                        {
                            title: "Simultaneous Equations",
                            notes: [
                                { type: "text", content: "Two equations solved together to find two unknowns." },
                                { type: "example", content: "Example: x + y = 5; x - y = 1; so x=3, y=2" }
                            ],
                            questions: [
                                { type: "input", question: "If x + y = 4 and x - y = 0, find x.", answer: "2" }
                            ]
                        },
                        {
                            title: "Inequalities",
                            notes: [
                                { type: "text", content: "Inequalities use signs like >, <, ≥, ≤." },
                                { type: "example", content: "Example: x > 3" }
                            ],
                            questions: [
                                { type: "input", question: "What sign means 'greater than'?", answer: ">" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "What sign means 'less than'?", answer: "<" },
                        { question: "If x + y = 6 and x - y = 2, find x.", answer: "4" }
                    ]
                },
                {
                    title: "GEOMETRY",
                    subtopics: [
                        {
                            title: "Pythagoras Theorem",
                            notes: [
                                { type: "text", content: "In a right-angled triangle, a² + b² = c²." },
                                { type: "example", content: "Example: 3² + 4² = 5²" }
                            ],
                            questions: [
                                { type: "input", question: "If a=6, b=8, find c.", answer: "10" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "If a=3 and b=4, find c.", answer: "5" }
                    ]
                }
            ]
        },
        english: {
            name: "English",
            topics: [
                {
                    title: "LITERATURE",
                    subtopics: [
                        {
                            title: "Poetry",
                            notes: [
                                { type: "text", content: "Poetry is a creative form of writing with rhythm and imagery." }
                            ],
                            questions: [
                                { type: "input", question: "What does poetry use to express ideas?", answer: "rhythm" }
                            ]
                        },
                        {
                            title: "Short Stories",
                            notes: [
                                { type: "text", content: "Short stories are brief fictional narratives with characters and a plot." }
                            ],
                            questions: [
                                { type: "input", question: "What does a short story have?", answer: "plot" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Name a form of creative writing.", answer: "poetry" },
                        { question: "What does a story have?", answer: "plot" }
                    ]
                }
            ]
        },
        science: {
            name: "Integrated Science",
            topics: [
                {
                    title: "ENERGY",
                    subtopics: [
                        {
                            title: "Forms of Energy",
                            notes: [
                                { type: "text", content: "Energy comes in many forms: heat, light, sound, electrical, chemical." },
                                { type: "example", content: "Example: The sun gives light and heat energy." }
                            ],
                            questions: [
                                { type: "input", question: "Name one form of energy.", answer: "heat" }
                            ]
                        },
                        {
                            title: "Sources of Energy",
                            notes: [
                                { type: "text", content: "Energy sources include the sun, wind, water, and fuels." }
                            ],
                            questions: [
                                { type: "input", question: "Name a renewable energy source.", answer: "sun" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Name one form of energy.", answer: "light" },
                        { question: "Name a renewable source of energy.", answer: "wind" }
                    ]
                }
            ]
        }
    },
    grade9: {
        math: {
            name: "Mathematics",
            topics: [
                {
                    title: "ALGEBRA",
                    subtopics: [
                        {
                            title: "Quadratic Expressions",
                            notes: [
                                { type: "text", content: "A quadratic expression has the form ax² + bx + c." },
                                { type: "example", content: "Example: x² + 3x + 2" }
                            ],
                            questions: [
                                { type: "input", question: "What is the highest power in a quadratic?", answer: "2" }
                            ]
                        },
                        {
                            title: "Factorisation",
                            notes: [
                                { type: "text", content: "Factorisation breaks expressions into factors." },
                                { type: "example", content: "Example: x² + 5x + 6 = (x+2)(x+3)" }
                            ],
                            questions: [
                                { type: "input", question: "Factorise x² + 5x + 6 (form (x+a)(x+b), give a then b smallest first).", answer: "2 3" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Highest power in a quadratic?", answer: "2" },
                        { question: "Factorise x² - 1 to (x-1)(x+?). Give ?.", answer: "1" }
                    ]
                },
                {
                    title: "TRIGONOMETRY",
                    subtopics: [
                        {
                            title: "Sine, Cosine, Tangent",
                            notes: [
                                { type: "text", content: "Trigonometric ratios relate angles and sides of right-angled triangles." },
                                { type: "example", content: "sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent" }
                            ],
                            questions: [
                                { type: "input", question: "Which ratio is opposite/hypotenuse?", answer: "sine" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Which ratio is adjacent/hypotenuse?", answer: "cosine" }
                    ]
                }
            ]
        },
        english: {
            name: "English",
            topics: [
                {
                    title: "COMPOSITION AND COMPREHENSION",
                    subtopics: [
                        {
                            title: "Essay Writing",
                            notes: [
                                { type: "text", content: "An essay has an introduction, body, and conclusion." }
                            ],
                            questions: [
                                { type: "input", question: "Name the three parts of an essay.", answer: "introduction body conclusion" }
                            ]
                        },
                        {
                            title: "Comprehension",
                            notes: [
                                { type: "text", content: "Comprehension means understanding a passage and answering questions about it." }
                            ],
                            questions: [
                                { type: "input", question: "What does comprehension mean?", answer: "understanding" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "What is the last part of an essay?", answer: "conclusion" },
                        { question: "What does comprehension mean?", answer: "understanding" }
                    ]
                }
            ]
        },
        science: {
            name: "Integrated Science",
            topics: [
                {
                    title: "HUMAN BODY SYSTEMS",
                    subtopics: [
                        {
                            title: "Digestive System",
                            notes: [
                                { type: "text", content: "The digestive system breaks down food for the body to absorb nutrients." },
                                { type: "example", content: "Organs include mouth, stomach, and intestines." }
                            ],
                            questions: [
                                { type: "input", question: "Where does digestion start?", answer: "mouth" }
                            ]
                        },
                        {
                            title: "Circulatory System",
                            notes: [
                                { type: "text", content: "The circulatory system pumps blood around the body." },
                                { type: "example", content: "Main organ: heart." }
                            ],
                            questions: [
                                { type: "input", question: "Which organ pumps blood?", answer: "heart" }
                            ]
                        },
                        {
                            title: "Respiratory System",
                            notes: [
                                { type: "text", content: "The respiratory system helps us breathe in oxygen and breathe out carbon dioxide." }
                            ],
                            questions: [
                                { type: "input", question: "Which gas do we breathe in?", answer: "oxygen" }
                            ]
                        }
                    ],
                    finalQuiz: [
                        { question: "Where does digestion start?", answer: "mouth" },
                        { question: "Which organ pumps blood?", answer: "heart" },
                        { question: "Which gas do we breathe in?", answer: "oxygen" }
                    ]
                }
            ]
        }
    }
};
