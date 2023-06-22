import Image from "next/image";
import { styled } from "styled-components";
import birdcageIcon from "../public/images/birdcageIcon.png";
import Link from "next/link";

export default function Header({ totalBirdCount }) {
  return (
    <>
      <StyledHeader>
        <LogoLink href="/">
          <StyledHeading>Wingspan</StyledHeading>
        </LogoLink>
        <StyledNav>
          <Link href="/bird-cage">
            <CageIcon
              src={birdcageIcon}
              alt="birdcage icon"
              width="35"
              height="41"
              data-testid="bird-cage"
            />
          </Link>
          <CageNumber>{totalBirdCount}</CageNumber>
        </StyledNav>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  background-color: #b9d4c7;
  background-image: linear-gradient(to right, #b9d4c7, #5372a0);
`;

const StyledHeading = styled.h1`
  margin-left: 40px;
  font-family: "Bebas Neue", sans-serif;
  line-height: 19px;
  letter-spacing: 4px;
  :visited {
    color: pink;
  }
`;
const LogoLink = styled(Link)`
  color: #507fb2;
  text-decoration: none;

  &:visited {
    color: #e02d30;
    text-decoration: none;
  }
  &:hover {
    text-shadow: 2px 2px #f5b0b1;
  }
`;
const CageIcon = styled(Image)`
  &:hover {
    opacity: 60%;
    cursor: pointer;
  }
`;

const StyledNav = styled.nav`
  margin-right: 40px;
`;

const CageNumber = styled.span`
  position: absolute;
  top: 90px;
  right: 53px;
  font-size: 23px;
  z-index: 0;
  color: white;
  opacity: 90%;
  font-family: "Bebas Neue", sans-serif;
  pointer-events: none;
`;
