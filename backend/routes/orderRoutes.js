import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
} from '../controllers/orderController.js';

import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';

// A route determins what function controller should handle a spesific request to the api.

const router = express.Router();

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').get(protect, updateOrderToPaid);

export default router;
