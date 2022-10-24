import Containers from "./Containers";


const Main = () => {
  const style = {
    backgroundImage:"url('img/main.png')",
    backgroundSize:"contain",
    backgroundRepeat:"no-repeat",
    height:"100vh",
    marginTop:"4vh"
  }
  return(
    <div style={style} />
  );
};
const Header = () => {
  const header = {
    marginTop:"-0.9vw",
    position:"fixed"
  }
  const logo = {
    color:"#fff",
    fontSize:"24px",
    fontWeight:"600",
    marginLeft:"2.5vw"
  }
  return(
    <header style={header}>
      <span onClick={"#"} style={logo}>SSAK展</span>
    </header>
  );
};
const Title = () => {
  const title = {
    color:"#fff",
    fontSize:"20px",
    fontWeight:"600",
    textAlign:"center",
    marginTop:"36px"
  }
  return(
      <h2 style={title}>🌱인싹에 진심인 사람들🌱</h2>
  );
};

function App() {
  return (
    <>
      <Header />
      <Main />
      <Title />
      <Containers />
    </>
  );
}

export default App;
