import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

const IconGroup = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;

  a {
    color: #616caa;
    font-size: 30px;
    margin-right: 20px;
  }

  svg {
    transition: 0.2s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export default function SocialIcons() {
  // customize social links here
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/christinamcmahon1/"
    }, {
      name: "Github",
      url: "https://github.com/christinamcmahon"
    }
  ]

  return (
    <IconGroup>
      {socialLinks.map(function ({ name, url }, index) {
        return (
          <a href={url} key={index}>
            <Icon name={name} />
          </a>
        )
      })}
    </IconGroup>
  );
}

const Icon = ({ name }) => {
  switch (name) {
    case "Github":
      return <FaGithub />;
    case "LinkedIn":
      return <FaLinkedin />;

    default:
      break;
  }
};
