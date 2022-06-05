import {
  addOrderItems,
  getOrderById,
  getMyOrders,
} from '../controllers/orderController.js';

import express from 'express';
import { protect } from '../middleware/authMiddleware.js';

// A route determins what function controller should handle a spesific request to the api.

const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);

export default router;
