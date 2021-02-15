import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing:border-box; 
}
html {
  @media (max-width : 768px) {
    font-size:55%;
    p {
      font-size:180%;
    }
  }
  @media (max-width : 450px) {
    font-size:40%;
    p {
      font-size:180%;
    }
  }
}

body{
  overflow-x:hidden;
  background: #111111;
  font-family: 'Inter', sans-serif;
  color: white;
}
button {
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  font-size: 1.1.rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #23d997;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  &:hover{
      background: #23d997;
      color: white;
  }
}
h2 {
  font-weight: lighter;
  font-size: 4rem;
}
h3 {
  color: white;
}
h4 {
  font-weight:bold;
  font-size:2rem;
}
span {
  font-weight:bold;
  color: #23d997;
}
a {
  font-size:1.1rem;
}
p {
  padding: 3rem 0rem;
  color: #ccc;
  font-size: 1.4rem;
  line-height:150%;
}
`;

export default GlobalStyle;