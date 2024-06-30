function saveSelectionToLocalStorage(category, weapon, accessories) {
  const selection = { category, weapon, accessories };
  const previousSelection = localStorage.getItem("warzoneSelection");
  if (previousSelection) {
    localStorage.setItem("previousWarzoneSelection", previousSelection);
  }
  localStorage.setItem("warzoneSelection", JSON.stringify(selection));
}

function loadSelectionFromLocalStorage() {
  const selection = JSON.parse(localStorage.getItem("warzoneSelection"));
  return selection;
}

function loadPreviousSelectionFromLocalStorage() {
  const selection = JSON.parse(localStorage.getItem("previousWarzoneSelection"));
  return selection;
}

