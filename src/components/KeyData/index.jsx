import React from 'react';
import './keyData.css';
import useInformation from '../../hooks/useInformation';
import caloriesIcon from './../../assets/images/calories-icon.svg';
import proteinIcon from './../../assets/images/protein-icon.svg';
import carbsIcon from './../../assets/images/carbs-icon.svg';
import fatIcon from './../../assets/images/fat-icon.svg';
import comma from '../../utilities/comma';

/**
 * Card infos key data (calories, glucides,proteines,lipides)
 *
 * @returns {React.ReactElement}
 */

function KeyData() {
  const { user } = useInformation();

  return (
    <div className="keyData">
      <ul>
        <li className="keyData-item">
          <img src={caloriesIcon} alt="calories" width="60px" height="60px" />
          <p>
            <span>{user && comma(user.data.keyData.calorieCount)}kCal</span>
            <br />
            Calories
          </p>
        </li>
        <li className="keyData-item">
          <img src={proteinIcon} alt="proteins" width="60px" height="60px" />
          <p>
            <span>{user && comma(user.data.keyData.proteinCount)}kCal</span>
            <br />
            Proteines
          </p>
        </li>
        <li className="keyData-item">
          <img src={carbsIcon} alt="glucides" width="60px" height="60px" />
          <p>
            <span>
              {user && comma(user.data.keyData.carbohydrateCount)}kCal
            </span>
            <br />
            Glucides
          </p>
        </li>
        <li className="keyData-item">
          <img src={fatIcon} alt="lipids" width="60px" height="60px" />
          <p>
            <span>{user && comma(user.data.keyData.lipidCount)}kCal</span>
            <br />
            Lipides
          </p>
        </li>
      </ul>
    </div>
  );
}

export default KeyData;
