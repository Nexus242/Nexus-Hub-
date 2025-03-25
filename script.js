// ฟังก์ชันดาวน์โหลดไฟล์
function downloadFile() {
    const url = "https://example.com/file.zip"; // ใส่ URL ของไฟล์ที่ต้องการดาวน์โหลด
    const link = document.createElement('a');
    link.href = url;
    link.target = ''; 
    link.rel = 'noopener noreferrer';
    link.click();
}

// ฟังก์ชันเปิด Discord
function openDiscord() {
    window.open('https://discord.gg/kbeR5CHuFJ', '_blank'); 
}

// ฟังก์ชันเปิด YouTube
function openYouTube() {
    window.open('https://www.youtube.com/@Zhinresvarant/videos', '_blank'); 
}

