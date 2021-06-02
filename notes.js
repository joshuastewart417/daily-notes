const notes = [ {
    id:1,
    subject:"for statements",
    date:"01-6-2021",
    feeling:"frustrated",
    timeSpent:2
},
{
    id:2,


}
]

const noteaboutToday = {
    id:3,
    subject:"push methods",
    date:"01-6-21",
    feeling:"confused",
    timeSpent:4
}

notes.push(noteaboutToday);

for(note of notes){
    console.log(`Note ${note.id}
    ${note.date}
    I learned ${note.subject}
    I spent ${note.timeSpent} hours on it
    I felt ${note.feeling} most of the time`)
}

for (const note of notes) {
    if () {

    }
}


//console.log(notes);
