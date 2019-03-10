// Red
const inputRed = document.getElementById('inputRed');
const outputRed = document.getElementById('outputRed');

// Green
const inputGreen = document.getElementById('inputGreen');
const outputGreen = document.getElementById('outputGreen');

// Blue
const inputBlue = document.getElementById('inputBlue');
const outputBlue = document.getElementById('outputBlue');

// BackgroudColor 和 HexCodeValue
const body = document.querySelector('body')
const hexCodeValue = document.querySelector('.hexCode');

// 共用變數
let numRed = 0;
let numGreen = 0;
let numBlue = 0;

// 事件綁定，選擇 input 事件，即時更新 RGB 編碼 / 背景顏色 / HEX色碼
// 考量需要立即更新呈現，因此，不使用提示所給的 change 事件
inputRed.addEventListener('input', getRedColorCode);
inputGreen.addEventListener('input', getGreenColorCode);
inputBlue.addEventListener('input', getBlueColorCode);

// 取出 RGB 的 Red 色碼
function getRedColorCode(e) {
    // Step 1: 取出使用者輸入的色碼值
    numRed = Number(e.target.value);
    // console.log(numRed);

    // Step 2: 更新選擇器右邊色碼數字
    outputRed.innerHTML = numRed;
    // Step 3: 更新背景顏色
    autoChangeBackgroundColor()
    // Step 4: 呈現 Hex 文字
    RGBconvertToHex()
}

// 取出 RGB 的 Green 色碼
function getGreenColorCode(e) {
    // Step 1: 取出使用者輸入的色碼值
    numGreen = Number(e.target.value);
    // console.log(numGreen);

    // Step 2: 更新選擇器右邊色碼數字
    outputGreen.innerHTML = numGreen;
    // Step 3: 更新背景顏色
    autoChangeBackgroundColor()
    // Step 4: 呈現 Hex 文字
    RGBconvertToHex()
}

// 取出 RGB 的 Blue 色碼
function getBlueColorCode(e) {
    // Step 1: 取出使用者輸入的色碼值
    numBlue = Number(e.target.value);
    // console.log(numBlue);

    // Step 2: 更新選擇器右邊色碼數字
    outputBlue.innerHTML = numBlue;
    // Step 3: 更新背景顏色
    autoChangeBackgroundColor()
    // Step 4: 呈現 Hex 文字
    RGBconvertToHex()
}

// 依照使用者選擇，自動調整背景顏色
function autoChangeBackgroundColor() {
    let RGB = `rgb(${numRed}, ${numGreen}, ${numBlue})`
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