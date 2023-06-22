import Header from "./header";
import Head from "next/head";
import { styled } from "styled-components";

export default function Layout({ children, totalBirdCount }) {
  return (
    <>
      <Head>
        <title>Wingspan</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header totalBirdCount={totalBirdCount} />
      <StyledLayout>{children}</StyledLayout>
    </>
  );
}

const StyledLayout = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin: 0 auto;
`;
