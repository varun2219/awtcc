import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';

var graphOg=(params)=>{
    var ogGraphData=params.ogGraphData
    return(
        <div>
            <LineChart 
              width={200}
              height={200}
              data={ogGraphData===null?{}:ogGraphData}
              hidePoints={true}
            />
        </div>
        
    )
}

export default graphOg;