import * as Yup from 'yup';
import Delivery from '../models/Delivery';
import File from '../models/File';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';

class DeliveryController {
  static async index(req, res) {
    const delivery = await Delivery.findAll({
      attributes: [
        'id',
        'recipient_id',
        'deliveryman_id',
        'signature_id',
        'product',
        'start_date',
        'end_date',
      ],
      include: [
        { model: Recipient, as: 'recipient', attributes: ['name'] },
        { model: Deliveryman, as: 'deliveryman', attributes: ['name'] },
        { model: File, as: 'signature', attributes: ['name', 'path', 'url'] },
      ],
    });
    return res.json(delivery);
  }

  static async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      signature_id: Yup.number(),
      product: Yup.string().required(),
      start_date: Yup.date(),
      end_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipientExists = await Recipient.findByPk(req.body.recipient_id);
    if (!recipientExists) {
      return res.status(400).json({ error: 'Recipient not exists' });
    }
    const deliverymanExists = await Deliveryman.findByPk(
      req.body.deliveryman_id
    );
    if (!deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman not exists' });
    }

    const {
      id,
      recipient_id,
      deliveryman_id,
      signature_id,
      product,
      start_date,
      end_date,
    } = await Delivery.create(req.body);

    return res.json({
      id,
      recipient_id,
      deliveryman_id,
      signature_id,
      product,
      start_date,
      end_date,
    });
  }

  static async update(req, res) {}

  static async delete(req, res) {}
}

export default DeliveryController;
