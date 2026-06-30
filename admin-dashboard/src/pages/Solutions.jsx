import "./Solutions.css";
import { useState } from "react";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";

export default function Solutions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [editSolution, setEditSolution] = useState(null);

  const [solutions, setSolutions] = useState([
    {
      id: 1,
      title: "Cloud Migration",
      description: "Move your infrastructure to secure cloud platforms",
      status: "Published",
    },
    {
      id: 2,
      title: "AI Integration",
      description: "Integrate AI into business workflows and automation",
      status: "Published",
    },
  ]);

  // ADD / EDIT
  const saveSolution = (data) => {
    setSolutions((prev) => {
      const isEdit = data.id !== undefined;

      if (isEdit) {
        return prev.map((item) =>
          item.id === data.id ? { ...item, ...data } : item
        );
      }

      return [
        ...prev,
        {
          id: Date.now(),
          status: "Published",
          ...data,
        },
      ];
    });
  };

  // DELETE
  const deleteSolution = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this solution?"
    );
    if (!confirmDelete) return;

    setSolutions((prev) => prev.filter((item) => item.id !== id));
  };

  // SEARCH
  const filtered = solutions.filter(
    (s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="solutions-page">

      {/* HEADER */}
      <div className="solutions-header">
        <div>
          <h1>Solutions</h1>
          <p>Manage all your solutions here.</p>

          <div className="solution-search">
            <Search size={18} />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search solutions..."
            />
          </div>
        </div>

        <button
          className="add-solution-btn"
          onClick={() => setOpen(true)}
        >
          <Plus size={16} />
          Add Solution
        </button>
      </div>

      {/* TABLE */}
      <div className="solutions-table">
        <div className="table-header">
          <span>Title</span>
          <span>Description</span>
          <span>Status</span>
          <span>Actions</span>
        </div>

        {filtered.map((solution) => (
          <div className="table-row" key={solution.id}>

            <div className="solution-title">
              <h4>{solution.title}</h4>
            </div>

            <span className="description">
              {solution.description}
            </span>

            <span className="status-pill">
              {solution.status}
            </span>

            <div className="actions">
              <button
                onClick={() => {
                  setEditSolution(solution);
                  setOpen(true);
                }}
              >
                <Pencil size={16} />
              </button>

              <button onClick={() => deleteSolution(solution.id)}>
                <Trash2 size={16} />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* MODAL */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>

            <h2>
              {editSolution ? "Edit Solution" : "Add Solution"}
            </h2>

            <input placeholder="Solution Title" />
            <textarea placeholder="Description" />

            <div className="modal-actions">
              <button onClick={() => setOpen(false)}>Cancel</button>

              <button
                onClick={() => {
                  saveSolution({
                    id: editSolution?.id,
                    title: "New Solution",
                    description: "Added solution",
                  });

                  setEditSolution(null);
                  setOpen(false);
                }}
              >
                {editSolution ? "Update" : "Create"}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}