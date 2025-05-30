

function educButtonChange(element) {
    let A1 = document.getElementById("A1");
    let B2 = document.getElementById("B2");
    let C3 = document.getElementById("C3");
    let D4 = document.getElementById("D4");

    let a1 = `
        <div class="block2 line">
            <div class="circle"></div>
            <div class="line content"></div>
        </div>
        <div class="TrueContent">
            <div class="place">MAPUA MALAYAN COLLEGES MINDANAO</div>
            <div class="title">COLLEGE - COMPUTER ENGINEERING</div>
            <div class="date">2023 - 2028</div>
            <div class="description">Computer Engineering Graduate. Proficient in multiple diffent technologies for WEB, APP, MOBILE DEVELOPMENT, COMPUTER NETWORKS, and EMBEDDED SYSTEMS. </div>
        </div>
    `;

    let b2 = `
        <div class="block2 contentContainer" id="B2">
            <div class="block2 line">
                <div class="circle"></div>
                <div class="line content"></div>
            </div>
            <div class="TrueContent">
                <div class="place">MAPUA MALAYAN COLLEGES MINDANAO</div>
                <div class="title">SENIOR HIGH SCHOOL - STEM</div>
                <div class="date">2021 - 2023</div>
                <div class="description">Graduated With Honors. Created a Learning website for a Capstone Project</div>
            </div>
        </div>
    `;

    let c3 = `
        <div class="block2 contentContainer" id="C3">
            <div class="block2 line">
                <div class="circle"></div>
                <div class="line content"></div>
            </div>
            <div class="TrueContent">
                <div class="place">SAN PEDRO COLLEGES BED</div>
                <div class="title">JUNIOR HIGH SCHOOL</div>
                <div class="date">2017 - 2020</div>
                <div class="description">Graduated With High Honors</div>
            </div>
        </div>
    `;

    let d4 = `
        <div class="block2 contentContainer" id="D4">
            <div class="block2 line">
                <div class="circle"></div>
                <div class="line content"></div>
            </div>
            <div class="TrueContent">
                <div class="place">SAN PEDRO COLLEGES BED</div>
                <div class="title">GRADESCHOOL</div>
                <div class="date">2012 - 2016</div>
                <div class="description">Graduated With Highest Honors</div>
            </div>
        </div>
    `;

    // Now update the innerHTML of the elements safely after ensuring elements exist.
    if (A1) A1.innerHTML = a1;
    if (B2) B2.innerHTML = b2;
    if (C3) C3.innerHTML = c3;
    if (D4) D4.innerHTML = d4;

    activateEducBtn();
}    

function workButtonChange(element) {
    let A1 = document.getElementById("A1");
    let B2 = document.getElementById("B2");
    let C3 = document.getElementById("C3");
    
    let a1 = `
        <div class="block2 line">
            <div class="circle"></div>
            <div class="line content"></div>
        </div>
        <div class="TrueContent">
            <div class="place">SPACEX</div>
            <div class="title">SOFTWARE ENGINEER</div>
            <div class="date">2029</div>
            <div class="description">Contributed to developing mission-critical software systems supporting aerospace technologies and launch operations at SpaceX.</div>
        </div>
    `;

    let b2 = `
        <div class="block2 contentContainer" id="B2">
            <div class="block2 line">
                <div class="circle"></div>
                <div class="line content"></div>
            </div>
            <div class="TrueContent">
                <div class="place">GOOGLE</div>
                <div class="title">A3 SOFTWARE DEVELOPER</div>
                <div class="date">2030 - 2032</div>
                <div class="description">Worked on scalable software solutions within Google's A3 division, focusing on advanced algorithmic development and cloud-based services.</div>
            </div>
        </div>
    `;

    let c3 = `
        <div class="block2 contentContainer" id="C3">
            <div class="block2 line">
                <div class="circle"></div>
                <div class="line content"></div>
            </div>
            <div class="TrueContent">
                <div class="place">MICROCOMPUTER SERVICES INC</div>
                <div class="title">NETWORKS ENGINEER</div>
                <div class="date">2033</div>
                <div class="description">Engineered and maintained robust network infrastructures and support systems for enterprise clients at Microcomputer Services Inc in 2033.</div>
            </div>
        </div>
    `;

  

    // Update innerHTML only if element exists
    if (A1) A1.innerHTML = a1;
    if (B2) B2.innerHTML = b2;
    if (C3) C3.innerHTML = c3;
    
}

function scrollToSection(id){
    const element = document.getElementById(id);
    if(element){
        element.scrollIntoView({behavior:'smooth'});
    }
    else{
        console.warn(`Element with id '${id}' not found.`);
    }
   
}


 function loadContent(){
    const educ = document.getElementById("educ");
  const work = document.getElementById("work");
  function activateEduc() {
      educ.style.backgroundColor = "white";
      educ.style.color = "black";
      work.style.backgroundColor = "black";
      work.style.color = "white";
      educ.classList.add("active");
      work.classList.remove("active");
      educ.style.transitionDuration=".5s";
      work.style.transitionDuration=".5s";
      educButtonChange(educ);
  }
   function activateWork() {
      work.style.backgroundColor = "white";
      work.style.color = "black";
      educ.style.backgroundColor = "black";
      educ.style.color = "white";
      work.classList.add("active");
      educ.classList.remove("active");
      educ.style.transitionDuration=".5s";
      work.style.transitionDuration=".5s";
      workButtonChange(work);
  }
  educ.addEventListener("click", () => {
      if (!educ.classList.contains("active")) {
          activateEduc();
      }
  });
  work.addEventListener("click", () => {
      if (!work.classList.contains("active")) {
          activateWork();
      }
  });
}

function loadInitial(){
    loadContent();
    const educ = document.getElementById("educ");
    educ.click();
}




