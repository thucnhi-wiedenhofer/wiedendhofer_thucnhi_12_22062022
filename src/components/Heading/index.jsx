import React from 'react';
import './heading.css';
import useInformation from '../../hooks/useInformation';

function Heading() {
  /**
   * @description first name user  and incentive message
   * @returns (React.ReactElement)
   */
  const { user } = useInformation();

  return (
    <div className="profile col-lg-10">
      <h1>
        Bonjour
        <span className="redTitle">
          {user && user.data.userInfos.firstName}
        </span>
      </h1>
      <p className="p_marge">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

export default Heading;
