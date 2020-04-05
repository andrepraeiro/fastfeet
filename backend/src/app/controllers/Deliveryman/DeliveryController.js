import Deliveryman from '../../models/Deliveryman';
import Delivery from '../../models/Delivery';

class DeliveryController {
  static async index(req, res) {
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);
    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman not found' });
    }
    const deliveries = await Delivery.findAll({
      where: { deliveryman_id: id, canceled_at: null, end_date: null },
    });
    return res.json(deliveries);
  }
}

export default DeliveryController;
