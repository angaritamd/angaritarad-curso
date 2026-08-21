import { useOutletContext } from 'react-router-dom';

/** Acceso al modal de registro (montado en Layout) desde cualquier ruta. */
export function useModal() {
  return useOutletContext();
}
