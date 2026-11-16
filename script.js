function calculateBudget() {
  let budget = document.getElementById("budget").value;
  let food = document.getElementById("food").value;
  let transport = document.getElementById("transport").value;
  let other = document.getElementById("other").value;

  if (budget === "" || food === "" || transport === "" || other === "") {
    document.getElementById("budgetResult").innerHTML = "請先填寫所有金額。";
    return;
  }

  let budgetNumber = Number(budget);
  let foodNumber = Number(food);
  let transportNumber = Number(transport);
  let otherNumber = Number(other);

  if (isNaN(budgetNumber) || isNaN(foodNumber) || isNaN(transportNumber) || isNaN(otherNumber)) {
    document.getElementById("budgetResult").innerHTML = "金額請輸入數字。";
    return;
  }

  if (budgetNumber < 0 || foodNumber < 0 || transportNumber < 0 || otherNumber < 0) {
    document.getElementById("budgetResult").innerHTML = "金額不能小於 0。";
    return;
  }

  let remaining = budgetNumber - foodNumber - transportNumber - otherNumber;

  if (remaining >= 0) {
    document.getElementById("budgetResult").innerHTML = "預計剩餘金額：" + remaining + " 元。";
  } else {
    document.getElementById("budgetResult").innerHTML = "目前超出預算：" + (0 - remaining) + " 元。";
  }
}

function checkQuiz() {
  let answer1 = document.getElementById("quiz1").value;
  let answer2 = document.getElementById("quiz2").value;
  let answer3 = document.getElementById("quiz3").value;
  let score = 0;

  if (answer1 === "a") {
    score = score + 1;
  }

  if (answer2 === "b") {
    score = score + 1;
  }

  if (answer3 === "c") {
    score = score + 1;
  }

  let feedback = "";

  if (score === 3) {
    feedback = "太好了，三題都答對！";
  } else if (score >= 1) {
    feedback = "做得不錯，可以再看看課業和生活指南。";
  } else {
    feedback = "別擔心，回去看看指南，再試一次。";
  }

  document.getElementById("quizResult").innerHTML = "你答對了 " + score + " / 3 題。" + feedback;
}
