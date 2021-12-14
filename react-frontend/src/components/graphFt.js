import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';

var graphFt=(params)=>{
    var ftGraphData=params.ftGraphData
    return(
        <div>
            <LineChart 
              width={200}
              height={200}
              data={ftGraphData===null?{}:ftGraphData}
              hidePoints={true}
            />
        </div>
        
    )
}

export default graphFt;