(function(){
  $.fn.scrollPercentReached = function inFunc(scrollPercent){

    var target = this,
        nativeTarget = this.get()[0],
        top = target.scrollTop(),
        maxYScrollPos,
        percentScrolled,
        maxReached = false,
        itemFullHeight = Math.max(nativeTarget.scrollHeight ? nativeTarget.scrollHeight : 0,
                                  nativeTarget.offsetHeight ? nativeTarget.offsetHeight : 0,
                                  nativeTarget.clientHeight ? nativeTarget.clientHeight : 0,
                                  nativeTarget.scrollHeight ? nativeTarget.scrollHeight : 0,
                                  nativeTarget.offsetHeight ? nativeTarget.offsetHeight : 0,
                                  nativeTarget.innerHeight ? nativeTarget.innerHeight : 0 // if window
                                );

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
