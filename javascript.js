
      function canvasClicked(numb) {
        var c = document.getElementById(numb);
        var cxt = c.getContext("2d");
        /*cxt.beginPath();
            cxt.moveTo(10,10);
            cxt.lineTo(40,40);
            cxt.moveTo(40,10);
            cxt.lineTo(10,40);
            cxt.stroke();
            cxt.closePath();*/
            cxt.beginPath();
            cxt.arc(25,25,20,0,Math.PI*2,true);
            cxt.stroke();
            cxt.closePath();
      }
