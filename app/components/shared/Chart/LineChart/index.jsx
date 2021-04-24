import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const ChartLine = ({ label, dataset, titleLabel = 'items' }) => {
  const data = {
    labels: label,
    datasets: [
      {
        label: titleLabel,
        data: dataset,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
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
      <Line data={data} options={options} />
    </>
  );
};
ChartLine.propTypes = {
  label: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataset: PropTypes.arrayOf(PropTypes.number).isRequired,
  titleLabel: PropTypes.string.isRequired,
};
export default ChartLine;
