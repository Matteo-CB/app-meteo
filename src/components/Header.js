import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

const Header = () => {
  const [city, setCity] = useState('londres');
  const [country, setCountry] = useState('angleterre');
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=fr&appid=7585221fbcead099c4e4c4bb6fd3b68f&units=metric`
      )
      .then((res) => setData(res.data))
      .catch((error) => {
        console.log(error);
        setData(null);
      });
  }, [city, country]);

  return (
    <>
      <header>
        <h1>Weather App</h1>
        <input
          type="text"
          placeholder="Cherchez une ville"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cherchez un pays ( Ex : FR )"
          onChange={(e) => setCountry(e.target.value)}
        />
      </header>
      <Card data={data} />
    </>
  );
};

export default Header;