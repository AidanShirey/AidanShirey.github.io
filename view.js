function changeview(pagename,direction){
    if (pagename == "home" && direction == "forwards"){
        // Fade out top image
        document.getElementById("profilecard").setAttribute("class", "profileimagelayer fade");
        // Fade in Drumpad info
        document.getElementById("homeinfo").setAttribute("class", "infolargelayer fade");
        document.getElementById("drumpadinfo").setAttribute("class", "infolargelayer reappear");
        // Fade in Drumpad repo
        document.getElementById("githubprofile").setAttribute("class", "infosmalllayer fade");
        document.getElementById("githubrepo").setAttribute("class", "infosmalllayer");
        document.getElementById("link1").setAttribute("href", "https://github.com/AidanShirey/DrumPad");
        // Fade in Drumpad page
        document.getElementById("linkedinprofile").setAttribute("class", "infosmalllayer fade");
        document.getElementById("githubpage").setAttribute("class", "infosmalllayer");
        document.getElementById("link2").setAttribute("href", "https://aidanshirey.github.io/DrumPad/");
        // Change forwards and backwards buttons
        document.getElementById("forward").setAttribute("onclick", "changeview('drumpad','forwards')");
        document.getElementById("backward").setAttribute("class", "arrowback reappear");
        document.getElementById("backward").setAttribute("onclick", "changeview('drumpad','backwards')");
    }
    if (pagename == "drumpad" && direction == "forwards"){
        // Fade out top image
        document.getElementById("drumpad").setAttribute("class", "profileimagelayer fade");
        
        // Fade in Fly info - Test Commit
        document.getElementById("drumpadinfo").setAttribute("class", "infolargelayer fade");
        document.getElementById("flyinfo").setAttribute("class", "infolargelayer reappear");
        // Change links
        document.getElementById("link1").setAttribute("href", "https://github.com/AidanShirey/fly");
        document.getElementById("link2").setAttribute("href", "https://aidanshirey.github.io/fly/");
        // Change forwards and backwards buttons
        document.getElementById("forward").setAttribute("onclick", "changeview('fly','forwards')");
        document.getElementById("forward").setAttribute("class", "arrowforward fade");
        document.getElementById("backward").setAttribute("onclick", "changeview('fly','backwards')");
    }
    if (pagename == "drumpad" && direction == "backwards"){
        // Fade in images
        document.getElementById("profilecard").setAttribute("class", "profileimagelayer reappear");
        document.getElementById("drumpad").setAttribute("class", "profileimagelayer reappear");
        // Fade in Home info
        document.getElementById("drumpadinfo").setAttribute("class", "infolargelayer fade");
        document.getElementById("homeinfo").setAttribute("class", "infolargelayer reappear");
        // Fade in profile
        document.getElementById("githubprofile").setAttribute("class", "infosmalllayer reappear");
        document.getElementById("githubrepo").setAttribute("class", "infosmalllayer fade");
        document.getElementById("link1").setAttribute("href", "https://github.com/AidanShirey");
        // Fade in linkedin
        document.getElementById("linkedinprofile").setAttribute("class", "infosmalllayer reappear");
        document.getElementById("githubpage").setAttribute("class", "infosmalllayer fade");
        document.getElementById("link2").setAttribute("href", "https://www.linkedin.com/in/aidanshirey/");
        // Change forwards and backwards buttons
        document.getElementById("forward").setAttribute("onclick", "changeview('home','forwards')");
        document.getElementById("backward").setAttribute("class", "arrowback fade");
    }
    if (pagename == "fly" && direction == "backwards"){
        // Fade in images
        document.getElementById("drumpad").setAttribute("class", "profileimagelayer reappear");
        // Fade in Drumpad info
        document.getElementById("flyinfo").setAttribute("class", "infolargelayer fade");
        document.getElementById("drumpadinfo").setAttribute("class", "infolargelayer reappear");
        // Change links
        document.getElementById("link1").setAttribute("href", "https://github.com/AidanShirey/DrumPad");
        document.getElementById("link2").setAttribute("href", "https://aidanshirey.github.io/DrumPad/");
        // Change forwards and backwards buttons
        document.getElementById("forward").setAttribute("onclick", "changeview('drumpad','forwards')");
        document.getElementById("forward").setAttribute("class", "arrowforward reappear");
        document.getElementById("backward").setAttribute("onclick", "changeview('drumpad','backwards')");
    }
}