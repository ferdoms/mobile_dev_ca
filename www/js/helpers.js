var helpers = {
    updateElements:function(className,content){
        let array = document.getElementsByClassName(className)
        for (let index = 0; index < array.length; index++) {
          const element = array[index];
          element.innerHTML = content;
        }
      },
      updateImages:function(className,src){
        let array = document.getElementsByClassName(className)
        for (let index = 0; index < array.length; index++) {
          const element = array[index];
          element.src = src;
        }
      }
}