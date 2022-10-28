import data from "./db/data"

const Containers = () => {
  const style = {
    textAlign: "center"
  }
  const Title = () => {
    const title = {
      color:"#fff",
      fontSize:"20px",
      fontWeight:"600",
      marginTop: "15%",
      marginBottom: "5%"
    }
    return(
        <h2 style={title}>🌱인싹에 진심인 사람들🌱</h2>
    );
  };

  const Content = () => {
    const containerStyle = {
      width: "16vw",
      margin: "2em 0.3em",
      display: "inline-block",
      textAlign: "center"
    }
    const imageContainerStyle = {
      margin: 0,
      height: "15vw",
      overflow: "hidden",
      backgroundColor:"#fff",
      display: "flex",
      justifyContent: "center"
    }
    const imageStyle = {
      width: "inherit",
      height: "inherit",
    }
    const titleStyle = {
      fontWeight: "bold",
      fontSize: "1em",
      margin: "0.5em 0 0.2em 0",
      whiteSpace : "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
    const authorStyle ={
      fontWeight: "bold",
      fontSize: "0.8em",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
    const contentData = 
      data.map((item, index) =>{
      return(
        <div style={containerStyle} key={index}>
          <div
            style={imageContainerStyle}>
            <img
              alt=""
              className="thumbimg"
              style={imageStyle}
              src={`${process.env.PUBLIC_URL}\\img\\${item.thumb}`}
            />
          </div>
          <h6 style={titleStyle}>{item.title}</h6>
          <h6 style={authorStyle}>{item.author}</h6>
        </div>
      );
      });
      return(
        contentData
      );
  };

  return(
    
    <div style={style}>
      <Title />
      <Content/>
      
    </div>
  );
};

export default Containers;
