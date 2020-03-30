import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  static async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.object().shape({
        street: Yup.string().required(),
        number: Yup.number().required(),
        complement: Yup.string().notRequired(),
        city: Yup.string().required(),
        state: Yup.string().required(),
        zip_postal: Yup.string().required(),
      }),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipientExists = await Recipient.findOne({
      where: { name: req.body.name },
    });
    if (recipientExists) {
      return res.status(400).json({ error: 'Recipient already exists' });
    }

    const recipient = {
      name: req.body.name,
      street: req.body.address.street,
      number: req.body.address.number,
      complement: req.body.address.complement,
      city: req.body.address.city,
      state: req.body.address.state,
      zip_postal: req.body.address.zip_postal,
    };
    const { id, name, address } = await Recipient.create(recipient);
    return res.json({
      id,
      name,
      address,
    });
  }

  static async update(req, res) {
    const recipient = await Recipient.findByPk(req.params.id);
    if (!recipient) {
      return res.status(400).json({ error: 'Recipient not found' });
    }

    const updatedFields = {};

    if (req.body.name) {
      updatedFields.name = req.body.name;
    }
    if (req.body.address) {
      if (req.body.address.street)
        updatedFields.street = req.body.address.street;

      if (req.body.address.number)
        updatedFields.number = req.body.address.number;

      if (req.body.address.complement)
        updatedFields.complement = req.body.address.complement;

      if (req.body.address.state) updatedFields.state = req.body.address.state;

      if (req.body.address.city) updatedFields.city = req.body.address.city;

      if (req.body.address.zip_postal)
        updatedFields.zip_postal = req.body.address.zip_postal;
    }

    const { id, name, address } = await recipient.update(updatedFields);

    return res.json({
      id,
      name,
      address,
    });
  }
}

export default RecipientController;
