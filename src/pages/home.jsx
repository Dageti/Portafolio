import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="home-container">
        <div className="hero">
          <h1>{t('home.greeting')}</h1>
          <h2>{t('home.description')}</h2>
          <Link to="/projects" className="btn btn-dark">
          {t('home.button')}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
