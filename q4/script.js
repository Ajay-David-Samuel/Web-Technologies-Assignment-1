function calculateTotal(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total = total + scores[i];
  }
  return total;
}

function calculateAverage(total) {
  return total / 5;
}

function calculateFitnessLevel(average) {
  if (average >= 90) {
    return "Elite";
  } else if (average >= 80) {
    return "Advanced";
  } else if (average >= 70) {
    return "Intermediate";
  } else if (average >= 60) {
    return "Developing";
  } else if (average >= 50) {
    return "Beginner";
  } else {
    return "Needs Foundation Work";
  }
}

function checkProgramReady(scores) {
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 35) {
      return "Not Ready";
    }
  }
  return "Ready";
}

function recommendProgram(level, readiness) {
  if (readiness == "Not Ready") {
    return "Foundational Recovery & Mobility Plan";
  }
  if (level == "Elite" || level == "Advanced") {
    return "Performance Strength Program";
  } else if (level == "Intermediate") {
    return "Balanced Strength & Cardio Program";
  } else {
    return "Beginner Fitness Building Program";
  }
}

function calculateFitness() {
  let clientName = document.getElementById("clientName").value;
  let clientId = document.getElementById("clientId").value;
  let scores = [];
  let error = document.getElementById("error");

  if (clientName == "" || clientId == "") {
    error.innerHTML = "Please enter client name and ID.";
    return;
  }

  for (let i = 1; i <= 5; i++) {
    let score = Number(document.getElementById("score" + i).value);
    if (score < 0 || score > 100 || document.getElementById("score" + i).value == "") {
      error.innerHTML = "Please enter valid scores between 0 and 100.";
      return;
    }
    scores.push(score);
  }

  error.innerHTML = "";

  let total = calculateTotal(scores);
  let average = calculateAverage(total);
  let tier = calculateFitnessLevel(average);
  let status = checkProgramReady(scores);
  let program = recommendProgram(tier, status);

  document.getElementById("resultName").innerHTML = clientName;
  document.getElementById("resultId").innerHTML = clientId;
  document.getElementById("total").innerHTML = total;
  document.getElementById("average").innerHTML = average.toFixed(2);
  document.getElementById("tier").innerHTML = tier;
  document.getElementById("status").innerHTML = status;
  document.getElementById("programName").innerHTML = program;
  document.getElementById("result").style.display = "block";

  if (status == "Not Ready") {
    document.getElementById("status").style.color = "#c0392b";
  } else {
    document.getElementById("status").style.color = "#198754";
  }
}

function resetForm() {
  document.getElementById("clientName").value = "";
  document.getElementById("clientId").value = "";
  for (let i = 1; i <= 5; i++) {
    document.getElementById("score" + i).value = "";
  }
  document.getElementById("error").innerHTML = "";
  document.getElementById("result").style.display = "none";
}