import React from 'react';
import Chartist from 'chartist';
// Required to make the plugins load correctly 
window.Chartist = Chartist;
require('chartist-plugin-threshold');
require('chartist-plugin-targetline');

import './chart.scss';

class Chart extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    drawChart(this.refs.chart, this.props.name);
  }

  render() {
    return (
      <div className={`intro-chart ${this.props.name}`}>
        <div className="growth-chart">
          <div className="chart" ref="chart" />
          <div className="y-axis">Level</div>
          <div className="x-axis">Practice time</div>
          {this.props.name === 'uninspired' && (
            <div className="stagnation fade-in">
              <span>Stagnation</span>
            </div>
          )}
          {this.props.name === 'inspired' && (
            <div className="level-label basic">Basic</div>
          )}
          {this.props.name === 'inspired' && (
            <div className="level-label excellent">Excellent</div>
          )}
        </div>
      </div>
    );
  }
}

export default Chart;

const config = {
  chartOptions: {
    low: 0,
    high: 7,
    showLabel: true,
    fullWidth: true,
    stretch: true,
    showArea: false,
    width: '400px',
    height: '300px',
    axisX: { type: Chartist.StepAxis, ticks: [0, 1, 2, 3, 4, 5, 6] },
    plugins: [] // Set dynamically in drawChart()
  },
  responsiveChartOptions: [
    [
      'screen and (min-width: 0) and (max-width: 600px)',
      { width: '320px', height: '240px' }
    ]
  ],
  thresholdMiss: { low: 2.8, high: 3.1 }
}

const programData = {
  uninspired: [0, 1, 2, 2.7, 3, 3, 3, 3],
  inspired: [0, 1, 2, 2.7, 2.8, 4, 5, 6]
}

const getPlugins = name => {
  let plugins = [
    Chartist.plugins.ctThreshold({
      threshold: 2.9,
      // Fix for Safari to display clipping mask
      basePath: window.is_safari
        ? window.location.href.replace(window.location.hash, '')
        : ''
    })
  ];

  if (name === 'inspired') {
    plugins.push(
      Chartist.plugins.ctTargetLine({
        value: 2.75,
        class: 'ct-target-line level-basic'
      })
    );
    plugins.push(
      Chartist.plugins.ctTargetLine({
        value: 6,
        class: 'ct-target-line level-top'
      })
    );
  }

  return plugins;
};

const onDraw = (name, data) => {
  if (data.type === 'point') {
    // Replace the line point with a check/question mark icon + label
    let iconType;
    let label = '';
    if (data.value.y === 0) {
      // Don't display data point at 0
      data.element.remove();
      return;
    } else if (data.value.y < config.thresholdMiss.low) {
      iconType = 'check';

      // Show labels for uninspired chart
      if (name === 'uninspired') {
        if (data.index === 1) {
          label = 'Chords';
        } else if (data.index === 2) {
          label = 'Melody';
        } else if (data.index === 3) {
          label = 'Lyrics';
        }
      }
    } else if (data.value.y >= config.thresholdMiss.low && data.value.y <= config.thresholdMiss.high) {
      // Missed
      iconType = 'question';
    } else if (data.value.y > config.thresholdMiss.high) {
      iconType = 'check growing';
    }

    label = label !== '' ? `<span>${label}</span>` : '';

    const svg = new Chartist.Svg();
    const iconElm = `<i class="fas fa-${iconType}"></i>`;
    const icon = svg.foreignObject(
      `<div class="${iconType} icon">${iconElm}${label}</div>`,
      {
        x: data.x - 12,
        y: data.y - 12,
        width: 100,
        height: 50
      }
    );

    data.element.replace(icon);
  }

  // Draw only the x and y axis but not a full grid
  if (data.type === 'grid' && data.index !== 0) {
    return data.element.remove();
  }
};

const drawChart = (container, name) => {
  config.chartOptions.plugins = getPlugins(name);
  let chart = new Chartist.Line(container, null, config.chartOptions, config.responsiveChartOptions);
  chart.on('draw', (data) => {
    onDraw(name, data);
  });

  return chart.update({ series: [programData[name]] });
};
