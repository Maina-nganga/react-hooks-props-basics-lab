import React from "react";
import Links from "./Links";

function About({ bio, links }) {
  return (
    <div id="about">
      {bio && bio.length > 0 ? <p>{bio}</p> : null}
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;
