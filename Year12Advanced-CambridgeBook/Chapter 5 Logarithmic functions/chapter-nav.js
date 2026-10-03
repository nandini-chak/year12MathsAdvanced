
(function () {
  const depth = Number(document.body.getAttribute("data-nav-depth") || "0");
  const secPrefix = depth === 2 ? "" : (depth === 1 ? "5A-logarithmic-functions/" : "Chapter%205%20Logarithmic%20functions/5A-logarithmic-functions/");
  const chHome = depth === 2 ? "../index.html" : (depth === 1 ? "index.html" : "Chapter%205%20Logarithmic%20functions/index.html");
  const packHome = depth === 2 ? "../../index.html" : (depth === 1 ? "../index.html" : "index.html");
  const siteHome = depth === 2 ? "../../../index.html" : (depth === 1 ? "../../index.html" : "../index.html");

  const themeHome = depth === 2 ? "../../Further%20graph%20transformations%20and%20modelling/index.html"
    : (depth === 1 ? "../Further%20graph%20transformations%20and%20modelling/index.html"
    : "Further%20graph%20transformations%20and%20modelling/index.html");

  const sec6A = depth === 2 ? "../../Chapter%206%20The%20trigonometric%20functions/6A-trigonometric-graphs-and-modelling/index.html"
    : (depth === 1 ? "../Chapter%206%20The%20trigonometric%20functions/6A-trigonometric-graphs-and-modelling/index.html"
    : "Chapter%206%20The%20trigonometric%20functions/6A-trigonometric-graphs-and-modelling/index.html");

  const SECTIONS = [
    { id: "pack", code: "Cam", title: "Cambridge home", href: packHome },
    { id: "theme1", code: "T1", title: "Further graph transforms", href: themeHome },
    { id: "ch5", code: "Ch.5", title: "Chapter home", href: chHome },
    { id: "5A", code: "5A", title: "Review log base e", ready: true, pages: [
      { id: "hub", title: "5A hub", href: secPrefix + "index.html" },
      { id: "concept", title: "Concept", href: secPrefix + "concept.html" },
      { id: "tutorial", title: "Tutorial · theory", href: secPrefix + "tutorial.html" },
      { id: "problems", title: "Exercise 5A problems", href: secPrefix + "problems.html" }
    ]},
    { id: "5B", code: "5B", title: "Derivative of ln x", ready: false },
    { id: "5C", code: "5C", title: "Log applications", ready: false },
    { id: "5D", code: "5D", title: "Integration & ln x", ready: false },
    { id: "5E", code: "5E", title: "Log integration apps", ready: false },
    { id: "6A", code: "6A", title: "Trig graphs (theme)", href: sec6A }
  ];
  const currentSection = document.body.getAttribute("data-section") || "5A";
  const currentPage = document.body.getAttribute("data-page") || "";
  function el(tag, attrs, html){
    const n = document.createElement(tag);
    Object.keys(attrs||{}).forEach(k => { if (attrs[k]!=null && attrs[k]!==false) n.setAttribute(k, attrs[k]); });
    if (html) n.innerHTML = html;
    return n;
  }
  const nav = el("nav", {class:"chapter-nav", id:"chapter-nav", "aria-label":"Chapter 5 sections"});
  nav.appendChild(el("p",{class:"nav-kicker"},"Year 12 Advanced · Cambridge"));
  nav.appendChild(el("h2",{class:"nav-title"},"Chapter 5"));
  nav.appendChild(el("p",{class:"nav-sub"},"Logarithmic functions"));
  const list = el("ul",{class:"nav-list"});
  SECTIONS.forEach(sec => {
    const li = el("li",{class:"nav-item"+(sec.id===currentSection?" is-current":"")});
    if (sec.ready === false) {
      li.appendChild(el("div",{class:"nav-row is-soon","aria-disabled":"true"},
        '<span class="code">'+sec.code+'</span><span class="label">'+sec.title+'</span><span class="badge">Soon</span>'));
    } else {
      const parentActive = sec.id===currentSection && !currentPage;
      li.appendChild(el("a",{class:"nav-row"+(parentActive?" is-active":""), href:sec.href || (sec.pages ? sec.pages[0].href : "#")},
        '<span class="code">'+sec.code+'</span><span class="label">'+sec.title+'</span>'));
      if (sec.pages){
        const sub = el("ul",{class:"nav-sublist"});
        sec.pages.forEach(p=>{
          const sl=el("li");
          const active = sec.id===currentSection && p.id===currentPage;
          sl.appendChild(el("a",{class:"nav-sublink"+(active?" is-active":""), href:p.href}, p.title));
          sub.appendChild(sl);
        });
        li.appendChild(sub);
      }
    }
    list.appendChild(li);
  });
  nav.appendChild(list);
  const site = el("p",{class:"nav-sub"}, '<a href="'+siteHome+'" style="color:#e8d7a8">← Site home</a>');
  nav.appendChild(site);
  let shell = document.querySelector(".shell");
  if (!shell){
    shell = el("div",{class:"shell"});
    const main = el("div",{class:"main"});
    while(document.body.firstChild) main.appendChild(document.body.firstChild);
    shell.appendChild(main); document.body.appendChild(shell);
  }
  const main = shell.querySelector(".main") || shell;
  shell.insertBefore(nav, main);
})();
