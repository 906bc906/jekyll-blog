let imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
    const b = new URL(img.src);
    if (b.pathname.startsWith("/jekyll-blog/pages/note/attachments/")) {
    const a = img.src.split(".");
    a.splice(-1,0,"md");
    img.src = a.join(".");
    }
})