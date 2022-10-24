
const Contents = () => {
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
    const imageDatas = [
      "1_hawin.png",
      "2_세화",
      "3_이리어리",
      "4_고천락페스티벌_thumb",
      "5_집에가고싶다",
      "6_으놔"
    ];
    const titleStyle = {
      fontWeight: "bold",
      fontSize: "1em",
      margin: "0.5em 0 0.2em 0",
      textAlign: "center"
    }
    const titleDatas = [
      "도시를 날다",
      "인싹님 4컷",
      "듬직헌 인싹님",
      "무제 동영상",
      "쥬로링 인싹탐정",
      "무제 그림",
      "무제 글",
      "쓸디싹",
      "무제 그림",
      "인싹님 오너캐와 영칠칭구들",
      "무제 그림",
      "싹님을향한마음은퀄리티와반비례",
      "인싹의 삼시세끼",
      "Inssak Kim",
      "식인새싹 전래동화"
    ];
    const authorStyle ={
      fontWeight: "bold",
      fontSize: "0.8em",
      textAlign: "center"
    }
    const authorDatas = [
      "Hawin",
      "세화",
      "이리어리",
      "고천락페스티벌",
      "집에가고싶다",
      "으놔",
      "라람",
      "글리시아",
      "익명",
      "닉네임",
      "417",
      "이록",
      "이닛",
      "냐금",
      "한소원"
    ];
    return(
      <div style={container}>
        {imageDatas.map((image) =>
          <div style={imageStyle}
          backgroundImage="url('img/"{image}".png')" />
        )}
        {titleDatas.map((title) =>
          <h6 style={titleStyle}>{title}</h6>
        )}
        {authorDatas.map((author) =>
          <h6 style={authorStyle}>{author}</h6>
        )}
      </div>
    );
  };
  const Container = () => {
    const containerStyle = {
        display:"flex",
        justifyContent:"center",
        marginTop: "3em",
        marginBottom: "4.5em"
    };
    return(
      <div style={containerStyle}>
        <Contents />
      </div>
    );
  };

function Containers() {
    return (
      <>
        <Container />
      </>
    );
}

export default Containers;
