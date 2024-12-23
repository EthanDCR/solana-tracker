// https://api.geckoterminal.com/api/v2

document.getElementById("button").addEventListener("click",async () => {
  try {
        let base = "https://api.geckoterminal.com/api/v2/networks";
        let res = await fetch(base); // add api extension here.
        let data = await res.json();
      console.log(data);
} 




catch (error) {
    console.error(error, "ERROR there was a problem servicing your request.");
  }
});
