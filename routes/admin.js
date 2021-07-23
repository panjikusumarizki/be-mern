const router = require('express').Router();
const adminController = require('../controllers/adminController');
const { upload, uploadMultiple } = require('../middlewares/multer');
const auth = require('../middlewares/auth');

router.get('/signin', adminController.viewSignin);
router.post('/signin', adminController.actionSignin);
router.use(auth);
router.get('/logout', adminController.actionLogout);
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
router.get('/item/show-image/:id', adminController.showImageItem);
router.get('/item/:id', adminController.showEditItem);
router.put('/item/edit/:id', uploadMultiple, adminController.editItem);
router.delete('/item/delete/:id/delete', adminController.deleteItem);

// Endpoint detail item
router.get('/item/show-detail-item/:itemId', adminController.viewDetailItem);
router.post('/item/add/feature', upload, adminController.addFeature);
router.put('/item/update/feature', upload, adminController.editFeature);
router.delete('/item/:itemId/feature/delete/:id', adminController.deleteFeature);

router.post('/item/add/activity', upload, adminController.addActivity);
router.put('/item/update/activity', upload, adminController.editActivity);
router.delete('/item/:itemId/activity/delete/:id', adminController.deleteActivity);

module.exports = router;