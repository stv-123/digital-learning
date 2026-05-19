const data = {
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
    }
};
