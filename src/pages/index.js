import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import GithubIcon from "../components/icons/github";
import TwitterIcon from "../components/icons/twitter";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Sam Tancharoensuksavai</h1>
    <ul className="nav">
      <li className="nav__link nav__link-first">
        <a
          href="https://github.com/akardet"
          className="nav__item nav__item-first"
        >
          <GithubIcon />
        </a>
      </li>
      <li className="nav__link">
        <a href="https://twitter.com/null_ux" className="nav__item">
          <TwitterIcon />
        </a>
      </li>
      <li className="nav__link">
        <a href="#" className="nav__item nav__item-btn">
          Resume
        </a>
      </li>
      <li className="nav__link">
        <a href="#" className="nav__item nav__item-btn">
          Contact
        </a>
      </li>
    </ul>
    <p>
      Retro tempor waistcoat sunt, cornhole enim aesthetic. Aliqua hexagon
      dreamcatcher food truck, incididunt cillum quis fingerstache you probably
      haven't heard of them meditation lumbersexual mollit in cronut forage.
      Adaptogen bushwick man bun, fashion axe cardigan schlitz roof party af
      enamel pin direct trade cray paleo veniam voluptate. Craft beer gastropub
      eiusmod marfa, deep v roof party incididunt cornhole chia humblebrag
      godard excepteur semiotics sint letterpress. Pop-up kale chips irony quis
      keffiyeh green juice nostrud dolor ex aute mlkshk in chicharrones deserunt
      lomo. Aliqua quis sriracha mixtape pork belly.
    </p>
  </Layout>
);

export default IndexPage;
