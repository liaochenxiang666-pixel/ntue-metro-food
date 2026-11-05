function randomPickFood() {
  const lines = ['紅線', '藍線', '棕線'];
  const randomLine = lines[Math.floor(Math.random() * lines.length)];
  if (confirm(`🎲 為您隨機抽到的是【${randomLine}】！是否直接滑至地圖？`)) {
    location.href = '#map';
  }
}

function openRedModal() { document.getElementById('redLineModal').style.display = 'flex'; }
function closeRedModal(event) { document.getElementById('redLineModal').style.display = 'none'; }
function openBlueModal() { document.getElementById('blueLineModal').style.display = 'flex'; }
function closeBlueModal(event) { document.getElementById('blueLineModal').style.display = 'none'; }
function openBrownModal() { document.getElementById('brownLineModal').style.display = 'flex'; }
function closeBrownModal(event) { document.getElementById('brownLineModal').style.display = 'none'; }

/* 🌟 點擊車站時：動態切換三家店的標題、圖片、文案、專屬 MENU 底圖以及精準 Google Maps 網址 */
function openSandwichPage(lineType, bgColor) {
  closeRedModal(); 
  closeBlueModal(); 
  closeBrownModal();
  
  const page = document.getElementById('sandwichPage');
  const titleEl = document.getElementById('heroTitleText');
  const foodImgEl = document.getElementById('heroFoodImg');
  const menuBgImgEl = document.getElementById('menuBgImg'); 
  const mapHotspotLink = document.getElementById('mapHotspotLink');

  // 第一欄元素
  const col1Tag = document.getElementById('col1Tag');
  const col1Title = document.getElementById('col1Title');
  const col1Desc = document.getElementById('col1Desc');

  // 第二欄元素
  const col2Tag = document.getElementById('col2Tag');
  const col2Title = document.getElementById('col2Title');
  const col2Desc = document.getElementById('col2Desc');

  // 第三欄元素
  const col3Tag = document.getElementById('col3Tag');
  const col3Title = document.getElementById('col3Title');
  const col3Desc = document.getElementById('col3Desc');

  // 設定整頁背景色
  page.style.backgroundColor = bgColor;

  // 移除先前的佈景主題 Class
  page.classList.remove('red-theme', 'blue-theme', 'brown-theme');

  if (lineType === 'brown') {
    // 棕線：角屋關東煮
    page.classList.add('brown-theme');
    titleEl.innerText = "ODEN";
    foodImgEl.src = "images/關東煮.png"; 
    menuBgImgEl.src = "images/棕線的MENU.png"; 
    mapHotspotLink.href = "https://www.google.com/maps/place/%E8%A7%92%E5%B1%8B%E9%97%9C%E6%9D%B1%E7%85%AE/@25.02855,121.5436023,17z/data=!3m1!4b1!4m6!3m5!1s0x3442aa2d050388d9:0x58a19b2a19bfb829!8m2!3d25.02855!4d121.5461772!16s%2Fg%2F1v3_0cl2?entry=ttu";
    
    col1Tag.innerHTML = "招牌<br>特色";
    col1Title.innerText = "手作鮮熬關東煮";
    col1Desc.innerText = "慢火熬煮的清甜高湯，搭配吸附滿滿精華的道地手工食料與鮮甜蘿蔔。";

    col2Tag.innerHTML = "在地<br>氛圍";
    col2Title.innerText = "日式溫馨木屋";
    col2Desc.innerText = "暖黃燈光與日式屋台氛圍，在台北街頭點亮一盞療癒人心的溫暖燈火。";

    col3Tag.innerHTML = "探索<br>提示";
    col3Title.innerText = "解鎖完整菜單";
    col3Desc.innerText = "向下滑動解鎖完整菜單與交通指南，品嚐一口暖心暖胃的日式真味。";

  } else if (lineType === 'blue') {
    // 藍線：POWER BEEF
    page.classList.add('blue-theme');
    titleEl.innerText = "DONBURI";
    foodImgEl.src = "images/丼飯.png"; 
    menuBgImgEl.src = "images/藍線的MENU.png"; 
    mapHotspotLink.href = "https://www.google.com/maps/place/Power+Beef+%E6%97%A5%E5%BC%8F%E7%83%A4%E7%89%9B%E8%82%89%E9%A3%饭%E5%B0%8F%E9%85%92%E9%A4%A8/@25.041437,121.5266201,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a97bb9d32ff7:0xeeeec1496bdd2951!8m2!3d25.041437!4d121.529195!16s%2Fg%2F11g6j94k8g?entry=ttu";
    
    col1Tag.innerHTML = "招牌<br>特色";
    col1Title.innerText = "職人手作厚切熟成";
    col1Desc.innerText = "精選頂級肉品精準控溫熟成，層層堆疊出肉汁爆發與極致軟嫩的奢華口感。";

    col2Tag.innerHTML = "在地<br>氛圍";
    col2Title.innerText = "日式質感與木質";
    col2Desc.innerText = "結合日式質感風格與溫潤木質調，打造巷弄裡兼具個性與質感的聚落。";

    col3Tag.innerHTML = "探索<br>提示";
    col3Title.innerText = "解鎖完整菜單";
    col3Desc.innerText = "向下滑動解鎖完整菜單與交通指南，跟著肉食主義者展開味蕾大冒險。";

  } else {
    // 紅線：不然 BRUN
    page.classList.add('red-theme');
    titleEl.innerText = "BRUNCH";
    foodImgEl.src = "images/三明治.png"; 
    menuBgImgEl.src = "images/紅線的MENU.png"; 
    mapHotspotLink.href = "https://www.google.com/maps/place/BRUN%E4%B8%8D%E7%84%B6-%E4%BF%A1%E7%BE%A9%E5%BA%97(%E6%8D%B7%E9%81%8B%E5%A4%A7%E5%AE%89%E7%AB%99)/@25.0335569,121.5449205,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ab2cc8d11fd7:0xdb796d4f7c30e315!8m2!3d25.0335569!4d121.5474954!16s%2Fg%2F11s7ztt2nn?entry=ttu";
    
    col1Tag.innerHTML = "招牌<br>特色";
    col1Title.innerText = "經典法式早午餐";
    col1Desc.innerText = "嚴選新鮮食材與手作麵包，演繹城市巷弄裡的優雅晨光食光與精緻風味。";

    col2Tag.innerHTML = "在地<br>氛圍";
    col2Title.innerText = "歐風日光玻璃屋";
    col2Desc.innerText = "通透采光與植栽綠意完美交織，打造都會叢林中愜意放鬆的質感聚落空間。";

    col3Tag.innerHTML = "探索<br>提示";
    col3Title.innerText = "解鎖完整菜單";
    col3Desc.innerText = "向下滑動解鎖完整菜單與交通指南，展開屬於你的優雅週末味蕾探險。";
  }
  
  // 顯示頁面並捲回頂部
  page.style.display = 'block';
  page.scrollTop = 0;
}

/* 關閉視窗 */
function closeSandwichPage() {
  document.getElementById('sandwichPage').style.display = 'none';
}