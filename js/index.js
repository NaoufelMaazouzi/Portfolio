
document.addEventListener("scroll", () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 10px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
  }
});


let header = document.querySelector("#navbar");
let minScrollValue = 15;
document.addEventListener("scroll", () => {
  let scrollValueOfPage = document.documentElement.scrollTop;
  if (scrollValueOfPage < minScrollValue) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
  minScrollValue = scrollValueOfPage;
});


let contour = document.getElementById("menu").querySelectorAll(".case");
document.addEventListener("scroll", () => {
  let scrollValueOfPage2 = document.documentElement.scrollTop;
  if (scrollValueOfPage2 > 500 && scrollValueOfPage2 < 1100) {
    contour[0].style.backgroundColor = "#101B27";
  } else {
    contour[0].style.backgroundColor = "";
  }
  if (scrollValueOfPage2 > 1100 && scrollValueOfPage2 < 2000) {
    contour[1].style.backgroundColor = "#101B27";
  } else {
    contour[1].style.backgroundColor = "";
  }
  if (scrollValueOfPage2 > 2000 && scrollValueOfPage2 < 2700) {
    contour[2].style.backgroundColor = "#101B27";
  } else {
    contour[2].style.backgroundColor = "";
  }
  if (scrollValueOfPage2 > 2700 && scrollValueOfPage2 < 3800) {
    contour[3].style.backgroundColor = "#101B27";
  } else {
    contour[3].style.backgroundColor = "";
  }
  if (scrollValueOfPage2 > 3800 && scrollValueOfPage2 < 4800) {
    contour[4].style.backgroundColor = "#101B27";
  } else {
    contour[4].style.backgroundColor = "";
  }
  minScrollValue2 = scrollValueOfPage2;
});

let icon = document.getElementsByClassName("fab");
let csharp = document.getElementsByClassName("devicon-csharp-plain");
function myFunction(x) {
  if (x.matches) { // If media query matches
    for (i = 0; i < icon.length; i++) {
      icon[i].classList.remove("fa-5x");
      icon[i].className += " fa-3x";
    }

  } else {
    for (i = 0; i < icon.length; i++) {
      icon[i].classList.remove("fa-3x");
      icon[i].className += " fa-5x";
    }
  }
}

var x = window.matchMedia("(max-width: 1160px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)


function hidealert(idToHide) {
  var customalert = document.getElementById(idToHide);
  customalert.style.display = 'none';
}



var divs = ["Menu1", "Menu2", "Menu3", "Menu4", "Menu5", "Menu6", "Menu7"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if (visibleDivId === divId) {
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
  var i, divId, div;
  for (i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if (visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}


function validation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name !== "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && message !== "") {
    Swal.fire({
      icon: 'success',
      title: 'Merci',
      text: 'Votre message a été envoyé !',
      showConfirmButton: false,
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Il faut remplir tous les champs et saisir une adresse email valide !',
    })
  }
}


