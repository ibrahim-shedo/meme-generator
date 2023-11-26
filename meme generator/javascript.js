const generateMemeBtn = document.querySelector(".generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle  =document.querySelector(".meme-generator .meme-title");
const memeAuther = document.querySelector(".meme-generator .meme-auther");


const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
  };


const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title, data.author);
      });
  };
  generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();



generateMemeBtn.addEventListener("click",generateMeme);
