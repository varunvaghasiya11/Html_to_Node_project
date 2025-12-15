const express = require('express');
const router = express.Router();

const {
    indexPage,
    aboutPage,
    blogPage,
    blogDetailsPage,
    contactPage,
    elementsPage,
    programsPage,
    whoWeArePage,
    contactPagedetail
} = require('../controllers/cherity');

router.get('/', indexPage);
router.get('/about', aboutPage);
router.get('/blog', blogPage);
router.get('/blog-details', blogDetailsPage);
router.get('/contact', contactPage);
router.post('/contact', contactPagedetail);
router.get('/elements', elementsPage);
router.get('/programs', programsPage);
router.get('/who-we-are', whoWeArePage);


module.exports = router;