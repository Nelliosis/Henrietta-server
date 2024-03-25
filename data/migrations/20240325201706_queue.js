export const up = async (knex) => {
    return knex.schema
        .createTable('queue', table => {
            table.increments('id');
            table.string('guild_id').notNullable();
            table.string('channel_id').notNullable();
            table.jsonb('queue')
        })
};

export const down = async (knex) => {
    return knex.schema
        .dropTable('queue')
};

