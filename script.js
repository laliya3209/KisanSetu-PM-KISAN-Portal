const languages = {
  en: {
    official: "Official PM-KISAN ↗",
    badge: "Independent service navigation",
    title: "What do you want to do?",
    subtitle: "Choose a service below. For government services, you will continue to the official PM-KISAN website.",
    view: "View all PM-KISAN services",
    openSite: "Open official website ↗",
    corner: "Farmers Corner",
    all: "All PM-KISAN services",
    search: "Search a service...",
    source: "Service names are based on the PM-KISAN Farmers Corner. Always check that the destination domain is pmkisan.gov.in before entering personal information.",
    help: "Simple help",
    helpTitle: "Not sure what to choose?",
    helpSub: "Start with the problem you are trying to solve.",
    examples: [
      ["Money/payment not received", "→ Know Your Status"],
      ["Want to apply for PM-KISAN", "→ New Farmer Registration"],
      ["Mobile number needs changing", "→ Update Mobile Number"],
      ["Need to contact an officer", "→ Search your Point of Contact"]
    ],
    safe: "Stay safe online",
    safeText: "KisanSetu does not collect Aadhaar numbers, OTPs, bank details or passwords. Enter sensitive information only after reaching the official PM-KISAN government website.",
    footer: "Independent PM-KISAN service navigation portal — not affiliated with or endorsed by the Government of India.",
    service: [
      ["New Farmer Registration","Register for PM-KISAN as a new farmer."],
      ["Edit / Update Self Registration","Update details submitted during self-registration."],
      ["Status of Self Registered Farmer / CSC Farmers","Check the status of a self-registered or CSC-registered farmer."],
      ["Update Missing Information","Update missing information in an existing PM-KISAN record."],
      ["Know Your Status","Check beneficiary, payment and eligibility status."],
      ["Update Mobile Number","Update your registered mobile number."],
      ["Online Refund","Use the official portal for PM-KISAN online refund."],
      ["Voluntary Surrender of PM Kisan Benefits","Voluntarily surrender PM-KISAN benefits."],
      ["Beneficiary List","Find beneficiaries by state, district, block and village."],
      ["Search your Point of Contact (POC)","Find the relevant state or district point of contact."],
      ["Voluntary Surrender Revocation","Request revocation after voluntary surrender."],
      ["Surrender Revocation Status","Check the status of surrender revocation."],
      ["State Transfer Request","Submit a state transfer request through the official portal."],
      ["Helpdesk - Query Form","Submit a PM-KISAN query or grievance."],
      ["Download PM Kisan Mobile App","Find the official PM-KISAN mobile app information."],
      ["FAQ","Read frequently asked PM-KISAN questions."],
      ["Download KCC Form","Download the Kisan Credit Card form."]
    ]
  },
  hi: {
    official: "आधिकारिक PM-KISAN ↗",
    badge: "स्वतंत्र सेवा पोर्टल",
    title: "आपको क्या करना है?",
    subtitle: "नीचे सेवा चुनें। सरकारी सेवा के लिए आपको आधिकारिक PM-KISAN वेबसाइट पर ले जाया जाएगा।",
    view: "सभी PM-KISAN सेवाएं देखें",
    openSite: "आधिकारिक वेबसाइट खोलें ↗",
    corner: "किसान कॉर्नर",
    all: "सभी PM-KISAN सेवाएं",
    search: "सेवा खोजें...",
    source: "सेवा के नाम PM-KISAN Farmers Corner पर आधारित हैं। व्यक्तिगत जानकारी दर्ज करने से पहले सुनिश्चित करें कि वेबसाइट pmkisan.gov.in है।",
    help: "सरल सहायता",
    helpTitle: "कौन सा विकल्प चुनें?",
    helpSub: "अपनी समस्या के अनुसार सेवा चुनें।",
    examples: [
      ["पैसा / भुगतान नहीं मिला", "→ अपना स्टेटस देखें"],
      ["PM-KISAN के लिए आवेदन करना है", "→ नए किसान का पंजीकरण"],
      ["मोबाइल नंबर बदलना है", "→ मोबाइल नंबर अपडेट करें"],
      ["अधिकारी से संपर्क करना है", "→ संपर्क अधिकारी खोजें"]
    ],
    safe: "ऑनलाइन सुरक्षित रहें",
    safeText: "KisanSetu आपका आधार नंबर, OTP, बैंक विवरण या पासवर्ड नहीं लेता। संवेदनशील जानकारी केवल आधिकारिक PM-KISAN वेबसाइट पर ही दर्ज करें।",
    footer: "स्वतंत्र PM-KISAN सेवा पोर्टल — भारत सरकार से संबद्ध या समर्थित नहीं है।",
    service: [
      ["नए किसान का पंजीकरण","PM-KISAN के लिए नए किसान के रूप में पंजीकरण करें।"],
      ["स्व-पंजीकरण संपादित / अपडेट करें","स्व-पंजीकरण में दी गई जानकारी अपडेट करें।"],
      ["स्व-पंजीकृत / CSC किसान का स्टेटस","स्व-पंजीकृत या CSC किसान का स्टेटस देखें।"],
      ["छूटी हुई जानकारी अपडेट करें","PM-KISAN रिकॉर्ड में छूटी जानकारी अपडेट करें।"],
      ["अपना स्टेटस देखें","लाभार्थी, भुगतान और पात्रता का स्टेटस देखें।"],
      ["मोबाइल नंबर अपडेट करें","अपना पंजीकृत मोबाइल नंबर अपडेट करें।"],
      ["ऑनलाइन रिफंड","PM-KISAN का ऑनलाइन रिफंड करें।"],
      ["PM-KISAN लाभ स्वेच्छा से छोड़ें","PM-KISAN लाभ स्वेच्छा से छोड़ने की सेवा।"],
      ["लाभार्थी सूची","राज्य, जिला, ब्लॉक और गांव की लाभार्थी सूची देखें।"],
      ["अपना संपर्क अधिकारी खोजें","संबंधित राज्य या जिला संपर्क अधिकारी खोजें।"],
      ["लाभ छोड़ने की वापसी","लाभ छोड़ने के बाद रद्दीकरण / वापसी अनुरोध करें।"],
      ["वापसी अनुरोध का स्टेटस","वापसी अनुरोध का स्टेटस देखें।"],
      ["राज्य ट्रांसफर अनुरोध","आधिकारिक पोर्टल पर राज्य ट्रांसफर अनुरोध करें।"],
      ["हेल्पडेस्क - प्रश्न फॉर्म","PM-KISAN प्रश्न या शिकायत भेजें।"],
      ["PM-KISAN मोबाइल ऐप डाउनलोड करें","आधिकारिक PM-KISAN मोबाइल ऐप की जानकारी देखें।"],
      ["अक्सर पूछे जाने वाले प्रश्न","PM-KISAN के सामान्य प्रश्न पढ़ें।"],
      ["KCC फॉर्म डाउनलोड करें","किसान क्रेडिट कार्ड फॉर्म डाउनलोड करें।"]
    ]
  },
  mr: {
    official: "अधिकृत PM-KISAN ↗",
    badge: "स्वतंत्र सेवा पोर्टल",
    title: "तुम्हाला काय करायचे आहे?",
    subtitle: "खाली सेवा निवडा. सरकारी सेवेसाठी तुम्हाला अधिकृत PM-KISAN वेबसाइटवर नेले जाईल.",
    view: "सर्व PM-KISAN सेवा पहा",
    openSite: "अधिकृत वेबसाइट उघडा ↗",
    corner: "शेतकरी कॉर्नर",
    all: "सर्व PM-KISAN सेवा",
    search: "सेवा शोधा...",
    source: "सेवांची नावे PM-KISAN Farmers Corner वर आधारित आहेत. वैयक्तिक माहिती भरण्यापूर्वी वेबसाइट pmkisan.gov.in आहे याची खात्री करा.",
    help: "सोपे मार्गदर्शन",
    helpTitle: "कोणता पर्याय निवडायचा?",
    helpSub: "तुमच्या समस्येनुसार सेवा निवडा.",
    examples: [
      ["पैसे / पेमेंट मिळाले नाही", "→ माझा स्टेटस पहा"],
      ["PM-KISAN साठी अर्ज करायचा आहे", "→ नवीन शेतकरी नोंदणी"],
      ["मोबाइल नंबर बदलायचा आहे", "→ मोबाइल नंबर अपडेट करा"],
      ["अधिकाऱ्याशी संपर्क करायचा आहे", "→ संपर्क अधिकारी शोधा"]
    ],
    safe: "ऑनलाइन सुरक्षित रहा",
    safeText: "KisanSetu तुमचा आधार नंबर, OTP, बँक तपशील किंवा पासवर्ड घेत नाही. संवेदनशील माहिती फक्त अधिकृत PM-KISAN वेबसाइटवरच भरा.",
    footer: "स्वतंत्र PM-KISAN सेवा पोर्टल — भारत सरकारशी संलग्न किंवा समर्थित नाही.",
    service: [
      ["नवीन शेतकरी नोंदणी","PM-KISAN साठी नवीन शेतकरी म्हणून नोंदणी करा."],
      ["स्व-नोंदणी संपादित / अपडेट करा","स्व-नोंदणीमध्ये दिलेली माहिती अपडेट करा."],
      ["स्व-नोंदणीकृत / CSC शेतकरी स्टेटस","स्व-नोंदणीकृत किंवा CSC शेतकऱ्याचा स्टेटस पहा."],
      ["गहाळ माहिती अपडेट करा","PM-KISAN रेकॉर्डमधील गहाळ माहिती अपडेट करा."],
      ["माझा स्टेटस पहा","लाभार्थी, पेमेंट आणि पात्रतेचा स्टेटस पहा."],
      ["मोबाइल नंबर अपडेट करा","तुमचा नोंदणीकृत मोबाइल नंबर अपडेट करा."],
      ["ऑनलाइन रिफंड","PM-KISAN ऑनलाइन रिफंड सेवा वापरा."],
      ["PM-KISAN लाभ स्वेच्छेने सोडा","PM-KISAN लाभ स्वेच्छेने सोडण्याची सेवा."],
      ["लाभार्थी यादी","राज्य, जिल्हा, ब्लॉक आणि गावाची लाभार्थी यादी पहा."],
      ["तुमचा संपर्क अधिकारी शोधा","संबंधित राज्य किंवा जिल्हा संपर्क अधिकारी शोधा."],
      ["लाभ सोडण्याची परतफेड","लाभ सोडल्यानंतर परतफेड / रद्द करण्याची विनंती करा."],
      ["परतफेड विनंतीचा स्टेटस","परतफेड विनंतीचा स्टेटस पहा."],
      ["राज्य ट्रान्सफर विनंती","अधिकृत पोर्टलवर राज्य ट्रान्सफर विनंती करा."],
      ["हेल्पडेस्क - प्रश्न फॉर्म","PM-KISAN प्रश्न किंवा तक्रार पाठवा."],
      ["PM-KISAN मोबाइल अॅप डाउनलोड करा","अधिकृत PM-KISAN मोबाइल अॅपची माहिती पहा."],
      ["वारंवार विचारले जाणारे प्रश्न","PM-KISAN चे सामान्य प्रश्न वाचा."],
      ["KCC फॉर्म डाउनलोड करा","किसान क्रेडिट कार्ड फॉर्म डाउनलोड करा."]
    ]
  }
};

const urls = [
"https://www.pmkisan.gov.in/RegistrationFormupdated.aspx",
"https://pmkisan.gov.in/","https://pmkisan.gov.in/%28S%281rqlju3sbgc504ibtkd4qev0%29%29/FarmerStatus.aspx",
"https://pmkisan.gov.in/SearchBeneficiaryinformationUpdate.aspx","https://www.pmkisan.gov.in/beneficiarystatus_new.aspx",
"https://pmkisan.gov.in/mobileUpdation_Pub.aspx","https://pmkisan.gov.in/","https://pmkisan.gov.in/pmkisanbenefitsurrender.aspx",
"https://pmkisan.gov.in/rpt_beneficiarystatus_pub.aspx","https://pmkisan.gov.in/","https://pmkisan.gov.in/",
"https://pmkisan.gov.in/revocation_status.aspx","https://pmkisan.gov.in/","https://pmkisan.gov.in/",
"https://pmkisan.gov.in/","https://pmkisan.gov.in/","https://pmkisan.gov.in/"
];
const icons=["👨‍🌾","✎","▣","✚","👥","▯","₹","⇩","▣","▣","▣","▣","▣","◯","▶","?","⇩"];
const accents=["#f2a900","#dfe99a","#91e9ee","#8ce98a","#eab6f2","#ffa477","#ffe4aa","#10b8ea","#18c49a","#8cc9f0","#20d86d","#d89500","#a9edf0","#eee5ee","#eebbf1","#ffcc3a","#45cfe9"];

let current="en";

function renderServices(){
  const t=languages[current], q=document.getElementById("search").value.toLowerCase().trim();
  const list=t.service.map((s,i)=>({s,i})).filter(x=>(x.s[0]+" "+x.s[1]).toLowerCase().includes(q));
  document.getElementById("grid").innerHTML=list.map(({s,i})=>`
    <article class="service" style="--accent:${accents[i]}">
      ${[3,5,10,11].includes(i)?'<span class="badge">NEW</span>':''}
      <div class="service-icon">${icons[i]}</div>
      <h3>${s[0]}</h3><p>${s[1]}</p>
      <a href="${urls[i]}" target="_blank" rel="noopener noreferrer">${t.openSite}</a>
    </article>`).join("");
  document.getElementById("empty").hidden=list.length>0;
}

function setLanguage(lang){
  current=lang;
  const t=languages[lang];
  document.querySelector(".official").textContent=t.official;
  document.querySelector(".hero .pill").innerHTML=`<span></span> ${t.badge}`;
  document.querySelector(".hero h1").textContent=t.title;
  document.querySelector(".hero > p").textContent=t.subtitle;
  document.querySelector(".primary").innerHTML=`${t.view} <span>↓</span>`;
  document.querySelector(".secondary").textContent=t.openSite;
  document.querySelector(".section-head .pill").textContent=t.corner;
  document.querySelector(".section-head h2").textContent=t.all;
  document.getElementById("search").placeholder=t.search;
  document.querySelector(".source-note").innerHTML=t.source;
  document.querySelector(".help .pill").textContent=t.help;
  document.querySelector(".help h2").textContent=t.helpTitle;
  document.querySelector(".help p").textContent=t.helpSub;
  document.querySelector(".examples").innerHTML=t.examples.map(e=>`<div><strong>${e[0]}</strong><span>${e[1]}</span></div>`).join("");
  document.querySelector(".security strong").textContent=t.safe;
  document.querySelector(".security p").textContent=t.safeText;
  document.querySelector("footer span").textContent=t.footer;
  document.querySelectorAll(".lang").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
  renderServices();
  localStorage.setItem("kisanSetuLanguage",lang);
}

document.querySelectorAll(".lang").forEach((btn,i)=>{
  btn.dataset.lang=["en","hi"][i];
  btn.addEventListener("click",()=>setLanguage(btn.dataset.lang));
});
document.getElementById("search").addEventListener("input",renderServices);

const saved=localStorage.getItem("kisanSetuLanguage");
setLanguage(saved && languages[saved] ? saved : "en");
