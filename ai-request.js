// ===============================
// SMARTPATH AI REQUEST
// PART 1: LOAD DATA + CREATE REQUEST
// ===============================


// Load student data

let studentData = JSON.parse(
    localStorage.getItem("studentData")
);


let selectedStrategy = localStorage.getItem(
    "selectedStrategy"
);


// Check data

if(!studentData){

    alert("No planner data found!");

    window.location.href = "index.html";

}



// ===============================
// STRATEGY DATABASE
// ===============================


let strategyData = {

"595+": `

ENTRANCE TARGET: 595+

GOAL:
Finish and repeat all Grade 9-12 subjects in 45 days, including English and Aptitude.

CHAPTER TARGET:
- Study 3 chapters per day.
- 2 easy chapters.
- 1 difficult chapter.

If NATURAL SCIENCE student:
- Mathematics Grade 9
- Mathematics Grade 10
- Mathematics Grade 11
- Mathematics Grade 12
- Physics Grade 9
- Physics Grade 10
- Physics Grade 11
- Physics Grade 12
- Chemistry Grade 9
- Chemistry Grade 10
- Chemistry Grade 11
- Chemistry Grade 12
- Biology Grade 9
- Biology Grade 10
- Biology Grade 11
- Biology Grade 12
- ICT Grade 12
- Agriculture Grade 12
- English (Common Subject)
- Aptitude (Common Subject)

if SOCIAL SCIENCE student:
- Mathematics Grade 9
- Mathematics Grade 10
- Mathematics Grade 11
- Mathematics Grade 12
- History Grade 9
- History Grade 10
- History Grade 11
- History Grade 12
- Geography Grade 9
- Geography Grade 10
- Geography Grade 11
- Geography Grade 12
- Economics Grade 9
- Economics Grade 10
- Economics Grade 11
- Economics Grade 12
- ICT Grade 12
- English (Common Subject)
- Aptitude (Common Subject)

DAILY STUDY TIME:
- Total Study Time: 10 hours per day.
- School Time: 8:00 AM - 3:30 PM.
- Use free time at school for revision, note review, solving questions, reading, and library study.
- Library Time: 2 hours using available free time in school.
- Library focus should mainly be Mathematics and Physics.

AFTER SCHOOL:
- 4:00 PM - 6:00 PM (2 hours study).

EVENING:
- 7:00 PM - 11:00 PM (3 hours study).

BEFORE SLEEP:
-  3 hours of study.[7:00pm -11:00]
- Focus on difficult subjects.
- Natural Science: Biology and Chemistry.
- Social Science: History and Geography.

AFTER SLEEP:
- Study between 2:00 AM and 7:00 AM.
- Use approxmetly 3 hours for new concepts(or ned focus subjects (Biology,Chemistry))for Natural,(History,Geography)Social

GENERAL STUDY RULE:
- The timetable may generally organize study from 4:00 PM until 2:00 AM when appropriate.

PREPARE FOR SCHOOL:
- 7:00 AM - 7:30 AM prepare for school.

FOCUS SUBJECTS:

if Natural sudent:
- Biology Grade 12
- Chemistry Grade 12
- Mathematics Grade 12

Give these subjects additional study time.

Social Science:
- Mathematics Grade 12
- History Grade 12
- Geography Grade 12
- Economics Grade 12

Give these subjects additional study time.

ENGLISH:
- 3 hours every Saturday.
- 3 hours every Sunday.

APTITUDE:
- 3 hours every Saturday.
- 3 hours every Sunday.

WEEKEND PLAN:
- Saturday and Sunday.
- Use 7 hours for revision.
- Review forgotten chapters.
- Review unread chapters.
- Complete unfinished chapters.
- Solve practice questions.
- Strengthen weak areas.

SPECIAL SUBJECT RULE:
- ICT Grade 12 requires only 0-1 day of checking and revision.
- Agriculture Grade 12 requires only 0-1 day of checking and revision.

RELIGIOUS READING:
- Read a religious holy book every day before sleeping.
- Duration: 0-30 minutes.

TIMETABLE INSTRUCTION:
Create a realistic weekly timetable using all information above.
Prioritize focus subjects.
Include school hours.
Include library hours.
Include revision sessions.
Include English practice.
Include Aptitude practice.
Balance all subjects.
Add suitable breaks.
Make the timetable realistic, organized, and easy for students to follow.
Finish and repeat all Grade 9-12 subjects in 45 days, including English and Aptitude.

write ENTRANCE TARGET: 595+
`,


"570+": `

ENTRANCE TARGET: 570+

GOAL:
Finish and repeat all Grade 9-12 subjects within 55 days, including English and Aptitude.

CHAPTER TARGET:

"${studentData.name}" should study:

- 2 chapters per day.
- 1 easy chapter.
- 1 difficult chapter.

If NATURAL SCIENCE student:

- Mathematics Grade 9
- Mathematics Grade 10
- Mathematics Grade 11
- Mathematics Grade 12
- Physics Grade 9
- Physics Grade 10
- Physics Grade 11
- Physics Grade 12
- Chemistry Grade 9
- Chemistry Grade 10
- Chemistry Grade 11
- Chemistry Grade 12
- Biology Grade 9
- Biology Grade 10
- Biology Grade 11
- Biology Grade 12
- Information Technology Grade 12
- Agriculture Grade 12
- English (Common Subject)
- Aptitude (Common Subject)

If SOCIAL SCIENCE student:

- Mathematics Grade 9
- Mathematics Grade 10
- Mathematics Grade 11
- Mathematics Grade 12
- History Grade 9
- History Grade 10
- History Grade 11
- History Grade 12
- Geography Grade 9
- Geography Grade 10
- Geography Grade 11
- Geography Grade 12
- Economics Grade 9
- Economics Grade 10
- Economics Grade 11
- Economics Grade 12
- Information Technology Grade 12
- English (Common Subject)
- Aptitude (Common Subject)

ENGLISH AND APTITUDE:

If NATURAL SCIENCE student:

- English: 5 hours every Saturday.
- English: 5 hours every Sunday.
- Aptitude: 5 hours every Saturday.
- Aptitude: 5 hours every Sunday.

If SOCIAL SCIENCE student:

- English: 3 hours every Saturday.
- English: 3 hours every Sunday.
- Aptitude: 3 hours every Saturday.
- Aptitude: 3 hours every Sunday.

Use the remaining weekend time for revision.

SPECIAL SUBJECT RULE:

- Information Technology Grade 12 needs only 0-1 day for checking and revision.
- Agriculture Grade 12 needs only 0-1 day for checking and revision.

DAILY STUDY TIME:

- Total study time: 9 hours per day.
- School time: 8:00 AM - 3:30 PM.
- Use free time at school for revision, reading notes, solving questions, and self study.
- Library: 1 hour every school day.
- Library should mainly focus on Mathematics and Physics.

AFTER SCHOOL:

- 4:00 PM - 6:00 PM (2 hours study).

EVENING:

- 7:00 PM - 11:00 PM (4 hours study).

BEFORE SLEEP:

- Focus on difficult subjects.
- Natural Science: Biology and Chemistry.
- Social Science: History and Geography.

AFTER SLEEP:

- Study between 2:00 AM and 7:00 AM.
- Use about 3 hours for new concepts or weak subjects.

GENERAL STUDY RULE:

- Study may generally be organized from 4:00 PM until 2:00 AM.
- Include short breaks between study sessions.
- Keep the timetable balanced and realistic.

PREPARE FOR SCHOOL:

- 7:00 AM - 7:30 AM prepare for school.

GRADE 12 PRIORITY SUBJECTS:

If NATURAL SCIENCE student:

- Biology Grade 12
- Chemistry Grade 12
- Mathematics Grade 12

Give these subjects additional study time.

If SOCIAL SCIENCE student:

- Mathematics Grade 12
- History Grade 12
- Geography Grade 12
- Economics Grade 12

Give these subjects additional study time.

WEEKEND PLAN:

Saturday and Sunday:

- Use 7 hours for revision.
- Review forgotten chapters.
- Review unread chapters.
- Complete unfinished chapters.
- Solve practice questions.
- Strengthen weak areas.

Natural Science:

- English: 5 hours every Saturday.
- English: 5 hours every Sunday.
- Aptitude: 5 hours every Saturday.
- Aptitude: 5 hours every Sunday.

Social Science:

- English: 3 hours every Saturday.
- English: 3 hours every Sunday.
- Aptitude: 3 hours every Saturday.
- Aptitude: 3 hours every Sunday.

RELIGIOUS READING:

- Read a religious holy book every day before sleeping.
- Duration: 0-30 minutes.

TIMETABLE INSTRUCTION:

Create a realistic weekly timetable using all information above.

- Prioritize Grade 12 subjects.
- Balance all subjects.
- Include school hours.
- Include library study.
- Include revision sessions.
- Include English practice.
- Include Aptitude practice.
- Give more time to weak subjects.
- Focus more on Grade 12 priority subjects.
- Add suitable breaks.
- Make the timetable realistic.
- Make the timetable organized.
- Make the timetable easy to follow.
- Make the timetable suitable for phone display.
- Ensure all Grade 9-12 subjects are completed and revised within 55 days.
write ENTRANCE TARGET: 570+
`,

"550+": `

ENTRANCE TARGET: 550+

GOAL:
Finish and repeat all Grade 9-12 subjects in 60 days, including English and Aptitude.

CHAPTER TARGET:
- Study 2 chapters per day.
- 1 easy chapter.
- 1 difficult chapter.

GRADE 12 PREPARATION:
Student should focus on completing Grade 12 strongly while reviewing previous grades.

NATURAL SCIENCE STUDENT SUBJECTS:

- Mathematics Grade 9
- Mathematics Grade 10
- Mathematics Grade 11
- Mathematics Grade 12

- Physics Grade 9
- Physics Grade 10
- Physics Grade 11
- Physics Grade 12

- Chemistry Grade 9
- Chemistry Grade 10
- Chemistry Grade 11
- Chemistry Grade 12

- Biology Grade 9
- Biology Grade 10
- Biology Grade 11
- Biology Grade 12

- ICT Grade 12
- Agriculture Grade 12

- English (Common Subject)
- Aptitude (Common Subject)


SOCIAL SCIENCE STUDENT SUBJECTS:

- Mathematics Grade 9
- Mathematics Grade 10
- Mathematics Grade 11
- Mathematics Grade 12

- History Grade 9
- History Grade 10
- History Grade 11
- History Grade 12

- Geography Grade 9
- Geography Grade 10
- Geography Grade 11
- Geography Grade 12

- Economics Grade 9
- Economics Grade 10
- Economics Grade 11
- Economics Grade 12

- ICT Grade 12

- English (Common Subject)
- Aptitude (Common Subject)



DAILY STUDY TIME:

- Total study time: 7 hours per day.

SCHOOL TIME:
- School: 8:00 AM - 3:30 PM.
- Use free school time for:
  - Revision
  - Note review
  - Solving questions
  - Reading
  - Library study

LIBRARY:
- 1 hour library study.
- Main focus:
  - Mathematics
  - Physics



AFTER SCHOOL:

- 4:00 PM - 6:00 PM
  - 2 hours focused study.



EVENING:

- 7:00 PM - 11:00 PM
  - Study session.



BEFORE SLEEP:

- 2 hours study.
- Focus on difficult subjects.

Natural Science:
- Biology Grade 12
- Chemistry Grade 12

Social Science:
- History Grade 12
- Geography Grade 12



AFTER SLEEP:

- 2:00 AM - 7:00 AM available study time.
- Use approximately 2 hours for:
  - New concepts
  - Weak areas
  - Focus subjects



GENERAL TIMETABLE:

- Organize study mainly between:
  4:00 PM - 2:00 AM
  when suitable.

PREPARE FOR SCHOOL:

- 7:00 AM - 7:30 AM
  Prepare for school.



FOCUS SUBJECTS:

NATURAL SCIENCE:

Give additional study time to:

- Biology Grade 12
- Chemistry Grade 12
- Mathematics Grade 12


SOCIAL SCIENCE:

Give additional study time to:

- Mathematics Grade 12
- History Grade 12
- Geography Grade 12
- Economics Grade 12



ENGLISH:

Saturday:
- 1 hour English practice.

Sunday:
- 1 hour English practice.



APTITUDE:

Saturday:
- 1 hour Aptitude practice.

Sunday:
- 1 hour Aptitude practice.



WEEKEND PLAN:

Saturday and Sunday:

- 7 hours revision.
- Review forgotten chapters.
- Review unread chapters.
- Complete unfinished chapters.
- Solve practice questions.
- Improve weak areas.

English:
- 1 hour.

Aptitude:
- 1 hour.



SPECIAL SUBJECT RULE:

ICT Grade 12:
- Only needs 0-1 day checking and revision.

Agriculture Grade 12:
- Only needs 0-1 day checking and revision.



RELIGIOUS READING:

Every day before sleeping:

- Read religious holy book.
- Duration: 0-30 minutes.



TIMETABLE INSTRUCTION:

Create a realistic weekly timetable.

The timetable must include:

- School hours.
- Library time.
- Daily study sessions.
- Focus subjects.
- Revision periods.
- English practice.
- Aptitude practice.
- Breaks.

Balance all subjects.

Make it realistic and easy for a student to follow.

Target:
Finish and repeat Grade 9-12 subjects in 60 days.
write ENTRANCE TARGET: 550+
`,

"500+": `

ENTRANCE TARGET: 500+

GOAL:
Finish and repeat all Grade 9-12 subjects 3 times before the exam, including English and Aptitude.

GRADE 12 PREPARATION:
Student should prepare Grade 12 strongly while reviewing previous grade subjects.

CHAPTER TARGET:
- Study 1 chapter per day.
- Focus mainly on difficult chapters.


NATURAL SCIENCE STUDENT SUBJECTS:

- Mathematics Grade 9
- Mathematics Grade 10
- Mathematics Grade 11
- Mathematics Grade 12

- Physics Grade 9
- Physics Grade 10
- Physics Grade 11
- Physics Grade 12

- Chemistry Grade 9
- Chemistry Grade 10
- Chemistry Grade 11
- Chemistry Grade 12

- Biology Grade 9
- Biology Grade 10
- Biology Grade 11
- Biology Grade 12

- ICT Grade 12
- Agriculture Grade 12

- English (Common Subject)
- Aptitude (Common Subject)



SOCIAL SCIENCE STUDENT SUBJECTS:

- Mathematics Grade 9
- Mathematics Grade 10
- Mathematics Grade 11
- Mathematics Grade 12

- History Grade 9
- History Grade 10
- History Grade 11
- History Grade 12

- Geography Grade 9
- Geography Grade 10
- Geography Grade 11
- Geography Grade 12

- Economics Grade 9
- Economics Grade 10
- Economics Grade 11
- Economics Grade 12

- ICT Grade 12

- English (Common Subject)
- Aptitude (Common Subject)



DAILY STUDY TIME:

- Total study time: 6 - 6.5 hours per day.


SCHOOL TIME:

- School:
8:00 AM - 3:30 PM

Use free school time for:

- Revision
- Reviewing notes
- Solving questions
- Reading
- Library study



LIBRARY:

- 0-30 minutes library time.

Main focus:

- Mathematics
- Physics



AFTER SCHOOL:

4:00 PM - 6:00 PM

- 2 hours study session.



EVENING:

7:00 PM - 11:00 PM

- Study session.



BEFORE SLEEP:

- 2 hours study.

Focus difficult subjects:

Natural Science:

- Biology Grade 12
- Chemistry Grade 12


Social Science:

- History Grade 12
- Geography Grade 12



AFTER SLEEP:

- Use around 1.5 hours after sleeping for:

- New concepts
- Weak subjects
- Important chapters



GENERAL TIMETABLE:

Organize study mainly between:

4:00 PM - 2:00 AM

when suitable.



PREPARE FOR SCHOOL:

7:00 AM - 7:30 AM

Prepare for school.



FOCUS SUBJECTS:


NATURAL SCIENCE:

Give additional study time to:

- Biology Grade 12
- Chemistry Grade 12
- Mathematics Grade 12



SOCIAL SCIENCE:

Give additional study time to:

- Mathematics Grade 12
- History Grade 12
- Geography Grade 12
- Economics Grade 12



ENGLISH:

Saturday:

- 30 minutes English practice.

Sunday:

- 30 minutes English practice.



APTITUDE:

Saturday:

- 30 minutes Aptitude practice.

Sunday:

- 30 minutes Aptitude practice.



WEEKEND PLAN:

Saturday and Sunday:

Use revision time for:

- Forgotten chapters
- Unread chapters
- Unfinished lessons
- Practice questions
- Weak areas


English:
- 30 minutes.

Aptitude:
- 30 minutes.



SPECIAL SUBJECT RULE:

ICT Grade 12:

- Only needs 0-1 day checking and revision.


Agriculture Grade 12:

- Only needs 0-1 day checking and revision.



RELIGIOUS READING:

Before sleeping:

- Read religious holy book.
- Duration: 0-30 minutes.



TIMETABLE INSTRUCTION:

Create a realistic weekly timetable.

The timetable must include:

- School hours.
- Library time.
- Daily study sessions.
- Revision sessions.
- Focus subjects.
- English practice.
- Aptitude practice.
- Breaks.

Balance all subjects.

Make the timetable realistic and easy for students to follow.

Target:

Finish and repeat Grade 9-12
subjects 3 times before 9 months of exam time
write ENTRANCE TARGET: 500+
`,
"Pass+": `

ENTRANCE TARGET: PASS+

GOAL:
Finish and repeat all Grade 9-12 subjects 2 times before the exam, including English, while giving enough time to prepare Grade 12 strongly.

GRADE 12 PREPARATION:
Student should focus on Grade 12 success while reviewing previous grade subjects.

CHAPTER TARGET:
- Study 1 chapter per day.
- Focus mainly on difficult chapters.



NATURAL SCIENCE STUDENT SUBJECTS:

- Mathematics Grade 9
- Mathematics Grade 10
- Mathematics Grade 11
- Mathematics Grade 12

- Physics Grade 9
- Physics Grade 10
- Physics Grade 11
- Physics Grade 12

- Chemistry Grade 9
- Chemistry Grade 10
- Chemistry Grade 11
- Chemistry Grade 12

- Biology Grade 9
- Biology Grade 10
- Biology Grade 11
- Biology Grade 12

- ICT Grade 12
- Agriculture Grade 12

- English (Common Subject)
- Aptitude (Common Subject)



SOCIAL SCIENCE STUDENT SUBJECTS:

- Mathematics Grade 9
- Mathematics Grade 10
- Mathematics Grade 11
- Mathematics Grade 12

- History Grade 9
- History Grade 10
- History Grade 11
- History Grade 12

- Geography Grade 9
- Geography Grade 10
- Geography Grade 11
- Geography Grade 12

- Economics Grade 9
- Economics Grade 10
- Economics Grade 11
- Economics Grade 12

- ICT Grade 12

- English (Common Subject)
- Aptitude (Common Subject)



DAILY STUDY TIME:

- Total study time:
5 - 6.5 hours per day.



SCHOOL TIME:

- School:
8:00 AM - 3:30 PM

Use free school time for:

- Revision
- Reviewing notes
- Solving questions
- Reading
- Library study



LIBRARY:

- 0-30 minutes library time.

Main focus:

- Mathematics
- Physics



AFTER SCHOOL:

4:00 PM - 6:00 PM

- Study session.



EVENING:

7:00 PM - 11:00 PM

- Study session.



BEFORE SLEEP:

- 2.5 hours study.

Focus difficult subjects:

Natural Science:

- Biology Grade 12
- Chemistry Grade 12


Social Science:

- History Grade 12
- Geography Grade 12



FOCUS SUBJECTS:


NATURAL SCIENCE:

Give additional study time to:

- Biology Grade 12
- Chemistry Grade 12
- Mathematics Grade 12



SOCIAL SCIENCE:

Give additional study time to:

- Mathematics Grade 12
- History Grade 12
- Geography Grade 12
- Economics Grade 12



ENGLISH:

Saturday:

- 0 minutes.

Sunday:

- 0 minutes.

Focus more on revision.



APTITUDE:

Saturday:

- 0 minutes.

Sunday:

- 0 minutes.

Focus more on revision.



WEEKEND PLAN:

Saturday and Sunday:

Use revision time for:

- Forgotten chapters
- Unread chapters
- Unfinished lessons
- Practice questions
- Weak areas


General revision:
- 7 hours.



SPECIAL SUBJECT RULE:

ICT Grade 12:

- Only needs 0-1 day checking and revision.


Agriculture Grade 12:

- Only needs 0-1 day checking and revision.



RELIGIOUS READING:

Before sleeping:

- Read religious holy book.
- Duration: 0-30 minutes.



PREPARE FOR SCHOOL:

7:00 AM - 7:30 AM

Prepare for school.



TIMETABLE INSTRUCTION:

Create a realistic weekly timetable.

The timetable must include:

- School hours.
- Library time.
- Daily study sessions.
- Grade 12 preparation.
- Focus subjects.
- Revision sessions.
- Breaks.

Balance all subjects.

Give enough time for Grade 12 preparation.

Make the timetable realistic and easy for students to follow.

Target:

Finish and repeat Grade 9-12 subjects 2 times before exam.
write ENTRANCE TARGET: PASS+
`,
};



// ===============================
// CREATE STRATEGY TEXT
// ===============================


let strategyText = "";


if(
studentData.grade === "Grade 12" &&
selectedStrategy &&
strategyData[selectedStrategy]
){


strategyText = `

GRADE 12 ENTRANCE STRATEGY

${strategyData[selectedStrategy]}

`;

}



// ===============================
// CREATE AI REQUEST
// ===============================


let requestText = `


Create a personalized weekly study timetable image.


STUDENT INFORMATION


Name:
${studentData.name}


Grade:
${studentData.grade}


Stream:
${studentData.stream}



SUBJECTS:

${
studentData.subjects
?
studentData.subjects.join(", ")
:
"No subjects"
}



Study Level:

${studentData.studyLevel}



Study Hours:

${studentData.studyHours}



Study Time:

${studentData.studyTime}




Focus Subjects:

${
studentData.focusSubjects
?
studentData.focusSubjects.join(", ")
:
"No focus"
}



${strategyText}



TIMETABLE REQUIREMENTS:

- Create weekly timetable
- Add school time
- Add study sessions
- Add breaks
- Add revision
- Add English
- Add Aptitude
- Make realistic


DESIGN:

Modern student planner.

Phone friendly.

Professional colors.



Write:

Keep working ${studentData.name} 🚀
Discipline is the key 🗝️
`;

console.log(requestText);


// ===============================
// SMARTPATH AI DISPLAY SYSTEM
// ===============================


window.onload = function(){

    showAIRequest();

};



// Display AI processing animation

function showAIRequest(){


    const area =
    document.getElementById("ai-request-text");


    const button =
    document.getElementById("copy-btn");


    const status =
    document.getElementById("status-text");


    const spinner =
    document.getElementById("spinner");



    if(!area){

        console.log("AI box missing");

        return;

    }



    button.disabled = true;



    let lines = [


        "🤖 SmartPath AI Engine Starting...",


        "━━━━━━━━━━━━━━━━━━━━",


        "Loading student profile...",


        "✔ Name: " + studentData.name,


        "✔ Grade: " + studentData.grade,


        "✔ Stream: " + studentData.stream,


        "✔ Study Hours: " + studentData.studyHours,


        "",


        "Loading subjects..."

    ];



    if(studentData.subjects){


        studentData.subjects.forEach(function(subject){


            lines.push(
                "• " + subject
            );


        });


    }



    lines.push("");

    lines.push(
        "Loading focus subjects..."
    );



    if(studentData.focusSubjects){


        studentData.focusSubjects.forEach(function(subject){


            lines.push(
                "★ " + subject
            );


        });


    }



    lines.push("");

    lines.push(
        "Building AI timetable   request..."
    );



    let index = 0;



    let timer = setInterval(function(){


        area.innerHTML +=
        lines[index] + "<br>";



        area.scrollTop =
        area.scrollHeight;



        index++;



        if(index >= lines.length){


            clearInterval(timer);



            setTimeout(function(){


                spinner.style.display="none";


                status.innerHTML =
                "✅ AI Request Ready";



                button.disabled=false;



                button.innerHTML =
                "📋 Copy AI Request";



            },700);


        }



    },180);


}






// ===============================
// COPY BUTTON
// ===============================

function copyRequest(){

    const button =
    document.getElementById("copy-btn");

    const message =
    document.getElementById("copy-message");


    navigator.clipboard.writeText(requestText)

    .then(function(){


        button.innerHTML =
        "✅ Request Copied";


        message.innerHTML =
        "Copied successfully!";


        setTimeout(function(){

            showPopup();

        },800);


    })

    .catch(function(){

        message.innerHTML =
        "❌ Copy failed. Try again.";

    });

}

// ===============================
// AI POPUP SYSTEM
// ===============================


function showPopup(){


    const popup =
    document.getElementById("ai-popup");


    if(!popup){

        console.log("Popup missing");

        return;

    }


    popup.style.display = "flex";


    startTyping();

}




function startTyping(){


    const text = 
`We're almost done ✅

Paste all this to this AI now`;


    const area =
    document.getElementById("typing-text");


    const button =
    document.getElementById("popup-btn");



    area.innerHTML="";


    button.style.display="none";


    let i = 0;



    let typing =
    setInterval(function(){


        area.innerHTML += text.charAt(i);


        i++;



        if(i >= text.length){


            clearInterval(typing);



            setTimeout(function(){


                button.style.display="block";


            },500);


        }



    },50);


}




// Popup button

document.getElementById("popup-btn")
.addEventListener("click",function(){


    window.open(
        "https://duck.ai",
        "_blank"
    );


});