// 시험 자료
const exams = [

    {
        grade: "3학년",
        year: "2026",
        term: "1학기 중간고사",
        subject: "국어"
    },

    {
        grade: "2학년",
        year: "2026",
        term: "1학기 중간고사",
        subject: "영어"
    },

    {
        grade: "1학년",
        year: "2026",
        term: "1학기 중간고사",
        subject: "수학"
    }

];


// 현재 선택된 학년
let selectedGrade = "전체";

// 현재 검색어
let searchText = "";


// 시험 자료를 화면에 표시하는 함수
function showExams() {

    const examList = document.querySelector(".exam-list");

    examList.innerHTML = "";


    const filteredExams = exams.filter(function(exam) {

        // 학년 조건
        const gradeMatch =
            selectedGrade === "전체" ||
            exam.grade === selectedGrade;


        // 검색 조건
        const searchTarget =
            exam.grade +
            exam.year +
            exam.term +
            exam.subject;

        const searchMatch =
            searchTarget.includes(searchText);


        return gradeMatch && searchMatch;

    });


    // 검색 결과가 없는 경우

    if (filteredExams.length === 0) {

        examList.innerHTML = `
            <p>
                검색 결과가 없습니다.
            </p>
        `;

        return;
    }


    // 시험 카드 만들기

    filteredExams.forEach(function(exam) {

        const card = document.createElement("div");

        card.className = "exam-card";


        card.innerHTML = `

            <div class="exam-info">
                ${exam.year}학년도 ·
                ${exam.grade} ·
                ${exam.term}
            </div>

            <h3>
                ${exam.subject}
            </h3>

            <div class="file-buttons">

                <a href="#">
                    시험지
                </a>

                <a href="#">
                    정답
                </a>

                <a href="#">
                    해설
                </a>

            </div>

        `;


        examList.appendChild(card);

    });

}


// 학년 버튼 가져오기

const gradeButtons =
    document.querySelectorAll(".grade-buttons button");


gradeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        selectedGrade =
            button.textContent.trim();

        showExams();

    });

});


// 검색창

const searchInput =
    document.querySelector(".search-box input");


searchInput.addEventListener("input", function() {

    searchText =
        searchInput.value.trim();

    showExams();

});


// 처음 홈페이지를 열었을 때 실행

showExams();
