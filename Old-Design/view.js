function mediachange(x){
    if(x.matches){
        document.getElementById("forwardicon").setAttribute("class", "fa fa-arrow-down fa-2x");
        document.getElementById("backwardicon").setAttribute("class", "fa fa-arrow-up fa-2x");
    }
    else {
        document.getElementById("forwardicon").setAttribute("class", "fa fa-arrow-right fa-3x");
        document.getElementById("backwardicon").setAttribute("class", "fa fa-arrow-left fa-3x");
    }
}

function changeview(pagename,direction){
    if (pagename == "home" && direction == "forwards"){
        // Fade out top image
        document.getElementById("profilecard").setAttribute("class", "profileimagelayer fade");
        // Fade in Drumpad info
        document.getElementById("homeinfo").setAttribute("class", "infolargelayer fadeoutto");
        document.getElementById("drumpadinfo").setAttribute("class", "infolargelayer fadeinto");
        // Fade in Drumpad repo
        document.getElementById("githubprofile").setAttribute("class", "infosmalllayer fadeoutto");
        document.getElementById("githubrepo").setAttribute("class", "infosmalllayer fadeinto");
        document.getElementById("link1").setAttribute("href", "https://github.com/AidanShirey/DrumPad");
        // Fade in Drumpad page
        document.getElementById("linkedinprofile").setAttribute("class", "infosmalllayer fadeoutto");
        document.getElementById("githubpage").setAttribute("class", "infosmalllayer fadeinto");
        document.getElementById("websiteicon").setAttribute("class", "infoiconlayer fa fa-window-maximize fa-2x fadeinto");
        document.getElementById("linkedinicon").setAttribute("class", "infoiconlayer fa fa-linkedin fa-2x fadeoutto");
        document.getElementById("link2").setAttribute("href", "https://aidanshirey.github.io/DrumPad/");
        // Change forwards and backwards buttons
        document.getElementById("forward").setAttribute("onclick", "changeview('drumpad','forwards')");
        document.getElementById("forward").setAttribute("class", "arrowforward reappear");
        document.getElementById("backward").setAttribute("class", "arrowback reappear");
        document.getElementById("backward").setAttribute("onclick", "changeview('drumpad','backwards')");
    }
    if (pagename == "drumpad" && direction == "forwards"){
        // Fade out top image
        document.getElementById("drumpad").setAttribute("class", "profileimagelayer fade");
        
        // Fade in Fly info - Test Commit
        document.getElementById("drumpadinfo").setAttribute("class", "infolargelayer fadeoutto");
        document.getElementById("flyinfo").setAttribute("class", "infolargelayer fadeinto");
        // Change links
        document.getElementById("link1").setAttribute("href", "https://github.com/AidanShirey/fly");
        document.getElementById("link2").setAttribute("href", "https://aidanshirey.github.io/fly/");
        // Change forwards and backwards buttons
        document.getElementById("forward").setAttribute("onclick", "changeview('fly','forwards')");
        document.getElementById("forward").setAttribute("class", "arrowforward fadeoutto");
        document.getElementById("backward").setAttribute("onclick", "changeview('fly','backwards')");
    }
    if (pagename == "drumpad" && direction == "backwards"){
        // Fade in images
        document.getElementById("profilecard").setAttribute("class", "profileimagelayer reappear");
        document.getElementById("drumpad").setAttribute("class", "profileimagelayer reappear");
        // Fade in Home info
        document.getElementById("drumpadinfo").setAttribute("class", "infolargelayer fadeoutto");
        document.getElementById("homeinfo").setAttribute("class", "infolargelayer fadeinto");
        // Fade in profile
        document.getElementById("githubprofile").setAttribute("class", "infosmalllayer fadeinto");
        document.getElementById("githubrepo").setAttribute("class", "infosmalllayer fadeoutto");
        document.getElementById("link1").setAttribute("href", "https://github.com/AidanShirey");
        // Fade in linkedin
        document.getElementById("linkedinprofile").setAttribute("class", "infosmalllayer fadeinto");
        document.getElementById("githubpage").setAttribute("class", "infosmalllayer fadeoutto");
        document.getElementById("link2").setAttribute("href", "https://www.linkedin.com/in/aidanshirey/");
        document.getElementById("websiteicon").setAttribute("class", "infoiconlayer fa fa-window-maximize fa-2x fadeoutto");
        document.getElementById("linkedinicon").setAttribute("class", "infoiconlayer fa fa-linkedin fa-2x fadeinto");
        // Change forwards and backwards buttons
        document.getElementById("forward").setAttribute("onclick", "changeview('home','forwards')");
        document.getElementById("backward").setAttribute("class", "arrowback fadeoutto");
    }
    if (pagename == "fly" && direction == "backwards"){
        // Fade in images
        document.getElementById("drumpad").setAttribute("class", "profileimagelayer reappear");
        // Fade in Drumpad info
        document.getElementById("flyinfo").setAttribute("class", "infolargelayer fadeoutto");
        document.getElementById("drumpadinfo").setAttribute("class", "infolargelayer fadeinto");
        // Change links
        document.getElementById("link1").setAttribute("href", "https://github.com/AidanShirey/DrumPad");
        document.getElementById("link2").setAttribute("href", "https://aidanshirey.github.io/DrumPad/");
        // Change forwards and backwards buttons
        document.getElementById("forward").setAttribute("onclick", "changeview('drumpad','forwards')");
        document.getElementById("forward").setAttribute("class", "arrowforward fadeinto");
        document.getElementById("backward").setAttribute("onclick", "changeview('drumpad','backwards')");
    }
}

var x = window.matchMedia("(max-width: 700px)");
mediachange(x);
x.addListener(mediachange);