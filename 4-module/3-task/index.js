function highlight(table) {
  const tableRows = table.tBodies.item(0).children;
  for (let i = 0; i < tableRows.length; i++) {
    const availability = tableRows[i].lastElementChild.getAttribute('data-available');
    const age = tableRows[i].children[1].innerText;
    const gender = tableRows[i].children[2].innerText;
    setAvailabilityIdentification(tableRows[i], availability);
    setGenderIdentification(tableRows[i], gender);
    highlightMinorAge(tableRows[i], age);
  }
}

function setAvailabilityIdentification(element, availability) {
  switch (availability) {
    case "true":
    element.classList.add('available');
      break;
    case "false":
      element.classList.add('unavailable');
      break;
    case null:
      element.setAttribute('hidden','hidden');
      break;
  }
}

function setGenderIdentification(element, gender) {
  if (gender === 'm') {
    element.classList.add('male');
  } else {
    element.classList.add('female');
  }
}

function highlightMinorAge(element, age) {
  if (age < 18 ) {
    element.style = "text-decoration: line-through";
  }
}
