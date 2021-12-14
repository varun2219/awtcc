import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';

var graphFft=(params)=>{
    var fftGraphData=params.fftGraphData
    return(
        <div>
            <LineChart 
              width={200}
              height={200}
              data={fftGraphData===null?{}:fftGraphData}
              hidePoints={true}
            />
        </div>
        
    )
}

export default graphFft;