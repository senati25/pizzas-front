import { Pie } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const ChartPie = ({ label, dataset, titleLabel = 'items' }) => {
  const data = {
    labels: label,
    datasets: [
      {
        label: titleLabel,
        data: dataset,
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',
        ],
        borderWidth: 1,
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
      <Pie data={data} options={options} />
    </>
  );
};
ChartPie.propTypes = {
  label: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataset: PropTypes.arrayOf(PropTypes.number).isRequired,
  titleLabel: PropTypes.string.isRequired,
};
export default ChartPie;
