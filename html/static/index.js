$('.x-sform').submit(function(e){
    e.preventDefault();
    var remote = $('.x-remote').val();
    if(!remote){
        $('.x-remote').focus();
        return false;
    }

    if (document.xsform.selectpicker.value == "CPU") {
      window.location = "/pprof.html?remote=" + remote + "&type=profile&stype=pprof";
    }
    else if (document.xsform.selectpicker.value == "HEAP") {
      window.location = "/pprof.html?remote=" + remote + "&type=heap&stype=pprof";
    }
    else if (document.xsform.selectpicker.value == "Growth") {
      window.location = "/pprof.html?remote=" + remote + "&type=growth&stype=pprof";
    }
    else if (document.xsform.selectpicker.value == "CPU FlameGraph") {
      window.location = "/pprof.html?remote=" + remote + "&type=profile&stype=flamegraph";
    }
    else if (document.xsform.selectpicker.value == "HEAP FlameGraph") {
      window.location = "/pprof.html?remote=" + remote + "&type=heap&stype=flamegraph";
    }
    else if (document.xsform.selectpicker.value == "Growth FlameGraph") {
      window.location = "/pprof.html?remote=" + remote + "&type=growth&stype=flamegraph";
    }
      
    return false;
});
