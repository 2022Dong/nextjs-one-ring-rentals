"use client";
import { useState } from 'react';
import Link from 'next/link';
import propertiesData from '../data/properties.json';
import regionsData from '../data/regions.json';
import articlesData from '../data/articles.json';
import SectionTitle from './SectionTitle';

const MainContent = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  const toggleDescription = (id) => {
    setShowFullDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div className="main col-sm-8">
      <SectionTitle title="Featured Properties" />

      <div className="grid-style1 clearfix">
        {propertiesData.slice(0, 6).map((property, index) => (
          <div className="item col-md-4" key={index}>
            <div className="image">
              <Link href={`/properties/${property.id}`}>
                <h3>{property.title}</h3>
                <span className="location">{property.location}</span>
              </Link>
              <img src={property.image} alt="" />
            </div>
            <div className="price">
              <span>{property.price}</span>
              <p>per night</p>
            </div>
            <ul className="amenities">
              <li><i className="icon-bedrooms"></i> {property.bedrooms}</li>
              <li><i className="icon-bathrooms"></i> {property.bathrooms}</li>
            </ul>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-sm-12">
        <SectionTitle title="Popular Regions" />
          <div id="regions">
            {regionsData.map((region, index) => (
              <div className="item" key={index}>
                <Link href='/'>
                  <img src={region.image} alt="" />
                  <h3>{region.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SectionTitle title="Recent Articles" />
      <div className="grid-style1">
        {articlesData.slice(0, 3).map((article) => {
          const isFullDescription = showFullDescription[article.id];
          let description = article.description;
          if (!isFullDescription) {
            description = description.substring(0, 90) + '...';
          }

          return (
            <div className="item col-md-4" key={article.id}>
              <div className="image">
                <Link href={`/articles/${article.id}`}>
                  <span className="btn btn-default">
                    <i className="fa fa-file-o"></i> Read More
                  </span>
                </Link>
                <img src={article.image} alt="" />
              </div>
              <div className="tag">
                <i className={article.tagIcon}></i>
              </div>
              <div className="info-blog">
                <ul className="top-info">
                  <li><i className="fa fa-calendar"></i> {article.date}</li>
                  <li><i className="fa fa-comments-o"></i> {article.comments}</li>
                  <li><i className="fa fa-tags"></i> {article.tags}</li>
                </ul>
                <h3>
                  <Link href={`/articles/${article.id}`}>{article.title}</Link>
                </h3>
                <p>{description}
                  <button
                    onClick={() => toggleDescription(article.id)}
                    className="btn btn-link">
                    {isFullDescription ? 'Less' : 'More'}
                  </button>
                  </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="center">
        <Link href="/news" className="btn btn-default-color">View All News</Link>
      </div>
    </div>
  );
};

export default MainContent;
