import { Radar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const ChartRadar = ({ label, dataset, titleLabel = 'items' }) => {
  const data = {
    labels: label,
    datasets: [
      {
        label: titleLabel,
        data: dataset,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true },
    },
  };
  return (
    <>
      <Radar data={data} options={options} />
    </>
  );
};
ChartRadar.propTypes = {
  label: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataset: PropTypes.arrayOf(PropTypes.number).isRequired,
  titleLabel: PropTypes.string.isRequired,
};
export default ChartRadar;
