import ROUTES from '../app/helpers/constants';

const IGVRepository = {
  get: async () => {
    const response = await fetch(`${ROUTES.api}/publico/igv`);
    const data = await response.json();
    return data;
  },
};

export default IGVRepository;
