const intro = document.querySelector(".intro");
const contactForm = document.querySelector(".menu");
const contactInputs = document.querySelectorAll(".contact-form input")
document.querySelector(".introLogo").setAttribute("style", "opacity:1;");
var sc = 0;
intro.addEventListener("animationend", () => {
    document.querySelector(".introLogo").setAttribute("style", "display:none;")
    document.querySelector(".intro").setAttribute("style", "background-color: #464445;")
    document.querySelector(".rest").setAttribute("style", "display:block;")
    document.querySelector("footer").setAttribute("style", "opacity:1;")
    sc++;
    intro.addEventListener("transitionend", () => {
        if (sc == 1) {
            document.querySelector(".intro").setAttribute("style", "display:none;")
            document.querySelector(".menu").setAttribute("style", "transform: translateY(0%);")
            //document.querySelector(".contact-form").setAttribute("style", "-webkit-box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 4px 8px 0 rgba(0, 0, 0, 0.2);")
            sc++;
        }
        contactForm.addEventListener("transitionend", () => {
            if (sc == 2) {


                document.querySelector(".contact-form").setAttribute("style", "background-color: #403e3f;-webkit-box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 4px 8px 0 rgba(0, 0, 0, 0.2);transition:linear 0.3s;transition-delay:0s;")
                contactInputs.forEach(contactInput => {
                    contactInput.setAttribute("style", "opacity:1;")
                })
                document.querySelector(".contact-form h2").setAttribute("style", "opacity:1;")
                document.querySelector(".contact-form textarea").setAttribute("style", "opacity:1;")


                sc++;
            }
            contactForm.addEventListener("transitionend", () => {
                if (sc == 3) {
                    document.querySelector(".contact-form").setAttribute("style", "background-color: #403e3f;transition:linear 0.3s;transition-delay:0s;")
                    sc++;
                }

            })
        })
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
const contactH = document.getElementById("contacth");
const numeI = document.getElementById("numei");
const mailI = document.getElementById("maili");
const sbmI = document.getElementById("sbmi");
const msgT = document.getElementById("msgt");
const tcH = document.getElementById("tch");
var engOn = true;
if (engOn) {
      rouLng.classList.remove("unsopt");
      rouLng.classList.add("selected");
      engLng.classList.add("unsopt");
      engLng.classList.remove("selected");
      homeBtn.innerText="Acasă";
      servicesBtn.innerText="Servicii";
      contactH.innerText = "CONTACTEAZĂ-NE!";
      numeI.setAttribute("placeholder", "* Nume și Prenume");
      sbmI.setAttribute("value", "Trimite");
      msgT.setAttribute("placeholder", "* Mesaj");
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
      contactH.innerText = "CONTACTEAZĂ-NE!";
      numeI.setAttribute("placeholder", "* Nume și Prenume");
      sbmI.setAttribute("value", "Trimite");
      msgT.setAttribute("placeholder", "* Mesaj");
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
          contactH.innerText = "CONTACT US!";
          numeI.setAttribute("placeholder", "Name");
          sbmI.setAttribute("value", "Submit");
          msgT.setAttribute("placeholder", "Message");
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
        contactH.innerText = "CONTACT US!";
        numeI.setAttribute("placeholder", "Name");
        sbmI.setAttribute("value", "Submit");
        msgT.setAttribute("placeholder", "Message");
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
        contactH.innerText = "CONTACTEAZĂ-NE!";
        numeI.setAttribute("placeholder", "Nume");
        sbmI.setAttribute("value", "Trimite");
        msgT.setAttribute("placeholder", "Mesaj");
        tcH.innerText = "Termeni și Condiții";
        engOn=false;
      }
