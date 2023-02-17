import express from "express";
import { createBalanco, deleteBalanco, getBalanco, getBalancos, updateBalanco } from "../controllers/BalancoController.js";
import { createCredito, deleteCredito, getCredito, getCreditos, updateCredito } from "../controllers/CreditoController.js";
import { createGasto, deleteGasto, getGasto, getGastos, updateGasto } from "../controllers/GastosController.js";
import { createPrevisao, deletePrevisao, getPrevisao, getPrevisoes, updatePrevisao } from "../controllers/PrevisaoController.js";
import { createRendimento, deleteRendimento, getRendimento, getRendimentos, updateRendimento } from "../controllers/RendimentoController.js";
import { getUsers, getUser, updateUser, createUser, deleteUser } from "../controllers/UsersController.js";

const router = express.Router();

router.get('/', getUsers)

router.post('/create', createUser)

router.post('/:id', getUser);

router.put('/update/:id', updateUser)

router.delete('/delete/:id', deleteUser);




router.get('/', getRendimentos)

router.post('/create', createRendimento)

router.post('/:id', getRendimento);

router.put('/update/:id', updateRendimento)

router.delete('/delete/:id', deleteRendimento);


router.get('/', getPrevisoes)

router.post('/create', createPrevisao)

router.post('/:id', getPrevisao);

router.put('/update/:id', updatePrevisao)

router.delete('/delete/:id', deletePrevisao);



router.get('/', getGastos)

router.post('/create', createGasto)

router.post('/:id', getGasto);

router.put('/update/:id', updateGasto)

router.delete('/delete/:id', deleteGasto);


router.get('/', getBalancos)

router.post('/create', createBalanco)

router.post('/:id', getBalanco);

router.put('/update/:id', updateBalanco)

router.delete('/delete/:id', deleteBalanco);


router.get('/', getCreditos)

router.post('/create', createCredito)

router.post('/:id', getCredito);

router.put('/update/:id', updateCredito)

router.delete('/delete/:id', deleteCredito);
export default router;