module.exports = {
    toggleDarkMode: function toggleDarkMode(darkMode, mainCSS){
        var head = document.getElementsByTagName('HEAD')[0]; 

        var link = document.createElement('link');
        link.rel = 'stylesheet'; 
        link.type = 'text/css';

        var css = document.createElement('link');
        css.type = 'text/css';
        css.href = mainCSS

        var shaders = document.getElementsByClassName("shader")
        if (darkMode){
          link.href = '../../node_modules/bootstrap-dark-5/dist/css/bootstrap-night.min.css';
          document.body.style.borderColor = "#FFFFFF";
          //document.body.style.backgroundColor = "#212121";
          for (let element of shaders){
            element.style.backgroundColor = 'rgba(7, 7, 7, 0.5)'
          }
        }
        else{
          link.href = '../../node_modules/bootstrap-dark-5/dist/css/bootstrap.min.css';
          document.body.style.borderColor = "#000000";
          //document.body.style.backgroundColor = "#FFFFFF";
          for (let element of shaders){
            element.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
          }
        }

        changeButtons(darkMode)
        changeNavLink(darkMode)
        changeProgress(darkMode)

        css.rel = 'stylesheet'; 

        head.appendChild(link); 
        head.appendChild(css); 
    
        function changeButtons(darkMode){
          if (darkMode){
            var buttons = document.getElementsByClassName("btn")
            for (let element of buttons){
              element.classList.add("btn-light")
              if (element.classList.contains("btn-dark")){
                element.classList.remove("btn-dark")
              }
            }
          }
          else{
            var buttons = document.getElementsByClassName("btn")
            for (let element of buttons){
              element.classList.add("btn-dark")
              if (element.classList.contains("btn-light")){
                element.classList.remove("btn-light")
              }
            }
          }
        }

        function changeNavLink(darkMode){
          var buttons = document.getElementsByClassName("nav-pills")
          var buttons2 = document.getElementsByClassName("nav-link")

          if (darkMode){
            for (let element of buttons){
              element.classList.add("dark-pills")
              element.classList.remove("light-pills")
            }
            for (let element of buttons2){
              element.classList.add("dark-link")
              element.classList.remove("light-link")
            }
          }
          else{
            for (element of buttons){
              element.classList.add("light-pills")
              element.classList.remove("dark-pills")
            }
            for (element of buttons2){
              element.classList.add("light-link")
              element.classList.remove("dark-link")
            }
          }
        }

        function changeProgress(darkmode){
          let progressBar = document.getElementById("prayerProgress")
          if (progressBar != undefined){
            if (darkmode && progressBar.classList.contains("bg-dark")){
              progressBar.classList.remove("bg-dark")
              progressBar.classList.add('bg-light')
            }
            else if (!darkmode && progressBar.classList.contains("bg-light")){
              progressBar.classList.remove("bg-light")
              progressBar.classList.add('bg-dark')
            }
          }
          
        }
      }
  };