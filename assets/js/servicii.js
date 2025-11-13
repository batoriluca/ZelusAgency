const intro = document.querySelector(".intro");
const lsides = document.querySelectorAll(".s-left")
const rsides = document.querySelectorAll(".s-right")
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
            lsides.forEach(lSide => {
                lSide.setAttribute("style", "transform:translateX(0px);")
            });
            rsides.forEach(rSide => {
                rSide.setAttribute("style", "transform:translateX(0px);")
            });
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
const contactBtns = document.querySelectorAll("#contactbtn");
const boldServices = document.querySelectorAll("#blds");
const ppcH4 = document.getElementById("ppch4");
const intH4 = document.getElementById("inth4");
const anlH4 = document.getElementById("anlh4");
const incH4 = document.getElementById("inch4");
const wsH4 = document.getElementById("wsh4");
const ppcH1 = document.getElementById("ppch1");
const intH1 = document.getElementById("inth1");
const anlH1 = document.getElementById("anlh1");
const incH1 = document.getElementById("inch1");
const wsH1 = document.getElementById("wsh1");
const ppcP = document.getElementById("ppcp");
const intP = document.getElementById("intp");
const anlP = document.getElementById("anlp");
const incP = document.getElementById("incp");
const wsP = document.getElementById("wsp");
const tcH = document.getElementById("tch");
var engOn = true;
if (engOn) {
        rouLng.classList.remove("unsopt");
        rouLng.classList.add("selected");
        engLng.classList.add("unsopt");
        engLng.classList.remove("selected");
        homeBtn.innerText="Acasă";
        servicesBtn.innerText="Servicii";
        contactBtns.forEach(contactBtn => {
            contactBtn.innerText = "Contactează-ne";
        })
		boldServices.forEach(boldServ =>{
			boldServ.innerText = "SERVICII / "
		})
        ppcH4.innerText = "publicitatea-platita-pe-clic";
        intH4.innerText = "strategii-digitale-integrate";
        anlH4.innerText = "analize";
        incH4.innerText = "cresterea-conversiilor";
        wsH4.innerText = "crearea-de-siteuri-si-programe";
        ppcH1.innerText = "Publicitatea plătită pe clic (PPC) este o strategie";
        intH1.innerText = "Strategiile digitale integrate implică coordonarea";
        anlH1.innerText = "Analiza de marketing este procesul de evaluare a pieței";
        incH1.innerText = "Creșterea conversiilor se referă la creșterea numărului";
        wsH1.innerText = "Crearea de site-uri și programe implică proiectarea, codificarea";
        ppcP.innerText = "de publicitate digitală care implică plasarea de anunțuri pe pagini de rezultate ale motorului de căutare (SERP) sau pe alte site-uri web și plata unei taxe fiecare dată când cineva face clic pe anunț. Această formă de publicitate permite afacerilor să targeteze cuvinte cheie și demografice specifice și să plătească doar pentru anunț atunci când este de fapt accesat de un potențial client. Campaniile PPC sunt în general gestionate de agenții sau platforme de marketing specializate și pot fi o modalitate eficientă de a conduce rapid traficul vizat către un site web sau o magazin online.";
        intP.innerText = "și integrarea diferitelor canale de marketing digital, cum ar fi optimizarea pentru motoarele de căutare (SEO), publicitatea plătită pe clic (PPC), marketingul pe rețelele sociale, marketingul prin email și marketingul de conținut, pentru a atinge un set comun de obiective. Această abordare permite afacerilor să creeze o experiență de brand consistentă pe multiple platforme și canale și să maximizeze eficiența eforturilor de marketing digital. Strategiile digitale integrate pot ajuta afacerile să conducă traficul, să crească conversiile și să îmbunătățească implicarea clienților.";
        anlP.innerText = "pentru a identifica oportunitățile și amenințările și pentru a determina cele mai bune strategii pentru atingerea obiectivelor de marketing. Aceasta poate implica analizarea datelor clienților, studierea tendințelor pieței și utilizarea diferitelor instrumente și tehnici pentru a înțelege publicul țintă și nevoile lor.";
        incP.innerText = "sau procentajului de vizitatori ai site-ului web care iau o acțiune dorită, cum ar fi efectuarea unei achiziții, completarea unui formular sau abonarea la o newsletter. Acest metric este adesea utilizat pentru a măsura eficacitatea unei campanii de marketing digital și poate fi influențat de factori precum design-ul site-ului, experiența utilizatorului și targetarea anunțurilor. Prin concentrarea asupra creșterii conversiilor, afacerile pot îmbunătăți rentabilitatea investiției (ROI) a eforturilor lor de marketing și pot obține mai multă valoare din prezența lor online.";
        wsP.innerText = "și implementarea de soluții software pentru web. Acest lucru poate include crearea de interfețe pentru utilizator, dezvoltarea de caracteristici și funcții și asigurarea că produsul final este fiabil, scalabil și prietenos cu utilizatorul. De asemenea, poate implica lucrul cu o echipă de designeri, dezvoltatori și manageri de proiect pentru a se asigura că proiectul este finalizat în timp și în buget.";
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
        contactBtns.forEach(contactBtn => {
            contactBtn.innerText = "Contactează-ne";
        })

        boldServices.forEach(boldServ =>{
			boldServ.innerText = "SERVICII / "
		})
        ppcH4.innerText = "publicitatea-platita-pe-clic";
        intH4.innerText = "strategii-digitale-integrate";
        anlH4.innerText = "analize";
        incH4.innerText = "cresterea-conversiilor";
        wsH4.innerText = "crearea-de-siteuri-si-programe";
        ppcH1.innerText = "Publicitatea plătită pe clic (PPC) este o strategie";
        intH1.innerText = "Strategiile digitale integrate implică coordonarea";
        anlH1.innerText = "Analiza de marketing este procesul de evaluare a pieței";
        incH1.innerText = "Creșterea conversiilor se referă la creșterea numărului";
        wsH1.innerText = "Crearea de site-uri și programe implică proiectarea, codificarea";
        ppcP.innerText = "de publicitate digitală care implică plasarea de anunțuri pe pagini de rezultate ale motorului de căutare (SERP) sau pe alte site-uri web și plata unei taxe fiecare dată când cineva face clic pe anunț. Această formă de publicitate permite afacerilor să targeteze cuvinte cheie și demografice specifice și să plătească doar pentru anunț atunci când este de fapt accesat de un potențial client. Campaniile PPC sunt în general gestionate de agenții sau platforme de marketing specializate și pot fi o modalitate eficientă de a conduce rapid traficul vizat către un site web sau o magazin online.";
        intP.innerText = "și integrarea diferitelor canale de marketing digital, cum ar fi optimizarea pentru motoarele de căutare (SEO), publicitatea plătită pe clic (PPC), marketingul pe rețelele sociale, marketingul prin email și marketingul de conținut, pentru a atinge un set comun de obiective. Această abordare permite afacerilor să creeze o experiență de brand consistentă pe multiple platforme și canale și să maximizeze eficiența eforturilor de marketing digital. Strategiile digitale integrate pot ajuta afacerile să conducă traficul, să crească conversiile și să îmbunătățească implicarea clienților.";
        anlP.innerText = "pentru a identifica oportunitățile și amenințările și pentru a determina cele mai bune strategii pentru atingerea obiectivelor de marketing. Aceasta poate implica analizarea datelor clienților, studierea tendințelor pieței și utilizarea diferitelor instrumente și tehnici pentru a înțelege publicul țintă și nevoile lor.";
        incP.innerText = "sau procentajului de vizitatori ai site-ului web care iau o acțiune dorită, cum ar fi efectuarea unei achiziții, completarea unui formular sau abonarea la o newsletter. Acest metric este adesea utilizat pentru a măsura eficacitatea unei campanii de marketing digital și poate fi influențat de factori precum design-ul site-ului, experiența utilizatorului și targetarea anunțurilor. Prin concentrarea asupra creșterii conversiilor, afacerile pot îmbunătăți rentabilitatea investiției (ROI) a eforturilor lor de marketing și pot obține mai multă valoare din prezența lor online.";
        wsP.innerText = "și implementarea de soluții software pentru web. Acest lucru poate include crearea de interfețe pentru utilizator, dezvoltarea de caracteristici și funcții și asigurarea că produsul final este fiabil, scalabil și prietenos cu utilizatorul. De asemenea, poate implica lucrul cu o echipă de designeri, dezvoltatori și manageri de proiect pentru a se asigura că proiectul este finalizat în timp și în buget.";
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
        contactBtns.forEach(contactBtn => {
            contactBtn.innerText = "Contact Us";
        })
		boldServices.forEach(boldServ =>{
			boldServ.innerText = "SERVICES / "
		})
        ppcH4.innerText = "pay-per-click";
        intH4.innerText = "digital-strategies-integration";
        anlH4.innerText = "analytics";
        incH4.innerText = "increase-conversions";
        wsH4.innerText = "apps-&-websites-development";
       
        ppcH1.innerText = "Pay-per-click (PPC) advertising is a digital advertising strategy";
        intH1.innerText = "Integrated digital strategies involve coordinating";
        anlH1.innerText = "Marketing analysis is the process of evaluating the market";
        incH1.innerText = "Increasing conversions refers to increasing the number";
        wsH1.innerText = "Creating websites and programs involves designing, coding";
        ppcP.innerText = "that involves placing ads on search engine results pages (SERPs) or other websites for a fee, each time someone clicks on the ad. This form of advertising allows businesses to target specific keywords and demographics and only pay for the ad when it is actually accessed by a potential customer. PPC campaigns are generally managed by specialist marketing agencies or platforms and can be an effective way to quickly drive targeted traffic to a website or online store.";
        intP.innerText = "and integrating different digital marketing channels, such as search engine optimization (SEO), pay-per-click (PPC), social media marketing, email marketing, and content marketing, to achieve a common set of goals. This approach enables businesses to create a consistent brand experience across multiple platforms and channels and maximize the effectiveness of digital marketing efforts. Integrated digital strategies can help businesses drive traffic, increase conversions and improve customer engagement.";
        anlP.innerText = "to identify opportunities and threats and to determine the most good strategies for achieving marketing objectives. This may involve analyzing customer data, studying market trends and using different tools and techniques to understand the audience target and their needs.";
        incP.innerText = "or percentage of website visitors, who take a desired action, such as an acquisition, filling out a form or subscribing to a newsletter. This metric is often used to measure the effectiveness of a digital marketing campaign and can be influenced by factors, such as website design, user experience and ad targeting. By focusing on increasing conversions, businesses can improve the return on investment (ROI) of their marketing efforts and get more value from their online presence.";
        wsP.innerText = "and the implementation of software solutions for the web. This may include creating user interfaces, developing features and functions, ensuring that the final product is reliable, scalable and user friendly. It can also involve working with a team of designers, developers and project managers to ensure that the project is completed on time and on budget.";
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
  contactBtns.forEach(contactBtn => {
      contactBtn.innerText = "Contact Us";
  })
boldServices.forEach(boldServ =>{
			boldServ.innerText = "SERVICES / "
		})
        ppcH4.innerText = "pay-per-click";
        intH4.innerText = "digital-strategies-integration";
        anlH4.innerText = "analytics";
        incH4.innerText = "increase-conversions";
        wsH4.innerText = "apps-&-websites-development";
  ppcH1.innerText = "Pay-per-click (PPC) advertising is a digital advertising strategy";
  intH1.innerText = "Integrated digital strategies involve coordinating";
  anlH1.innerText = "Marketing analysis is the process of evaluating the market";
  incH1.innerText = "Increasing conversions refers to increasing the number";
  wsH1.innerText = "Creating websites and programs involves designing, coding";
  ppcP.innerText = "that involves placing ads on search engine results pages (SERPs) or other websites for a fee, each time someone clicks on the ad. This form of advertising allows businesses to target specific keywords and demographics and only pay for the ad when it is actually accessed by a potential customer. PPC campaigns are generally managed by specialist marketing agencies or platforms and can be an effective way to quickly drive targeted traffic to a website or online store.";
  intP.innerText = "and integrating different digital marketing channels, such as search engine optimization (SEO), pay-per-click (PPC), social media marketing, email marketing, and content marketing, to achieve a common set of goals. This approach enables businesses to create a consistent brand experience across multiple platforms and channels and maximize the effectiveness of digital marketing efforts. Integrated digital strategies can help businesses drive traffic, increase conversions and improve customer engagement.";
  anlP.innerText = "to identify opportunities and threats and to determine the most good strategies for achieving marketing objectives. This may involve analyzing customer data, studying market trends and using different tools and techniques to understand the audience target and their needs.";
  incP.innerText = "or percentage of website visitors, who take a desired action, such as an acquisition, filling out a form or subscribing to a newsletter. This metric is often used to measure the effectiveness of a digital marketing campaign and can be influenced by factors, such as website design, user experience and ad targeting. By focusing on increasing conversions, businesses can improve the return on investment (ROI) of their marketing efforts and get more value from their online presence.";
  wsP.innerText = "and the implementation of software solutions for the web. This may include creating user interfaces, developing features and functions, ensuring that the final product is reliable, scalable and user friendly. It can also involve working with a team of designers, developers and project managers to ensure that the project is completed on time and on budget.";
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
  contactBtns.forEach(contactBtn => {
      contactBtn.innerText = "Contactează-ne";
  })

 boldServices.forEach(boldServ =>{
			boldServ.innerText = "SERVICII / "
		})
        ppcH4.innerText = "publicitatea-platita-pe-clic";
        intH4.innerText = "strategii-digitale-integrate";
        anlH4.innerText = "analize";
        incH4.innerText = "cresterea-conversiilor";
        wsH4.innerText = "crearea-de-siteuri-si-programe";
  ppcH1.innerText = "Publicitatea plătită pe clic (PPC) este o strategie";
  intH1.innerText = "Strategiile digitale integrate implică coordonarea";
  anlH1.innerText = "Analiza de marketing este procesul de evaluare a pieței";
  incH1.innerText = "Creșterea conversiilor se referă la creșterea numărului";
  wsH1.innerText = "Crearea de site-uri și programe implică proiectarea, codificarea";
  ppcP.innerText = "de publicitate digitală care implică plasarea de anunțuri pe pagini de rezultate ale motorului de căutare (SERP) sau pe alte site-uri web și plata unei taxe fiecare dată când cineva face clic pe anunț. Această formă de publicitate permite afacerilor să targeteze cuvinte cheie și demografice specifice și să plătească doar pentru anunț atunci când este de fapt accesat de un potențial client. Campaniile PPC sunt în general gestionate de agenții sau platforme de marketing specializate și pot fi o modalitate eficientă de a conduce rapid traficul vizat către un site web sau o magazin online.";
  intP.innerText = "și integrarea diferitelor canale de marketing digital, cum ar fi optimizarea pentru motoarele de căutare (SEO), publicitatea plătită pe clic (PPC), marketingul pe rețelele sociale, marketingul prin email și marketingul de conținut, pentru a atinge un set comun de obiective. Această abordare permite afacerilor să creeze o experiență de brand consistentă pe multiple platforme și canale și să maximizeze eficiența eforturilor de marketing digital. Strategiile digitale integrate pot ajuta afacerile să conducă traficul, să crească conversiile și să îmbunătățească implicarea clienților.";
  anlP.innerText = "pentru a identifica oportunitățile și amenințările și pentru a determina cele mai bune strategii pentru atingerea obiectivelor de marketing. Aceasta poate implica analizarea datelor clienților, studierea tendințelor pieței și utilizarea diferitelor instrumente și tehnici pentru a înțelege publicul țintă și nevoile lor.";
  incP.innerText = "sau procentajului de vizitatori ai site-ului web care iau o acțiune dorită, cum ar fi efectuarea unei achiziții, completarea unui formular sau abonarea la o newsletter. Acest metric este adesea utilizat pentru a măsura eficacitatea unei campanii de marketing digital și poate fi influențat de factori precum design-ul site-ului, experiența utilizatorului și targetarea anunțurilor. Prin concentrarea asupra creșterii conversiilor, afacerile pot îmbunătăți rentabilitatea investiției (ROI) a eforturilor lor de marketing și pot obține mai multă valoare din prezența lor online.";
  wsP.innerText = "și implementarea de soluții software pentru web. Acest lucru poate include crearea de interfețe pentru utilizator, dezvoltarea de caracteristici și funcții și asigurarea că produsul final este fiabil, scalabil și prietenos cu utilizatorul. De asemenea, poate implica lucrul cu o echipă de designeri, dezvoltatori și manageri de proiect pentru a se asigura că proiectul este finalizat în timp și în buget.";
  tcH.innerText = "Termeni și Condiții";
  engOn = false;
}
