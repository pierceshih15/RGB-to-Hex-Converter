// 初始變數
const inputZone = document.querySelector('.inputZone')
const outputRed = document.getElementById('outputRed');
const outputGreen = document.getElementById('outputGreen');
const outputBlue = document.getElementById('outputBlue');
const body = document.querySelector('body')
const hexCodeValue = document.querySelector('.hexCode');

// 共用變數
let numRed = 0;
let numGreen = 0;
let numBlue = 0;

// 事件綁定，選擇 input 事件，即時更新 RGB 編碼 / 背景顏色 / HEX色碼
// 考量需要立即更新呈現，因此，不使用提示所給的 change 事件
inputZone.addEventListener('input', function (e) {
    // 判斷目前的所選擇的區塊顏色
    let inputColor = e.target.id;
    // 取出使用者目前選擇的色碼數字
    let inputValue = e.target.value;

    // 將上述變數放入調用函式執行，完成 取出色碼 / 更新色碼數字 / 更新背景顏色 / 呈現 Hex 文字
    getColorCode(inputColor, inputValue);
})

// 此函式負責 取出色碼 / 更新色碼數字 / 更新背景顏色 / 呈現 Hex 文字
function getColorCode(inputColor, inputValue) {
    // 判斷式，處理不同區塊顏色的情況
    switch (inputColor) {
        // Step 1: 取出使用者輸入的色碼值
        // Step 2: 更新選擇器右邊色碼數字
        case 'inputRed':
            numRed = Number(inputValue);
            outputRed.innerHTML = numRed;
            break;
        case 'inputGreen':
            numGreen = Number(inputValue);
            outputGreen.innerHTML = numGreen;
            break;
        case 'inputBlue':
            numBlue = Number(inputValue);
            outputBlue.innerHTML = numBlue;
            break;
        default:
            break;
    }
    // Step 3: 更新背景顏色
    autoChangeBackgroundColor();
    // Step 4: 呈現 Hex 文字
    RGBconvertToHex();
}

// 依照使用者選擇，自動調整背景顏色
function autoChangeBackgroundColor() {
    let RGB = `rgb(${numRed}, ${numGreen}, ${numBlue})`;
    console.log(RGB);
    // 更新 body 背景顏色
    body.style.backgroundColor = RGB;
}

// 依照使用者選擇，自動更新色碼資訊
function RGBconvertToHex() {
    var r = toHex(numRed);
    var g = toHex(numGreen);
    var b = toHex(numBlue);

    let HexString = "#" + r + g + b;
    console.log(HexString);

    hexCodeValue.innerHTML = HexString;
}

// 透過 toHex()，自動調整相對應 Hex 字串
function toHex(n) {
    var hex = n.toString(16);
    while (hex.length < 2) {
        hex = "0" + hex;
    }

    return hex;
}