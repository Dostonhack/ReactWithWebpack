import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
// import MainRoutes from './MainRoutes';
// MainRoutes
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([ LoginRoutes]);
}