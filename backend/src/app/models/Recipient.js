import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        address: {
          type: Sequelize.VIRTUAL,
          get() {
            return {
              street: this.street,
              number: this.number,
              complement: this.complement,
              city: this.city,
              state: this.state,
              zip_postal: this.zip_postal,
            };
          },
          set(value) {
            throw new Error('Do not try to set the `address` value!');
          },
        },
        street: Sequelize.STRING,
        number: Sequelize.INTEGER,
        complement: Sequelize.STRING,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
        zip_postal: Sequelize.STRING,
      },
      { sequelize }
    );
    return this;
  }
}

export default Recipient;
