function BoxColor ({r,g,b}) {
const color = `rgb(${r},${g},${b})`; // han de ser els mateixos valor dels exemple, per aico el signe dolar!

const style = {
    backgroundColor: color,
    color: 'black',
  };


    return(
<>
        <div style={style}>
        <p>{color}</p>
        </div>

</>

    );
}

export default BoxColor; 