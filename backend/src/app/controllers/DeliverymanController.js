import * as Yup from 'yup';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  static async index(req, res) {
    const deliveryman = await Deliveryman.findAll({
      attributes: ['id', 'name', 'avatar_id', 'email'],
      include: [
        { model: File, as: 'avatar', attributes: ['name', 'path', 'url'] },
      ],
    });
    return res.json(deliveryman);
  }

  static async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const deliverymanExists = await Deliveryman.findOne({
      where: { email: req.body.email },
    });
    if (deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman already exists' });
    }

    const { id, name, avatar_id, email } = await Deliveryman.create(req.body);
    return res.json({
      id,
      name,
      avatar_id,
      email,
    });
  }

  static async update(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id);
    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman not found' });
    }

    await deliveryman.update(req.body);
    const { id, name, email, avatar_id } = await Deliveryman.findByPk(
      req.params.id,
      {
        include: [
          { model: File, as: 'avatar', attributes: ['id', 'path', 'url'] },
        ],
      }
    );
    return res.json({
      id,
      name,
      email,
      avatar_id,
    });
  }

  static async delete(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id);
    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman not found' });
    }

    deliveryman.destroy();

    return res.json({ message: 'Deliveryman excluded' });
  }
}

export default DeliverymanController;
