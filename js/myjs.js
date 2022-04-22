import '../css/test.scss';

function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

var clickedButtonGetStartedNav = document.getElementById("buttonGetStartedNav");
   clickedButtonGetStartedNav.addEventListener("click", function (event) {
      alert("You clicked Get Started on Nav Bar but It Is Coming Soon..........")
   })

   var clickedButtonGetStartedBody = document.getElementById("buttonGetStartedBody");
   clickedButtonGetStartedBody.addEventListener("click", function (event) {
      alert("You clicked Get Started on Body but It Is Coming Soon..........")
   })