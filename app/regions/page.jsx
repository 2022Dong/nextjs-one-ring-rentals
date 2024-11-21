import Link from 'next/link';
import Copyright from "../../components/Copyright"
import statesData from '../../data/states.json';

const RegionsPage = () => {
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="main col-sm-12">
              <h1 className="section-title">Regions in Australia</h1>
              <div className="grid-style1 clearfix">
              {statesData.map((state, index) => (
                <div className="item col-md-4" key={index}>
                  <div className="image">
                    <Link href='/'>
                      <h3>{ state.name }</h3>
                      <span className="location">{ state.location }</span>
                    </Link>
                    <img src={ state.image } alt="" />
                  </div>
                </div>
                ))}
              </div>              
            </div>
            <Copyright />
          </div>
        </div>
      </div>
    </>
  )
}

export default RegionsPage