function goToHeader() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  window.onscroll = function() {
    var botaoTopo = document.getElementById("botao-topo");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      botaoTopo.classList.add("mostrar");
    } else {
      botaoTopo.classList.remove("mostrar");
    }
  };