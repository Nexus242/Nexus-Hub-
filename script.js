function downloadFile() {
    window.open('https://filerift.com/file/UpWYkU5sAZ', '_blank'); 
}
function openDiscord() {
    window.open('https://discord.gg/kbeR5CHuFJ', '_blank'); 
}
function openYouTube() {
    window.open('https://www.youtube.com/@Zhinresvarant/videos', '_blank'); 
}
document.addEventListener("dragstart", function(event) {
    event.preventDefault();
});
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && (event.key === "c" || event.key === "u" || event.key === "s")) {
        event.preventDefault();
    }
});
