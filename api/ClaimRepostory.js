import Swal from 'sweetalert2';
import ROUTES from '../app/helpers/constants';

const ClaimRepostory = {
  getAll: async () => {
    const response = await fetch(`${ROUTES.api}/dashboard/reclamo`).catch(() =>
      Swal.fire('Problemas de conexion', '', 'Error')
    );
    const data = await response.json();
    return data;
  },

  getById: async (id) => {
    const response = await fetch(
      `${ROUTES.api}/dashboard/reclamo/${id}`
    ).catch(() => Swal.fire('Problemas de conexion', '', 'Error'));
    const data = await response.json();
    return data;
  },
  delete: async (id) => {
    const response = await fetch(`${ROUTES.api}/dashboard/reclamo/${id}`, {
      method: 'DELETE',
    }).catch(() => Swal.fire('Problemas de conexion', '', 'Error'));

    const data = await response.json();
    return data;
  },
};

export default ClaimRepostory;
