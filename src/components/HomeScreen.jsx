import { useEffect, useState } from 'react';
import { FetchData } from '../api/FetchData';
import '../index.css';
import { NavLink } from 'react-router-dom';
const HomeScreen = () => {
  const [fetchData, setFetchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const RetrieveData = async () => {
    await FetchData(setFetchData, setIsLoading);
  };
  useEffect(() => {
    RetrieveData();
  }, []);
  console.log(fetchData);
  if (isLoading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <div className="homescreen-wrapper">
      {fetchData.map((item) => {
        return <MovieComponent key={item.score} item={item} />;
      })}
    </div>
  );
};
const MovieComponent = ({ item }) => {
  return (
    <NavLink to="filmdetails" state={item}>
      <div className="moviecomp-wrapper">
        <div className="moviecomp-image">
          <img
            src={
              item?.show?.image?.original ||
              'https://preyash2047.github.io/assets/img/no-preview-available.png?h=824917b166935ea4772542bec6e8f636'
            }
            alt=""
            height={200}
            width={200}
          />
        </div>
        <div className="moviecomp-title">{item?.show?.name}</div>
      </div>
    </NavLink>
  );
};
export default HomeScreen;
