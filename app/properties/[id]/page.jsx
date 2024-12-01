"use client";
import { use } from 'react';
import propertiesData from '../../../data/properties.json';
import SectionTitle from "../../../components/SectionTitle";

const PropertyPage = ({ params }) => {
  const { id } = use(params);

  // Fetch the Property based on the id
  const property = propertiesData.find((property) => property.id === parseInt(id));

  const { title, location, image, price, perNight, bedrooms, bathrooms } = property;

    return ( 
        <div className="container">
        <SectionTitle title={`Property: ${title}`} />
        <p>Location: {location}</p>
        <p>Price: {perNight}</p>
        <p>Bedrooms: {bedrooms}</p>
        <p>Bathrooms: {bathrooms}</p>
        </div>
    );
}
 
export default PropertyPage;