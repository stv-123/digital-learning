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
    },
    cre: {
        name: "Christian Religious Education",
        topics: [
            {
                title: "CREATION",
                subtopics: [
                    {
                        title: "God the Creator",
                        notes: [
                            { type: "text", content: "God created the world and everything in it." },
                            { type: "example", content: "Example: sun, moon, animals, people." }
                        ],
                        questions: [
                            { type: "input", question: "Who created the world?", answer: "God" }
                        ]
                    },
                    {
                        title: "Taking Care of Creation",
                        notes: [
                            { type: "text", content: "We should take care of plants, animals and people." }
                        ],
                        questions: [
                            { type: "input", question: "Should we be kind to animals? (yes/no)", answer: "yes" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Who made the sun?", answer: "God" },
                    { question: "Name one thing God created.", answer: "sun" }
                ]
            },
            {
                title: "THE BIBLE",
                subtopics: [
                    {
                        title: "The Holy Book",
                        notes: [
                            { type: "text", content: "The Bible is the Holy Book of Christians." }
                        ],
                        questions: [
                            { type: "input", question: "What is the Holy Book of Christians?", answer: "Bible" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name the Holy Book of Christians.", answer: "Bible" }
                ]
            }
        ]
    },
    caSports: {
        name: "Creative Arts & Sports",
        topics: [
            {
                title: "ART",
                subtopics: [
                    {
                        title: "Colours",
                        notes: [
                            { type: "text", content: "Primary colours are red, yellow and blue." }
                        ],
                        questions: [
                            { type: "input", question: "Name one primary colour.", answer: "red" }
                        ]
                    },
                    {
                        title: "Drawing",
                        notes: [
                            { type: "text", content: "We use pencils and crayons to draw pictures." }
                        ],
                        questions: [
                            { type: "input", question: "What do we use to draw?", answer: "pencil" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Mixing red and yellow gives?", answer: "orange" }
                ]
            },
            {
                title: "SPORTS",
                subtopics: [
                    {
                        title: "Simple Games",
                        notes: [
                            { type: "text", content: "We play games like running, jumping and skipping." }
                        ],
                        questions: [
                            { type: "input", question: "Name a game we play in school.", answer: "running" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name one outdoor game.", answer: "football" }
                ]
            }
        ]
    },
    kiswahili: {
        name: "Kiswahili",
        topics: [
            {
                title: "SAUTI NA HERUFI",
                subtopics: [
                    {
                        title: "Alfabeti",
                        notes: [
                            { type: "text", content: "Alfabeti ya Kiswahili ina herufi kama A, B, C..." }
                        ],
                        questions: [
                            { type: "input", question: "Herufi ya kwanza ni ipi?", answer: "A" }
                        ]
                    },
                    {
                        title: "Irabu",
                        notes: [
                            { type: "text", content: "Irabu ni a, e, i, o, u." }
                        ],
                        questions: [
                            { type: "input", question: "Taja irabu moja.", answer: "a" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Irabu ni ngapi?", answer: "5" }
                ]
            },
            {
                title: "MSAMIATI",
                subtopics: [
                    {
                        title: "Salamu",
                        notes: [
                            { type: "text", content: "Tunasalimiana kwa kusema 'Habari' na 'Jambo'." }
                        ],
                        questions: [
                            { type: "input", question: "Sema salamu moja.", answer: "jambo" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Mnyama anayebweka ni?", answer: "mbwa" }
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
    },
    cre: {
        name: "Christian Religious Education",
        topics: [
            {
                title: "JESUS CHRIST",
                subtopics: [
                    {
                        title: "Birth of Jesus",
                        notes: [
                            { type: "text", content: "Jesus was born in Bethlehem." },
                            { type: "text", content: "His mother was Mary and his earthly father was Joseph." }
                        ],
                        questions: [
                            { type: "input", question: "Where was Jesus born?", answer: "Bethlehem" },
                            { type: "input", question: "Who was the mother of Jesus?", answer: "Mary" }
                        ]
                    },
                    {
                        title: "Jesus Loves Children",
                        notes: [
                            { type: "text", content: "Jesus blessed little children and told us to love one another." }
                        ],
                        questions: [
                            { type: "input", question: "Who blessed little children?", answer: "Jesus" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Who is the Son of God?", answer: "Jesus" },
                    { question: "Where was Jesus born?", answer: "Bethlehem" }
                ]
            },
            {
                title: "PRAYER",
                subtopics: [
                    {
                        title: "Talking to God",
                        notes: [
                            { type: "text", content: "Prayer is talking to God. We pray in the morning and evening." }
                        ],
                        questions: [
                            { type: "input", question: "What do we call talking to God?", answer: "prayer" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "We talk to God through?", answer: "prayer" }
                ]
            }
        ]
    },
    caSports: {
        name: "Creative Arts & Sports",
        topics: [
            {
                title: "MUSIC",
                subtopics: [
                    {
                        title: "Singing",
                        notes: [
                            { type: "text", content: "We sing songs together using our voices." }
                        ],
                        questions: [
                            { type: "input", question: "What do we use to sing?", answer: "voice" }
                        ]
                    },
                    {
                        title: "Instruments",
                        notes: [
                            { type: "text", content: "Instruments like drums and whistles make music." }
                        ],
                        questions: [
                            { type: "input", question: "Name one musical instrument.", answer: "drum" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "We beat a ____ to make music.", answer: "drum" }
                ]
            },
            {
                title: "SPORTS",
                subtopics: [
                    {
                        title: "Athletics",
                        notes: [
                            { type: "text", content: "Athletics includes running, jumping and throwing." }
                        ],
                        questions: [
                            { type: "input", question: "Name one athletic activity.", answer: "running" }
                        ]
                    },
                    {
                        title: "Ball Games",
                        notes: [
                            { type: "text", content: "Ball games include football, netball and volleyball." }
                        ],
                        questions: [
                            { type: "input", question: "Name one ball game.", answer: "football" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Football is played using a?", answer: "ball" }
                ]
            }
        ]
    },
    kiswahili: {
        name: "Kiswahili",
        topics: [
            {
                title: "SARUFI",
                subtopics: [
                    {
                        title: "Nomino",
                        notes: [
                            { type: "text", content: "Nomino ni jina la mtu, mahali au kitu." },
                            { type: "example", content: "Mfano: mtoto, shule, mbwa." }
                        ],
                        questions: [
                            { type: "input", question: "Taja nomino moja.", answer: "mtoto" }
                        ]
                    },
                    {
                        title: "Vitenzi",
                        notes: [
                            { type: "text", content: "Kitenzi ni neno la kitendo." },
                            { type: "example", content: "Mfano: kula, kucheza, kusoma." }
                        ],
                        questions: [
                            { type: "input", question: "Taja kitenzi kimoja.", answer: "kula" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Neno 'shule' ni aina gani ya neno?", answer: "nomino" }
                ]
            },
            {
                title: "KUSOMA",
                subtopics: [
                    {
                        title: "Maneno Rahisi",
                        notes: [
                            { type: "text", content: "Tunasoma maneno mafupi kama baba, mama, dada." }
                        ],
                        questions: [
                            { type: "input", question: "Andika neno la mzazi wa kike.", answer: "mama" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Mzazi wa kiume ni?", answer: "baba" }
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
    },
    cre: {
        name: "C.R.E",
        topics: [
            {
                title: "CREATION",
                subtopics: [
                    {
                        title: "God the Creator",
                        notes: [
                            { type: "text", content: "God created the heavens and the earth." },
                            { type: "example", content: "Example: God made the sun, moon and stars." }
                        ],
                        questions: [
                            { type: "input", question: "Who created the world?", answer: "God" }
                        ]
                    },
                    {
                        title: "Days of Creation",
                        notes: [
                            { type: "text", content: "God created the world in six days and rested on the seventh." }
                        ],
                        questions: [
                            { type: "input", question: "On which day did God rest?", answer: "seventh" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Who created the world?", answer: "God" },
                    { question: "How many days did creation take?", answer: "six" }
                ]
            },
            {
                title: "THE FAMILY OF GOD",
                subtopics: [
                    {
                        title: "Love and Sharing",
                        notes: [
                            { type: "text", content: "We should love one another and share what we have." }
                        ],
                        questions: [
                            { type: "input", question: "We should love one ____.", answer: "another" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "What should we do to others?", answer: "love" }
                ]
            }
        ]
    },
    caSports: {
        name: "Creative Arts & Sports",
        topics: [
            {
                title: "CREATIVE ARTS",
                subtopics: [
                    {
                        title: "Drawing and Colouring",
                        notes: [
                            { type: "text", content: "Drawing is making pictures using lines." },
                            { type: "example", content: "Example: drawing a house, tree or sun." }
                        ],
                        questions: [
                            { type: "input", question: "What do we use to colour?", answer: "crayons" }
                        ]
                    },
                    {
                        title: "Singing",
                        notes: [
                            { type: "text", content: "Singing is making music using our voice." }
                        ],
                        questions: [
                            { type: "input", question: "We sing using our ____.", answer: "voice" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name one colour.", answer: "red" }
                ]
            },
            {
                title: "SPORTS",
                subtopics: [
                    {
                        title: "Outdoor Games",
                        notes: [
                            { type: "text", content: "Games like football, running and skipping keep us healthy." }
                        ],
                        questions: [
                            { type: "input", question: "Name one outdoor game.", answer: "football" }
                        ]
                    },
                    {
                        title: "Warm Up",
                        notes: [
                            { type: "text", content: "We warm up before playing to avoid injury." }
                        ],
                        questions: [
                            { type: "input", question: "Why do we warm up?", answer: "avoid injury" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name a game played with a ball.", answer: "football" }
                ]
            }
        ]
    },
    kiswahili: {
        name: "Kiswahili",
        topics: [
            {
                title: "MSAMIATI",
                subtopics: [
                    {
                        title: "Sehemu za Mwili",
                        notes: [
                            { type: "text", content: "Mwili wetu una sehemu mbalimbali kama kichwa, mkono na mguu." },
                            { type: "example", content: "Mfano: kichwa, jicho, sikio, mdomo." }
                        ],
                        questions: [
                            { type: "input", question: "Tunaonea nini?", answer: "jicho" }
                        ]
                    },
                    {
                        title: "Wanyama wa Nyumbani",
                        notes: [
                            { type: "text", content: "Wanyama wa nyumbani ni kama ng'ombe, mbuzi, kuku na mbwa." }
                        ],
                        questions: [
                            { type: "input", question: "Mnyama anayetoa maziwa ni?", answer: "ng'ombe" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Tunasikia kwa kutumia?", answer: "sikio" }
                ]
            },
            {
                title: "SARUFI",
                subtopics: [
                    {
                        title: "Nomino",
                        notes: [
                            { type: "text", content: "Nomino ni majina ya watu, wanyama au vitu." },
                            { type: "example", content: "Mfano: mama, simba, kiti." }
                        ],
                        questions: [
                            { type: "input", question: "Taja nomino moja.", answer: "mama" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Jina la mtu ni aina gani ya neno?", answer: "nomino" }
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
    },
    cre: {
        name: "C.R.E",
        topics: [
            {
                title: "CREATION",
                subtopics: [
                    {
                        title: "God the Creator",
                        notes: [
                            { type: "text", content: "God created the heavens and the earth." },
                            { type: "example", content: "Creation took six days; God rested on the seventh." }
                        ],
                        questions: [
                            { type: "input", question: "Who created the world?", answer: "god" },
                            { type: "input", question: "In how many days did God create the world?", answer: "6" }
                        ]
                    },
                    {
                        title: "Caring for Creation",
                        notes: [
                            { type: "text", content: "We should take care of plants, animals and the environment." }
                        ],
                        questions: [
                            { type: "input", question: "Name one way to care for creation.", answer: "plant trees" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Who created the world?", answer: "god" },
                    { question: "How many days did creation take?", answer: "6" }
                ]
            },
            {
                title: "THE BIBLE",
                subtopics: [
                    {
                        title: "Parts of the Bible",
                        notes: [
                            { type: "text", content: "The Bible has two main parts: Old and New Testament." }
                        ],
                        questions: [
                            { type: "input", question: "Name the two parts of the Bible.", answer: "old and new testament" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "How many main parts does the Bible have?", answer: "2" }
                ]
            }
        ]
    },
    agriculture: {
        name: "Agriculture & Nutrition",
        topics: [
            {
                title: "CROP PRODUCTION",
                subtopics: [
                    {
                        title: "Kitchen Garden",
                        notes: [
                            { type: "text", content: "A kitchen garden is a small garden near the house for growing vegetables." },
                            { type: "example", content: "Examples: sukuma wiki, spinach, tomatoes." }
                        ],
                        questions: [
                            { type: "input", question: "Name one vegetable in a kitchen garden.", answer: "spinach" }
                        ]
                    },
                    {
                        title: "Tools",
                        notes: [
                            { type: "text", content: "Farm tools include the jembe, panga and rake." }
                        ],
                        questions: [
                            { type: "input", question: "Name one farm tool.", answer: "jembe" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name one vegetable.", answer: "spinach" },
                    { question: "Name one farm tool.", answer: "jembe" }
                ]
            },
            {
                title: "NUTRITION",
                subtopics: [
                    {
                        title: "Food Groups",
                        notes: [
                            { type: "text", content: "The three main food groups are energy, body-building and protective foods." },
                            { type: "example", content: "Energy: ugali. Body-building: beans. Protective: fruits." }
                        ],
                        questions: [
                            { type: "input", question: "Name one energy-giving food.", answer: "ugali" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name a body-building food.", answer: "beans" }
                ]
            }
        ]
    },
    socialStudies: {
        name: "Social Studies",
        topics: [
            {
                title: "OUR COUNTRY KENYA",
                subtopics: [
                    {
                        title: "Location",
                        notes: [
                            { type: "text", content: "Kenya is in East Africa." },
                            { type: "example", content: "Its capital city is Nairobi." }
                        ],
                        questions: [
                            { type: "input", question: "What is the capital city of Kenya?", answer: "nairobi" }
                        ]
                    },
                    {
                        title: "Counties",
                        notes: [
                            { type: "text", content: "Kenya has 47 counties." }
                        ],
                        questions: [
                            { type: "input", question: "How many counties does Kenya have?", answer: "47" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Capital of Kenya?", answer: "nairobi" },
                    { question: "Number of counties in Kenya?", answer: "47" }
                ]
            }
        ]
    },
    kiswahili: {
        name: "Kiswahili",
        topics: [
            {
                title: "SARUFI",
                subtopics: [
                    {
                        title: "Nomino",
                        notes: [
                            { type: "text", content: "Nomino ni maneno yanayotaja vitu, watu au mahali." },
                            { type: "example", content: "Mfano: mama, shule, Nairobi." }
                        ],
                        questions: [
                            { type: "input", question: "Taja nomino moja.", answer: "mama" }
                        ]
                    },
                    {
                        title: "Vitenzi",
                        notes: [
                            { type: "text", content: "Vitenzi ni maneno ya vitendo." },
                            { type: "example", content: "Mfano: kula, kucheza, kulala." }
                        ],
                        questions: [
                            { type: "input", question: "Taja kitenzi kimoja.", answer: "kula" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Jina la mtu ni aina gani ya neno?", answer: "nomino" }
                ]
            }
        ]
    },
    computer: {
        name: "Computer",
        topics: [
            {
                title: "INTRODUCTION TO COMPUTERS",
                subtopics: [
                    {
                        title: "Parts of a Computer",
                        notes: [
                            { type: "text", content: "A computer has a monitor, keyboard, mouse and system unit." }
                        ],
                        questions: [
                            { type: "input", question: "Which part shows what we type?", answer: "monitor" }
                        ]
                    },
                    {
                        title: "Uses of Computers",
                        notes: [
                            { type: "text", content: "Computers are used for learning, communication and storing information." }
                        ],
                        questions: [
                            { type: "input", question: "Name one use of a computer.", answer: "learning" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Which part of a computer shows output?", answer: "monitor" }
                ]
            }
        ]
    },
    caSports: {
        name: "C/A & Sports",
        topics: [
            {
                title: "CREATIVE ARTS",
                subtopics: [
                    {
                        title: "Drawing",
                        notes: [
                            { type: "text", content: "Drawing uses pencils, crayons and paper to make pictures." }
                        ],
                        questions: [
                            { type: "input", question: "Name one tool used for drawing.", answer: "pencil" }
                        ]
                    },
                    {
                        title: "Singing",
                        notes: [
                            { type: "text", content: "Singing is making music with the voice." }
                        ],
                        questions: [
                            { type: "input", question: "We sing using our?", answer: "voice" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Tool used for drawing?", answer: "pencil" }
                ]
            },
            {
                title: "SPORTS",
                subtopics: [
                    {
                        title: "Ball Games",
                        notes: [
                            { type: "text", content: "Ball games include football, netball and volleyball." }
                        ],
                        questions: [
                            { type: "input", question: "Name one ball game.", answer: "football" }
                        ]
                    },
                    {
                        title: "Athletics",
                        notes: [
                            { type: "text", content: "Athletics include running, jumping and throwing." }
                        ],
                        questions: [
                            { type: "input", question: "Name one athletic activity.", answer: "running" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name one ball game.", answer: "football" }
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
    },
    cre: {
        name: "C.R.E",
        topics: [
            {
                title: "THE EARLY CHURCH",
                subtopics: [
                    {
                        title: "Pentecost",
                        notes: [
                            { type: "text", content: "At Pentecost the Holy Spirit came upon the disciples." }
                        ],
                        questions: [
                            { type: "input", question: "Who came upon the disciples at Pentecost?", answer: "holy spirit" }
                        ]
                    },
                    {
                        title: "Apostles",
                        notes: [
                            { type: "text", content: "Jesus had 12 apostles who spread the gospel." }
                        ],
                        questions: [
                            { type: "input", question: "How many apostles did Jesus have?", answer: "12" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Number of apostles?", answer: "12" }
                ]
            },
            {
                title: "CHRISTIAN VALUES",
                subtopics: [
                    {
                        title: "Love and Honesty",
                        notes: [
                            { type: "text", content: "Christians are called to love one another and to be honest." }
                        ],
                        questions: [
                            { type: "input", question: "Name one Christian value.", answer: "love" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name a Christian value.", answer: "love" }
                ]
            }
        ]
    },
    agriculture: {
        name: "Agriculture & Nutrition",
        topics: [
            {
                title: "LIVESTOCK",
                subtopics: [
                    {
                        title: "Domestic Animals",
                        notes: [
                            { type: "text", content: "Domestic animals are reared at home for food and work." },
                            { type: "example", content: "Examples: cows, goats, chickens." }
                        ],
                        questions: [
                            { type: "input", question: "Name one domestic animal.", answer: "cow" }
                        ]
                    },
                    {
                        title: "Animal Products",
                        notes: [
                            { type: "text", content: "We get milk from cows and eggs from chickens." }
                        ],
                        questions: [
                            { type: "input", question: "What do we get from a cow?", answer: "milk" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "What do we get from chickens?", answer: "eggs" }
                ]
            },
            {
                title: "NUTRITION",
                subtopics: [
                    {
                        title: "Balanced Diet",
                        notes: [
                            { type: "text", content: "A balanced diet contains all the food groups in the right amounts." }
                        ],
                        questions: [
                            { type: "input", question: "A meal with all food groups is called a?", answer: "balanced diet" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "What is a balanced diet?", answer: "meal with all food groups" }
                ]
            }
        ]
    },
    socialStudies: {
        name: "Social Studies",
        topics: [
            {
                title: "EAST AFRICA",
                subtopics: [
                    {
                        title: "Countries",
                        notes: [
                            { type: "text", content: "East Africa includes Kenya, Uganda, Tanzania, Rwanda, Burundi and South Sudan." }
                        ],
                        questions: [
                            { type: "input", question: "Name one country in East Africa.", answer: "kenya" }
                        ]
                    },
                    {
                        title: "Physical Features",
                        notes: [
                            { type: "text", content: "East Africa has mountains, lakes and rivers." },
                            { type: "example", content: "Example: Mount Kenya, Lake Victoria." }
                        ],
                        questions: [
                            { type: "input", question: "Name the largest lake in East Africa.", answer: "lake victoria" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name one East African country.", answer: "uganda" },
                    { question: "Largest lake in East Africa?", answer: "lake victoria" }
                ]
            }
        ]
    },
    kiswahili: {
        name: "Kiswahili",
        topics: [
            {
                title: "SARUFI",
                subtopics: [
                    {
                        title: "Vivumishi",
                        notes: [
                            { type: "text", content: "Vivumishi ni maneno yanayoelezea nomino." },
                            { type: "example", content: "Mfano: mzuri, mrefu, mdogo." }
                        ],
                        questions: [
                            { type: "input", question: "Taja kivumishi kimoja.", answer: "mzuri" }
                        ]
                    },
                    {
                        title: "Viwakilishi",
                        notes: [
                            { type: "text", content: "Viwakilishi huchukua nafasi ya nomino." },
                            { type: "example", content: "Mfano: yeye, sisi, wao." }
                        ],
                        questions: [
                            { type: "input", question: "Taja kiwakilishi kimoja.", answer: "yeye" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Neno linaloelezea nomino ni?", answer: "kivumishi" }
                ]
            }
        ]
    },
    computer: {
        name: "Computer",
        topics: [
            {
                title: "USING A COMPUTER",
                subtopics: [
                    {
                        title: "Input Devices",
                        notes: [
                            { type: "text", content: "Input devices send information to the computer." },
                            { type: "example", content: "Examples: keyboard, mouse, microphone." }
                        ],
                        questions: [
                            { type: "input", question: "Name one input device.", answer: "keyboard" }
                        ]
                    },
                    {
                        title: "Output Devices",
                        notes: [
                            { type: "text", content: "Output devices show information from the computer." },
                            { type: "example", content: "Examples: monitor, printer, speaker." }
                        ],
                        questions: [
                            { type: "input", question: "Name one output device.", answer: "monitor" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "A keyboard is an input or output device?", answer: "input" },
                    { question: "A printer is an input or output device?", answer: "output" }
                ]
            }
        ]
    },
    caSports: {
        name: "C/A & Sports",
        topics: [
            {
                title: "CREATIVE ARTS",
                subtopics: [
                    {
                        title: "Painting",
                        notes: [
                            { type: "text", content: "Painting uses brushes and paint to create pictures." }
                        ],
                        questions: [
                            { type: "input", question: "What do we use to apply paint?", answer: "brush" }
                        ]
                    },
                    {
                        title: "Dance",
                        notes: [
                            { type: "text", content: "Dance is moving the body to music or rhythm." }
                        ],
                        questions: [
                            { type: "input", question: "Dance moves to what?", answer: "music" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Tool used for painting?", answer: "brush" }
                ]
            },
            {
                title: "SPORTS",
                subtopics: [
                    {
                        title: "Football",
                        notes: [
                            { type: "text", content: "Football is played by two teams of 11 players each." }
                        ],
                        questions: [
                            { type: "input", question: "How many players are in a football team?", answer: "11" }
                        ]
                    },
                    {
                        title: "Swimming",
                        notes: [
                            { type: "text", content: "Swimming is moving through water using arms and legs." }
                        ],
                        questions: [
                            { type: "input", question: "Swimming takes place in?", answer: "water" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Players in a football team?", answer: "11" }
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
    },
    cre: {
        name: "CRE",
        topics: [
            {
                title: "CREATION",
                subtopics: [
                    {
                        title: "God the Creator",
                        notes: [
                            { type: "text", content: "God created the world in six days and rested on the seventh." },
                            { type: "example", content: "Example: On day one God created light." }
                        ],
                        questions: [
                            { type: "input", question: "In how many days did God create the world?", answer: "six" }
                        ]
                    },
                    {
                        title: "Caring for Creation",
                        notes: [
                            { type: "text", content: "Christians take care of God's creation by protecting nature." }
                        ],
                        questions: [
                            { type: "input", question: "How do Christians care for creation?", answer: "by protecting nature" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "In how many days did God create the world?", answer: "six" },
                    { question: "How do Christians care for creation?", answer: "by protecting nature" }
                ]
            }
        ]
    },
    agriculture: {
        name: "Agriculture & Nutrition",
        topics: [
            {
                title: "CROP PRODUCTION",
                subtopics: [
                    {
                        title: "Vegetable Growing",
                        notes: [
                            { type: "text", content: "Vegetables are grown in nurseries before being transplanted." },
                            { type: "example", content: "Example: kale, spinach, cabbage." }
                        ],
                        questions: [
                            { type: "input", question: "Where are vegetables grown before transplanting?", answer: "nursery" }
                        ]
                    },
                    {
                        title: "Balanced Diet",
                        notes: [
                            { type: "text", content: "A balanced diet contains all the food nutrients in the right amounts." }
                        ],
                        questions: [
                            { type: "input", question: "What is a balanced diet?", answer: "a meal with all nutrients in the right amounts" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Where are vegetables grown before transplanting?", answer: "nursery" },
                    { question: "What is a balanced diet?", answer: "a meal with all nutrients in the right amounts" }
                ]
            }
        ]
    },
    socialStudies: {
        name: "Social Studies",
        topics: [
            {
                title: "OUR COUNTRY KENYA",
                subtopics: [
                    {
                        title: "Physical Features",
                        notes: [
                            { type: "text", content: "Kenya has mountains, rivers, lakes and plains." },
                            { type: "example", content: "Example: Mount Kenya, River Tana, Lake Victoria." }
                        ],
                        questions: [
                            { type: "input", question: "Name the highest mountain in Kenya.", answer: "Mount Kenya" }
                        ]
                    },
                    {
                        title: "Government",
                        notes: [
                            { type: "text", content: "Kenya's government has three arms: Executive, Legislature and Judiciary." }
                        ],
                        questions: [
                            { type: "input", question: "How many arms of government does Kenya have?", answer: "three" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name the highest mountain in Kenya.", answer: "Mount Kenya" },
                    { question: "How many arms of government does Kenya have?", answer: "three" }
                ]
            }
        ]
    },
    kiswahili: {
        name: "Kiswahili",
        topics: [
            {
                title: "SARUFI",
                subtopics: [
                    {
                        title: "Nomino",
                        notes: [
                            { type: "text", content: "Nomino ni majina ya watu, wanyama, mahali na vitu." },
                            { type: "example", content: "Mfano: Juma, mbwa, shule, kitabu." }
                        ],
                        questions: [
                            { type: "input", question: "Nomino ni nini?", answer: "majina ya watu, wanyama, mahali na vitu" }
                        ]
                    },
                    {
                        title: "Insha",
                        notes: [
                            { type: "text", content: "Insha nzuri huwa na utangulizi, kiini na hitimisho." }
                        ],
                        questions: [
                            { type: "input", question: "Taja sehemu tatu za insha.", answer: "utangulizi, kiini, hitimisho" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Nomino ni nini?", answer: "majina ya watu, wanyama, mahali na vitu" },
                    { question: "Taja sehemu tatu za insha.", answer: "utangulizi, kiini, hitimisho" }
                ]
            }
        ]
    },
    computer: {
        name: "Computer",
        topics: [
            {
                title: "COMPUTER BASICS",
                subtopics: [
                    {
                        title: "Parts of a Computer",
                        notes: [
                            { type: "text", content: "A computer has input, output, processing and storage devices." },
                            { type: "example", content: "Example: keyboard (input), monitor (output), CPU (processing)." }
                        ],
                        questions: [
                            { type: "input", question: "Which device is used to type into a computer?", answer: "keyboard" }
                        ]
                    },
                    {
                        title: "Internet Safety",
                        notes: [
                            { type: "text", content: "Never share your password or personal information online." }
                        ],
                        questions: [
                            { type: "input", question: "Should you share your password online?", answer: "no" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Which device is used to type into a computer?", answer: "keyboard" },
                    { question: "Should you share your password online?", answer: "no" }
                ]
            }
        ]
    },
    creativeArtsSports: {
        name: "Creative Arts & Sports",
        topics: [
            {
                title: "ARTS AND GAMES",
                subtopics: [
                    {
                        title: "Drawing",
                        notes: [
                            { type: "text", content: "Drawing uses lines, shapes and colours to create pictures." },
                            { type: "example", content: "Example: drawing a landscape using pencils and crayons." }
                        ],
                        questions: [
                            { type: "input", question: "Name one tool used for drawing.", answer: "pencil" }
                        ]
                    },
                    {
                        title: "Athletics",
                        notes: [
                            { type: "text", content: "Athletics includes track events like running and field events like jumping." }
                        ],
                        questions: [
                            { type: "input", question: "Give an example of a track event.", answer: "running" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name one tool used for drawing.", answer: "pencil" },
                    { question: "Give an example of a track event.", answer: "running" }
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
    },
    cre: {
        name: "Christian Religious Education",
        topics: [
            {
                title: "CREATION",
                subtopics: [
                    {
                        title: "God the Creator",
                        notes: [
                            { type: "text", content: "Christians believe God created the universe and everything in it." },
                            { type: "example", content: "Example: God created the world in six days and rested on the seventh." }
                        ],
                        questions: [
                            { type: "input", question: "Who created the world according to the Bible?", answer: "God" }
                        ]
                    },
                    {
                        title: "Care for Creation",
                        notes: [
                            { type: "text", content: "Humans are stewards of God's creation and must care for it." },
                            { type: "example", content: "Example: planting trees and avoiding pollution." }
                        ],
                        questions: [
                            { type: "input", question: "Give one way to care for creation.", validation: "text" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "On which day did God rest?", answer: "seventh" },
                    { question: "Give one way to care for creation.", validation: "text" }
                ]
            },
            {
                title: "THE BIBLE",
                subtopics: [
                    {
                        title: "Divisions of the Bible",
                        notes: [
                            { type: "text", content: "The Bible has two main parts: the Old Testament and the New Testament." },
                            { type: "example", content: "Example: Genesis (OT), Matthew (NT)" }
                        ],
                        questions: [
                            { type: "input", question: "How many main parts does the Bible have?", answer: "2" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name the two main parts of the Bible.", answer: "old testament and new testament" }
                ]
            }
        ]
    },
    agriculture: {
        name: "Agriculture & Nutrition",
        topics: [
            {
                title: "CROP PRODUCTION",
                subtopics: [
                    {
                        title: "Crop Husbandry",
                        notes: [
                            { type: "text", content: "Crop husbandry involves preparing land, planting, weeding, and harvesting." },
                            { type: "example", content: "Example: growing maize from seed to harvest." }
                        ],
                        questions: [
                            { type: "input", question: "Name one stage of crop husbandry.", validation: "text" }
                        ]
                    },
                    {
                        title: "Tools used in Farming",
                        notes: [
                            { type: "text", content: "Common farming tools include the hoe, panga, rake, and spade." },
                            { type: "example", content: "Example: a hoe is used for weeding." }
                        ],
                        questions: [
                            { type: "input", question: "Which tool is used for weeding?", answer: "hoe" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name one farming tool.", validation: "text" },
                    { question: "What is the first stage of crop production?", answer: "land preparation" }
                ]
            },
            {
                title: "NUTRITION",
                subtopics: [
                    {
                        title: "Food Groups",
                        notes: [
                            { type: "text", content: "The main food groups are carbohydrates, proteins, vitamins, fats, and minerals." },
                            { type: "example", content: "Example: ugali (carbohydrate), beans (protein)" }
                        ],
                        questions: [
                            { type: "input", question: "Which food group gives the body energy?", answer: "carbohydrates" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Give one source of protein.", answer: "beans" }
                ]
            }
        ]
    },
    socialStudies: {
        name: "Social Studies",
        topics: [
            {
                title: "MAP WORK",
                subtopics: [
                    {
                        title: "Elements of a Map",
                        notes: [
                            { type: "text", content: "A good map has a title, key, scale, compass direction, and frame." },
                            { type: "example", content: "Example: a school compound map showing classrooms and the field." }
                        ],
                        questions: [
                            { type: "input", question: "What shows direction on a map?", answer: "compass" }
                        ]
                    },
                    {
                        title: "Cardinal Points",
                        notes: [
                            { type: "text", content: "The four cardinal points are North, South, East, and West." },
                            { type: "example", content: "Example: the sun rises in the East." }
                        ],
                        questions: [
                            { type: "input", question: "Where does the sun rise?", answer: "east" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name one element of a map.", validation: "text" },
                    { question: "Where does the sun set?", answer: "west" }
                ]
            },
            {
                title: "GOVERNMENT",
                subtopics: [
                    {
                        title: "Arms of Government",
                        notes: [
                            { type: "text", content: "The three arms of government are the Executive, Legislature, and Judiciary." },
                            { type: "example", content: "Example: Parliament makes laws (Legislature)." }
                        ],
                        questions: [
                            { type: "input", question: "Which arm of government makes laws?", answer: "legislature" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "How many arms of government are there?", answer: "3" }
                ]
            }
        ]
    },
    kiswahili: {
        name: "Kiswahili",
        topics: [
            {
                title: "SARUFI",
                subtopics: [
                    {
                        title: "Nomino",
                        notes: [
                            { type: "text", content: "Nomino ni majina ya watu, mahali au vitu." },
                            { type: "example", content: "Mfano: Juma, shule, kitabu" }
                        ],
                        questions: [
                            { type: "input", question: "Toa mfano wa nomino.", validation: "text" }
                        ]
                    },
                    {
                        title: "Vitenzi",
                        notes: [
                            { type: "text", content: "Kitenzi ni neno linaloonyesha tendo." },
                            { type: "example", content: "Mfano: kula, kucheza, kusoma" }
                        ],
                        questions: [
                            { type: "input", question: "Toa mfano wa kitenzi.", validation: "text" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Nomino ni nini?", answer: "majina" },
                    { question: "Toa mfano wa kitenzi.", validation: "text" }
                ]
            },
            {
                title: "MSAMIATI",
                subtopics: [
                    {
                        title: "Salamu",
                        notes: [
                            { type: "text", content: "Salamu hutumika kuamkiana." },
                            { type: "example", content: "Mfano: Habari? Nzuri." }
                        ],
                        questions: [
                            { type: "input", question: "Jibu la 'Habari?'", answer: "nzuri" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Jibu la 'Shikamoo'?", answer: "marahaba" }
                ]
            }
        ]
    },
    computer: {
        name: "Computer Studies",
        topics: [
            {
                title: "COMPUTER BASICS",
                subtopics: [
                    {
                        title: "Parts of a Computer",
                        notes: [
                            { type: "text", content: "A computer has hardware parts like the monitor, keyboard, mouse, and CPU." },
                            { type: "example", content: "Example: the keyboard is used to type." }
                        ],
                        questions: [
                            { type: "input", question: "Which part is used to type?", answer: "keyboard" }
                        ]
                    },
                    {
                        title: "Hardware and Software",
                        notes: [
                            { type: "text", content: "Hardware are physical parts; software are programs that run on a computer." },
                            { type: "example", content: "Example: mouse (hardware), Microsoft Word (software)" }
                        ],
                        questions: [
                            { type: "input", question: "Is a mouse hardware or software?", answer: "hardware" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Give one input device.", answer: "keyboard" },
                    { question: "Is Word hardware or software?", answer: "software" }
                ]
            },
            {
                title: "INTERNET",
                subtopics: [
                    {
                        title: "Uses of the Internet",
                        notes: [
                            { type: "text", content: "The internet is used for communication, learning, and entertainment." },
                            { type: "example", content: "Example: sending email, watching videos." }
                        ],
                        questions: [
                            { type: "input", question: "Give one use of the internet.", validation: "text" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "What does WWW stand for?", answer: "world wide web" }
                ]
            }
        ]
    },
    preTechnical: {
        name: "Pre-Technical Studies",
        topics: [
            {
                title: "MATERIALS AND TOOLS",
                subtopics: [
                    {
                        title: "Common Materials",
                        notes: [
                            { type: "text", content: "Common materials include wood, metal, plastic, and clay." },
                            { type: "example", content: "Example: a chair can be made from wood." }
                        ],
                        questions: [
                            { type: "input", question: "Name one material used to make a chair.", answer: "wood" }
                        ]
                    },
                    {
                        title: "Safety in the Workshop",
                        notes: [
                            { type: "text", content: "Always wear protective gear and handle tools carefully." },
                            { type: "example", content: "Example: wear goggles when cutting metal." }
                        ],
                        questions: [
                            { type: "input", question: "What do you wear to protect your eyes?", answer: "goggles" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name one common material.", validation: "text" },
                    { question: "Give one safety rule in a workshop.", validation: "text" }
                ]
            },
            {
                title: "ENTREPRENEURSHIP",
                subtopics: [
                    {
                        title: "Introduction to Business",
                        notes: [
                            { type: "text", content: "An entrepreneur starts and runs a business to earn profit." },
                            { type: "example", content: "Example: opening a small shop selling fruits." }
                        ],
                        questions: [
                            { type: "input", question: "Who starts and runs a business?", answer: "entrepreneur" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "What is the main goal of a business?", answer: "profit" }
                ]
            }
        ]
    },
    caSports: {
        name: "Creative Arts & Sports",
        topics: [
            {
                title: "CREATIVE ARTS",
                subtopics: [
                    {
                        title: "Drawing and Painting",
                        notes: [
                            { type: "text", content: "Drawing uses lines and shapes; painting uses colours to create pictures." },
                            { type: "example", content: "Example: drawing with a pencil, painting with watercolours." }
                        ],
                        questions: [
                            { type: "input", question: "Name one tool used for drawing.", answer: "pencil" }
                        ]
                    },
                    {
                        title: "Music",
                        notes: [
                            { type: "text", content: "Music is made up of sounds, rhythm, and melody." },
                            { type: "example", content: "Example: singing a song with a drum beat." }
                        ],
                        questions: [
                            { type: "input", question: "Name one musical instrument.", validation: "text" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name one tool used for painting.", answer: "brush" },
                    { question: "Name one musical instrument.", validation: "text" }
                ]
            },
            {
                title: "SPORTS",
                subtopics: [
                    {
                        title: "Athletics",
                        notes: [
                            { type: "text", content: "Athletics includes track events like running and field events like jumping." },
                            { type: "example", content: "Example: 100m race (track), long jump (field)" }
                        ],
                        questions: [
                            { type: "input", question: "Give an example of a track event.", answer: "running" }
                        ]
                    },
                    {
                        title: "Ball Games",
                        notes: [
                            { type: "text", content: "Ball games include football, netball, volleyball, and basketball." },
                            { type: "example", content: "Example: football is played with 11 players per team." }
                        ],
                        questions: [
                            { type: "input", question: "How many players are in a football team?", answer: "11" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Give an example of a field event.", answer: "long jump" },
                    { question: "Name one ball game.", answer: "football" }
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
    },
    preTechnical: {
        name: "Pre-Technical",
        topics: [
            {
                title: "MATERIALS",
                subtopics: [
                    {
                        title: "Types of Materials",
                        notes: [
                            { type: "text", content: "Materials include wood, metal, plastic, and fabric." },
                            { type: "example", content: "Example: A chair can be made of wood or metal." }
                        ],
                        questions: [
                            { type: "input", question: "Name a material used to make chairs.", answer: "wood" }
                        ]
                    },
                    {
                        title: "Hand Tools",
                        notes: [
                            { type: "text", content: "Hand tools include hammer, saw, screwdriver, and pliers." }
                        ],
                        questions: [
                            { type: "input", question: "Which tool is used to drive nails?", answer: "hammer" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name a hand tool.", answer: "saw" },
                    { question: "Name a building material.", answer: "metal" }
                ]
            }
        ]
    },
    caSports: {
        name: "Creative Arts & Sports",
        topics: [
            {
                title: "VISUAL ARTS",
                subtopics: [
                    {
                        title: "Drawing",
                        notes: [
                            { type: "text", content: "Drawing uses lines and shapes to represent objects." },
                            { type: "example", content: "Example: Sketching a flower using a pencil." }
                        ],
                        questions: [
                            { type: "input", question: "What do we use to draw?", answer: "pencil" }
                        ]
                    },
                    {
                        title: "Colour",
                        notes: [
                            { type: "text", content: "Primary colours are red, blue, and yellow." }
                        ],
                        questions: [
                            { type: "input", question: "Name a primary colour.", answer: "red" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name a primary colour.", answer: "blue" },
                    { question: "What tool is used for drawing?", answer: "pencil" }
                ]
            },
            {
                title: "SPORTS",
                subtopics: [
                    {
                        title: "Athletics",
                        notes: [
                            { type: "text", content: "Athletics includes running, jumping, and throwing events." }
                        ],
                        questions: [
                            { type: "input", question: "Name an athletics event.", answer: "running" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name a track event.", answer: "running" }
                ]
            }
        ]
    },
    cre: {
        name: "Christian Religious Education",
        topics: [
            {
                title: "OLD TESTAMENT",
                subtopics: [
                    {
                        title: "Creation",
                        notes: [
                            { type: "text", content: "God created the world in six days and rested on the seventh." },
                            { type: "example", content: "Example: On day one God created light." }
                        ],
                        questions: [
                            { type: "input", question: "In how many days did God create the world?", answer: "6" }
                        ]
                    },
                    {
                        title: "The Patriarchs",
                        notes: [
                            { type: "text", content: "Abraham, Isaac, and Jacob are the patriarchs of Israel." }
                        ],
                        questions: [
                            { type: "input", question: "Who was the father of Isaac?", answer: "Abraham" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Who created the world?", answer: "God" },
                    { question: "Name a patriarch.", answer: "Abraham" }
                ]
            }
        ]
    },
    agricultureNutrition: {
        name: "Agriculture & Nutrition",
        topics: [
            {
                title: "CROP PRODUCTION",
                subtopics: [
                    {
                        title: "Soil Preparation",
                        notes: [
                            { type: "text", content: "Soil is prepared by clearing, ploughing, and harrowing before planting." }
                        ],
                        questions: [
                            { type: "input", question: "What is done to soil before planting?", answer: "ploughing" }
                        ]
                    },
                    {
                        title: "Planting",
                        notes: [
                            { type: "text", content: "Seeds are planted at the right depth and spacing for good growth." }
                        ],
                        questions: [
                            { type: "input", question: "What do we plant in the soil?", answer: "seeds" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "What do we plant?", answer: "seeds" },
                    { question: "Name a soil preparation activity.", answer: "ploughing" }
                ]
            },
            {
                title: "NUTRITION",
                subtopics: [
                    {
                        title: "Food Groups",
                        notes: [
                            { type: "text", content: "Foods are grouped into carbohydrates, proteins, vitamins, and minerals." }
                        ],
                        questions: [
                            { type: "input", question: "Which food group builds the body?", answer: "proteins" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name a food group.", answer: "proteins" }
                ]
            }
        ]
    },
    socialStudies: {
        name: "Social Studies",
        topics: [
            {
                title: "MAP WORK",
                subtopics: [
                    {
                        title: "Map Symbols",
                        notes: [
                            { type: "text", content: "Maps use symbols and a key to represent features on the ground." },
                            { type: "example", content: "Example: Blue lines represent rivers." }
                        ],
                        questions: [
                            { type: "input", question: "What colour shows rivers on a map?", answer: "blue" }
                        ]
                    },
                    {
                        title: "Compass Directions",
                        notes: [
                            { type: "text", content: "The four main directions are North, South, East, and West." }
                        ],
                        questions: [
                            { type: "input", question: "Where does the sun rise?", answer: "east" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Where does the sun set?", answer: "west" },
                    { question: "What colour shows water on a map?", answer: "blue" }
                ]
            },
            {
                title: "GOVERNMENT",
                subtopics: [
                    {
                        title: "Arms of Government",
                        notes: [
                            { type: "text", content: "The three arms of government are the Executive, Legislature, and Judiciary." }
                        ],
                        questions: [
                            { type: "input", question: "Which arm makes laws?", answer: "legislature" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Which arm interprets laws?", answer: "judiciary" }
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
    },
    preTechnical: {
        name: "Pre-Technical",
        topics: [
            {
                title: "SAFETY IN THE WORKSHOP",
                subtopics: [
                    {
                        title: "Workshop Safety Rules",
                        notes: [
                            { type: "text", content: "Safety rules protect workers from accidents in the workshop." },
                            { type: "example", content: "Examples: wear protective clothing, keep the floor clean, handle tools carefully." }
                        ],
                        questions: [
                            { type: "input", question: "What do we wear to protect ourselves in a workshop?", answer: "protective clothing" }
                        ]
                    },
                    {
                        title: "Tools and Their Uses",
                        notes: [
                            { type: "text", content: "Tools are classified as cutting, holding, striking, or measuring tools." },
                            { type: "example", content: "A hammer is a striking tool; a ruler is a measuring tool." }
                        ],
                        questions: [
                            { type: "input", question: "What type of tool is a hammer?", answer: "striking" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name one safety rule in the workshop.", answer: "wear protective clothing" },
                    { question: "What type of tool is a ruler?", answer: "measuring" }
                ]
            },
            {
                title: "ENTREPRENEURSHIP",
                subtopics: [
                    {
                        title: "Introduction to Entrepreneurship",
                        notes: [
                            { type: "text", content: "An entrepreneur starts and runs a business taking on financial risks." }
                        ],
                        questions: [
                            { type: "input", question: "Who starts and runs a business?", answer: "entrepreneur" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Who starts and runs a business?", answer: "entrepreneur" }
                ]
            }
        ]
    },
    caSports: {
        name: "C.A & Sports",
        topics: [
            {
                title: "CREATIVE ARTS",
                subtopics: [
                    {
                        title: "Elements of Art",
                        notes: [
                            { type: "text", content: "The elements of art include line, shape, color, texture, form, space, and value." },
                            { type: "example", content: "A drawing uses lines and shapes to form an image." }
                        ],
                        questions: [
                            { type: "input", question: "Name one element of art.", answer: "line" }
                        ]
                    },
                    {
                        title: "Music Basics",
                        notes: [
                            { type: "text", content: "Music has elements like rhythm, melody, and harmony." }
                        ],
                        questions: [
                            { type: "input", question: "What is the pattern of beats in music called?", answer: "rhythm" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name one element of art.", answer: "line" },
                    { question: "What is the pattern of beats in music called?", answer: "rhythm" }
                ]
            },
            {
                title: "SPORTS",
                subtopics: [
                    {
                        title: "Athletics",
                        notes: [
                            { type: "text", content: "Athletics includes track and field events such as running, jumping, and throwing." },
                            { type: "example", content: "Examples: 100m sprint, high jump, javelin throw." }
                        ],
                        questions: [
                            { type: "input", question: "What sport includes running, jumping, and throwing?", answer: "athletics" }
                        ]
                    },
                    {
                        title: "Ball Games",
                        notes: [
                            { type: "text", content: "Ball games include football, basketball, volleyball, and netball." }
                        ],
                        questions: [
                            { type: "input", question: "How many players are in a football team on the field?", answer: "11" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name a track event.", answer: "100m" },
                    { question: "How many players are in a football team on the field?", answer: "11" }
                ]
            }
        ]
    },
    cre: {
        name: "CRE",
        topics: [
            {
                title: "THE BIBLE",
                subtopics: [
                    {
                        title: "Divisions of the Bible",
                        notes: [
                            { type: "text", content: "The Bible has two main parts: the Old Testament and the New Testament." },
                            { type: "example", content: "Genesis is in the Old Testament; Matthew is in the New Testament." }
                        ],
                        questions: [
                            { type: "input", question: "How many main parts does the Bible have?", answer: "2" }
                        ]
                    },
                    {
                        title: "The Life of Jesus",
                        notes: [
                            { type: "text", content: "Jesus was born in Bethlehem and is the central figure of Christianity." }
                        ],
                        questions: [
                            { type: "input", question: "Where was Jesus born?", answer: "bethlehem" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name the two main parts of the Bible.", answer: "old testament new testament" },
                    { question: "Where was Jesus born?", answer: "bethlehem" }
                ]
            },
            {
                title: "CHRISTIAN VALUES",
                subtopics: [
                    {
                        title: "Love and Forgiveness",
                        notes: [
                            { type: "text", content: "Christians are taught to love one another and to forgive those who wrong them." }
                        ],
                        questions: [
                            { type: "input", question: "What value teaches us to pardon others?", answer: "forgiveness" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "What value teaches us to pardon others?", answer: "forgiveness" }
                ]
            }
        ]
    },
    agricultureNutrition: {
        name: "Agriculture & Nutrition",
        topics: [
            {
                title: "CROP PRODUCTION",
                subtopics: [
                    {
                        title: "Land Preparation",
                        notes: [
                            { type: "text", content: "Land preparation involves clearing, ploughing, and harrowing the soil before planting." },
                            { type: "example", content: "Tools used include jembes, ploughs, and harrows." }
                        ],
                        questions: [
                            { type: "input", question: "What tool is commonly used for digging?", answer: "jembe" }
                        ]
                    },
                    {
                        title: "Planting and Care",
                        notes: [
                            { type: "text", content: "Crops need water, sunlight, and nutrients to grow well." }
                        ],
                        questions: [
                            { type: "input", question: "Name one requirement for plant growth.", answer: "water" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "What tool is used for digging?", answer: "jembe" },
                    { question: "Name one requirement for plant growth.", answer: "water" }
                ]
            },
            {
                title: "NUTRITION",
                subtopics: [
                    {
                        title: "Food Nutrients",
                        notes: [
                            { type: "text", content: "The main food nutrients are carbohydrates, proteins, fats, vitamins, minerals, and water." },
                            { type: "example", content: "Ugali is rich in carbohydrates; beans are rich in proteins." }
                        ],
                        questions: [
                            { type: "input", question: "Which nutrient gives the body energy?", answer: "carbohydrates" }
                        ]
                    },
                    {
                        title: "Balanced Diet",
                        notes: [
                            { type: "text", content: "A balanced diet contains all the nutrients in correct proportions." }
                        ],
                        questions: [
                            { type: "input", question: "A meal with all nutrients in correct amounts is called a ___ diet.", answer: "balanced" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Which nutrient gives energy?", answer: "carbohydrates" },
                    { question: "What kind of diet has all nutrients?", answer: "balanced" }
                ]
            }
        ]
    },
    socialStudies: {
        name: "Social Studies",
        topics: [
            {
                title: "MAP WORK",
                subtopics: [
                    {
                        title: "Elements of a Map",
                        notes: [
                            { type: "text", content: "A good map has a title, key, scale, compass direction, and frame." },
                            { type: "example", content: "The key explains the symbols used on the map." }
                        ],
                        questions: [
                            { type: "input", question: "What part of a map explains the symbols?", answer: "key" }
                        ]
                    },
                    {
                        title: "Compass Directions",
                        notes: [
                            { type: "text", content: "The four main compass directions are North, South, East, and West." }
                        ],
                        questions: [
                            { type: "input", question: "Where does the sun rise?", answer: "east" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "What part of a map explains the symbols?", answer: "key" },
                    { question: "Where does the sun rise?", answer: "east" }
                ]
            },
            {
                title: "GOVERNMENT AND CITIZENSHIP",
                subtopics: [
                    {
                        title: "Arms of Government",
                        notes: [
                            { type: "text", content: "The three arms of government are the Executive, Legislature, and Judiciary." },
                            { type: "example", content: "The Legislature makes laws; the Judiciary interprets them." }
                        ],
                        questions: [
                            { type: "input", question: "Which arm makes laws?", answer: "legislature" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "How many arms of government are there?", answer: "3" },
                    { question: "Which arm interprets the law?", answer: "judiciary" }
                ]
            }
        ]
    },
    integratedScience: {
        name: "Integrated Science",
        topics: [
            {
                title: "MATTER",
                subtopics: [
                    {
                        title: "States of Matter",
                        notes: [
                            { type: "text", content: "Matter exists in three main states: solid, liquid, and gas." },
                            { type: "example", content: "Ice is solid water; steam is gaseous water." }
                        ],
                        questions: [
                            { type: "input", question: "How many states of matter are there?", answer: "3" }
                        ]
                    },
                    {
                        title: "Changes of State",
                        notes: [
                            { type: "text", content: "Matter can change from one state to another through melting, freezing, evaporation, and condensation." }
                        ],
                        questions: [
                            { type: "input", question: "What is the change from liquid to gas called?", answer: "evaporation" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name a state of matter.", answer: "solid" },
                    { question: "What is the change from liquid to gas called?", answer: "evaporation" }
                ]
            },
            {
                title: "ENERGY",
                subtopics: [
                    {
                        title: "Forms of Energy",
                        notes: [
                            { type: "text", content: "Energy exists in different forms such as heat, light, sound, electrical, and mechanical." },
                            { type: "example", content: "A burning candle gives off heat and light energy." }
                        ],
                        questions: [
                            { type: "input", question: "Name one form of energy.", answer: "heat" }
                        ]
                    },
                    {
                        title: "Sources of Energy",
                        notes: [
                            { type: "text", content: "Energy sources include the sun, wind, water, fossil fuels, and biomass." }
                        ],
                        questions: [
                            { type: "input", question: "What is the main natural source of energy on Earth?", answer: "sun" }
                        ]
                    }
                ],
                finalQuiz: [
                    { question: "Name a form of energy.", answer: "light" },
                    { question: "Main natural energy source on Earth?", answer: "sun" }
                ]
            }
        ]
    }
}
}
