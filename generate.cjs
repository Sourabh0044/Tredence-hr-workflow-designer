const fs = require("fs");
const path = require("path");

const base = __dirname;

// 🔥 Helper function
function createFile(filePath, content = "") {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

// =======================
// 📁 CREATE FOLDERS + FILES
// =======================

// API
createFile("src/api/mockApi.js", `export const mockApi = () => {
  return "API working";
};`);

// FORMS
createFile("src/components/forms/NodeForm.jsx", `
import React from "react";

const NodeForm = () => {
  return <div>Node Form</div>;
};

export default NodeForm;
`);

createFile("src/components/forms/KVPairs.jsx", `
import React from "react";

const KVPairs = () => {
  return <div>Key Value Pairs</div>;
};

export default KVPairs;
`);

// COMPONENTS
createFile("src/components/Sidebar.jsx", `
import React from "react";

const Sidebar = () => {
  return <div>Sidebar</div>;
};

export default Sidebar;
`);

createFile("src/components/NodePanel.jsx", `
import React from "react";

const NodePanel = () => {
  return <div>Node Panel</div>;
};

export default NodePanel;
`);

createFile("src/components/SandboxPanel.jsx", `
import React from "react";

const SandboxPanel = () => {
  return <div>Sandbox</div>;
};

export default SandboxPanel;
`);

createFile("src/components/Topbar.jsx", `
import React from "react";

const Topbar = () => {
  return <div>Topbar</div>;
};

export default Topbar;
`);

// HOOK
createFile("src/hooks/useWorkflow.js", `
export const useWorkflow = () => {
  return {};
};
`);

// UTILS
createFile("src/utils/validate.js", `
export const validateWorkflow = () => {
  return true;
};
`);

// STORE
createFile("src/store/workflowStore.js", `
export const workflowStore = {};
`);

// =======================
// 🔥 NODES (your main part)
// =======================

const nodes = [
  "StartNode",
  "TaskNode",
  "ApprovalNode",
  "AutomatedNode",
  "EndNode"
];

nodes.forEach((node) => {
  createFile(`src/components/nodes/${node}.jsx`, `
import React from "react";

const ${node} = () => {
  return (
    <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
      <h3>${node}</h3>
    </div>
  );
};

export default ${node};
`);
});

console.log("🔥 FULL PROJECT STRUCTURE CREATED SUCCESSFULLY!");