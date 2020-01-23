import React, { useState, useEffect } from 'react';
import Episode from './Episode';
import '../scss/App.scss';
import logo from '../statics/logo.png';
import { useLocation } from 'react-router-dom';

const EpisodesList = props => {
  console.log(new URLSearchParams(useLocation().search));
  const [episodes, setEpisodes] = useState({ info: {}, results: [] });
  const [oldScrollPosition, updateScroll] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = `https://rickandmortyapi.com/api/episode`;
    const data = await (await fetch(url)).json();
    setEpisodes(data);
  };

  const episodesList = episodes.results.map(el => {
    return <Episode data={el} key={el.id}></Episode>;
  });

  let timeout;

  const handleScroll = e => {
    const newScrollPosition = e.target.scrollTop;
    if (newScrollPosition > oldScrollPosition)
      e.target.firstElementChild.classList.add('shrink');
    else if (newScrollPosition < oldScrollPosition)
      e.target.firstElementChild.classList.remove('shrink');
    updateScroll(newScrollPosition);
  };

  return (
    <div className="episodes-container" onScroll={handleScroll}>
      <div className="header">
        <img src={logo}></img>
        <h2>All episodes</h2>
      </div>
      {episodesList}
    </div>
  );
};

export default EpisodesList;
