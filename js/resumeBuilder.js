/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = { "jobs": [
    {"employer":"Wipro","title":"Project Engineer","location":"Bengaluru","dates":"2014-2016","description":"worked as a DBA"},
    {"employer":"iWeavesolutions","title":"web Developer","location":"Bengaluru","dates":"2013-2014","description":"worked as an intern"}]
}

var education = {
    "schools" :[{"name":"SSBJ","location":"Vijayapura","degree date":"2003-2010","url":"www.ssbj.com"},
               {"name":"JSSATE","location":"Bengaluru","degree date":"2010-2014","url":"www.jssateb.com"}],
    "majors": ["ADA","JAVA","C","C++","Data structures"],
    "onlineCourses":[{"title":"Full stack developer","school":"www.udacity.com","dates":"2017","url":"www.udacity.com"},
                     {"title":"Intro to computer science","school":"udacity","dates":"2017","url":"www.udacity.com"}]
}

var projects = { "projects":[{"title":"creating a webpage","dates":"2017","description":"simple web page","images":["https://placehold.it/100x100","https://placehold.it/100x100"]},
                {"title":"creating a movie trailer website","dates":"2017","description":"a web page to display movie trailers.","images":"https://placehold.it/100x100"}]
}

var bio = {
    "name" : "Deepak K Mali",
    "role" : "Web Developer",
    "contacts" : {
        "mobile":"9568949875",
        "email": "example@udacity.com",
        "github": "www.github.com",
        "twitter": "@deepak",
        "location": "Bengaluru"
    },
    "welcomeMessage": "lorem ipsum dolor sit amet ",
    "skills": [ "awesomeness","delivering things","cryogenic sleep","saving the universe"],
    "bioPic": "https://placehold.it/100x100"
 };

 if(bio.skills.length > 0 ){
    //document.getElementById("header").html.append(HTMLskillsStart);
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
    $("#skills").append(formattedSkill);
 }
