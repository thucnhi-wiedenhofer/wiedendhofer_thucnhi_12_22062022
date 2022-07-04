import React from 'react';
import './score.css';
import useInformation from '../../hooks/useInformation';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  PolarAngleAxis,
  Label,
} from 'recharts';

/**
 * @description current day's score Radial Bar Chart
 * @returns (React.ReactElement)
 */
function Score() {
  const { user } = useInformation();
  let score = user && user.data.todayScore;

  //correction error in API
  if (score === undefined) {
    score = user && user.data.score;
  }

  const scoreData = [{ name: 'completed', value: score, fillColor: `#ff0000` }];

  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };

  const renderLegend = () => {
    return (
      <div>
        <div className="radialBarLegend">
          <span>{score * 100}%</span>
          <p>de votre objectif</p>
        </div>
      </div>
    );
  };

  return (
    <div className="averageScore">
      <ResponsiveContainer width="99%" height="99%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="80%"
          barSize={10}
          data={scoreData}
          startAngle={90}
          endAngle={360}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 1]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            minAngle={300}
            background={{ fill: '#FBFBFB' }}
            clockWise
            dataKey="score"
            cornerRadius={10}
            fill="red"
          />
          <Label
            value="Pages of my website"
            offset={0}
            position="insideBottom"
          />
          <text
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            style={{
              padding: '20px',
              transform: 'translate(15%, 10%)',
              color: '#000',
              fontWeight: '500',
            }}
          >
            Score
          </text>
          <Legend
            content={renderLegend}
            layout="horizontal"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Score;
