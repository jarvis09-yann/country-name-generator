const countryName = document.querySelector("#country");
const nameLength = document.querySelector("#name-length");
const output = document.querySelector("#generator-output");
const copyNotice = document.querySelector("#copy-notice");

const prefixes = [
  "Democratic",
  "People's",
  "Federal",
  "United",
  "Socialist",
  "Independent",
  "Grand",
  "Holy",
  "Great",
  "Free",
  "New",
  "Old",
  "Sovereign",
  "Eternal",
  "Imperial",
  "Glorious",
];

const descriptors = [
  "Popular",
  "Commonwealth",
  "Confederation",
  "Union",
  "Alliance",
  "Coalition",
  "Federation",
  "Syndicate",
  "Assembly",
  "Pact",
  "Association",
  "Consortium",
];

const governmentTypes = [
  "Republic",
  "Kingdom",
  "Empire",
  "Sultanate",
  "Principality",
  "State",
  "Duchy",
  "Protectorate",
  "Archduchy",
  "Theocracy",
  "Dynasty",
  "Caliphate",
  "Tsardom",
  "Electorate",
  "Monarchy",
  "Regency",
];

function generateName(name, count) {
  if (count < 3) {
    count = 3;
  }
  count = (count - 2) / 2;
  let namePrefixes = getRandomItems(prefixes, count);
  namePrefixes = namePrefixes.join(" ");
  let nameDescriptors = getRandomItems(descriptors, count);
  nameDescriptors = nameDescriptors.join(" ");
  let nameGovernmentType = getRandomItems(governmentTypes, 1);
  nameGovernmentType = nameGovernmentType.join(" ");
  if (count <= 1) {
    return `${nameDescriptors} of the ${name} ${nameGovernmentType}`;
  }
  return `${namePrefixes} ${nameDescriptors} of the ${name} ${nameGovernmentType}`;
}

function getRandomItems(array, count) {
  let randomItems = [];
  if (count > array.length) {
    count = array.length;
  }
  while (randomItems.length < count) {
    const i = Math.floor(Math.random() * array.length);
    if (!randomItems.includes(array[i])) {
      randomItems.push(array[i]);
    }
  }
  return randomItems;
}

countryName.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    if (countryName.value == "") {
      output.value = "Are you serious?";
      return;
    }
    e.preventDefault();
    output.value = generateName(countryName.value, nameLength.value);
  }
});

output.addEventListener("click", () => {
  if (output.value == "") {
    return;
  }
  navigator.clipboard.writeText(output.value);
  copyNotice.style.opacity = 1;
  setTimeout(() => {
    copyNotice.style.opacity = 0;
  }, 3000);
});
