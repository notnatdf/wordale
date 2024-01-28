function appStart() {
  const handleKeydown = (event) => {
    const key = event.key;
    const keyCode = event.keyCode;
    console.log(event.key, event.keyCode);
    const thisBlock = document.querySelector(".board-colunmn[data-index='00']");
    thisBlock.innerText = key;
  };
  window.addEventListener("keydown", handleKeydown);
}

appStart();
