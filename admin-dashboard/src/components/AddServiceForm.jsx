import "./AddServiceForm.css";
import { useEffect, useState } from "react";

export default function AddServiceForm({
    open,
    onClose,
    onSave,
    editData
}) {

    // ✅ ALL HOOKS FIRST (IMPORTANT)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // ✅ handle edit fill
    useEffect(() => {
        if (editData) {
            setTitle(editData.title || "");
            setDescription(editData.description || "");
        } else {
            setTitle("");
            setDescription("");
        }
    }, [editData, open]);

    // ❌ ONLY AFTER HOOKS
    if (!open) return null;

    const handleCreate = () => {
        if (!title || !description) return;

        const serviceData = {
            title,
            slug: "/" + title.toLowerCase().replace(/\s+/g, "-"),
            description,
        };

        // 🔥 ONLY ADD ID IF EDITING
        if (editData) {
            serviceData._id = editData._id;
        }

        onSave(serviceData);
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>

                <h2>{editData ? "Edit Service" : "Add Service"}</h2>

                <input
                    placeholder="Service Name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <div className="modal-actions">
                    <button onClick={onClose}>Cancel</button>

                    <button className="save-btn" onClick={handleCreate}>
                        {editData ? "Update" : "Create"}
                    </button>
                </div>

            </div>
        </div>
    );
}