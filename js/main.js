function navBar(){
    const navMobile=document.getElementById('mobileShow');
    navMobile.style.display='flex';
  }

  function navBarcross(){
    const navMobile=document.getElementById('mobileShow');
    navMobile.style.display='none';
  }
  // Setup and start animation! 
  var typed = new Typed('#element', {
    strings: ['Creative.', 'WordPress.', ' Portfolio', 'Online Store'],
    typeSpeed: 150,
    backSpeed:100,
    loop:true
  });
  var typed = new Typed('#elementt', {
    strings: ['Creative.', 'WordPress.', ' Portfolio', 'Online Store'],
    typeSpeed: 100,
    backSpeed:100,
    loop:true
  });


  // Design Anything, Build Everything

  function imgShown(){
    const imgchange=document.getElementById('desgin');
    imgchange.src='./img/live-visual.jpg';
  }
  function imgShown1(){
   document.getElementById('desgin').src='./img/layout-builder-4.jpg';
  }
  function imgShown2(){
    document.getElementById('desgin').src='./img/header-builder-5.jpg';
   }
   function imgShown3(){
    document.getElementById('desgin').src='./img/mega-menu-feature.jpg';
   }
   function imgShown4(){
    document.getElementById('desgin').src='./img/footer-builder-5.jpg';
   }
   function imgShown5(){
    document.getElementById('desgin').src='./img/form-builder.jpg';
   }
   function imgShown6(){
    document.getElementById('desgin').src='./img/off-canvas-feature.jpg';
   }
   function imgShown7(){
    document.getElementById('desgin').src='./img/setup-wizard-1.jpg';
   }
   function imgShown8(){
    document.getElementById('desgin').src='./img/performance-wizard.jpg';
   }

  //  faq's

  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

AOS.init({
duration:2000,
});