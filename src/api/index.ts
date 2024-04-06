
import express from 'express';
import MessageResponse from '../interfaces/MessageResponse';
import { Product } from './ListProducts'; 
import { products } from './ListProducts'; 

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋 -🌎PRANASTORE🌏',
  });
});

// Ruta para obtener toda la lista de productos
router.get<{}, Product[]>('/listproducts', (req, res) => {
  res.json(products); 
});



// Ruta para obtener un producto por su ID
router.get<{ id: string }, Product | { error: string }>('/listproducts/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find((p: Product) => p.id === productId); 
  if (product) {
    res.json(product); 
  } else {
    res.status(404).json({ error: 'Producto no existente o verifica tu busqueda' }); // Devolver un error 404 si no se encuentra el producto
  }
});

export default router;
