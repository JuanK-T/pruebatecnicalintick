var express = require('express');
var router = express.Router();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proyecto' });
});

// c13a5d2ecf7cc6b8c50c06d7e1dfce22
// Un usuario quiere saber cuánto dinero necesita para comprar todos los stocks disponibles, ( solo necesitamos el dato )
router.get('/user/:id', function(req, res, next) {
	let {id} = req.params;
	console.log(id);
	fetch(`https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=${id}`)
  	.then(response => 
  		{ return response.json()})
  	.then(data => {
  		console.log(data);
  		return res.send(data)
  	})
  	.catch(error => {
  		console.log('ERORR: ' + error)
  		res.send('ERORR: ' + error)
  	});
})

module.exports = router;
