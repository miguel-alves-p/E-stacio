/* ANIMAÇÃO SCROLL NA INTRODUÇÃO*/
    let scrollContainer = document.querySelector(" .intro-fotos"); let leftBtn = document.getElementById("leftBtn"); let rightBtn = document.getElementById("rightBtn"); scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
      scrollContainer.style.scrollBehavior = "auto"
    });

    rightBtn.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth"
      scrollContainer.scrollLeft += 920;
    })
    leftBtn.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth"
      scrollContainer.scrollLeft -= 920;
    })