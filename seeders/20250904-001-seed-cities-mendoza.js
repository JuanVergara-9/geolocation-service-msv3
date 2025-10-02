'use strict';
module.exports = {
  async up(q) {
    const now = new Date();
    await q.bulkInsert('cities', [
      { country_code:'AR', province:'Mendoza', name:'Mendoza Capital', slug:'mendoza-capital', lat:-32.8895, lng:-68.8458, created_at:now, updated_at:now },
      { country_code:'AR', province:'Mendoza', name:'San Rafael',      slug:'san-rafael',       lat:-34.6177, lng:-68.3301, created_at:now, updated_at:now },
      { country_code:'AR', province:'Mendoza', name:'Godoy Cruz',      slug:'godoy-cruz',       lat:-32.9253, lng:-68.8448, created_at:now, updated_at:now },
      { country_code:'AR', province:'Mendoza', name:'Guaymallén',      slug:'guaymallen',       lat:-32.8908, lng:-68.7946, created_at:now, updated_at:now },
      { country_code:'AR', province:'Mendoza', name:'Las Heras',       slug:'las-heras',        lat:-32.8511, lng:-68.8272, created_at:now, updated_at:now },
      { country_code:'AR', province:'Mendoza', name:'Luján de Cuyo',   slug:'lujan-de-cuyo',    lat:-33.0460, lng:-68.8781, created_at:now, updated_at:now }
    ]);
  },
  async down(q){ await q.bulkDelete('cities', { province:'Mendoza' }, {}); }
};
