import "./Services.css";
import { useState, useEffect } from "react";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";
import AddServiceForm from "../components/AddServiceForm";
import ServiceModal from "../pages/ServiceModal";
import {
    createService,
    getServices,
    updateService,
    removeService,
} from "../api/serviceApi";



export default function Services({ services, setServices }) {
    const [searchTerm, setSearchTerm] = useState("");


    const [open, setOpen] = useState(false);

    const [editService, setEditService] = useState(null);
    const [selectedService, setSelectedService] = useState(null);

    const addService = async (data) => {
        try {

            if (data._id) {

                await updateService(data._id, data);

            } else {

                await createService(data);

            }

            await loadServices();

            setOpen(false);
            setEditService(null);

        } catch (error) {
            console.error(error);
        }
    };








    const updateStatus = async (id, status) => {
        try {
            const response = await fetch(
                `https://riveyra.onrender.com/api/services/${id}/status`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ status }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to update status");
            }

            const updatedService = await response.json();

            setServices((prev) =>
                prev.map((service) =>
                    service._id === updatedService._id
                        ? updatedService
                        : service
                )
            );

        } catch (error) {
            console.error(error);
        }
    };



    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = async () => {
        try {
            const data = await getServices();
            setServices(data);
        } catch (error) {
            console.error(error);
        }
    };



    const deleteService = async (id) => {
        try {
            await removeService(id);

            await loadServices();

        } catch (error) {
            console.error(error);
        }
    };



    const filteredServices = services.filter((service) =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (

        <div className="services-page">

            <div className="services-header">
                <div>
                    <h1>Services</h1>
                    <p>Manage all your services here.</p>

                    <div className="service-search-inline">
                        <Search size={18} />
                        <input
                            type="text"
                            placeholder="Search service..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>


                <div className="services-page">

                    <button
                        className="add-service-btn"
                        onClick={() => setOpen(true)}
                    >
                        + Add Service
                    </button>

                    <AddServiceForm
                        open={open}
                        editData={editService}
                        onClose={() => {
                            setOpen(false);
                            setEditService(null);
                        }}
                        onSave={addService}
                    />


                </div>
            </div>


            <div className="services-table">

                <div className="table-header">
                    <span>Title</span>
                    <span>Description</span>
                    <span>Status</span>
                    <span>Actions</span>
                </div>

                {filteredServices.map((service) => (
                    <div className="table-row" key={service._id}>

                        {/* Title + Slug */}
                        <div className="service-title">
                            <h4>{service.title}</h4>

                            <span
                                className="service-slug-click"
                                onClick={() => setSelectedService(service)}
                            >
                                {service.slug}
                            </span>
                        </div>

                        {/* Description */}
                        <span className="description">
                            {service.description}
                        </span>




                        {/* Status */}
                        <div className="status-buttons">
                            <button
                                className={`status-btn ${service.status === "Published" ? "active published" : ""
                                    }`}
                                onClick={() => updateStatus(service._id, "Published")}
                            >
                                Published
                            </button>

                            <button
                                className={`status-btn ${service.status === "Unpublished" ? "active unpublished" : ""
                                    }`}
                                onClick={() => updateStatus(service._id, "Unpublished")}
                            >
                                Unpublished
                            </button>
                        </div>

                        {/* Actions */}
                        <div className="actions">
                            <button
                                onClick={() => {
                                    setEditService(service); // fill data
                                    setOpen(true);           // open modal
                                }}
                            >
                                <Pencil size={16} />
                            </button>

                            <button onClick={() => deleteService(service._id)}>
                                <Trash2 size={16} />
                            </button>
                        </div>

                    </div>
                ))}

            </div>
            <ServiceModal
                service={selectedService}
                onClose={() => setSelectedService(null)}
            />

        </div>
    );
}