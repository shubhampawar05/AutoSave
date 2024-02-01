let textarea = document.getElementById("input");

textarea.addEventListener("input", () => {
  let value = document.getElementById("input").value;
  console.log(value);
  localStorage.setItem("key", value);

  
});
if (localStorage.getItem("key")!=='') {
    textarea.innerText = localStorage.getItem("key");
  }