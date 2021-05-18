function changeview(pagename,direction){
    if (pagename == "home" && direction == "forwards"){
        // Fade out top image
        document.getElementById("profilecard").setAttribute("class", "profileimagelayer fade");
        // Fade in Drumpad info
        document.getElementById("homeinfo").setAttribute("class", "infolargelayer fade");
        document.getElementById("drumpadinfo").setAttribute("class", "infolargelayer reappear");
        // Change forwards and backwards buttons
        document.getElementById("forward").setAttribute("onclick", "changeview('drumpad','forwards')");
        document.getElementById("backward").setAttribute("onclick", "changeview('drumpad','backwards')");
    }
    if (pagename == "drumpad" && direction == "forwards"){
        // Fade out top image
        document.getElementById("drumpad").setAttribute("class", "profileimagelayer fade");
        // Fade in Fly info - Test Commit
        document.getElementById("drumpadinfo").setAttribute("class", "infolargelayer fade");
        document.getElementById("flyinfo").setAttribute("class", "infolargelayer reappear");
        // Change forwards and backwards buttons
        document.getElementById("forward").setAttribute("onclick", "changeview('fly','forwards')");
        document.getElementById("backward").setAttribute("onclick", "changeview('fly','backwards')");
    }
    if (pagename == "drumpad" && direction == "backwards"){
        // Fade in images
        document.getElementById("profilecard").setAttribute("class", "profileimagelayer reappear");
        document.getElementById("drumpad").setAttribute("class", "profileimagelayer reappear");
        // Fade in Home info
        document.getElementById("drumpadinfo").setAttribute("class", "infolargelayer fade");
        document.getElementById("homeinfo").setAttribute("class", "infolargelayer reappear");
        // Change forwards and backwards buttons
        document.getElementById("forward").setAttribute("onclick", "changeview('home','forwards')");
    }
    if (pagename == "fly" && direction == "backwards"){
        // Fade in images
        document.getElementById("drumpad").setAttribute("class", "profileimagelayer reappear");
        // Fade in Drumpad info
        document.getElementById("flyinfo").setAttribute("class", "infolargelayer fade");
        document.getElementById("drumpadinfo").setAttribute("class", "infolargelayer reappear");
        // Change forwards and backwards buttons
        document.getElementById("forward").setAttribute("onclick", "changeview('drumpad','forwards')");
        document.getElementById("backward").setAttribute("onclick", "changeview('drumpad','backwards')");
    }
}