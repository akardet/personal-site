import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import GithubIcon from "../components/icons/github";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Sam Tancharoensuksavai</h1>
    <ul className="nav">
      <li className="nav__link">
        <a
          href="https//github.com/akardet"
          className="nav__item nav__item--first"
        >
          <GithubIcon />
        </a>
      </li>
      <li className="nav__link">
        <a href="#" className="nav__item">
          Resume
        </a>
      </li>
      <li className="nav__link">
        <a href="#" className="nav__item">
          Contact
        </a>
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
