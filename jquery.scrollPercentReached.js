(function(){
  $.fn.scrollPercentReached = function inFunc(scrollPercent){

    var target = this,
        nativeTarget = this.get()[0],
        top = target.scrollTop(),
        maxYScrollPos,
        percentScrolled,
        maxReached = false,
        itemFullHeight = Math.max(nativeTarget.scrollHeight, 
                                  nativeTarget.offsetHeight, 
                                  nativeTarget.clientHeight,
                                  nativeTarget.scrollHeight, 
                                  nativeTarget.offsetHeight );

    function GetMaxScrollValue(){
      return  itemFullHeight;
    }

    maxYScrollPos = GetMaxScrollValue() - target.height();
    percentScrolled = Math.round((top*100) / maxYScrollPos);

    if(percentScrolled >= scrollPercent){
      maxReached = true;
    }
    return maxReached;
  };
  
 })();
