const { City } = require('../../models');
const { notFound } = require('../utils/httpError');
const { Op } = require('sequelize');

async function listCities({ province }) {
  const where = {};
  if (province) where.province = province;
  return City.findAll({ where, order:[['province','ASC'],['name','ASC']], attributes:['id','country_code','province','name','slug','lat','lng'] });
}

async function getCityBySlug(slug) {
  const c = await City.findOne({ where:{ slug } });
  if (!c) throw notFound('CITY.NOT_FOUND','Ciudad no encontrada');
  return c;
}

async function reverseGeocode(lat, lng) {
  // Por ahora devolvemos una ciudad por defecto
  // En producción esto se conectaría a una API de geocodificación como Google Maps o OpenStreetMap
  return {
    name: "San Rafael",
    province: "Mendoza"
  };
}

module.exports = { listCities, getCityBySlug, reverseGeocode };
