
        function buttonAction (pageReference) {
            // document.getElementById("contactPage").innerHTML = "contact.html";
            
            switch(pageReference){
                case "contactPage":
                    window.open("contact.html", "_self");
                    break;
                case "aboutPage":
                    window.open("about.html", "_self");
                    break;
                case "portfolioPage":
                    window.open("portfolio.html", "_self");
                    break;
                case "homePage":
                    window.open("index.html", "_self");
                    break;
                default:
                    break;

            }
            
        }
      
