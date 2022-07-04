import React from 'react';
import './heading.css';
import useInformation from '../../hooks/useInformation';

/**
 * @description first name user  and incentive message
 * @returns (React.ReactElement)
 */
function Heading() {
  const { user } = useInformation();

  return (
    <div className="heading">
      <h1>
        Bonjour
        <span className="firstname">
          {user && user.data.userInfos.firstName}
        </span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default Heading;
