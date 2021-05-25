import useDashboardContext from '../../../hooks/useDashboardContext';

const Kitchen = () => {
  const { products } = useDashboardContext();
  console.log({ products });
  return <div>Kitchen</div>;
};

export default Kitchen;
