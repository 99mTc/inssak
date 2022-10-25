import data from "./db/data"

console.log(data.main);
const Containers = () => {
    const container = {
      width: "16vw",
      marginLeft: "0.3em",
      marginRight: "0.3em",
      display: "inline-block"
    }
    const imageStyle = {
      height: "15vw",
      // backgroundImage:"url('img/1_hawin.png')",
      backgroundSize:"cover",
      backgroundPosition:"center",
      margin: 0
    }
    const titleStyle = {
      fontWeight: "bold",
      fontSize: "1em",
      margin: "0.5em 0 0.2em 0",
      textAlign: "center"
    }
    const authorStyle ={
      fontWeight: "bold",
      fontSize: "0.8em",
      textAlign: "center"
    }
    const contentData = data.map((item, index) =>{
      return(
        <div style={container} key={index}>
          <div
            style={imageStyle}
            backgroundimage={item.thumb}
          >
          </div>
          <h6 style={titleStyle}>{item.title}</h6>
          <h6 style={authorStyle}>{item.name}</h6>
        </div>
      );
    });
    return(
      <>{contentData}</>
    );
  };

export default Containers;
