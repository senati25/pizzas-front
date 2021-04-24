import ChartBar from '../../shared/Chart/Bar';
import ChartDoughnut from '../../shared/Chart/Doughnut';
import ChartLine from '../../shared/Chart/LineChart';
import ChartPie from '../../shared/Chart/Pie';
import ChartPolarArea from '../../shared/Chart/Polar';
import ChartRadar from '../../shared/Chart/Radar';
import ChartScatter from '../../shared/Chart/Scatter';

const HomeDashBoard = () => {
  // data for ChartBar
  const data = [10, 20, 43, 50, 67];
  const labels = ['dia1', 'dia2', 'dia3', 'dia4', 'dia5'];
  // data form chartdoughnut
  const doughnutdata = [10, 20, 43, 50, 67];
  const doughnutlabels = ['Nota1', 'Nota2', 'Nota3', 'Nota4', 'Nota5'];
  // data for chatLine
  const linedata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const linelabels = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Nobiembre',
    'Diciembre',
  ];
  // data for chatpie
  const piedata = [10, 20, 30];
  const pielabels = ['Diciembre', 'Junio', 'Enero'];
  // data for chatPolar
  const polardata = [9, 10, 11, 12];
  const polarlabels = ['Enero', 'Febrero', 'Marzo', 'Abril'];

  // data for chatradar
  const radardata = [9, 10, 11, 12];
  const radarlabels = ['Enero', 'Febrero', 'Marzo', 'Abril'];
  // data for chartscatter
  const scatterdata = [
    { x: 1, y: 10 },
    { x: 20, y: 25 },
    { x: 40, y: 10 },
    { x: 12, y: 32 },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Titulo Grafico</div>
              </div>
              <div className="card-body">
                <ChartBar label={labels} dataset={data} titleLabel="dias" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Notas</div>
              </div>
              <div className="card-body">
                <ChartDoughnut
                  label={doughnutlabels}
                  dataset={doughnutdata}
                  titleLabel="dias"
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Ventas En el año</div>
              </div>
              <div className="card-body">
                <ChartPie
                  label={pielabels}
                  dataset={piedata}
                  titleLabel="Ventas"
                />
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Meses con mas Ventas</div>
              </div>
              <div className="card-body">
                <ChartLine
                  label={linelabels}
                  dataset={linedata}
                  titleLabel="ventas"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Chart Polar</div>
              </div>
              <div className="card-body">
                <ChartPolarArea
                  label={polarlabels}
                  dataset={polardata}
                  titleLabel="Ventas"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Chart Radar</div>
              </div>
              <div className="card-body">
                <ChartRadar
                  label={radarlabels}
                  dataset={radardata}
                  titleLabel="venta"
                />
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Chart Radar</div>
              </div>
              <div className="card-body">
                <ChartScatter dataset={scatterdata} titleLabel="venta" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDashBoard;
