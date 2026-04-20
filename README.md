# HR Workflow Designer — Tredence Case Study

Built by: Sourabh Sharma | SRM IST

---

## How to Run

### Option A — Open directly
Just open `hr-workflow-designer.html` in any browser. No build step, no server needed.

### Option B — Vite project (if you want the full stack version)
```bash
npm create vite@latest hr-workflow -- --template react
cd hr-workflow
npm install @xyflow/react
# copy the component code from the HTML file into src/
npm run dev
```

---

## Architecture

```
hr-workflow-designer.html
├── Mock API layer         (mockAPI object — getAutomations, simulate)
├── Validation logic       (validateWorkflow, topologicalSort)
├── Custom React Flow nodes
│   ├── StartNode
│   ├── TaskNode
│   ├── ApprovalNode
│   ├── AutomatedNode
│   └── EndNode
├── NodeForm               (dynamic form — switches on node.type)
├── KVPairs                (reusable key-value pair component)
├── SandboxPanel           (modal — runs simulate, shows step log)
├── FlowCanvas             (ReactFlow wrapper, drag-drop, connect)
└── App                    (root — state, topbar, sidebar, panel)
```

### Design choices

- **Single file for portability** — In a real Vite project this splits into `/components/nodes/`, `/components/forms/`, `/api/mock.js`, `/hooks/useWorkflow.js`, `/utils/validate.js`
- **Event bus for node updates** — FlowCanvas and the edit panel are siblings, so I used `window.dispatchEvent(new CustomEvent('updateNode', ...))` to avoid prop drilling. In a real app, use Zustand or Context.
- **Topological sort for simulation** — Uses Kahn's algorithm (BFS-based). Catches cycles before sending to simulate.
- **Dynamic forms** — `NodeForm` switches on `node.type`. Adding a new node type = add one case. Params for Automated nodes are driven by the mock API response.

---

## What's implemented

- [x] Drag-and-drop from sidebar onto canvas
- [x] 5 node types: Start, Task, Approval, Automated, End
- [x] Connect nodes with edges (smoothstep)
- [x] Select a node → edit panel opens
- [x] Delete nodes (button in panel or Delete key)
- [x] Node config forms for all 5 types with all required fields
- [x] Key-value pairs (metadata, custom fields)
- [x] Dynamic params for Automated node (driven by mock API)
- [x] GET /automations mock API
- [x] POST /simulate mock API with topological ordering
- [x] Sandbox panel with step-by-step log
- [x] Workflow validation (no start, no end, disconnected nodes, cycles)
- [x] Export workflow as JSON
- [x] Import workflow from JSON
- [x] MiniMap + Controls (zoom, fit)

## What I'd add with more time

- Undo/Redo (use `useUndoable` or build a command stack)
- Auto-layout (ELK.js or Dagre)
- Validation errors shown visually on nodes (red border)
- Node templates (pre-built flows for onboarding, leave, etc.)
- Persistent state (localStorage or backend)
- Real backend with Express + MongoDB (already know the stack from my projects)

---

## Stack

React 18 · ReactFlow (@xyflow/react) · Vanilla CSS · No build tool for submission (Vite-ready)
