const data = document.getElementById('dataElement')
console.log(data)
console.log(data.dataset.pData) 
// 현재 html이 로드되기 전에 스크립트가 실행되어 정상적으로 안되나, 
// 페이지 로드 후 콘솔에서 실행하면 정상동작
// script tag에 defer 라는 attribute 추가하면 됨 (HTML 구조가 로드된 후 javascript를 실행하겠다.)