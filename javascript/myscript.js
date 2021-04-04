window.onload = () => {

  // HamburgerMenu

  menuClick = () => {

    console.log("here")

    var x = document.getElementById("responsive-links");

    if (x.style.display === "block") {
      x.style.display = "none"
    } else {
      x.style.display = "block";
    }

  }



  var scrollani = document.getElementById("scroll-down");

  setTimeout(function () {
    scrollani.style.visibility = "visible";

    var timing = { duration: 2000, fill: "forwards" }
    var keyframes = [{ opacity: "0%" }, { opacity: "100%" }]

    scrollani.animate(keyframes, timing)

  }, 2000)


  var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
  })

  var animation3 = bodymovin.loadAnimation({
    container: document.getElementById('bm-t'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
  })

  var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('bm-mail'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'mail2.json'
  })

  var animationprogressmail = bodymovin.loadAnimation({
    container: document.getElementById('bm-p-mail'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'mail2.json'
  })

  var animationprogresscharacter = bodymovin.loadAnimation({
    container: document.getElementById('bm-p-character'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
  })



  var sections = document.querySelectorAll("section")
  var options = { threshold: 0.60 };


  // Variables for links
  var aboutl = document.getElementById("about-link");
  var servicel = document.getElementById("service-link");
  var workl = document.getElementById("work-link");
  var contactl = document.getElementById("contact-link");

  // Variables for animation blocks ABOUT
  var one = document.getElementById('one-a-block');
  var two = document.getElementById('two-a-block');
  var three = document.getElementById('three-a-block');
  var four = document.getElementById('four-a-block');

  // Variables for animation blocks SERVICE
  var oneS = document.getElementById('one-s-block');
  var twoS = document.getElementById('two-s-block');
  var threeS = document.getElementById('three-s-block');
  var fourS = document.getElementById('four-s-block');


  // Variables for animation blocks WORK
  var oneW = document.getElementById('one-w-block');
  var twoW = document.getElementById('two-w-block');
  var threeW = document.getElementById('three-w-block');
  var fourW = document.getElementById('four-w-block');

  // Variables for animation blocks WORK
  var oneC = document.getElementById('one-c-block');
  var twoC = document.getElementById('two-c-block');
  var threeC = document.getElementById('three-c-block');
  var fourC = document.getElementById('four-c-block');





  observer = new IntersectionObserver(function (entries, observer) {

    entries.forEach(entry => {

      // console.log(entry.target.id)

      // ABOUT
      if (entry.target.id == "about" && entry.isIntersecting == true) {
        aboutl.style.fontWeight = "bold";
        aboutl.style.fontSize = "15pt";
        aboutl.style.borderBottom = " 3px solid #E056F2";


        var oneKeyframes = [{ height: "0px" }, { height: "100%" }]
        var twoKeyframes = [{ height: "0%", opacity: "90%" }, { opacity: "30%", height: "35%" }]
        var threeKeyframes = [{ height: "0%", opacity: "90%" }, { opacity: "30%", height: "15%" }]
        var fourKeyframes = [{ height: "0%", opacity: "90%" }, { opacity: "30%", height: "10%" }]



        var timing = { duration: 1000, fill: "forwards" }

        one.animate(oneKeyframes, timing);
        two.animate(twoKeyframes, timing);
        three.animate(threeKeyframes, timing);
        four.animate(fourKeyframes, timing);


      } else {
        aboutl.style.color = "white";
        aboutl.style.fontSize = "13pt";
        aboutl.style.fontWeight = "400";
        aboutl.style.borderBottom = "none";

      }


      // SERVICES
      if (entry.target.id == "services" && entry.isIntersecting == true) {
        servicel.style.fontWeight = "bold";
        servicel.style.fontSize = "15pt";
        servicel.style.borderBottom = " 3px solid #7776EC";


        var oneKeyframes = [{ height: "0%", opacity: "90%" }, { opacity: "30%", height: "35%" }]
        var twoKeyframes = [{ height: "0px" }, { height: "100%" }]
        var threeKeyframes = [{ height: "0%", opacity: "90%" }, { opacity: "30%", height: "35%" }]
        var fourKeyframes = [{ height: "0%", opacity: "90%" }, { opacity: "30%", height: "15%" }]


        var timing = { duration: 1000, fill: "forwards" }

        oneS.animate(oneKeyframes, timing);
        twoS.animate(twoKeyframes, timing);
        threeS.animate(threeKeyframes, timing);
        fourS.animate(fourKeyframes, timing);


      } else {
        servicel.style.color = "white";
        servicel.style.fontSize = "13pt";
        servicel.style.fontWeight = "400";
        servicel.style.borderBottom = "none";

      }


      // MY WORK
      if (entry.target.id == "my-work" && entry.isIntersecting == true) {
        workl.style.fontWeight = "bold";
        workl.style.fontSize = "15pt";
        workl.style.borderBottom = " 3px solid #60A8CF";



        var oneKeyframes = [{ height: "0%", opacity: "90%" }, { opacity: "30%", height: "10%" }]
        var twoKeyframes = [{ height: "0%", opacity: "90%" }, { opacity: "30%", height: "30%" }]
        var threeKeyframes = [{ height: "0px" }, { height: "100%" }]
        var fourKeyframes = [{ height: "0%", opacity: "90%" }, { opacity: "30%", height: "30%" }]


        var timing = { duration: 1000, fill: "forwards" }

        oneW.animate(oneKeyframes, timing);
        twoW.animate(twoKeyframes, timing);
        threeW.animate(threeKeyframes, timing);
        fourW.animate(fourKeyframes, timing);


      } else {
        // workl.style.color ="white";
        workl.style.fontSize = "13pt";
        workl.style.fontWeight = "400";
        workl.style.borderBottom = "none";

      }



      // Contact
      if (entry.target.id == "contact" && entry.isIntersecting == true) {
        contactl.style.fontWeight = "bold";
        contactl.style.fontSize = "15pt";
        contactl.style.borderBottom = " 3px solid #1FE1BC";



        var oneKeyframes = [{ height: "0%", opacity: "90%" }, { opacity: "30%", height: "10%" }]
        var twoKeyframes = [{ height: "0%", opacity: "90%" }, { opacity: "30%", height: "15%" }]
        var threeKeyframes = [{ height: "0%", opacity: "90%" }, { opacity: "30%", height: "35%" }]
        var fourKeyframes = [{ height: "0px" }, { height: "100%" }]

        var timing = { duration: 1000, fill: "forwards" }

        oneC.animate(oneKeyframes, timing);
        twoC.animate(twoKeyframes, timing);
        threeC.animate(threeKeyframes, timing);
        fourC.animate(fourKeyframes, timing);


      } else {
        contactl.style.color = "white";
        contactl.style.fontSize = "13pt";
        contactl.style.fontWeight = "400";
        contactl.style.borderBottom = "none";

      }


    })

  }, options)

  sections.forEach(section => {
    observer.observe(section)
  })




  var pieces = [];

  var str = "Visit website";

  var project = "View Project"




  pieces[2] = [];
  pieces[2]["image"] = "images/ecoleap.png";
  pieces[2]["name"] = "Ecoleap";
  pieces[2]["description"] = "Ecoleap.ca was designed and built for a registered energy advisor specializing in energy solutions in the GTA. It's a responsive website that was built in 2019 using wordpress. Some changes to the site may have been made by the owner.  " + "<br><br>" + str.link("https://ecoleap.ca");
  pieces[2]["tag"] = ["Web Development,  Client"];



  // pieces[1] = [];
  // pieces[1]["image"] = "images/LOGO.png";
  // pieces[1]["name"] = "We Explore";
  // pieces[1]["description"] ="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. " + "<br><br>" + str.link("") ;
  // pieces[1]["tag"] = ["Web Development"];


  pieces[1] = [];
  pieces[1]["image"] = "images/v4.PNG";
  pieces[1]["name"] = "Directional Civil Construction ";
  pieces[1]["description"] = "This is a logo made for DCC, a startup telecommunications company in Toronto. After being involved in group meetings, we discussed their company’s values and goals. From there, I developed different variations of possible logos. This was the desired and selected choice." + "<br><br>";
  pieces[1]["tag"] = ["Graphic Design,  Client"];

  pieces[0] = [];
  pieces[0]["image"] = "images/website.PNG";
  pieces[0]["name"] = "This Website";
  pieces[0]["description"] = "This website is my most recent piece. It was created to represent me, my work and my services. It is a responsive website built from scratch using HTML, CSS, and Javascript."
    + "<br><br>" + "<a href ='" + "/mywebsite.html" + "'" + "class='" + "viewproj" + "'" + ">" + "View Project" + "</a>";
  // project.link( "pareshmaramp.ca/mywebsite.html")

  pieces[0]["tag"] = ["Web Development,  Graphic Design,  Motion Design"];



  for (var i = 0; i < pieces.length; i++) {

    var div = document.createElement("div")
    var att = document.createAttribute("class")
    att.value = "portfolio-card";
    div.setAttributeNode(att)

    // Create the img
    var img = document.createElement("img");
    img.src = pieces[i]["image"];
    img.setAttribute("class", "portfolio-img");

    // Create the title
    var title = document.createElement('p');
    title.innerHTML = pieces[i]["name"];
    title.setAttribute("class", "portfolio-title")

    // Create description
    var description = document.createElement('p');
    description.innerHTML = pieces[i]['description'];
    description.setAttribute("class", "portfolio-description");

    // Create tag
    var tag = document.createElement('p');
    tag.innerHTML = pieces[i]["tag"];
    tag.setAttribute("class", "portfolio-tag")



    document.getElementById("portfolio-pieces").appendChild(div)
    div.appendChild(img)
    div.appendChild(title)
    div.appendChild(description)
    div.appendChild(tag)

  }





}

