// import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import birdcage from '../images/birdcage.png'

export default function Header() {
  return (
    <>
      <StyledHeader>
        <StyledHeading>Wingspan</StyledHeading>
        <StyledNav>
          {/* {!home &&(
    
   <Link href="/">HomePage</Link>
    
   )}  */}
          <div>
            <Image
              src={birdcage}
              alt="birdcage icon"
              width="35"
              height="41"
            />
          </div>
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
  margin-left: 20px;
  font-family: "BebasNeue Regular", sans-serif;
  line-height: 19px;
`;

const StyledNav = styled.nav`
  margin-right: 20px;
`;
