import { Service } from '../../models/service.model.js';

export const getAllServices = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};

export const getServiceById = async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    return res.status(404).json({ message: 'Service not found' });
  }
  res.json(service);
};

export const createService = async (req, res) => {
  const newService = await Service.create(req.body);
  res.status(201).json(newService);
};

export const updateService = async (req, res) => {
  const updated = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!updated) {
    return res.status(404).json({ message: 'Service not found' });
  }
  res.json(updated);
};

export const deleteService = async (req, res) => {
  const deleted = await Service.findByIdAndDelete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: 'Service not found' });
  }
  res.json({ message: 'Service deleted' });
};
