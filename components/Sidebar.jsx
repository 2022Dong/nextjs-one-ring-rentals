import React from 'react';
import Link from 'next/link';
import dealsData from '../data/lastMinuteDeals.json';
import activityData from '../data/activity.json';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar col-sm-4">
        {/* <!-- BEGIN SIDEBAR ABOUT --> */}
        <div className="col-sm-12">
          <h2 className="section-title">Last Minute Deals</h2>
          <ul className="latest-news">
            {dealsData.map((deal, index) => (
              <li className="col-md-12" key={index}>
                <div className="image">
                  <Link href="/"></Link>
                  <img alt={deal.title} src={deal.image} />
                </div>

                <ul className="top-info">
                  <li>
                    <i className="fa fa-calendar"></i> {deal.date}
                  </li>
                </ul>

                <h4>
                  <Link href="/">{deal.title}</Link>
                  <p>{deal.location}</p>
                </h4>
              </li>
            ))}
          </ul>
          <p className="center">
            <Link className="btn btn-fullcolor" href="/">
              More deals
            </Link>
          </p>
        </div>
        {/* <!-- END SIDEBAR ABOUT --> */}

        <div className="col-sm-12">
          <h2 className="section-title">Activity</h2>
          <ul className="activity">
            {activityData.map((activity, index) => (
              <li className="col-lg-12" key={index}>
                <Link href="/">
                  <img src={activity.image} alt="" />
                </Link>
                <div className="info">
                  <h5>
                    {activity.user} {activity.action}{' '}
                    <Link href="/">{activity.title}</Link>
                  </h5>
                  <p>{activity.comment}</p>
                  <h6>{activity.time}</h6>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
