document.getElementById("preSurveyForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const data = {
      gender: formData.get("gender"),
      age: formData.get("age"),
      factors: formData.getAll("factors"),
      influence: formData.get("influence"),
      theme: formData.get("theme")
    };
  
    // 배경 모드 저장
    localStorage.setItem("theme", data.theme);
    document.body.className = data.theme;
  
    // Firebase 저장
    firebase.database().ref("responses/preSurvey").push(data)
      .then(() => {
        window.location.href = "stimuli.html"; // 다음 페이지
      });
  });
  
  // 초기 모드 적용
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.className = savedTheme;
  }
  