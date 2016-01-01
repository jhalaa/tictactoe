      var user = 1
      function canvasClicked(element) {
        var cellToBeFilled = element.getContext("2d");
        if(user == 1) {
            cellToBeFilled.beginPath();
            cellToBeFilled.moveTo(10,10);
            cellToBeFilled.lineTo(40,40);
            cellToBeFilled.moveTo(40,10);
            cellToBeFilled.lineTo(10,40);
            cellToBeFilled.stroke();
            cellToBeFilled.closePath();
            user =2;
          }
          else {
            cellToBeFilled.beginPath();
            cellToBeFilled.arc(25,25,20,0,Math.PI*2,true);
            cellToBeFilled.stroke();
            cellToBeFilled.closePath();
            user =1;
          }

      }
