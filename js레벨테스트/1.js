// 서술형

// 1. 동기와 비동기 처리에 대하여 설명하라

// -> 동기는 프로그래밍의 명령 실행을 순차적으로하는 것이다. 그러나 api 통신같이 시간이 오래 걸리는 작업을
//     동기적으로 하게 되면 기다리는 시간이 많아진다. 따라서 api통신을 호출하고 결과가 나올때까지 기다리는게 아니라
//     그 다음 명령문을 실행하다가, 결과가 돌아오면 이전의  작업을 이어 나가는 방식이 비동기 처리이다.

// 2. 싱글 스레드와 멀티 스레드에 대하여 설명하라

// -> 싱글 스레드는 동시에 한가지 일(프로세스)를 할 수 있고 멀티 스레드는 동시에 여러가지 일(프로세스)를 할 수 있다

// 3. 쿠키와 세션, 로컬저장소의 차이점에 대하여 설명하라

// -> 로컬저장소 : 만료기간이 없이 데이터가 유저의 컴퓨터에 저장된다
//     쿠키 : 만료기간이 있고 데이터가 유저가 컴퓨터 브라우저를 꺼도 유지된다
//     세션 : 만료기간이 있고 데이터가 유저가 브라우저에 접속 중일 때만 유지된다

// 4. 콜백지옥이 무엇이고 이것을 해결하기 위한 방안은 무엇인지 설명하라

// -> 콜백지옥이란 함수가 함수를 호출하는 콜백 작업을 연속적으로 진행하여 코드의 가독성이 좋지 않음을 의미한다. 해결방안으로 비동기적인 작업인
//     async/await 이나 .then/.catch 를 사용 할 수 있다
    
// 5. Node.js 이벤트 큐 동작원리에 대하여 설명하라

// -> 모름

// 6. GET , POST 방식에 대하여 설명하라

// -> 데이터 요청시 어떤 종류의 요청인지를 알려주는 방식이다. GET 요청은 데이터를 조회해서 가져와달라는 요청이고 POST 요청은 입력한 데이터를 저장해
//     달라는 요청이다

// 7. 자바스크립트의 배열이 실제 자료구조 배열이 아닌데 그 이유는 무엇인가?

// -> 자바스크립트의 모든 것은 객체이다. 따라서 자바스크립트의 배열은 배열이 아니라 객체이다. js의 배열은 배열처럼 보이지만 사실은 인덱스 값(0,1,2 등등) 이 객체의
//     키 값이고 그 배열값이 객체의 값이다

// 8. http와 https의 차이점은 무엇인가?

// -> http와 https 의 차이점은 마지막(secure) 인데 제 3자인 기관이 어떤 홈페이지를 안전하다고 판단해서 발급해 주는 것이다.

// 9. 브라우저 렌더링 과정에 대하여 설명하라

// -> url주소에 대해서 backend로 요청이 되고, 그 요청 주소에 따른 데이터를 backend에서 frontend로 전달해주면 fronted가 데이터를 받아 페이지를 렌더링한다
//     단, 서버사이드 렌더링이라면 url 요청이 왔을 때 backend가 직접 페이지를 렌더링 하고 그 데이터를 frontend로 전달해 바로 보여주게 된다

// 10. 호이스팅이 무엇인지 서술하라

// -> 모름

// 코드 구현

// DOM 메모리 누수

// -> 모름

// 소수 구하기 (완)

// function isPrime(n) {
//     let result;

//     if ( n == 2){
//         result = true;
//         return result;
//     }
//     for(let i = 2; i<n; i++){
//         if(n % i == 0){
//             result = false;
//             break;
//         }
//         result = true;
//     }
//     return result;
// }

// console.log(isPrime(2));
// console.log(isPrime(17));
// console.log(isPrime(3));
// console.log(isPrime(169));

// 소인수 분해(완)

// function primeFactor(n) {
//     let result = [];
//     for( let i =2; i<=n; i++){
//         if(n % i == 0){
//             result.push(i);
//         }
//         continue;
//     }
//     let newResult = result.filter((i)=>{
//         for(let k = 2; k < i ; k++){
//             if( i % k == 0){
//                 return false;
//             }
//         }
//         return true;
//     })

//     return newResult;
// }

// console.log(primeFactor(11))
// console.log(primeFactor(10))
// console.log(primeFactor(2))
// console.log(primeFactor(20))

// 십진수를 이진수로 변환하기
    // 방법 1 .재귀함수 없이 구현
    // function base10ToStringHelper(quotient) {
    //     // 여기서 몫과 나머지를 계속 나눠서 배열에 넣는다
    //     let binary = [];
    //     while(quotient> 0){
    //         binary.push(quotient % 2);
    //         quotient = Math.floor(quotient/ 2);
    //     }
    //     console.log(binary);
    //     return binary;
    // }

    // base10ToStringHelper(1000);

    // 방법 2. 재귀함수로 구현
    function base10ToString(n) {
        function base10ToStringHelper(n){
            if(n === 0){
                return "";
            }
            return base10ToStringHelper(Math.floor(n / 2)) + (n % 2).toString();
        }

        return base10ToStringHelper(n);
    }
    console.log(base10ToString(100));


    // 배열 출력하기
    // 배열의 모든 순열 출력할 것
    // 재귀함수 이용

    function swap(strArr, idx1, idx2) {

    }
    function permute(strArr, begin, end) {

    }
    function permuteArray(strArr) {
        
    }
    permuteArray(["1","2","3"]);    