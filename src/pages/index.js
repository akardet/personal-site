import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import GithubIcon from "../components/icons/github";
import TwitterIcon from "../components/icons/twitter";
import LinkedinIcon from "../components/icons/linkedin";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ul className="nav">
      <li className="nav__btn">
        <a href="https://github.com/akardet" className="nav__item">
          <GithubIcon /> <span className="nav__item-title">GitHub</span>
        </a>
      </li>
      <li className="nav__btn">
        <a href="https://twitter.com/null_ux" className="nav__item">
          <TwitterIcon />
          <span className="nav__item-title">Twitter</span>
        </a>
      </li>
      <li className="nav__btn">
        <a
          href="https://www.linkedin.com/in/sam-tancharoensuksavai/"
          className="nav__item"
        >
          <LinkedinIcon /> <span className="nav__item-title">LinkedIn</span>
        </a>
      </li>
    </ul>
    <div className="container">
      <div className="container__hero">
        <h1>
          Hi <br /> I'm Sam
        </h1>
        <h2>I like to design and build things for the web</h2>
        <div className="cta">
          <a className="cta__btn" href="mailto:stancharoen@gmail.com">
            Say Hi
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
