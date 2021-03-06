let express = require("express"); 
const router = express.Router();

const api2 = require('../controllers/api2');
const apiModels = require('../controllers/apimodels');

// native
const clienteControllerNative = require('../controllers/cliente.native');

const login = require('../controllers/login');

const auth = require('../middleware/autentificacion');

var pruebaController = require('../controllers/prueba');



router.get('/', function(req, res, next) {
    res.json({status:"success", message:"Parcel Pending API", data:{"version_number":"v1.0.0"}})    
});

router.get('/modelos/prueba', pruebaController.getAll);
router.get('/model/:table/getall', apiModels.getAll);
router.get('/model/:table/getById/:id', apiModels.getById);
router.get('/model/:table/getFilterBy/:filter', apiModels.getFilterBy);
router.get('/model/:table/getpagination/:filter', apiModels.getPagination);

router.post('/model/:table/create', auth.verificarToken, apiModels.create);
router.put('/model/:table/update/:id', auth.verificarToken, apiModels.update);


router.post('/api/:table/create', api2.create);
router.get('/api/:table/getall',api2.getAll);
router.put('/api/:table/update/:id', auth.verificarToken, api2.update);
router.delete('/api/:table/remove/:id', auth.verificarToken, api2.remove);
router.put('/api/:table/removeLogic/:id', auth.verificarToken, api2.removelogic);

router.get('/api/:table/getById/:id',api2.getById);
router.get('/api/:table/getFilterBy/:filter',api2.getFilterBy);
router.get('/api/:table/getpagination/:filter',api2.getPagination);

router.post('/login', login.logger);

// native sql
// clientes - cuentas por pagar

router.get('/native/cliente/getCuentasPagarByClientes', auth.verificarToken, clienteControllerNative.getCuentasPagarByClientes);



module.exports = router;