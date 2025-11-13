const intro = document.querySelector(".intro");
document.querySelector(".introLogo").setAttribute("style", "opacity:1;");
var sc = 0;
intro.addEventListener("animationend", () => {
    document.querySelector(".introLogo").setAttribute("style", "display:none;")
    document.querySelector(".intro").setAttribute("style", "background-color: #464445;")
    document.querySelector(".rest").setAttribute("style", "display:block;")
    sc++;
    intro.addEventListener("transitionend", () => {
        if (sc == 1) {
            document.querySelector(".intro").setAttribute("style", "display:none;")
            document.querySelector(".menu").setAttribute("style", "transform: translateY(0%);")
            document.querySelector("footer").setAttribute("style", "opacity:1;")
            document.querySelector(".comingsoon").setAttribute("style", "opacity:1;margin-top:200px;")
            sc++;
        }

    })
})

const goBottom = document.getElementById("toBottom");

goBottom.addEventListener("click", () => {
    window.scrollTo(0, document.body.scrollHeight);

})
const rouLng = document.getElementById("rou");
const engLng = document.getElementById("eng");
const homeBtn = document.getElementById("home");
const servicesBtn = document.getElementById("services");
const soonH=document.getElementById("soon");
const tcH = document.getElementById("tch");
var engOn = true;
if (engOn) {
      rouLng.classList.remove("unsopt");
      rouLng.classList.add("selected");
      engLng.classList.add("unsopt");
      engLng.classList.remove("selected");
      homeBtn.innerText="Acasă";
      servicesBtn.innerText="Servicii";
      soonH.innerText="ÎN CURÂND...";
      tcH.innerText = "Termeni și Condiții";
      engOn=false;
    }

rouLng.addEventListener("click", () => {
    if (engOn) {
      rouLng.classList.remove("unsopt");
      rouLng.classList.add("selected");
      engLng.classList.add("unsopt");
      engLng.classList.remove("selected");
      homeBtn.innerText="Acasă";
      servicesBtn.innerText="Servicii";
      soonH.innerText="ÎN CURÂND...";
      tcH.innerText = "Termeni și Condiții";
      engOn=false;
    }
      document.cookie = "site_lang=roma";
  })

engLng.addEventListener("click", () => {
        if (!engOn) {
          rouLng.classList.add("unsopt");
          rouLng.classList.remove("selected");
          engLng.classList.remove("unsopt");
          engLng.classList.add("selected");
          homeBtn.innerText="Home";
          servicesBtn.innerText="Services";
          soonH.innerText="COMING SOON...";
          tcH.innerText = "Terms & Conditions";
        engOn=true;
        }
          document.cookie = "site_lang=eng";
      })


      if (document.cookie == "site_lang=eng") {
        rouLng.classList.add("unsopt");
        rouLng.classList.remove("selected");
        engLng.classList.remove("unsopt");
        engLng.classList.add("selected");
        homeBtn.innerText="Home";
        servicesBtn.innerText="Services";
        soonH.innerText="COMING SOON...";
        tcH.innerText = "Terms & Conditions";
      engOn=true;
      }else if(document.cookie == "site_lang=roma")
      {
        rouLng.classList.remove("unsopt");
        rouLng.classList.add("selected");
        engLng.classList.add("unsopt");
        engLng.classList.remove("selected");
        homeBtn.innerText="Acasă";
        servicesBtn.innerText="Servicii";
        soonH.innerText="ÎN CURÂND...";
        tcH.innerText = "Termeni și Condiții";
        engOn=false;
      }
