const svc = require('../services/geo.service');

async function listCities(req,res,next){
  try{
    const items = await svc.listCities({ province: req.query.province });
    res.json({ items });
  } catch(e){ next(e); }
}

async function getCityCenter(req,res,next){
  try{
    const c = await svc.getCityBySlug(req.params.slug);
    res.json({ city: { name: c.name, province: c.province, slug: c.slug, lat: Number(c.lat), lng: Number(c.lng) } });
  } catch(e){ next(e); }
}

async function reverseGeocode(req,res,next){
  try{
    const { lat, lng } = req.query;
    if (!lat || !lng) {
      return res.status(400).json({ error: { code: 'MISSING_PARAMS', message: 'lat and lng are required' } });
    }
    
    // Por ahora devolvemos una respuesta mock, pero esto se puede conectar a una API de geocodificación
    const city = await svc.reverseGeocode(parseFloat(lat), parseFloat(lng));
    res.json({ city: city.name, province: city.province });
  } catch(e){ next(e); }
}

module.exports = { listCities, getCityCenter, reverseGeocode };
