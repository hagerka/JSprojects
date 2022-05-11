window.onload = () => {
  const selected = document.getElementById("steps-taken");
  const allDivs = document.querySelectorAll("div");
  allDivs.forEach((element) => {
      if(element.id=="Research"||element.id=="Inventory"||element.id=="Interview"||element.id=="Examples")
    {element.style.display = "none";}
  });

  selected.onchange = () => {
    let selectedValue = selected.value;
    console.log(selectedValue);
    allDivs.forEach((element) => {
        if(element.id=="Research"||element.id=="Inventory"||element.id=="Interview"||element.id=="Examples")
      {element.style.display = "none";}
    });

    switch (selectedValue) {
      case "Inventory":
        const inventoryDiv = document.getElementById("Inventory");
        inventoryDiv.style.display = "block";
        break;
      case "Interview":
        const interviewDiv = document.getElementById("Interview");
        interviewDiv.style.display = "block";
        break;
      case "Examples":
        const examplesDiv = document.getElementById("Examples");
        examplesDiv.style.display = "block";
        break;
      case "Research":
        const researchDiv = document.getElementById("Research");
        researchDiv.style.display = "block";
        break;
      default:
        break;
    }
  };
};
