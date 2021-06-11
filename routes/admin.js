const router = require('express').Router();
const adminController = require('../controllers/adminController');
const { upload, uploadMultiple } = require('../middlewares/multer');

router.get('/dashboard', adminController.viewDashboard);
router.get('/booking', adminController.viewBooking);

// Category
router.get('/category', adminController.viewCategory);
router.post('/category/add', adminController.addCategory);
router.put('/category/edit', adminController.updateCategory);
router.delete('/category/delete/:id', adminController.deleteCategory);

// Bank
router.get('/bank', adminController.viewBank);
router.post('/bank/add', upload, adminController.addBank);
router.put('/bank/edit', upload, adminController.editBank);
router.delete('/bank/delete/:id', adminController.deleteBank);

// Item
router.get('/item', adminController.viewItem);
router.post('/item/add', uploadMultiple, adminController.addItem);

module.exports = router;