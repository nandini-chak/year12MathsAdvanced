
(function(){
  const depth = Number(document.body.getAttribute("data-nav-depth") || "0");
  const prefix = depth === 2 ? "../../" : (depth === 1 ? "../" : "");
  const siteHome = depth === 2 ? "../../../index.html" : (depth === 1 ? "../../index.html" : "../index.html");
  const courseHome = prefix + "index.html";
  const ITEMS = [{"code": "6A", "title": "Trigonometric graphs and modelling", "href": "Chapter%206%20The%20trigonometric%20functions/6A-trigonometric-graphs-and-modelling/concept.html", "theme": 1}, {"code": "5A", "title": "Review of the logarithmic function base ", "href": "Chapter%205%20Logarithmic%20functions/5A-logarithmic-functions/concept.html", "theme": 1}, {"code": "4A", "title": "Review of the exponential function base ", "href": "Chapter%204%20Exponential%20functions/4A-review-exponential-base-e/concept.html", "theme": 1}, {"code": "1A", "title": "Sequences and how to specify them", "href": "Chapter%201%20Sequences%20and%20series/1A-sequences-and-how-to-specify-them/concept.html", "theme": 2}, {"code": "1B", "title": "Arithmetic sequences", "href": "Chapter%201%20Sequences%20and%20series/1B-arithmetic-sequences/concept.html", "theme": 2}, {"code": "1C", "title": "Geometric sequences", "href": "Chapter%201%20Sequences%20and%20series/1C-geometric-sequences/concept.html", "theme": 2}, {"code": "1D", "title": "Solving problems involving APs and GPs", "href": "Chapter%201%20Sequences%20and%20series/1D-problems-aps-gps/concept.html", "theme": 2}, {"code": "1E", "title": "Adding up the terms of a sequence", "href": "Chapter%201%20Sequences%20and%20series/1E-adding-up-terms/concept.html", "theme": 2}, {"code": "1F", "title": "Summing an arithmetic series", "href": "Chapter%201%20Sequences%20and%20series/1F-summing-arithmetic-series/concept.html", "theme": 2}, {"code": "1G", "title": "Summing a geometric series", "href": "Chapter%201%20Sequences%20and%20series/1G-summing-geometric-series/concept.html", "theme": 2}, {"code": "1H", "title": "The limiting sum of a geometric series", "href": "Chapter%201%20Sequences%20and%20series/1H-limiting-sum-geometric/concept.html", "theme": 2}, {"code": "1I", "title": "Recurring decimals and geometric series", "href": "Chapter%201%20Sequences%20and%20series/1I-recurring-decimals/concept.html", "theme": 2}, {"code": "2A", "title": "Increasing, decreasing, and stationary a", "href": "Chapter%202%20Differentiation%20applications/2A-increasing-decreasing-stationary/concept.html", "theme": 3}, {"code": "2B", "title": "Stationary points and turning points", "href": "Chapter%202%20Differentiation%20applications/2B-stationary-turning-points/concept.html", "theme": 3}, {"code": "2C", "title": "Second and higher derivatives", "href": "Chapter%202%20Differentiation%20applications/2C-second-higher-derivatives/concept.html", "theme": 3}, {"code": "2D", "title": "Concavity and points of inflection", "href": "Chapter%202%20Differentiation%20applications/2D-concavity-inflection/concept.html", "theme": 3}, {"code": "2E", "title": "Systematic curve sketching with the deri", "href": "Chapter%202%20Differentiation%20applications/2E-curve-sketching-derivative/concept.html", "theme": 3}, {"code": "2F", "title": "Global maximum and minimum", "href": "Chapter%202%20Differentiation%20applications/2F-global-max-min/concept.html", "theme": 3}, {"code": "2G", "title": "Review of continuity and differentiabili", "href": "Chapter%202%20Differentiation%20applications/2G-continuity-differentiability/concept.html", "theme": 3}, {"code": "2H", "title": "Applications of maximisation and minimis", "href": "Chapter%202%20Differentiation%20applications/2H-max-min-applications/concept.html", "theme": 3}, {"code": "4B", "title": "Differentiation involving exponential fu", "href": "Chapter%204%20Exponential%20functions/4B-diff-exponential/concept.html", "theme": 3}, {"code": "5B", "title": "Differentiation involving logarithmic fu", "href": "Chapter%205%20Logarithmic%20functions/5B-diff-logarithmic/concept.html", "theme": 3}, {"code": "6B", "title": "Differentiation with trigonometric funct", "href": "Chapter%206%20The%20trigonometric%20functions/6B-diff-trigonometric/concept.html", "theme": 3}, {"code": "2I", "title": "Primitive functions", "href": "Chapter%202%20Differentiation%20applications/2I-primitive-functions/concept.html", "theme": 4}, {"code": "3A", "title": "Areas and the definite integral", "href": "Chapter%203%20Integration/3A-areas-definite-integral/concept.html", "theme": 4}, {"code": "3B", "title": "The fundamental theorem of calculus", "href": "Chapter%203%20Integration/3B-fundamental-theorem/concept.html", "theme": 4}, {"code": "3C", "title": "The definite integral and its properties", "href": "Chapter%203%20Integration/3C-definite-integral-properties/concept.html", "theme": 4}, {"code": "3D", "title": "Challenge \u2014 proving the fundamental theo", "href": "Chapter%203%20Integration/3D-challenge-ftc/concept.html", "theme": 4}, {"code": "3E", "title": "The indefinite integral", "href": "Chapter%203%20Integration/3E-indefinite-integral/concept.html", "theme": 4}, {"code": "3F", "title": "Finding areas by integration", "href": "Chapter%203%20Integration/3F-areas-by-integration/concept.html", "theme": 4}, {"code": "3G", "title": "The trapezoidal rule", "href": "Chapter%203%20Integration/3G-trapezoidal-rule/concept.html", "theme": 4}, {"code": "3H", "title": "The reverse chain rule", "href": "Chapter%203%20Integration/3H-reverse-chain-rule/concept.html", "theme": 4}, {"code": "4D", "title": "Integration involving exponential functi", "href": "Chapter%204%20Exponential%20functions/4D-int-exponential/concept.html", "theme": 4}, {"code": "4E", "title": "Applications of integration (exponential", "href": "Chapter%204%20Exponential%20functions/4E-int-apps-exponential/concept.html", "theme": 4}, {"code": "5D", "title": "Integration involving reciprocal functio", "href": "Chapter%205%20Logarithmic%20functions/5D-int-reciprocal/concept.html", "theme": 4}, {"code": "5E", "title": "Applications of integration (logarithmic", "href": "Chapter%205%20Logarithmic%20functions/5E-int-apps-logarithmic/concept.html", "theme": 4}, {"code": "6D", "title": "Integration with trigonometric functions", "href": "Chapter%206%20The%20trigonometric%20functions/6D-int-trigonometric/concept.html", "theme": 4}, {"code": "6E", "title": "Applications of integration (trigonometr", "href": "Chapter%206%20The%20trigonometric%20functions/6E-int-apps-trigonometric/concept.html", "theme": 4}, {"code": "4C", "title": "Applications of differentiation (exponen", "href": "Chapter%204%20Exponential%20functions/4C-diff-apps-exponential/concept.html", "theme": 5}, {"code": "5C", "title": "Applications of differentiation (logarit", "href": "Chapter%205%20Logarithmic%20functions/5C-diff-apps-logarithmic/concept.html", "theme": 5}, {"code": "6C", "title": "Applications of differentiation (trigono", "href": "Chapter%206%20The%20trigonometric%20functions/6C-diff-apps-trigonometric/concept.html", "theme": 5}, {"code": "7A", "title": "Motion review plus acceleration", "href": "Chapter%207%20Motion%20and%20rates/7A-motion-acceleration/concept.html", "theme": 5}, {"code": "7B", "title": "Motion and integration", "href": "Chapter%207%20Motion%20and%20rates/7B-motion-integration/concept.html", "theme": 5}, {"code": "7C", "title": "Rates and differentiation", "href": "Chapter%207%20Motion%20and%20rates/7C-rates-differentiation/concept.html", "theme": 5}, {"code": "7D", "title": "Rates and integration", "href": "Chapter%207%20Motion%20and%20rates/7D-rates-integration/concept.html", "theme": 5}, {"code": "7E", "title": "Exponential growth and decay", "href": "Chapter%207%20Motion%20and%20rates/7E-exponential-growth-decay/concept.html", "theme": 5}, {"code": "9A", "title": "The language of probability distribution", "href": "Chapter%209%20Random%20variables/9A-probability-distributions/concept.html", "theme": 6}, {"code": "9B", "title": "Mean or expected value", "href": "Chapter%209%20Random%20variables/9B-mean-expected-value/concept.html", "theme": 6}, {"code": "9C", "title": "Variance and standard deviation", "href": "Chapter%209%20Random%20variables/9C-variance-standard-deviation/concept.html", "theme": 6}, {"code": "10A", "title": "Cumulative frequency and grouping", "href": "Chapter%2010%20The%20normal%20distribution/10A-cumulative-frequency/concept.html", "theme": 6}, {"code": "10B", "title": "Continuous distributions", "href": "Chapter%2010%20The%20normal%20distribution/10B-continuous-distributions/concept.html", "theme": 6}, {"code": "10C", "title": "Mean and variance of a distribution", "href": "Chapter%2010%20The%20normal%20distribution/10C-mean-variance-distribution/concept.html", "theme": 6}, {"code": "10D", "title": "The standard normal distribution", "href": "Chapter%2010%20The%20normal%20distribution/10D-standard-normal/concept.html", "theme": 6}, {"code": "10E", "title": "General normal distributions", "href": "Chapter%2010%20The%20normal%20distribution/10E-general-normal/concept.html", "theme": 6}, {"code": "10F", "title": "Applications of the normal distribution", "href": "Chapter%2010%20The%20normal%20distribution/10F-normal-applications/concept.html", "theme": 6}, {"code": "8A", "title": "Applications of APs and GPs", "href": "Chapter%208%20Financial%20mathematics/8A-applications-aps-gps/concept.html", "theme": 7}, {"code": "8B", "title": "The use of logarithms with GPs", "href": "Chapter%208%20Financial%20mathematics/8B-logarithms-with-gps/concept.html", "theme": 7}, {"code": "8C", "title": "Simple and compound interest", "href": "Chapter%208%20Financial%20mathematics/8C-simple-compound-interest/concept.html", "theme": 7}, {"code": "8D", "title": "Investing money by regular instalments", "href": "Chapter%208%20Financial%20mathematics/8D-regular-instalments/concept.html", "theme": 7}, {"code": "8E", "title": "Paying off a loan", "href": "Chapter%208%20Financial%20mathematics/8E-paying-off-loan/concept.html", "theme": 7}, {"code": "8F", "title": "The pension from a super fund or annuity", "href": "Chapter%208%20Financial%20mathematics/8F-pension-annuity/concept.html", "theme": 7}];
  const current = document.body.getAttribute("data-section") || "";
  const THEMES = {
    1: "Further graph transformations and modelling",
    2: "Sequences and series",
    3: "Differential calculus",
    4: "Integral calculus",
    5: "Applications of calculus",
    6: "Random variables",
    7: "Financial mathematics"
  };
  function el(tag, attrs, html){
    const n = document.createElement(tag);
    Object.keys(attrs||{}).forEach(k => { if (attrs[k]!=null && attrs[k]!==false) n.setAttribute(k, attrs[k]); });
    if (html) n.innerHTML = html;
    return n;
  }
  const nav = el("nav", {class:"chapter-nav", id:"chapter-nav", "aria-label":"Course waterfall"});
  nav.appendChild(el("p",{class:"nav-kicker"},"Year 12 Advanced · Cambridge"));
  nav.appendChild(el("h2",{class:"nav-title"},"Course path"));
  nav.appendChild(el("p",{class:"nav-sub"},"Theme order · Concept → Tutorial → Exercise"));
  const list = el("ul",{class:"nav-list"});
  list.appendChild((()=>{
    const li=el("li",{class:"nav-item"});
    li.appendChild(el("a",{class:"nav-row", href:courseHome},'<span class="code">Map</span><span class="label">Course home</span>'));
    return li;
  })());
  let lastTheme = 0;
  ITEMS.forEach(function(it){
    if (it.theme !== lastTheme) {
      lastTheme = it.theme;
      const liT = el("li",{class:"nav-item"});
      const themeTitle = THEMES[it.theme] || ("Theme " + it.theme);
      liT.appendChild(el("div",{class:"nav-row nav-theme","aria-hidden":"true"},
        '<span class="code">Theme '+it.theme+'</span><span class="label">'+themeTitle+'</span>'));
      list.appendChild(liT);
    }
    const li = el("li",{class:"nav-item"+(it.code===current?" is-current":"")});
    const href = prefix + it.href;
    li.appendChild(el("a",{class:"nav-row"+(it.code===current?" is-active":""), href:href},
      '<span class="code">'+it.code+'</span><span class="label">'+it.title+'</span>'));
    list.appendChild(li);
  });
  nav.appendChild(list);
  nav.appendChild(el("p",{class:"nav-sub"}, '<a href="'+siteHome+'" style="color:#e8d7a8">← Site home</a>'));
  let shell = document.querySelector(".shell");
  if (!shell){
    shell = el("div",{class:"shell"});
    const main = el("div",{class:"main"});
    while(document.body.firstChild) main.appendChild(document.body.firstChild);
    shell.appendChild(main); document.body.appendChild(shell);
  }
  const main = shell.querySelector(".main") || shell;
  shell.insertBefore(nav, main);

  // Keep left-panel scroll position across topic clicks (full page loads).
  const SCROLL_KEY = "mdaa-y12adv-nav-scroll";
  try {
    const saved = sessionStorage.getItem(SCROLL_KEY);
    if (saved != null) {
      nav.scrollTop = Number(saved) || 0;
    } else {
      const active = nav.querySelector(".nav-row.is-active, .nav-item.is-current");
      if (active) active.scrollIntoView({block: "center"});
    }
  } catch (e) {}
  nav.addEventListener("scroll", function(){
    try { sessionStorage.setItem(SCROLL_KEY, String(nav.scrollTop)); } catch (e) {}
  }, {passive: true});
  nav.addEventListener("click", function(ev){
    const a = ev.target && ev.target.closest ? ev.target.closest("a") : null;
    if (!a) return;
    try { sessionStorage.setItem(SCROLL_KEY, String(nav.scrollTop)); } catch (e) {}
  });
})();
