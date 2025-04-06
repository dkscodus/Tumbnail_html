document.getElementById("evaluationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const reasons = formData.getAll("reasons");
    const nonreasons = formData.getAll("nonreasons");
    const selections = JSON.parse(localStorage.getItem("selections")) || [];
    const theme = localStorage.getItem("theme") || "light";
  
    const result = {
      theme,
      selections,
      reasons,
      nonreasons,
      timestamp: new Date().toISOString()
    };
  
    firebase.database().ref("responses/evaluation").push(result)
      .then(() => {
        alert("응답이 저장되었습니다. 감사합니다!");
        window.location.href = "index.html";
      });
  });
  
  // 모드 적용
  document.body.className = localStorage.getItem("theme") || "light";
  