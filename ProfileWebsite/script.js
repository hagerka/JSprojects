window.onload = () => {
  const superSecret = "cats";
  const selected = document.getElementById("steps-taken");
  const allDivs = document.querySelectorAll("div");
  allDivs.forEach((element) => {
    if (
      element.id == "Research" ||
      element.id == "Inventory" ||
      element.id == "Interview" ||
      element.id == "Examples"
    ) {
      element.style.display = "none";
    }
  });

  const button = document.getElementById("submitbutton");
  const input = document.getElementById("password");
  const selectedLabel = document.getElementById("steps-taken-label");

  let access;
  showChoices();

  button.onclick = () => {
    showChoices();
  };

  let selectedValue = selected.value;

  selected.onchange = () => {
    selectedValue = selected.value;
    allDivs.forEach((element) => {
      if (
        element.id == "Research" ||
        element.id == "Inventory" ||
        element.id == "Interview" ||
        element.id == "Examples"
      ) {
        element.style.display = "none";
      }
    });
    showData(selectedValue);
  };

  function showChoices() {
    access = input.value == superSecret;
    selected.style.display = access ? "inline-block" : "none";
    selectedLabel.style.display = access ? "inline-block" : "none";
    button.style.display = access ? "none" : "inline-block";
    input.style.display = access ? "none" : "inline-block";
  }

  function showData(selectedValue) {
    switch (true) {
      case selectedValue == "Inventory" && access:
        const inventoryDiv = document.getElementById("Inventory");
        inventoryDiv.style.display = "block";
        break;
      case selectedValue == "Interview" && access:
        const interviewDiv = document.getElementById("Interview");
        interviewDiv.style.display = "block";
        break;
      case selectedValue == "Examples" && access:
        const examplesDiv = document.getElementById("Examples");
        examplesDiv.style.display = "block";
        break;
      case selectedValue == "Research" && access:
        const researchDiv = document.getElementById("Research");
        researchDiv.style.display = "block";
        break;
      default:
        break;
    }
  }
};
