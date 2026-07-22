
// ===============================
// SMARTPATH AI PLANNER
// PART 1: DATA + START + NAME + GRADE + STREAM
// ===============================


// Student information storage

let studentData = {

    name: "",
    grade: "",
    stream: "",
    subjects: [],
    studyLevel: "",
    planMode: "",
    studyHours: "",
    studyTime: "",
    focusSubjects: [],
    freeDays: [],
    style: ""

};

// ===============================
// SMARTPATH AI ENTRANCE STRATEGIES
// ===============================

let entranceStrategies = {

    "595+": {

        goal:
        "Finish and repeat Grade 9-12 subjects in 45 days including English",

        grade12:
        {
            chaptersPerDay:
            "3 chapters per day (2 easy + 1 hard)",

            studyHours:
            "10 hours/day",

            library:
            "2 hours (focus Maths and Physics)",

            focus:
            [
                "Biology Grade 12",
                "Chemistry Grade 12",
                "Mathematics Grade 12"
            ],

            weekend:
            {
                english:"3 hours Saturday and Sunday",
                aptitude:"3 hours Saturday and Sunday",
                revision:"7 hours forgotten/unread chapters"
            }
        },

        subjectsNatural:
        [
            "Mathematics Grade 9-12",
            "Physics Grade 9-12",
            "Chemistry Grade 9-12",
            "Biology Grade 9-12",
            "English",
            "Aptitude",
            "IT Grade 12"
        ],

        subjectsSocial:
        [
            "Mathematics Grade 9-12",
            "History Grade 9-12",
            "Geography Grade 9-12",
            "Economics Grade 9-12",
            "English",
            "Aptitude",
            "IT Grade 12"
        ]

    },


    "570+": {

        goal:
        "Finish and repeat Grade 9-12 subjects in 55 days including English",

        grade12:
        {
            chaptersPerDay:
            "2 chapters per day (1 easy + 1 hard)",

            studyHours:
            "9 hours/day",

            library:
            "1 hour (Maths and Physics)",

            focus:
            [
                "Biology Grade 12",
                "Chemistry Grade 12",
                "Mathematics Grade 12"
            ],

            weekend:
            {
                english:"2 hours Saturday and Sunday",
                aptitude:"2 hours Saturday and Sunday",
                revision:"7 hours"
            }
        }

    },


    "550+": {

        goal:
        "Finish and repeat Grade 9-12 subjects in 60 days",

        grade12:
        {
            chaptersPerDay:
            "2 chapters per day",

            studyHours:
            "7 hours/day",

            weekend:
            {
                english:"1 hour",
                aptitude:"1 hour",
                revision:"7 hours"
            }
        }

    },


    "500+": {

        goal:
        "Finish and repeat subjects 3 times before exam",

        grade12:
        {
            chaptersPerDay:
            "1 hard chapter per day",

            studyHours:
            "6-6.5 hours/day",

            weekend:
            {
                english:"30 minutes",
                aptitude:"30 minutes",
                revision:"7 hours"
            }
        }

    },


    "Pass+": {

        goal:
        "Finish and repeat subjects 2 times with enough Grade 12 time",

        grade12:
        {
            chaptersPerDay:
            "1 hard chapter per day",

            studyHours:
            "5-6.5 hours/day",

            weekend:
            {
                english:"30 minutes",
                aptitude:"30 minutes",
                revision:"7 hours"
            }
        }

    }

};

function saveData(){

    localStorage.setItem(
        "studentData",
        JSON.stringify(studentData)
    );

}
// Progress

let currentStep = 1;
let totalSteps = 10;


// Selected focus subject later

let selectedFocusSubjects = [];



// Start everything
document.addEventListener("DOMContentLoaded", function(){


    showQuestion();


    // Automatically show AI question area
    setTimeout(function(){

        document.querySelector(".question-card").scrollIntoView({
            behavior:"smooth",
            block:"center"
        });

    },500);



    // Dark / light mode



    // Dark / light mode

    const themeButton = document.querySelector(".theme-btn");


    if(themeButton){

        themeButton.addEventListener("click", function(){

            document.body.classList.toggle("light-mode");

        });

    }


});



// AI typing effect

function typeText(element, text, speed = 80){


    element.innerHTML = "";

    let i = 0;


    let typing = setInterval(function(){


        element.innerHTML += text.charAt(i);

        i++;


        if(i >= text.length){

            clearInterval(typing);

        }


    }, speed);


}




// First question

function showQuestion(){

    typeText(
        document.getElementById("question-title"),
        "What's your name? 😀"
    );


    document.getElementById("answer-area").innerHTML = `

    <button onclick="saveNameFromChat()">
        Continue →
    </button>

    `;


    // Reset bottom AI typing box

    let input = document.getElementById("chat-input");


    if(input){

        input.disabled = false;

        input.value = "";

        input.placeholder = "Type your name...";

        input.focus();

    }

}

// Save name

function saveName(){


    let name = document.getElementById("student-name").value;



    if(name.trim() === ""){


        alert("Please enter your name");

        return;

    }



studentData.name = name;

saveData();


    currentStep++;

    updateProgress();




    typeText(
        document.getElementById("question-title"),
        "Nice to meet you " + name + " "
    );



    setTimeout(function(){

        showGrade();

    },1500);



}




// Grade question

function showGrade(){

    typeText(
        document.getElementById("question-title"),
        "Which grade are you preparing for? 🎓"
    );


    document.getElementById("answer-area").className = "grade-theme";


    document.getElementById("answer-area").innerHTML = `

    <button onclick="saveGrade('Grade 9')">
    Grade 9
    </button>



    <button onclick="saveGrade('Grade 10')">
    Grade 10
    </button>



    <button onclick="saveGrade('Grade 11')">
    Grade 11
    </button>



    <button onclick="saveGrade('Grade 12')">
    Grade 12
    </button>



    `;

focusAI();

}




// Save grade

function saveGrade(grade){


    studentData.grade = grade;


    console.log(studentData);



    currentStep++;

    updateProgress();




    // Grade 9 and 10 learn combined subjects

    if(grade === "Grade 9" || grade === "Grade 10"){


        saveStream("Combined");


    }


    else{


        showStream();


    }


}




// Show stream choices for Grade 11 and 12

function showStream(){



    typeText(
        document.getElementById("question-title"),
        "Choose your learning area 📚"
    );



    document.getElementById("answer-area").innerHTML = `



    <button onclick="saveStream('Natural Science')">

    🔬 Natural Science

    </button>



    <button onclick="saveStream('Social Science')">

    🌍 Social Science

    </button>



    <button onclick="saveStream('Combined')">

    📚 Combined

    </button>



    `;


}




// Save stream and prepare subjects

function saveStream(stream){


studentData.stream = stream;

saveData();


    console.log(studentData);



    currentStep++;

    updateProgress();



    prepareSubjects();


}
function updateProgress(){

    let progress = (currentStep / totalSteps) * 100;


    document.getElementById("step-text").innerHTML =
    currentStep + " of " + totalSteps;


    document.querySelector(".progress-fill").style.width =
    progress + "%";

}
function prepareSubjects(){

    typeText(
        document.getElementById("question-title"),
        "Excellent! Preparing your subjects 📚"
    );


    let subjects = [];

if(studentData.stream === "Natural Science"){


    // Grade 11 only
    if(studentData.grade === "Grade 11"){

        subjects = [

            "Mathematics Grade 11",
            "Physics Grade 11",
            "Chemistry Grade 11",
            "Biology Grade 11",
            "English Common",
            "Aptitude",
            "ICT Grade 11",
            "Agriculture Grade 11"

        ];

    }


    // Grade 12 keeps entrance preparation system
    else if(studentData.grade === "Grade 12"){

        subjects = [

            "Mathematics 9",
            "Mathematics 10",
            "Mathematics 11",
            "Mathematics 12",

            "Physics 9",
            "Physics 10",
            "Physics 11",
            "Physics 12",

            "Chemistry Grade 9",
            "Chemistry Grade 10",
            "Chemistry Grade 11",
            "Chemistry Grade 12",

            "Biology Grade 9",
            "Biology Grade 10",
            "Biology Grade 11",
            "Biology Grade 12",

            "English Common",
            "Aptitude",
            "ICT Grade 12",
            "Agriculture Grade 12"

        ];

    }

}
    

    else if(studentData.stream === "Social Science"){


    // Grade 11 only
    if(studentData.grade === "Grade 11"){

        subjects = [

            "Mathematics Grade 11",
            "History Grade 11",
            "Geography Grade 11",
            "Economics Grade 11",
            "English Common",
            "Aptitude",
            "ICT Grade 11"

        ];

    }


    // Grade 12 entrance preparation
    else if(studentData.grade === "Grade 12"){

        subjects = [

            "Mathematics Grade 9",
            "Mathematics Grade 10",
            "Mathematics Grade 11",
            "Mathematics Grade 12",

            "History Grade 9",
            "History Grade 10",
            "History Grade 11",
            "History Grade 12",

            "Geography Grade 9",
            "Geography Grade 10",
            "Geography Grade 11",
            "Geography Grade 12",

            "Economics Grade 9",
            "Economics Grade 10",
            "Economics Grade 11",
            "Economics Grade 12",

            "English Common",
            "Aptitude",
            "ICT Grade 12"

        ];

    }

}
    else if(studentData.stream === "Combined"){

        subjects = [
            "Mathematics",
            "Physics",
            "Chemistry",
            "Biology",
            "History",
            "Geography",
            "Economics",
            "Civics",
            "English",
            "ICT"
        ];

    }


    studentData.subjects = subjects;

saveData();


    console.log(studentData);



    let area = document.getElementById("answer-area");
    area.className="focus-theme";

    area.innerHTML = "";



    subjects.forEach((subject,index)=>{


        setTimeout(()=>{


            area.innerHTML += `

            <div class="subject-item">
            ✓ ${subject}
            </div>

            `;



            // After last subject show continue

            if(index === subjects.length - 1){


                setTimeout(()=>{


                    area.innerHTML += `

                    <button onclick="afterSubjects()">
                    Continue →
                    </button>

                    `;


                },800);


            }



        }, index * 400);



    });



}
function afterSubjects(){


    currentStep++;

    updateProgress();


    showPlanMode();


}
// ===============================
// PLAN MODE SELECTION
// ===============================

// ===============================
// PLAN MODE BASED ON GRADE
// ===============================

function showPlanMode(){

    typeText(
        document.getElementById("question-title"),
        "Choose your preparation plan 🚀"
    );


let area = document.getElementById("answer-area");

area.className = "";
area.classList.add("plan-theme");

area.innerHTML = "";


    let plans = [];


    if(studentData.grade === "Grade 9"){

        plans = [

            "🌱 Basic Plan",

            "⚡ Medium Plan",

            "🔥 Advanced Plan",

            "📘 Grade 9 Best Study Plan"

        ];

    }


    else if(studentData.grade === "Grade 10"){

        plans = [

            "🌱 Basic Plan",

            "⚡ Medium Plan",

            "🔥 Advanced Plan",

            "📗 Grade 10 Best Study Plan"

        ];

    }


    else if(studentData.grade === "Grade 11"){

        plans = [

            "🌱 Basic Plan",

            "⚡ Medium Plan",

            "🔥 Advanced Plan",

            "📙 Grade 11 Best Study Plan"

        ];

    }


    else if(studentData.grade === "Grade 12"){

        plans = [

            "🌱 Basic Plan",

            "⚡ Medium Plan",

            "🔥 Advanced Plan",

            "📕 Grade 12 Entrance Preparation",

            "🏆 Entrance 595+ Target",

            "🥇 Entrance 570+ Target",

            "🥈 Entrance 550+ Target",

            "🎯 Entrance 500+ Target",

            "✅ Entrance Pass+ Target"

        ];

    }



    plans.forEach(plan => {


        area.innerHTML += `

        <button onclick="savePlanMode('${plan}')">

        ${plan}

        </button>

        `;


    });


}
function savePlanMode(plan){

    studentData.planMode = plan;

    saveData();


    // Grade 12 special system

    if(studentData.grade === "Grade 12"){

        let strategy;


        if(plan.includes("595")){
    strategy = entranceStrategies["595+"];
    localStorage.setItem("selectedStrategy","595+");
}

else if(plan.includes("570")){
    strategy = entranceStrategies["570+"];
    localStorage.setItem("selectedStrategy","570+");
}

else if(plan.includes("550")){
    strategy = entranceStrategies["550+"];
    localStorage.setItem("selectedStrategy","550+");
}

else if(plan.includes("500")){
    strategy = entranceStrategies["500+"];
    localStorage.setItem("selectedStrategy","500+");
}

else if(plan.includes("Pass")){
    strategy = entranceStrategies["Pass+"];
    localStorage.setItem("selectedStrategy","Pass+");
}     


        console.log("Grade 12 Strategy:", strategy);



        // Skip time, focus, free days

        showStyle();


        return;

    }


// BASIC PLAN OPTIONS

if(plan.includes("Basic")){

    showBasicOptions();

    return;

}


// MEDIUM PLAN OPTIONS

if(plan.includes("Medium")){

    showMediumOptions();

    return;

}


// ADVANCED PLAN OPTIONS

if(plan.includes("Advanced")){

    showAdvancedOptions();

    return;

}
    // Other grades continue normal system

    handleSelectedPlan(plan);

}


const grade12Strategies = {

"Grade 12 Preparation": `
GRADE 12 PREPARATION STRATEGY

Goal:
Finish Grade 12 strongly with good English and Aptitude skills.

Daily Study:
- Study 2 chapters per day (1 easy + 1 harder chapter).
- Natural Science:
  Mathematics 12, Physics 12, Chemistry 12, Biology 12, IT 12.
  If time allows: Agriculture 12 + English + Aptitude.

- Social Science:
  Mathematics 12, History 12, Geography 12, Economics 12.
  If time allows: English + Aptitude + IT.

English and Aptitude:
- Every Saturday and Sunday:
  English: 2 hours
  Aptitude: 2 hours

Study Routine:
- Total: 9 hours/day.
- School: 8:00 AM - 3:30 PM.
- Library: 2 hours (mainly Mathematics and Physics).
- After school:
  4:00 PM - 6:00 PM study.
  7:00 PM - 11:00 PM study.
  Before sleep: review.
  Early morning: 2:00 AM - 7:00 AM study if needed.

Saturday and Sunday:
- Review forgotten parts.
- Finish unfinished chapters.
- 7 hours revision + English + Aptitude.

Before sleep:
Read religious book 0-30 minutes.
`,


"Entrance 595+": `
ENTRANCE 595+ STRATEGY

Goal:
Finish and repeat Grade 9-12 subjects in 45 days including English.

Daily:
- Study 3 chapters/day (2 easy + 1 hard).

Natural Science:
Math 9-12, Physics 9-12, Chemistry 9-12,
Biology 9-12, IT 12, Agriculture 12,
English + Aptitude.

Social Science:
Math 9-12, History 9-12,
Geography 9-12, Economics 9-12,
English + Aptitude + IT.

Extra Focus:
Natural:
Biology 12, Chemistry 12, Mathematics 12.

Social:
Mathematics 12, History 12,
Geography 12, Economics 12.

Daily Study:
10 hours/day.
Library: 2 hours.

Weekend:
7 hours revision.
English: 3 hours/day.
Aptitude: 3 hours/day.

Before sleep:
Read religious book 0-30 minutes.
`,


"Entrance 570+": `
ENTRANCE 570+ STRATEGY

Goal:
Finish and repeat Grade 9-12 subjects in 55 days.

Daily:
- Study 2 chapters/day.

Daily Study:
9 hours/day.
Library: 1 hour.

Extra focus:
Natural:
Biology 12, Chemistry 12, Mathematics 12.

Social:
Mathematics 12, History 12,
Geography 12, Economics 12.

Weekend:
7 hours revision.
English: 2 hours/day.
Aptitude: 2 hours/day.

Before sleep:
Read religious book.
`,


"Entrance 550+": `
ENTRANCE 550+ STRATEGY

Goal:
Finish and repeat Grade 9-12 subjects in 60 days.

Daily:
- Study 2 chapters/day.

Daily Study:
7 hours/day.
Library: 1 hour.

Extra focus:
Natural:
Biology 12, Chemistry 12, Mathematics 12.

Social:
Mathematics 12, History 12,
Geography 12, Economics 12.

Weekend:
7 hours revision.
English: 1 hour/day.
Aptitude: 1 hour/day.
`,


"Entrance Pass+": `
ENTRANCE PASS+ STRATEGY

Goal:
Finish and repeat Grade 9-12 subjects 2 times before exam.

Daily:
- Study 1 hard chapter/day.

Daily Study:
5-6.5 hours/day.

Focus:
Natural:
Biology 12, Chemistry 12, Mathematics 12.

Social:
Mathematics 12, History 12,
Geography 12, Economics 12.

Weekend:
Revision of forgotten chapters.
English and Aptitude practice.

Before sleep:
Read religious book.
`

};
// ===============================
// ADVANCED STUDY TIME OPTIONS
// ===============================

function showAdvancedTimeOptions(){

    typeText(
        document.getElementById("question-title"),
        "Choose your preferred study time ⏰"
    );


    let area = document.getElementById("answer-area");

    area.className = "time-theme";   // ADD THIS

    area.innerHTML = "";


    let times = [

        "🌅Afternoon + Night<br>2:00 PM - 6:00 PM (4 hrs)<br>8:00 PM - 11:00 PM (3 hrs)",


        "🌆Afternoon + Night<br>2:00 PM - 5:00 PM (3 hrs)<br>7:00 PM - 11:00 PM (4 hrs)",


        "<br>3:30 PM - 6:30 PM (3 hrs)<br>8:00 PM - 12:00 AM (4 hrs)",


        "🌙 Option 4: Night Learner<br>6:00 PM - 1:00 AM (7 hrs with short breaks)",


        "🌅 Option 5: Early Morning + Evening<br>5:00 AM - 8:00 AM (3 hrs)<br>5:00 PM - 9:00 PM (4 hrs)",


        "<br>2:00 AM - 7:00 AM (5 hrs)<br>6:00 PM - 8:00 PM (2 hrs)",


        "<br>9:00 PM - 1:00 AM (4 hrs)<br>5:00 AM - 8:00 AM (3 hrs)",


        "<br>2:00 PM - 6:00 PM (4 hrs)<br>9:00 PM - 12:00 AM (3 hrs)",


        "<br>3:30 PM - 5:30 PM (2 hrs)<br>7:00 PM - 10:00 PM (3 hrs)<br>5:00 AM - 7:00 AM (2 hrs)",


        "<br>4:00 AM - 7:00 AM (3 hrs)<br>4:00 PM - 8:00 PM (4 hrs)",


        "<br>2:00 PM - 5:00 PM (3 hrs)<br>10:00 PM - 2:00 AM (4 hrs)",


        "<br>6:00 AM - 9:00 AM (3 hrs)<br>2:00 PM - 6:00 PM (4 hrs)",


        "<br>Library (1hr) + Home (7:00 PM - 1:00 AM)",


        "<br>Library (2hr) + Home (7:00 PM - 12:00 AM)",


        "<br>Library (1hr) + Home (Before sleep 3hr + Early morning 2hr)",


        "<br>Library (2hr) + Home (Before sleep 3hr + Early morning 2hr)"

    ];



    times.forEach(time => {


        area.innerHTML += `

        <button onclick="saveStudyTime('${time}')">

        ${time}

        </button>

        `;


    });


}
  
    // Temporary test


// ===============================
// PART 3: STUDY LEVEL + TIME
// ===============================


function saveStudyLevel(level){

    studentData.studyLevel = level;

saveData();


    currentStep++;

    updateProgress();



    if(level === "Easy"){


        studentData.studyHours = "3 hours/day";


        showStudyTimes([

            "🌅 5:00 AM - 8:00 AM",

            "☀️ 3:30 PM - 6:30 PM",

            "🌙 7:00 PM - 10:00 PM",

            "🛌 Before sleep (2hr) + Morning (1hr)"

        ]);


    }



    else if(level === "Medium"){


        studentData.studyHours = "5 hours/day";


        showStudyTimes([


            "🌅 5:00 AM - 8:00 AM + Evening 2hr",

            "☀️ 3:30 PM - 8:30 PM",

            "🌙 7:00 PM - 12:00 AM",

            "🌌 2:00 AM - 7:00 AM",

            "🛌 Before sleep (3hr) + Early morning (2hr)"


        ]);


    }




    else if(level === "Advanced"){


        studentData.studyHours = "7 hours/day";


        showStudyTimes([


            "🌅 5:00 AM - 8:00 AM + Evening 4hr",

            "☀️ 3:30 PM - 10:30 PM",

            "🌙 6:00 PM - 1:00 AM",

            "🌌 2:00 AM - 7:00 AM + Evening 2hr",

            "🛌 Before sleep (4hr) + Early morning (3hr)"


        ]);

    }



}




function showStudyTimes(times){



    typeText(
    document.getElementById("question-title"),
    "Choose your preferred study time ⏰"
    );



    let area = document.getElementById("answer-area");

area.className = "time-theme";

area.innerHTML = "";


    times.forEach(time => {


        area.innerHTML += `


        <button onclick="saveStudyTime('${time}')">

        ${time}

        </button>


        `;


    });



}




function saveStudyTime(time){

    studentData.studyTime = time;

    saveData();


    currentStep++;

    updateProgress();


    showFocusSubjects();

}
// ===============================
// FOCUS SUBJECT
// ===============================


function showFocusSubjects(){


    typeText(
    document.getElementById("question-title"),
    "Choose one or more focus subjects ⭐"
    );


    let area = document.getElementById("answer-area");

area.className = "focus-theme";

area.innerHTML = "";


    selectedFocusSubjects = [];


    studentData.subjects.forEach(subject => {


        area.innerHTML += `

        <button 
        id="focus-${subject}"
        onclick="chooseFocusSubject('${subject}')">

        ${subject}

        </button>

        `;


    });



    area.innerHTML += `


    <button 
    id="focusContinue"
    onclick="saveFocusSubject()"
    disabled>

    Continue →

    </button>


    `;


}

function chooseFocusSubject(subject){

    let button = document.getElementById("focus-" + subject);

    let index = selectedFocusSubjects.indexOf(subject);


    if(index !== -1){

        selectedFocusSubjects.splice(index,1);

        button.style.background = "";

    }
    else{

        selectedFocusSubjects.push(subject);

        button.style.background = "linear-gradient(135deg,#22c55e,#06b6d4)";

    }


    console.log(selectedFocusSubjects);


    let continueBtn = document.getElementById("focusContinue");

    continueBtn.disabled = selectedFocusSubjects.length === 0;

}


function saveFocusSubject(){



    studentData.focusSubjects = selectedFocusSubjects;



    saveData();



    console.log(studentData);



    currentStep++;

    updateProgress();



    showFreeDays();


}// ===============================
// FREE DAYS
// ===============================


function showFreeDays(){


    typeText(
    document.getElementById("question-title"),
    "Which days are you free? 📅"
    );



    document.getElementById("answer-area").innerHTML = `


    <button onclick="saveFreeDays('Monday')">
    Monday
    </button>


    <button onclick="saveFreeDays('Tuesday')">
    Tuesday
    </button>


    <button onclick="saveFreeDays('Wednesday')">
    Wednesday
    </button>


    <button onclick="Days('Thursday')">
    Thursday
    </button>


    <button onclick="saveFreeDays('Friday')">
    Friday
    </button>


    <button onclick="saveFreeDays('Saturday')">
    Saturday
    </button>


    <button onclick="saveFreeDays('Sunday')">
    Sunday
    </button>



    <button onclick="saveFreeDays('Every day')">

    ✅ Skip - I study every day

    </button>


    `;


}


function showFreeDays(){

    typeText(
    document.getElementById("question-title"),
    "Choose your free days 📅"
    );


    let area = document.getElementById("answer-area");

    area.innerHTML = "";


    selectedFreeDays = [];


    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];


    days.forEach(day => {


        area.innerHTML += `

        <button id="day-${day}"
        onclick="chooseFreeDay('${day}')">

        ${day}

        </button>

        `;

    });


    area.innerHTML += `

    <button 
    id="daysContinue"
    onclick="saveFreeDays()"
    disabled>

    Continue →

    </button>

    `;

}
function chooseFreeDay(day){


    let index = selectedFreeDays.indexOf(day);


    if(index !== -1){

        selectedFreeDays.splice(index,1);

    }

    else{

        selectedFreeDays.push(day);

    }


    console.log(selectedFreeDays);


    let button = document.getElementById("daysContinue");


    if(selectedFreeDays.length > 0){

        button.disabled = false;

    }

    else{

        button.disabled = true;

    }

}


let selectedFreeDays = [];


function chooseFreeDay(day){

    let button = document.getElementById("day-" + day);


    let index = selectedFreeDays.indexOf(day);


    if(index !== -1){

        selectedFreeDays.splice(index,1);

        button.style.background = "";

    }
    else{

        selectedFreeDays.push(day);

        button.style.background =
        "linear-gradient(135deg,#f59e0b,#ec4899)";

    }


    console.log(selectedFreeDays);


    let continueBtn = document.getElementById("daysContinue");


    continueBtn.disabled = selectedFreeDays.length === 0;

}
function saveFreeDays(){

    studentData.freeDays = selectedFreeDays;

    saveData();

    console.log(studentData);

    currentStep++;

    updateProgress();

    showStyle();

}
// TIMETABLE STYLE
// ===============================

function showStyle(){

    typeText(
    document.getElementById("question-title"),
    "Choose your timetable style 🎨"
    );


    let area = document.getElementById("answer-area");

    area.innerHTML = `

    <button onclick="saveStyle('Dark AI')">
    🌌 Dark AI
    </button>

    <button onclick="saveStyle('Classic')">
    📘 Classic
    </button>

    <button onclick="saveStyle('Motivational')">
    🚀 Motivational
    </button>

    <button onclick="saveStyle('Minimal')">
    ⚪ Minimal Clean
    </button>

    <button onclick="saveStyle('Galaxy')">
    🌌 Galaxy Theme
    </button>

    <button onclick="saveStyle('Study Focus')">
    🎯 Study Focus
    </button>

    <button onclick="saveStyle('Exam Mode')">
    📝 Exam Mode
    </button>

    <button onclick="saveStyle('Luxury')">
    💎 Luxury Style
    </button>

    <button onclick="saveStyle('Nature')">
    🌿 Nature Style
    </button>

    <button onclick="saveStyle('AI Future')">
    🤖 AI Future
    </button>

    `;

}

// ===============================
// SAVE TIMETABLE STYLE
// ===============================


function saveStyle(style){


    studentData.style = style;


    saveData();


    console.log("Final Planner Data:", studentData);



    // Move to design page

    window.location.href = "ai-request.html";


}
// ===============================
// FINAL SAVE FUNCTION
// ===============================


function sendMessage(){


let input = document.getElementById("chat-input");


let name = input.value.trim();



if(name === ""){

return;

}




// show user message

document.getElementById("chat").innerHTML += `

<div class="user-chat">

${name}

</div>

`;



input.value="";




// save name

studentData.name=name;

saveData();


document.getElementById("chat-input").disabled = true;

document.getElementById("chat-input").placeholder =
"Choose an option button...";

// AI reply

setTimeout(()=>{


document.getElementById("chat").innerHTML += `

<div class="ai-chat">

Nice to meet you ${name} 🚀

</div>

`;



setTimeout(()=>{

showGrade();

},1000);



},800);



}

function toggleMenu(){

document
.getElementById("menuBox")
.classList.toggle("show");

}
function handleSelectedPlan(plan){

    if(
        plan.includes("Advanced") ||
        plan.includes("Grade 9") ||
        plan.includes("Grade 10") ||
        plan.includes("Grade 11") ||
        plan.includes("Grade 12") ||
        plan.includes("Entrance")
    ){

        showAdvancedTimeOptions();

    }

}
    

function showStrategyCard(type){

let area = document.getElementById("answer-area");

typeText(
document.getElementById("question-title"),
"Your personalized strategy is ready 🎯"
);


area.innerHTML = `

<div class="strategy-card">

<h2>${type}</h2>

<p>${grade12Strategies[type]}</p>

<button onclick="copyStrategy('${type}')">
Copy Strategy
</button>

<button onclick="goToDesign()">
Continue →
</button>

</div>

`;

}


function copyStrategy(type){

navigator.clipboard.writeText(
grade12Strategies[type]
);

alert("Strategy copied!");

}


function goToDesign(){

window.location.href="ai-request.html";

}
// ===============================
// SMART FOCUS SYSTEM
// ===============================

function focusPlanner(){

    let card = document.querySelector(".question-card");

    if(card){

        card.scrollIntoView({
            behavior:"smooth",
            block:"center"
        });

    }

}
function goBackQuestion(){

    if(currentStep > 1){

        currentStep--;

        updateProgress();

        showQuestion();

    }

}

function showBasicOptions(){

typeText(
document.getElementById("question-title"),
"Choose your basic study style 🌱"
);


let area = document.getElementById("answer-area");

area.className="plan-theme";


area.innerHTML = `


<button onclick="selectStudyLevel('Light')">
🌱 Light Study
<br>
2-3 hours/day
</button>


<button onclick="selectStudyLevel('Balanced')">
📘 Balanced Basic
<br>
3-4 hours/day
</button>


<button onclick="selectStudyLevel('School Support')">
🏫 School Support
<br>
Focus on homework + revision
</button>


`;

}



function showMediumOptions(){

typeText(
document.getElementById("question-title"),
"Choose your medium study style ⚡"
);


let area = document.getElementById("answer-area");

area.className="time-theme";


area.innerHTML = `


<button onclick="selectStudyLevel('Medium Normal')">
⚡ Normal Medium
<br>
5 hours/day
</button>


<button onclick="selectStudyLevel('Medium Focus')">
🔥 Focus Medium
<br>
6 hours/day
</button>


<button onclick="selectStudyLevel('Exam Preparation')">
🎯 Exam Preparation
<br>
More revision + practice
</button>


`;

}



function showAdvancedOptions(){

typeText(
document.getElementById("question-title"),
"Choose your advanced study style 🔥"
);


let area=document.getElementById("answer-area");


area.innerHTML = `


<button onclick="selectStudyLevel('Advanced')">
🔥 Serious Student
<br>
7+ hours/day
</button>


<button onclick="selectStudyLevel('Competition')">
🏆 Competition Mode
<br>
Heavy practice + revision
</button>


`;

}



function selectStudyLevel(level){

studentData.studyLevel = level;

saveData();

currentStep++;

updateProgress();


if(level.includes("Light") || 
   level.includes("Balanced") ||
   level.includes("School")){

    showBasicTimeOptions();

}


else if(level.includes("Medium") ||
        level.includes("Exam")){

    showMediumTimeOptions();

}


else{

    showAdvancedTimeOptions();

}

}

function showBasicTimeOptions(){

typeText(
document.getElementById("question-title"),
"Choose your basic study time ⏰"
);


let area=document.getElementById("answer-area");

area.className="time-theme";

area.innerHTML=`


<button onclick="saveStudyTime('3 Hours - Morning 1hr + Night 2hr')">
🌱 Option 1
<br>
Morning 1hr
<br>
Night 2hr
</button>


<button onclick="saveStudyTime('4 Hours - Afternoon 2hr + Night 2hr')">
📘 Option 2
<br>
Afternoon 2hr
<br>
Night 2hr
</button>


<button onclick="saveStudyTime('5 Hours - Morning 2hr + Evening 3hr')">
⚡ Option 3
<br>
Morning 2hr
<br>
Evening 3hr
</button>


`;
}
function showMediumTimeOptions(){

typeText(
document.getElementById("question-title"),
"Choose your medium study time ⏰"
);


let area=document.getElementById("answer-area");

area.className="time-theme";


area.innerHTML=`


<button onclick="saveStudyTime('5 Hours - Afternoon 3hr + Night 2hr')">

⚡ Medium Option 1

<br>
Afternoon 3hr
<br>
Night 2hr

</button>



<button onclick="saveStudyTime('6 Hours - Evening 3hr + Night 3hr')">

🔥 Medium Option 2

<br>
Evening 3hr
<br>
Night 3hr

</button>



<button onclick="saveStudyTime('6.5 Hours - Morning 2hr + Evening 4.5hr')">

🎯 Medium Option 3

<br>
Morning 2hr
<br>
Evening 4.5hr

</button>


`;
}