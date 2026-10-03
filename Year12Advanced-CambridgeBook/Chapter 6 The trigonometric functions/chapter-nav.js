
(function () {
  const depth = Number(document.body.getAttribute("data-nav-depth") || "0");
  const prefix = depth === 2 ? "../../" : (depth === 1 ? "../" : "");
  const secPrefix = depth === 2 ? "" : (depth === 1 ? "6A-trigonometric-graphs-and-modelling/" : "Chapter%206%20The%20trigonometric%20functions/6A-trigonometric-graphs-and-modelling/");
  const chHome = depth === 2 ? "../index.html" : (depth === 1 ? "index.html" : "Chapter%206%20The%20trigonometric%20functions/index.html");
  const packHome = depth === 2 ? "../../index.html" : (depth === 1 ? "../index.html" : "index.html");
  const siteHome = depth === 2 ? "../../../index.html" : (depth === 1 ? "../../index.html" : "../index.html");

  const SECTIONS = [
    { id: "pack", code: "Cam", title: "Cambridge home", href: packHome },
    { id: "ch6", code: "Ch.6", title: "Chapter home", href: chHome },
    { id: "6A", code: "6A", title: "Trig graphs & modelling", ready: true, pages: [
      { id: "hub", title: "6A hub", href: secPrefix + "index.html" },
      { id: "lesson1", title: "Lesson 1 (45 min)", href: secPrefix + "lesson-1.html" },
      { id: "lesson2", title: "Lesson 2 (45 min)", href: secPrefix + "lesson-2.html" },
      { id: "tutorial", title: "Tutorial · theory", href: secPrefix + "tutorial.html" },
      { id: "problems", title: "Exercise 6A problems", href: secPrefix + "problems.html" }
    ]},
    { id: "6B", code: "6B", title: "Differentiation", ready: false },
    { id: "6C", code: "6C", title: "Diff. applications", ready: false },
    { id: "6D", code: "6D", title: "Integration", ready: false },
    { id: "6E", code: "6E", title: "Int. applications", ready: false },
    { id: "6F", code: "6F", title: "Challenge", ready: false }
  ];
  const currentSection = document.body.getAttribute("data-section") || "6A";
  const currentPage = document.body.getAttribute("data-page") || "";
  function el(tag, attrs, html){
    const n = document.createElement(tag);
    Object.keys(attrs||{}).forEach(k => { if (attrs[k]!=null && attrs[k]!==false) n.setAttribute(k, attrs[k]); });
    if (html) n.innerHTML = html;
    return n;
  }
  const nav = el("nav", {class:"chapter-nav", id:"chapter-nav", "aria-label":"Chapter 6 sections"});
  nav.appendChild(el("p",{class:"nav-kicker"},"Year 12 Advanced · Cambridge"));
  nav.appendChild(el("h2",{class:"nav-title"},"Chapter 6"));
  nav.appendChild(el("p",{class:"nav-sub"},"The trigonometric functions"));
  const list = el("ul",{class:"nav-list"});
  SECTIONS.forEach(sec => {
    const li = el("li",{class:"nav-item"+(sec.id===currentSection?" is-current":"")});
    if (sec.ready === false) {
      li.appendChild(el("div",{class:"nav-row is-soon","aria-disabled":"true"},
        '<span class="code">'+sec.code+'</span><span class="label">'+sec.title+'</span><span class="badge">Soon</span>'));
    } else {
      const parentActive = sec.id===currentSection && !currentPage;
      li.appendChild(el("a",{class:"nav-row"+(parentActive?" is-active":""), href:sec.href},
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
