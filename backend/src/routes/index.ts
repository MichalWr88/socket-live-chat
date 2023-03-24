import { Router } from 'express';

import config from '../global/env';

const router = Router();

router.get('/', (req, res) => {
  res.send({ version: config.VERSION });
});

export default router;
