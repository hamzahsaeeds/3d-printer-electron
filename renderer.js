const { execFile } = require("child_process");
const path = require("path");

document.getElementById("print-button").addEventListener("click", () => {
  const fileInput = document.getElementById("file-selector");
  if (fileInput.files.length === 0) {
    alert("Please select a file to print.");
    return;
  }
  const filePath = fileInput.files[0].path;
  runAutomationScript(filePath);
});

function runAutomationScript(filePath) {
  const scriptPath = path.join(__dirname, "automation_script.py");
  execFile("python", [scriptPath, filePath], (error, stdout, stderr) => {
    if (error) {
      console.error("Error running script:", error);
      alert("Print job failed. Please try again.");
      return;
    }
    console.log("Script output:", stdout);
    alert("Print job sent successfully!");
  });
}
