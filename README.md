# HR Workflow Designer — Tredence Case Study

**Built by:** Sourabh Sharma
**College:** SRM Institute of Science and Technology

---

## Overview

This project is a mini HR Workflow Designer where an admin can visually create and test workflows such as onboarding, approvals, and automated actions.

The focus was on building a **functional and scalable frontend system** using React and React Flow concepts, along with clean structure and modular components.

---

## Live Demo

👉 https://Sourabh0044.github.io/Tredence-hr-workflow-designer/

The application is deployed using **GitHub Pages**, so it can be accessed directly without any setup.

---

## How to Run Locally

```bash
npm install
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## Project Structure

```
src/
├── api/                # Mock API layer
│   └── mockApi.js
├── components/
│   ├── nodes/          # Custom workflow nodes
│   ├── forms/          # Node configuration forms
│   ├── Sidebar.jsx
│   ├── NodePanel.jsx
│   ├── SandboxPanel.jsx
│   └── Topbar.jsx
├── hooks/
│   └── useWorkflow.js
├── store/
│   └── workflowStore.js
├── utils/
│   └── validate.js
├── App.jsx
├── main.jsx
```

---

## Features

* Drag and drop nodes onto the canvas
* Five node types:

  * Start
  * Task
  * Approval
  * Automated
  * End
* Connect nodes using edges
* Select a node to edit its properties
* Dynamic forms for each node type
* Key-value pair inputs for metadata/custom fields
* Mock API integration:

  * Fetch automation actions
  * Simulate workflow execution
* Workflow validation:

  * Missing start/end
  * Disconnected nodes
  * Cycle detection
* Export workflow as JSON
* Import workflow from JSON
* Sandbox panel to simulate execution
* Zoom, pan, and minimap controls

---

## Design Decisions

* **Component-based architecture**
  Separated nodes, forms, and panels for better scalability.

* **Custom hook (`useWorkflow`)**
  Handles workflow state and logic cleanly.

* **Mock API layer**
  Keeps API logic separate and easy to replace with real backend.

* **Validation logic in utils**
  Keeps business rules independent of UI.

* **Dynamic forms**
  NodeForm renders fields based on node type, making it easy to extend.

---

## Tech Stack

* React (Vite)
* React Flow
* JavaScript
* CSS

---

## Notes

* The project is built as a **prototype**, focusing on functionality rather than UI polish.
* GitHub Pages is used for deployment.
* The architecture is designed to be easily extendable for real-world use.

---

## Future Improvements

* Undo / Redo functionality
* Auto-layout (Dagre / ELK)
* Visual validation errors on nodes
* Save/load workflows from backend
* Node templates for common workflows

---

## Submission

* GitHub Repository:
  https://github.com/Sourabh0044/Tredence-hr-workflow-designer

* Live Demo:
  https://Sourabh0044.github.io/Tredence-hr-workflow-designer/

---

## Final Note

This project was built under time constraints, focusing on delivering a working and modular solution. With more time, it can be extended into a production-level workflow builder.
