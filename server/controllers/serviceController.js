import Service from "../models/Service.js";

// CREATE SERVICE
export const createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);

    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ALL SERVICES
export const getServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });

    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE SERVICE STATUS
export const updateServiceStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedService = await Service.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedService) {
      return res.status(404).json({
        message: "Service not found",
      });
    }

    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// DELETE SERVICE
export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedService = await Service.findByIdAndDelete(id);

    if (!deletedService) {
      return res.status(404).json({
        message: "Service not found",
      });
    }

    res.status(200).json({
      message: "Service deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// UPDATE SERVICE
export const updateService = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedService = await Service.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedService) {
      return res.status(404).json({
        message: "Service not found",
      });
    }

    res.status(200).json(updatedService);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ONLY PUBLISHED SERVICES
export const getPublishedServices = async (req, res) => {
  try {
    const services = await Service.find({
      status: "Published",
    }).sort({ createdAt: -1 });

    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};