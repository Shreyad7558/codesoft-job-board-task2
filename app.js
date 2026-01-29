const jobs = [
  { title: "Frontend Developer", desc: "HTML, CSS, JavaScript required" },
  { title: "Backend Developer", desc: "Node.js and MongoDB required" },
  { title: "Full Stack Developer", desc: "React + Node.js" }
];

const jobList = document.getElementById("job-list");
const search = document.getElementById("search");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");

function displayJobs(data) {
  jobList.innerHTML = "";
  data.forEach(job => {
    const div = document.createElement("div");
    div.className = "job";
    div.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.desc}</p>
      <button onclick="openModal('${job.title}', '${job.desc}')">View</button>
    `;
    jobList.appendChild(div);
  });
}

function openModal(title, desc) {
  document.getElementById("job-title").innerText = title;
  document.getElementById("job-desc").innerText = desc;
  modal.style.display = "block";
}

closeBtn.onclick = () => modal.style.display = "none";

search.addEventListener("keyup", () => {
  const value = search.value.toLowerCase();
  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(value)
  );
  displayJobs(filtered);
});

displayJobs(jobs);