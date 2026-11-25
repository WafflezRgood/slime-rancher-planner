
const zones = {
  main: { name: "Main Ranch", plots: 8, gadgets: 27 },
  grotto: { name: "Grotto", plots: 5, gadgets: 11 },
  overgrowth: { name: "Overgrowth", plots: 4, gadgets: 12 },
  lab: { name: "Lab", plots: 5, gadgets: 15 },
  docks: { name: "The Docks", plots: 4, gadgets: 11 }
};

let currentZone = "main";
let layout = JSON.parse(localStorage.getItem("ranchLayout") || "{}");

function locationKey(zone, type, number) {
  return `${zone}-${type}-${number}`;
}

function renderMap() {
  const zone = zones[currentZone];
  document.getElementById("zoneTitle").textContent = zone.name;

  const map = document.getElementById("map");
  map.innerHTML = "";

  const grid = document.createElement("div");
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(4, 1fr)";
  grid.style.gap = "12px";
  grid.style.width = "100%";
  grid.style.padding = "18px";

  for (let i = 1; i <= zone.plots; i++) {
    grid.appendChild(createLocation("Plot", i));
  }

  for (let i = 1; i <= zone.gadgets; i++) {
    grid.appendChild(createLocation("Gadget", i));
  }

  map.appendChild(grid);
}

function createLocation(type, number) {
  const key = locationKey(currentZone, type, number);
  const saved = layout[key];

  const button = document.createElement("button");
  button.style.minHeight = "65px";
  button.style.whiteSpace = "normal";
  button.style.background = saved ? "#8fbd78" : "#304638";
  button.style.color = saved ? "#17221d" : "#f1f3e9";

button.textContent = saved || `${type} ${number}`;

  button.addEventListener("click", () => {
    selectLocation(type, number);
  });

  return button;
}

function selectLocation(type, number) {
  const key = locationKey(currentZone, type, number);
  const selection = document.getElementById("selection");

  selection.innerHTML = `
    <h3>${type} ${number}</h3>
    <select id="assignment">
      <option value="">Choose assignment</option>
      ${
        type === "Plot"
          ? `
            <option>Corral</option>
            <option>Garden</option>
            <option>Coop</option>
            <option>Pond</option>
            <option>Incinerator</option>
            <option>Slime Exhibit</option>
            <option>Free Range</option>
          `
          : `
            <option>Gordo Snare</option>
            <option>Drone</option>
            <option>Extractor</option>
            <option>Teleporter</option>
            <option>Decor</option>
            <option>Other</option>
          `
      }
    </select>
    <div id="gordoOptions"></div>
    <button id="applyAssignment">Apply</button>
    <button id="clearAssignment">Clear</button>
  `;

  const assignment = document.getElementById("assignment");
  const gordoOptions = document.getElementById("gordoOptions");

  assignment.addEventListener("change", () => {
    if (assignment.value === "Gordo Snare") {
      gordoOptions.innerHTML = `
        <select id="gordo">
          <option>Pink Gordo</option>
          <option>Rock Gordo</option>
          <option>Tabby Gordo</option>
          <option>Phosphor Gordo</option>
          <option>Rad Gordo</option>
          <option>Boom Gordo</option>
          <option>Honey Gordo</option>
          <option>Hunter Gordo</option>
          <option>Crystal Gordo</option>
          <option>Quantum Gordo</option>
          <option>Dervish Gordo</option>
          <option>Tangle Gordo</option>
          <option>Mosaic Gordo</option>
        </select>
      `;
    } else {
      gordoOptions.innerHTML = "";
    }
  });

  document.getElementById("applyAssignment").onclick = () => {
    if (!assignment.value) return;

    let value = assignment.value;

    if (value === "Gordo Snare") {
      const gordo = document.getElementById("gordo");
      if (!gordo) return;
      value = gordo.value;
    }

    layout[key] = value;
    saveLayout();
    renderMap();
    renderProgress();
    selection.innerHTML = `<p>${value} saved at ${type} ${number}.</p>`;
  };

  document.getElementById("clearAssignment").onclick = () => {
    delete layout[key];
    saveLayout();
    renderMap();
    renderProgress();
    selection.innerHTML = "<p>Location cleared.</p>";
  };
}

const generalTasks = [
  "Represent every ranchable slime",
  "Collect every food type",
  "Display all 13 standard Gordos",
  "Set up Puddle Slime area",
  "Set up Fire Slime area",
  "Complete all ranch areas",
  "Organise plort collection",
  "Complete ranch decoration"
];

function renderChecklist() {
  const container = document.getElementById("generalChecklist");
  container.innerHTML = "";

  generalTasks.forEach((task, index) => {
    const label = document.createElement("label");
    label.style.display = "block";
    label.style.margin = "10px 0";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(layout[`task-${index}`]);

    checkbox.addEventListener("change", () => {
      layout[`task-${index}`] = checkbox.checked;
      saveLayout();
      renderProgress();
    });

    label.append(checkbox, " ", task);
    container.appendChild(label);
  });
}

function renderProgress() {
  const locations = Object.keys(layout).filter(
    key => !key.startsWith("task-")
  );

  const totalLocations = Object.values(zones).reduce(
    (total, zone) => total + zone.plots + zone.gadgets,
    0
  );

  const tasksDone = generalTasks.filter(
    (_, index) => layout[`task-${index}`]
  ).length;

  const total = totalLocations + generalTasks.length;
  const done = locations.length + tasksDone;
  const percentage = Math.round(done / total * 100);

  document.getElementById("progressText").textContent =
    `${percentage}% complete`;

  document.getElementById("progressBar").style.width =
    `${percentage}%`;

  document.getElementById("placementChecklist").textContent =
    `${locations.length} of ${totalLocations} locations assigned`;
}

function saveLayout() {
  localStorage.setItem("ranchLayout", JSON.stringify(layout));
  document.getElementById("saveStatus").textContent =
    "Saved successfully.";
}

document.querySelectorAll("#zoneTabs button").forEach(button => {
  button.addEventListener("click", () => {
    currentZone = button.dataset.zone;

    document.querySelectorAll("#zoneTabs button").forEach(tab => {
      tab.classList.toggle("active", tab === button);
    });

    renderMap();
  });
});

document.getElementById("saveButton").addEventListener("click", saveLayout);

document.getElementById("resetButton").addEventListener("click", () => {
  if (!confirm("Are you sure you want to reset your entire layout?")) return;

  layout = {};
  saveLayout();
  renderMap();
  renderChecklist();
  renderProgress();
});

renderMap();
renderChecklist();
renderProgress();
