/*
백엔드용 JavaScript 예시 파일입니다.
*/
const express = require("express");
const nunjucks = require("nunjucks")

//express 앱 변수를 선언합니다.
const app = express()
//다음과 같이 템플릿 엔진을 express에 적용합니다.
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

//이제 GET 요청을 받아 페이지를 띄워봅시다.
app.get("/", (request, response)=>{
    //response.render을 통해 렌더링을 하며 html파일을 템플릿 엔진으로 렌더링 합니다.
    //여기서는 Array(리스트), String(글자) 변수를 html로 넘기겠습니다.
    response.render("example.html", {
        hello:"Hello World",
        items:["A","B","C","D"],
        object:{a:"b", c:"d"}
    })
})
//웹 서버를 8080 포트에서 실행하는 코드입니다.
app.listen(8081, ()=>{
    //이 것은 콜백 함수라고 하는데, 자바스크립트를 배워가면서 천천히 알아봐도 늦지 않을 것 같습니다.
    console.log("서버가 실행되었습니다.")
})