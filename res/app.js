const homeBtn = document.getElementById("home-btn");
const admissBtn = document.getElementById("admission-btn");
const coursesBtn = document.getElementById("course-btn");
const contactBtn = document.getElementById("contact-btn");
const learnMoreBtn = document.getElementById("le-more");
homeBtn.onclick = function (){
    location.href="/"
    console.log("Navigated to Home")
};
admissBtn.onclick = function (){
    location.href="/admission"
}
coursesBtn.onclick = function (){
    location.href="/courses"
}
contactBtn.onclick = function (){
    location.href="/contact"
}
learnMoreBtn.onclick = function (){
    location.href="/admission"
}
