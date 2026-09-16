/**
 * Left chapter menu for Year 12 Advanced Chapter 2.
 * When a later section is built, add its hrefs here; pages only need
 * data-section / data-page on <body> and class="shell" + class="main".
 */
(function () {
  const SECTIONS = [
    {
      id: "home",
      code: "Ch.2",
      title: "Chapter home",
      href: "index.html"
    },
    {
      id: "2.01",
      code: "2.01",
      title: "Function transformations",
      href: "2.01-function-transformations-introduction.html",
      ready: true,
      pages: [
        { id: "lesson", title: "Lesson & notes", href: "2.01-function-transformations-introduction.html#notes" },
        { id: "worksheet", title: "Worksheet solutions", href: "2.01-function-transformations-worksheet.html" }
      ]
    },
    { id: "2.02", code: "2.02", title: "Trigonometric graphs", ready: false },
    { id: "2.03", code: "2.03", title: "Vertical transformations", ready: false },
    { id: "2.04", code: "2.04", title: "Horizontal transformations", ready: false },
    { id: "2.05", code: "2.05", title: "Combined transformations", ready: false },
    { id: "2.06", code: "2.06", title: "Trigonometric equations", ready: false }
  ];

  const currentSection = document.body.getAttribute("data-section") || "home";
  const currentPage = document.body.getAttribute("data-page") || "";

  function el(tag, attrs, html) {
    const n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (attrs[k] === false || attrs[k] == null) return;
      n.setAttribute(k, attrs[k]);
    });
    if (html) n.innerHTML = html;
    return n;
  }

  const nav = el("nav", {
    class: "chapter-nav",
    id: "chapter-nav",
    "aria-label": "Chapter 2 sections"
  });

  nav.appendChild(el("p", { class: "nav-kicker" }, "Year 12 Advanced"));
  nav.appendChild(el("h2", { class: "nav-title" }, "Chapter 2"));
  nav.appendChild(el("p", { class: "nav-sub" }, "Further graph transformations and modelling"));

  const list = el("ul", { class: "nav-list" });

  SECTIONS.forEach(function (sec) {
    const li = el("li", { class: "nav-item" + (sec.id === currentSection ? " is-current" : "") });
    if (sec.ready === false) {
      li.appendChild(el("div", { class: "nav-row is-soon", "aria-disabled": "true" },
        "<span class=\"code\">" + sec.code + "</span><span class=\"label\">" + sec.title + "</span><span class=\"badge\">Soon</span>"));
    } else {
      const parentActive = sec.id === currentSection && (!sec.pages || !currentPage);
      const a = el("a", {
        class: "nav-row" + (parentActive ? " is-active" : ""),
        href: sec.href
      }, "<span class=\"code\">" + sec.code + "</span><span class=\"label\">" + sec.title + "</span>");
      li.appendChild(a);
      if (sec.pages) {
        const sub = el("ul", { class: "nav-sublist" });
        sec.pages.forEach(function (p) {
          const sl = el("li");
          const active = sec.id === currentSection && p.id === currentPage;
          sl.appendChild(el("a", {
            class: "nav-sublink" + (active ? " is-active" : ""),
            href: p.href
          }, p.title));
          sub.appendChild(sl);
        });
        li.appendChild(sub);
      }
    }
    list.appendChild(li);
  });

  nav.appendChild(list);

  let shell = document.querySelector(".shell");
  if (!shell) {
    shell = el("div", { class: "shell" });
    const fallbackMain = el("div", { class: "main" });
    while (document.body.firstChild) fallbackMain.appendChild(document.body.firstChild);
    shell.appendChild(fallbackMain);
    document.body.appendChild(shell);
  }
  const main = shell.querySelector(".main") || shell;
  shell.insertBefore(nav, main);
})();
