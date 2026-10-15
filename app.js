console.log('Hello World!');

//Show feedback from resume download
const downloadBtn = document.getElementById('downloadResume');

downloadBtn. addEventListener('click', function () {
    if (!hasDownloadedResmue){
        alert(('Resume has downloaded successfully!'));
        hasDowloadedResume = true;
    }
});

// ----- User data --------
// const
const name = 'Jackson Weidner';

//let: this value changes after resume is downloaded
let hasDownloadedResume = false;

// ----- Greeting -----
//takes name and returns greeting
function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

//Display greeting
document.getElementById('greetingMessage').textContent = showGreeting(name);

// ---- Project deadline -----
// Returns how many days are left from current day
function daysUntilDeadline(deadline) {
    const msPerDay = 1000 * 60 * 60 * 24;   // 1000 ms * 60 s * 60 min * 24 h = 86,400,000

    const today = new Date();               // right now
    today.setHours(0, 0, 0, 0);             // ignore the time of day: start of today

    const end = new Date(deadline + 'T00:00:00');   // start of the deadline day (local time)

    return Math.round((end - today) / msPerDay);    // difference in ms -> whole days
}

// Read the deadline from the page so the date only has to be written in one place
const deadlineDate = document.getElementById('projectDeadline').getAttribute('datetime');
const daysLeft = daysUntilDeadline(deadlineDate);

console.log('Days until project deadline (' + deadlineDate + '): ' + daysLeft);

// Show the result next to the deadline
let deadlineMessage;
if (daysLeft > 1) {
    deadlineMessage = '(' + daysLeft + ' days left)';
} else if (daysLeft === 1) {
    deadlineMessage = '(1 day left)';
} else if (daysLeft === 0) {
    deadlineMessage = '(due today!)';
} else {
    deadlineMessage = '(deadline passed)';
}
document.getElementById('daysRemaining').textContent = deadlineMessage;