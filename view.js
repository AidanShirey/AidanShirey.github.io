function changeview(pagename,direction){
    if (pagename == "home" && direction == "forwards"){
        // Fade out top image
        document.getElementById("profilecard").setAttribute("class", "profileimagelayer fade");
        // Change forwards and backwards buttons
        document.getElementById("forward").setAttribute("onclick", "changeview('drumpad','forwards')");
        document.getElementById("backward").setAttribute("onclick", "changeview('drumpad','backwards')");
    }
    if (pagename == "drumpad" && direction == "forwards"){
        // Fade out top image
        document.getElementById("drumpad").setAttribute("class", "profileimagelayer fade");
        // Change forwards and backwards buttons
        document.getElementById("forward").setAttribute("onclick", "changeview('fly','forwards')");
        document.getElementById("backward").setAttribute("onclick", "changeview('fly','backwards')");
    }
    if (pagename == "drumpad" && direction == "backwards"){
        // Fade in images
        document.getElementById("profilecard").setAttribute("class", "profileimagelayer reappear");
        document.getElementById("drumpad").setAttribute("class", "profileimagelayer fadein");
        // Change forwards and backwards buttons
        document.getElementById("forward").setAttribute("onclick", "changeview('home','forwards')");
    }
    if (pagename == "fly" && direction == "backwards"){
        // Fade in images
        document.getElementById("drumpad").setAttribute("class", "profileimagelayer reappear");
        // Change forwards and backwards buttons
        document.getElementById("forward").setAttribute("onclick", "changeview('drumpad','forwards')");
        document.getElementById("backward").setAttribute("onclick", "changeview('drumpad','backwards')");
    }
}