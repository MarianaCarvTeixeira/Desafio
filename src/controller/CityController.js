var models = require('../models'); // loads index.js
const City = models.City

class CityController {
  
  async store(req, res){
    console.log(City)
    const { city, state } = req.body

    try {

      const cities =  await City.create({
        city,
        state
      })

      return res.status(201).json({ cities})
    } catch (err) {
      return res.status(500).json({
        error: err.name,
        stack: err.stack
      })
    }
  }
  async getCities(req, res) {

    try {
      
      const cities = await City.findByPk(city_id)

      if (cities !== req.city) return res.status(404).end()

      return res.status(200).json({
        city_id: City.id,
        city_name: City.city,
        city_state: City.state,
      })
        
    } catch (err) {
      return res.status(500).json({
        error: err.name,
        stack: err.stack
      })
    }
  }
  async getCitiesByState(req, res) {

    try {
      
      const cities = await City.findOne({where: state})

      if (cities !== req.city) return res.status(404).end()

      return res.status(200).json({
        city_id: City.id,
        city_name: City.city,
        city_state: City.state,
      })
        
    } catch (err) {
      return res.status(500).json({
        error: err.name,
        stack: err.stack
      })
    }
  }
  
}

module.exports = CityController;