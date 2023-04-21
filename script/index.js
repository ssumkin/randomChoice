/*
제비 뽑기 js
총 인원 입력 > dropdown 으로 value 값 뽑아 내기
조 개수 입력 > dropdown 으로 value 값 뽑아 내기
리셋 버튼 > 클릭 시 모두 초기화
총 인원 조 개수로 나눈 수 중 가장 큰 수 저장
해당 숫자가 조 최대 인원
button click시 입력 받은 조 개수 중 랜덤 번호 생성
랜덤 출력으로 최대 인원이 채워진 조는 랜덤 번호 미출력

*/
let personnel = document.getElementById("personnel");
let group = document.getElementById("group");
let groupSet = document.getElementById("group-set");
let drawing = document.getElementById("drawing");
let result = document.getElementById("result");

let n=0, m=0; 

let groupArr;
let groupPer;
let excludedNumbers

groupSet.addEventListener("click", function(){
    n = personnel.value*1;
    m = group.value*1; 

    if(n < m) {
        alert("조 개수가 인원 보다 많습니다.\n재설정 해주세요.");
        return false;
    }

    groupArr = new Array(m);
    groupArr.fill(0);
    groupPer = Math.round(n / m); 
    excludedNumbers = new Array(m);
});


 



function randomGroup() { 
    
    let random;
    do {
    random = Math.floor((Math.random() * m) + 1);
    } while (excludedNumbers.includes(random));

    for(let i = 0; i < groupArr.length; i++) {
        if(groupArr[i] < groupPer) {
            if(i+1 == random) { 
                groupArr[i]++; 
                if(groupArr[i] == groupPer) {
                    excludedNumbers.push(i+1)
                }
                result.innerHTML = random+"조"; 
                console.log(groupArr); 
            } 
        }  
    }  
}

drawing.addEventListener("click", function(){   
    
    if(n < m) {
        alert("조 개수가 인원 보다 많습니다.\n재설정 해주세요.");
        return false;
    }

    if(n==0 && m==0) {
        alert("그룹 설정을 해주세요.");
        return false;
    }
    
    let click = 0;
    for(let i = 0; i < groupArr.length; i++) {
        click += groupArr[i];
    }
    if(n > click) {
         
        randomGroup(); 
    } else {
        result.innerHTML = "제비 뽑기 끝!";  
        result.style.fontSize = 40+"px"; 
    }
});









