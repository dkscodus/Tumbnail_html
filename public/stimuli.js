const sets = [
    ['images/set1_a.jpg', 'images/set1_b.jpg', 'images/set1_c.jpg'],
    ['images/set2_a.jpg', 'images/set2_b.jpg', 'images/set2_c.jpg'],
    ['images/set3_a.jpg', 'images/set3_b.jpg', 'images/set3_c.jpg']
  ];
  
  let currentSet = 0;
  let responses = [];
  
  function loadSet(index) {
    const [a, b, c] = sets[index];
    document.getElementById("thumbA").src = a;
    document.getElementById("thumbB").src = b;
    document.getElementById("thumbC").src = c;
    document.querySelectorAll(".thumb").forEach(img => {
      img.classList.remove("selected");
      img.onclick = () => selectThumb(img.alt);
    });
    document.getElementById("nextSetBtn").disabled = true;
  }
  
  function selectThumb(choice) {
    document.querySelectorAll(".thumb").forEach(img => {
      img.classList.remove("selected");
    });
    document.getElementById(`thumb${choice}`).classList.add("selected");
  
    responses.push({
      set: currentSet + 1,
      selected: choice
    });
  
    document.getElementById("nextSetBtn").disabled = false;
  }
  
  document.getElementById("nextSetBtn").addEventListener("click", () => {
    currentSet++;
    if (currentSet < sets.length) {
      loadSet(currentSet);
    } else {
      localStorage.setItem("selections", JSON.stringify(responses));
      window.location.href = "evaluate.html";
    }
  });
  
  loadSet(currentSet);
  
  // 모드 적용
  document.body.className = localStorage.getItem("theme") || "light";
  