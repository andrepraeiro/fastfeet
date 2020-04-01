module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'recipients',
      [
        {
          name: 'John Lenon',
          street: '5th Avenue',
          number: 1587,
          complement: 'Empire State, 25th floor',
          state: 'New York',
          city: 'New York',
          zip_postal: '555-5553',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
