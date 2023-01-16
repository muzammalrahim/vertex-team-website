import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}


html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
  scrollbar-color: rgb(98 84 243);
  scrollbar-width: thin;
  background: #eaf2ff;
}


${"" /* resuable code section  */}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-one-columns {
  grid-template-columns: repeat(1, .965fr);

}

.grid-two-columns {
  grid-template-columns: repeat(2, 1fr);

}

.grid-three-columns {
  ${"" /* grid-template-columns: repeat(3, 1fr); */}
  grid-template-columns: 1fr 1fr 1fr;

}

.grid-four-columns {
   grid-template-columns: 1fr 1fr 1fr 1fr ;
}

.grid-five-columns {
  grid-template-columns: repeat(5, 1fr);
}

.hamburger-icon {
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 0 2rem;
  font-size: 2.5rem;
}

.vertex-logo {
    padding: 1.3rem 1.8rem 1.5rem 1.5rem;
    display: flex;
    color: #000;
    gap: 1rem;
    border-radius: 2rem;
    text-decoration: none;
    background: #fff;
    font-weight: 800;
    font-size: 1.9rem;
}
.toggle-border{
    background: white;
    border-radius: 1rem;
    width: 45px;
    height: 40px;
    margin-top: 1rem;
}
.mob-div{
  display: none;
}
@media (max-width: 425px) {
  .web-div{
    display: none;
  }
  .mob-div{
    display: block;
  }
}

`;
