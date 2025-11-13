const intro = document.querySelector(".intro");
const card = document.querySelector(".card1");
const cardFace = document.querySelector(".card1 .back");
const cardFaceH1 = document.querySelector(".back h1");
var sc = 0;
const cards = document.querySelectorAll(".card");
const cardTitles = document.querySelectorAll(".title");
const cardIcons = document.querySelectorAll(".card i");
const cardPs = document.querySelectorAll(".card p");
const cardButtons = document.querySelectorAll(".card button");
const contactInputs = document.querySelectorAll(".contact-form input")
document.querySelector(".introLogo").setAttribute("style", "opacity:1;");

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
            document.querySelector(".p1 h2").setAttribute("style", "transform: translate(-50%) translateY(0px);opacity:1;")
            document.querySelector(".card1").setAttribute("style", "-webkit-box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 4px 8px 0 rgba(0, 0, 0, 0.2);")
            //document.querySelector(".contact-form").setAttribute("style", "-webkit-box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 4px 8px 0 rgba(0, 0, 0, 0.2);")
            cards.forEach(cardd => {
                cardd.setAttribute("style", "-webkit-box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 4px 8px 0 rgba(0, 0, 0, 0.2);")
            });

            sc++;
        }
        card.addEventListener("transitionend", () => {
            if (sc == 2) {
                document.querySelector(".card1").setAttribute("style", "-webkit-box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 4px 8px 0 rgba(0, 0, 0, 0.2);transition:linear 0.3s;transition-delay:0s;")
                document.querySelector(".card1 .back").setAttribute("style", "background-color: #403e3f;")
                //document.querySelector(".card1 .face").setAttribute("style", "background-color: #403e3f;")
                cards.forEach(cardd => {
                    cardd.setAttribute("style", "background-color: #201e1f;-webkit-box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 4px 8px 0 rgba(0, 0, 0, 0.2);transition:linear 0.3s;transition-delay:0s;")
                });
                document.querySelector(".contact-form").setAttribute("style", "background-color: #403e3f;-webkit-box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 4px 8px 0 rgba(0, 0, 0, 0.2);transition:linear 0.3s;transition-delay:0s;")
                cardTitles.forEach(cardTitle => {
                    cardTitle.setAttribute("style", "opacity:1;")
                })
                cardIcons.forEach(cardIcon => {
                    cardIcon.setAttribute("style", "opacity:1;")
                })
                cardPs.forEach(cardP => {
                    cardP.setAttribute("style", "opacity:1;")
                })
                cardButtons.forEach(cardButton => {
                    cardButton.setAttribute("style", "opacity:1;")
                })
                contactInputs.forEach(contactInput => {
                    contactInput.setAttribute("style", "opacity:1;")
                })
                document.querySelector(".contact-form h2").setAttribute("style", "opacity:1;")
                document.querySelector(".contact-form textarea").setAttribute("style", "opacity:1;")


                sc++;
            }
            cardFace.addEventListener("transitionend", () => {
                if (sc == 3) {
                    //console.log("aa");
                    //document.querySelector(".card1").setAttribute("style", "-webkit-box-shadow: 0px 0px 95px -3px rgb(149, 149, 149), 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);transition:linear 0.3s;transition-delay:0s;")
                    document.querySelector(".card1").setAttribute("style", "-webkit-box-shadow: 0px 0px 45px -3px rgb(149, 149, 149), 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);transition:linear 0.3s;transition-delay:0s;")
                    cards.forEach(cardd => {
                        cardd.setAttribute("style", "background-color: #201e1f;-webkit-box-shadow: 0px 0px 45px -3px rgb(149, 149, 149), 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);transition:linear 0.3s;transition-delay:0s;")
                    });
                    document.querySelector(".contact-form").setAttribute("style", "background-color: #403e3f;transition:linear 0.3s;transition-delay:0s;")

                   // document.querySelector(".face h1").setAttribute("style", "color: rgb(171, 171, 171);")
                    document.querySelector(".back h4").setAttribute("style", "color: white;")
                    document.querySelector(".back p").setAttribute("style", "color: white;")
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
const motto = document.getElementById("motto");
//const wtszls = document.getElementById("wtszls");
const wtszlsb = document.getElementById("wtszlsb");
const wtszlsp = document.getElementById("wtszlsp");
const rmBtns = document.querySelectorAll("#rm");
const ppcP = document.getElementById("ppcp");
const intP = document.getElementById("intp");
const anlP = document.getElementById("anlp");
const incP = document.getElementById("incp");
const wsP = document.getElementById("wsp");
const ppcH = document.getElementById("ppch");
const intH = document.getElementById("inth");
const anlH = document.getElementById("anlh");
const incH = document.getElementById("inch");
const wsH = document.getElementById("wsh");
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
        motto.innerText = "Maximizăm pontențialul online cu soluții de marketing";
       // wtszls.innerText = "CE ESTE ZELUS?";
        wtszlsb.innerText = "CE ESTE ZELUS?";
        wtszlsp.innerText = "Bine ați venit la Zelus Agency, o firmă de marketing digital de top dedicată ajutării afacerilor să-și atingă potențialul complet online. Cu o echipă de profesioniști experimentați și calificați, oferim o gamă largă de servicii pentru a vă ajuta să atingeți obiectivele dvs., inclusiv optimizarea pentru motoarele de căutare (SEO), publicitatea plătită pe clic (PPC), marketingul pe rețelele sociale și multe altele. Indiferent dacă doriți să îmbunătăți vizibilitatea site-ului dvs., să creșteți baza de clienți sau să îmbunătățiți vânzările online, Zelus Agency are expertiza și resursele pentru a vă ajuta să reușiți. Contactați-ne astăzi pentru a afla mai multe despre cum putem ajuta afacerea dvs. să prospere în lumea digitală.";
        rmBtns.forEach(rmBtn => {
            rmBtn.innerText = "Vezi mai mult"
        });
        ppcP.innerText = "Publicitatea plătită pe clic (PPC) este o strategie de publicitate digitală care implică plasarea d..";
        intP.innerText = "Strategiile digitale integrate implică coordonarea și integrarea diferitelor canale de marketing di..";
        anlP.innerText = "Analiza de marketing este procesul de evaluare a pieței pentru a identifica oportunitățile și ameni..";
        incP.innerText = "Creșterea conversiilor se referă la creșterea numărului sau procentajului de vizitatori ai site-ulu..";
        wsP.innerText = "Crearea de site-uri și programe implică proiectarea, codificarea și implementarea de soluții softwa..";
        ppcH.innerText = "PUBLICITATEA PLĂTITĂ PE CLIC";
        intH.innerText = "STRATEGII DIGITALE INTEGRATE";
        anlH.innerText = "ANALIZE";
        incH.innerText = "CREȘTEREA CONVERSIILOR";
        wsH.innerText = "CREAREA DE SITE-URI ȘI PROGEAME";
        contactH.innerText = "CONTACTEAZĂ-NE!";
        numeI.setAttribute("placeholder", "* Nume și Prenume");
        sbmI.setAttribute("value", "Trimite");
        msgT.setAttribute("placeholder", "* Mesaj");
        tcH.innerText = "Termeni și Condiții";
        engOn = false;
    }

rouLng.addEventListener("click", () => {
    if (engOn) {
        rouLng.classList.remove("unsopt");
        rouLng.classList.add("selected");
        engLng.classList.add("unsopt");
        engLng.classList.remove("selected");
        homeBtn.innerText="Acasă";
        servicesBtn.innerText="Servicii";
        motto.innerText = "Maximizăm pontențialul online cu soluții de marketing";
       // wtszls.innerText = "CE ESTE ZELUS?";
        wtszlsb.innerText = "CE ESTE ZELUS?";
        wtszlsp.innerText = "Bine ați venit la Zelus Agency, o firmă de marketing digital de top dedicată ajutării afacerilor să-și atingă potențialul complet online. Cu o echipă de profesioniști experimentați și calificați, oferim o gamă largă de servicii pentru a vă ajuta să atingeți obiectivele dvs., inclusiv optimizarea pentru motoarele de căutare (SEO), publicitatea plătită pe clic (PPC), marketingul pe rețelele sociale și multe altele. Indiferent dacă doriți să îmbunătăți vizibilitatea site-ului dvs., să creșteți baza de clienți sau să îmbunătățiți vânzările online, Zelus Agency are expertiza și resursele pentru a vă ajuta să reușiți. Contactați-ne astăzi pentru a afla mai multe despre cum putem ajuta afacerea dvs. să prospere în lumea digitală.";
        rmBtns.forEach(rmBtn => {
            rmBtn.innerText = "Vezi mai mult"
        });
        ppcP.innerText = "Publicitatea plătită pe clic (PPC) este o strategie de publicitate digitală care implică plasarea d..";
        intP.innerText = "Strategiile digitale integrate implică coordonarea și integrarea diferitelor canale de marketing di..";
        anlP.innerText = "Analiza de marketing este procesul de evaluare a pieței pentru a identifica oportunitățile și ameni..";
        incP.innerText = "Creșterea conversiilor se referă la creșterea numărului sau procentajului de vizitatori ai site-ulu..";
        wsP.innerText = "Crearea de site-uri și programe implică proiectarea, codificarea și implementarea de soluții softwa..";
        ppcH.innerText = "PUBLICITATEA PLĂTITĂ PE CLIC";
        intH.innerText = "STRATEGII DIGITALE INTEGRATE";
        anlH.innerText = "ANALIZE";
        incH.innerText = "CREȘTEREA CONVERSIILOR";
        wsH.innerText = "CREAREA DE SITE-URI ȘI PROGEAME";
        contactH.innerText = "CONTACTEAZĂ-NE!";
        numeI.setAttribute("placeholder", "Nume");
        sbmI.setAttribute("value", "Trimite");
        msgT.setAttribute("placeholder", "Mesaj");
        tcH.innerText = "Termeni și Condiții";
        engOn = false;
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
        motto.innerText = "We maximize the online potential with marketing solutions";
     //   wtszls.innerText = "WHAT'S ZELUS?";
        wtszlsb.innerText = "WHAT'S ZELUS?";
        wtszlsp.innerText = "Welcome to Zelus Agency, a top digital marketing agency dedicated to helping businesses reach their online complete potential. With a team of experienced and qualified professionals, we offer a wide range of services to help you to achieve your goals, including optimizing for search engines optimization (SEO), pay-per-click (PPC) advertising, marketing on social media and more. Whether you want to improve the visibility of your website, to increase your customer base or to improve online sales, Zelus Agency has the expertise and resources to help you succeed. Contact us today to find out more about how we can help your business thrive in the digital world.";
        rmBtns.forEach(rmBtn => {
            rmBtn.innerText = "Read more"
        });
        ppcP.innerText = "Pay-per-click (PPC) advertising is a digital advertising strategy that involves placing ads on sear..";
        intP.innerText = "Integrated digital strategies involve coordinating and integrating different digital marketing chan..";
        anlP.innerText = "Marketing analysis is the process of evaluating the market to identify opportunities and threats and..";
        incP.innerText = "Increasing conversions refers to increasing the number or percentage of website visitors, who take..";
        wsP.innerText = "Creating websites and programs involves designing, coding and the implementation of software solutio..";
        ppcH.innerText = "PAY PER CLICK";
        intH.innerText = "DIGITAL STRATEGIES INTEGRATION";
        anlH.innerText = "ANALYTICS";
        incH.innerText = "INCREASE CONVERSIONS";
        wsH.innerText = "APPS & WEBSITES DEVELOPMENT";
        contactH.innerText = "CONTACT US!";
        numeI.setAttribute("placeholder", "Name");
        sbmI.setAttribute("value", "Submit");
        msgT.setAttribute("placeholder", "Message");
        tcH.innerText = "Terms & Conditions";
        engOn = true;
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
  motto.innerText = "We maximize the online potential with marketing solutions";
  //wtszls.innerText = "WHAT'S ZELUS?";
  wtszlsb.innerText = "WHAT'S ZELUS?";
  wtszlsp.innerText = "Welcome to Zelus Agency, a top digital marketing agency dedicated to helping businesses reach their online complete potential. With a team of experienced and qualified professionals, we offer a wide range of services to help you to achieve your goals, including optimizing for search engines optimization (SEO), pay-per-click (PPC) advertising, marketing on social media and more. Whether you want to improve the visibility of your website, to increase your customer base or to improve online sales, Zelus Agency has the expertise and resources to help you succeed. Contact us today to find out more about how we can help your business thrive in the digital world.";
  rmBtns.forEach(rmBtn => {
      rmBtn.innerText = "Read more"
  });
  ppcP.innerText = "Pay-per-click (PPC) advertising is a digital advertising strategy that involves placing ads on sear..";
  intP.innerText = "Integrated digital strategies involve coordinating and integrating different digital marketing chan..";
  anlP.innerText = "Marketing analysis is the process of evaluating the market to identify opportunities and threats and..";
  incP.innerText = "Increasing conversions refers to increasing the number or percentage of website visitors, who take..";
  wsP.innerText = "Creating websites and programs involves designing, coding and the implementation of software solutio..";
  ppcH.innerText = "PAY PER CLICK";
  intH.innerText = "DIGITAL STRATEGIES INTEGRATION";
  anlH.innerText = "ANALYTICS";
  incH.innerText = "INCREASE CONVERSIONS";
  wsH.innerText = "APPS & WEBSITES DEVELOPMENT";
  contactH.innerText = "CONTACT US!";
  numeI.setAttribute("placeholder", "Name");
  sbmI.setAttribute("value", "Submit");
  msgT.setAttribute("placeholder", "Message");
  tcH.innerText = "Terms & Conditions";
  engOn = true;
}else if(document.cookie == "site_lang=roma")
{
  rouLng.classList.remove("unsopt");
  rouLng.classList.add("selected");
  engLng.classList.add("unsopt");
  engLng.classList.remove("selected");
  homeBtn.innerText="Acasă";
  servicesBtn.innerText="Servicii";
  motto.innerText = "Maximizăm pontențialul online cu soluții de marketing";
//  wtszls.innerText = "CE ESTE ZELUS?";
  wtszlsb.innerText = "CE ESTE ZELUS?";
  wtszlsp.innerText = "Bine ați venit la Zelus Agency, o firmă de marketing digital de top dedicată ajutării afacerilor să-și atingă potențialul complet online. Cu o echipă de profesioniști experimentați și calificați, oferim o gamă largă de servicii pentru a vă ajuta să atingeți obiectivele dvs., inclusiv optimizarea pentru motoarele de căutare (SEO), publicitatea plătită pe clic (PPC), marketingul pe rețelele sociale și multe altele. Indiferent dacă doriți să îmbunătăți vizibilitatea site-ului dvs., să creșteți baza de clienți sau să îmbunătățiți vânzările online, Zelus Agency are expertiza și resursele pentru a vă ajuta să reușiți. Contactați-ne astăzi pentru a afla mai multe despre cum putem ajuta afacerea dvs. să prospere în lumea digitală.";
  rmBtns.forEach(rmBtn => {
      rmBtn.innerText = "Vezi mai mult"
  });
  ppcP.innerText = "Publicitatea plătită pe clic (PPC) este o strategie de publicitate digitală care implică plasarea d..";
  intP.innerText = "Strategiile digitale integrate implică coordonarea și integrarea diferitelor canale de marketing di..";
  anlP.innerText = "Analiza de marketing este procesul de evaluare a pieței pentru a identifica oportunitățile și ameni..";
  incP.innerText = "Creșterea conversiilor se referă la creșterea numărului sau procentajului de vizitatori ai site-ulu..";
  wsP.innerText = "Crearea de site-uri și programe implică proiectarea, codificarea și implementarea de soluții softwa..";
  ppcH.innerText = "PUBLICITATEA PLĂTITĂ PE CLIC";
  intH.innerText = "STRATEGII DIGITALE INTEGRATE";
  anlH.innerText = "ANALIZE";
  incH.innerText = "CREȘTEREA CONVERSIILOR";
  wsH.innerText = "CREAREA DE SITE-URI ȘI PROGEAME";
  contactH.innerText = "CONTACTEAZĂ-NE!";
  numeI.setAttribute("placeholder", "Nume");
  sbmI.setAttribute("value", "Trimite");
  msgT.setAttribute("placeholder", "Mesaj");
  tcH.innerText = "Termeni și Condiții";
  engOn = false;
}
