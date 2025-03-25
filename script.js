function downloadFile(url) {
    const link = document.createElement('a');
    link.href = url; // URL ของไฟล์ที่ต้องการดาวน์โหลด
    link.target = ''; // เปิดลิงก์ในแท็บใหม่ (เลือกใช้หรือลบออกได้)
    link.rel = 'noopener noreferrer'; // เพิ่มความปลอดภัย
    link.click();
}


// ฟังก์ชันเปิด Discord
function openDiscord() {
    window.open('https://discord.gg/kbeR5CHuFJ', '_blank'); // เปิด Discord ในแท็บใหม่
}

// ฟังก์ชันเปิด YouTube
function openYouTube() {
    window.open('https://www.youtube.com/@Zhinresvarant/videos', '_blank'); // เปิด YouTube ช่องของคุณในแท็บใหม่
}
// เช็คและเพิ่มจำนวนผู้เข้าชม
function checkVisitors() {
    let visitors = localStorage.getItem('visitorCount'); // อ่านข้อมูลจาก localStorage
    if (visitors) {
        visitors = parseInt(visitors) + 1; // เพิ่มจำนวนผู้เข้าชม
    } else {
        visitors = 1; // ถ้าไม่เคยมีการเข้าชมมาก่อนตั้งค่าเริ่มต้นเป็น 1
    }
    
    localStorage.setItem('visitorCount', visitors); // เก็บจำนวนผู้เข้าชมใน localStorage
    displayVisitorCount(visitors); // แสดงจำนวนผู้เข้าชม
}

// ตรวจสอบว่าผู้ใช้เคยเข้าชมเว็บไซต์หรือยัง
function checkVisitors() {
    let visitorCount = localStorage.getItem("visitorCount"); // ดึงค่าจำนวนผู้เข้าชมจาก localStorage
    let hasVisited = localStorage.getItem("hasVisited"); // ตรวจสอบว่าผู้ใช้เคยเข้าชมหรือไม่

    if (!visitorCount) {
        visitorCount = 0;
    } else {
        visitorCount = parseInt(visitorCount);
    }

    if (!hasVisited) {
        // ถ้ายังไม่เคยเข้าชม เพิ่มจำนวนขึ้น 1
        visitorCount++;
        localStorage.setItem("visitorCount", visitorCount);
        localStorage.setItem("hasVisited", "true"); // บันทึกว่าผู้ใช้เคยเข้าชมแล้ว
    }

    displayVisitorCount(visitorCount);
}

// ฟังก์ชันสำหรับแสดงจำนวนผู้เข้าชม
function displayVisitorCount(count) {
    let visitorElement = document.getElementById("visitor-count");
    if (!visitorElement) {
        visitorElement = document.createElement("div");
        visitorElement.id = "visitor-count";
        document.body.appendChild(visitorElement);
    }
    visitorElement.innerHTML = `<i class="fas fa-eye"></i> ${count} ผู้เข้าชม`;
}

// เรียกใช้งานฟังก์ชันเช็คจำนวนผู้เข้าชมเมื่อเว็บไซต์โหลด
window.onload = checkVisitors;
