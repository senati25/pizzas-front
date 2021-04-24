import { Scatter } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const ChartScatter = ({ dataset, titleLabel = '' }) => {
  const data = {
    datasets: [
      {
        label: titleLabel,
        data: dataset,
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Scatter data={data} options={options} />
    </>
  );
};
ChartScatter.propTypes = {
  dataset: PropTypes.arrayOf(PropTypes.object).isRequired,
  titleLabel: PropTypes.string.isRequired,
};
export default ChartScatter;
