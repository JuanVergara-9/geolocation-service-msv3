'use strict';
module.exports = {
  async up(q, S) {
    await q.createTable('cities', {
      id: { type: S.INTEGER, autoIncrement: true, primaryKey: true },
      country_code: { type: S.STRING(2), allowNull: false, defaultValue: 'AR' },
      province: { type: S.STRING(80), allowNull: false },
      name: { type: S.STRING(80), allowNull: false },
      slug: { type: S.STRING(80), allowNull: false, unique: true },
      lat: { type: S.DECIMAL(10,7), allowNull: false },
      lng: { type: S.DECIMAL(10,7), allowNull: false },
      created_at: { type: S.DATE, allowNull: false, defaultValue: S.fn('NOW') },
      updated_at: { type: S.DATE, allowNull: false, defaultValue: S.fn('NOW') }
    });
    await q.addIndex('cities', ['province'], { name: 'cities_province_idx' });
  },
  async down(q){ await q.dropTable('cities'); }
};
