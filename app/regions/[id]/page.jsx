"use client";
import { use } from 'react';
import Link from 'next/link';
import statesData from '../../../data/states.json';
import propertiesData from '../../../data/properties.json';
import SectionTitle from "../../../components/SectionTitle";

const RegionPage = ({ params }) => {

  const { id } = use(params);

  // Fetch the Region based on the id
  const region = statesData.find((region) => region.id === parseInt(id));

  const { name, location, image } = region;

  return (
    <div className="container">
      <SectionTitle title={`${location} Properties`} />
      <h3 className="bg-custom-transparent text-white p-3">City: {name}</h3>
      <p/>
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
    </div>
  );
};

export default RegionPage;
