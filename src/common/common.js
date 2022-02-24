module.exports = {
    foo: function () {
      // whatever
    },
    toggleDarkMode: function toggleDarkMode(darkMode, mainCSS){
        var head = document.getElementsByTagName('HEAD')[0]; 
        var link = document.createElement('link');
        link.rel = 'stylesheet'; 
        link.type = 'text/css';
        var css = document.createElement('link');
        css.rel = 'stylesheet'; 
        css.type = 'text/css';
        css.href = mainCSS
        var shaders = document.getElementsByClassName("shader")
        if (darkMode){
          link.href = '../../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.css';
          changeButtons(darkMode)
          document.body.style.borderColor = "#FFFFFF";
          for (let element of shaders){
            element.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
          }
        }
        else{
          link.href = '../../node_modules/bootstrap/dist/css/bootstrap.css';
          changeButtons(darkMode)
          document.body.style.borderColor = "black";
          for (let element of shaders){
            element.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
          }
        }
        head.appendChild(link); 
        head.appendChild(css); 


        function changeButtons(darkMode){
          if (darkMode){
            var buttons = document.getElementsByClassName("btn")
            for (let element of buttons){
              console.log(element)
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

      }
  };