const express = require('express');
const TaqueriasService = require('../services/taqueria.service');
const router = express.Router();
const service = new TaqueriasService();

// SELECT * FROM taquerias
router.get('/', async function(req,res,next){
  try {
    res.json(await service.find(req.body));
  } catch (error) {
    console.error(`Error al consultar los registros.`,error.message);
    next(error);
  }
});

// SELECT * FROM taquerias WHERE id_taquerias
router.get('/:id', async function(req,res,next){
  try {
    res.json(await service.findOne(req.body));
  } catch (error) {
    console.error(`Error al consultar el dato especificado.`,error.message);
    next(error);
  }
});

// INSERT INTO taquerias
router.post('/', async function(req,res,next){
  try {
    res.json(await service.create(req.body));
  } catch (error) {
    console.error(`Error al crear datos.`,error.message);
    next(error);
  }
});

router.put('/:id', async function(req,res,next){
  try {
    res.json(await service.update(req.body));
  } catch (error) {
    console.error(`Error al actualizar datos.`,error.message);
    next(error);
  }
});

router.delete('/:id', async function(req,res,next){
  try {
    res.json(await service.delete(req.body))
  } catch (error) {
    console.error(`Error al eliminar datos.`,error.message);
    next(error);

  }
});

module.exports = router;
