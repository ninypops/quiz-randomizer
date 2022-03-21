const quizObj = [
    {
        "question": "Which of the following best describes JavaScript?",
        "answers": [
            "A scripting language precompiled in the browser.",
            "A compiled scripting language.",
            "An object-oriented scripting language.",
            "All of the above"
        ],
        "correct": 2,
        "explanation": "Javascript is an Object-Oriented Language."
    },
    {
        "question": "Which function is used to serialize an object into a JSON string in Javascript?",
        "answers": [
            "stringify()",
            "parse()",
            "convert()",
            "None of the above"
        ],
        "correct": 0,
        "explanation": "The JSON.stringify() function is used to convert a JSON object into string format."
    },
    {
        "question": "Which of the following methods can be used to display data in some form using Javascript?",
        "answers": [
            "document.write()",
            "console.log()",
            "window.alert()",
            "All of the above"
        ],
        "correct": 3,
        "explanation": "All of the above methods are used to display data in some form using Javascript."
    },
    {
        "question": "When the switch statement matches the expression with the given labels, how is the comparison done?",
        "answers": [
            "Both the datatype and the result of the expression are compared.",
            "Only the datatype of the expression is compared",
            "Only the value of the expression is compared.",
            "None of the above"
        ],
        "correct": 0,
        "explanation": "Switch performs an ‘===’ based comparison, i.e both the value of the expression and its datatype is compared."
    },
    {
        "question": "Which of the following are closures in Javascript?",
        "answers": [
            "Variables",
            "Functions",
            "Objects",
            "All of the above"
        ],
        "correct": 3,
        "explanation": "Every time a function is created in JS, a closure is created. So, all closures are functions and functions have a scope chain that is associated with them."
    },
    {
        "question": "What keyword is used to declare an asynchronous function in Javascript?",
        "answers": [
            "async",
            "await",
            "setTimeout",
            "None of the above"
        ],
        "correct": 0,
        "explanation": "The async keyword is used to declare an asynchronous function in Javascript."
    },
    {
        "question": "What does … operator do in JS?",
        "answers": [
            "It is used to spread iterables to individual elements",
            "It is used to describe a datatype of undefined size",
            "No such operator exists",
            "None of the above"
        ],
        "correct": 0,
        "explanation": "The … operator is used to spread iterables to individual elements in Javascript and is also called the spread operator."
    },
    {
        "question": "How do we write a comment in javascript?",
        "answers": [
            "/* */",
            "//",
            "#",
            "$ $"
        ],
        "correct": 1,
        "explanation": "The correct syntax of writing a comment in Javascript is // This is a comment."
    },
    {
        "question": "Which object in Javascript doesn’t have a prototype?",
        "answers": [
            "Base Object",
            "All objects have a prototype",
            "None of the objects have a prototype",
            "None of the above"
        ],
        "correct": 0,
        "explanation": "Base objects are the only objects in Javascript that don’t have a prototype."
    },
    {
        "question": "Which of the following are not server-side Javascript objects?",
        "answers": [
            "Date",
            "FileUpload",
            "Function",
            "All of the above"
        ],
        "correct": 3,
        "explanation": "All of the above options are not server-side Javascript objects."
    },
]

export default quizObj;