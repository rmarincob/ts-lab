import { Router } from 'express';
import { getAllAlbums, getAllUsersPage } from '../controllers/users';

const router = Router()

router.get('/users', getAllUsersPage)
router.get('/albums', getAllAlbums)

export default router