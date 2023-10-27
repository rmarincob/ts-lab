import { Router } from 'express';
import { getAllUsersPage } from '../controllers/users';

const router = Router()

router.get('/users', getAllUsersPage)

export default router