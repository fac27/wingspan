// import Link from "next/link";
import Image from "next/image";
import styled from 'styled-components';


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
        {/* <Link href='/birdcage'> */}
          <svg width="35" height="41" viewBox="0 0 35 41" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_12_137)">
    <path d="M16.464 5C17.664 -2.24439 18.964 1.98151 19.464 5" stroke="black" />
    <path d="M18.464 4.99998C24.964 13 23.6306 32.8333 23.964 39.5M11.964 5.99998C4.46395 15.5 6.63063 32.8333 6.96397 39.5M17.464 4.99998C9.96395 14.5 11.6306 32.8333 11.964 39.5M23.464 5.99998C31.4639 11.5 28.1306 32.8333 28.464 39.5" stroke="black" />
    <path d="M10.4639 40.0001C33.9639 40.0001 1.46389 40.0001 1.46389 40.0001C1.46389 40.0001 0.420138 25.6341 1.46389 19.5001C2.50764 13.366 6.46383 8.00002 10.4639 6.50002C14.4639 5.00002 15.3717 5.1699 18.4639 5.00002M18.4639 40.0001H25.9639H33.9639" stroke="black" />
    <path d="M24.964 40.0001C1.46396 40.0001 33.964 40.0001 33.964 40.0001C33.964 40.0001 35.0077 25.6341 33.964 19.5C32.9202 13.366 28.9641 8 24.964 6.5C20.9639 5 20.0562 5.16989 16.964 5M16.964 40.0001H9.46396H1.46396" stroke="black" />
    <path d="M18.464 40L17.964 5.5" stroke="black" />
  </g>
  <defs>
    <clipPath id="clip0_12_137">
      <rect width="35" height="41" fill="white" />
    </clipPath>
  </defs>
</svg>
{/* </Link> */}
      
      </div>
    </StyledNav>
  </StyledHeader>;
    </>
  )
  
}

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
height: 200px;
background-color: #B9D4C7; 
background-image: linear-gradient(to right, #b9d4c7 , #5372a0);
`;

const StyledHeading = styled.h1`
margin-left: 20px;
font-family: 'BebasNeue Regular', sans-serif;
line-height: 19px;
`;

const StyledNav = styled.nav`
margin-right: 20px;
`;
