module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'deliveries',
      [
        {
          recipient_id: 1,
          deliveryman_id: 1,
          product: 'Macbook 2020',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
