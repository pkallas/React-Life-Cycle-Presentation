const router = require('express').Router();

router.use('/someRESTfulRoute', (req, res) => {
  res.json({ fakeDataKey: 'Some fake data value' });
});

export default router;
