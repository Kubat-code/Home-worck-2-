//! TAsk-1.1
const h2Tag = document.querySelector("h2");
h2Tag.style.fontSize = "50px";
h2Tag.style.color = "red";
h2Tag.textContent = "Popular products";
const aside = document.querySelector("aside");
aside.remove();
const h3Tag = document.querySelector("h3");
h3Tag.classList = "small";
// !Task-2
let socials = [
  {
    icon: "https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png",
    title: "Tik-Tok",
    description:
      "TikTok («ТикТок») — сервис для создания и просмотра коротких видео, принадлежащий китайской компании ByteDance. Запущенная в 2017 году международная версия является ведущей видеоплатформой для коротких видео в Китае и становится всё более популярной в других странах, став одним из наиболее быстрорастущих и скачиваемых приложений.",
    link: "https://www.tiktok.com/ru-RU/",
  },
];
const div1 = document.getElementById("div1");
socials.forEach((item) => {
  const { icon, title, description, link } = item;
  div1.style.display = "flex";
  div1.style.justifyContent = "center";
  div1.style.alignItems = "center";
  div1.style.flexDirection = "column";
  div1.style.gap = "10px";
  div1.style.margin = "auto";
  div1.style.border = "5px solid black";
  const imgTag = document.createElement("img");
  imgTag.src = icon;
  imgTag.style.width = "50px";
  imgTag.style.height = "50px";
  const titleTag = document.createElement("h1");
  titleTag.textContent = title;
  titleTag.style.height = "10px";
  titleTag.style.fontFamily = "sans-serif";
  const descriptionTag = document.createElement("p");
  descriptionTag.textContent = description;
  descriptionTag.style.width = "400px";
  descriptionTag.style.textAlign = "center";
  descriptionTag.style.fontFamily = "sans-serif";
  const aTag = document.createElement("a");
  aTag.href = link;
  const linkTag = document.createElement("button");
  linkTag.textContent = aTag.textContent = "READ MORE";
  linkTag.style.border = "none";
  linkTag.style.borderRadius = "25px";
  linkTag.style.color = "white";
  linkTag.style.backgroundColor = "black";
  linkTag.style.width = "200px";
  linkTag.style.height = "50px";
  linkTag.style.fontSize = "20px";
  linkTag.style.fontFamily = "sans-serif";
  linkTag.type = "submit";
  linkTag.src = aTag;
  div1.append(imgTag, titleTag, descriptionTag, linkTag);
});