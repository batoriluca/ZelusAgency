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
            document.querySelector(".thankyou").setAttribute("style", "opacity:1;")
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
const tcH=document.getElementById("tch");
const tyH1 = document.getElementById("tyh1");
const tyH2 = document.getElementById("tyh2");
var engOn = true;
if (engOn) {
      rouLng.classList.remove("unsopt");
      rouLng.classList.add("selected");
      engLng.classList.add("unsopt");
      engLng.classList.remove("selected");
      homeBtn.innerText="Acasă";
      servicesBtn.innerText="Servicii";
      tyH1.innerText="Mulțumim pentru că ai luat legătura cu noi!";
      tyH2.innerText="Apreciem faptul că ați contactat Zelus Agency. Unul dintre colegii noștri va lua legătura cu dumneavoastră în cel mai scurt timp posibil! O zi frumoasă!";
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
      tyH1.innerText="Mulțumim pentru că ai luat legătura cu noi!";
      tyH2.innerText="Apreciem faptul că ați contactat Zelus Agency. Unul dintre colegii noștri va lua legătura cu dumneavoastră în cel mai scurt timp posibil! O zi frumoasă!";
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
          tyH1.innerText="Thank you for getting in touch!";
          tyH2.innerText="We appreciate you contacting Zelus Agency. One of our colleagues will get back in touch with you soon! Have a great day!";
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
  tyH1.innerText="Thank you for getting in touch!";
  tyH2.innerText="We appreciate you contacting Zelus Agency. One of our colleagues will get back in touch with you soon! Have a great day!";
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
  tyH1.innerText="Mulțumim pentru că ai luat legătura cu noi!";
  tyH2.innerText="Apreciem faptul că ați contactat Zelus Agency. Unul dintre colegii noștri va lua legătura cu dumneavoastră în cel mai scurt timp posibil! O zi frumoasă!";
  tcH.innerText = "Termeni și Condiții";
  engOn=false;
}
