
export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('queue').del()
  await knex('queue').insert([
    // TODO: Add seed data
    { id: 1, colName: 'rowValue1' },
    { id: 2, colName: 'rowValue2' },
    { id: 3, colName: 'rowValue3' }
  ])
}


