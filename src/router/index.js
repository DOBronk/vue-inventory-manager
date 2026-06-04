import { createRouter, createWebHistory  } from 'vue-router'
import {routes} from '@/domains/inventory/router/routes.js'; // Temp assignment

const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes: routes });
export default router;
