import React, { useState } from 'react';
import { MDBRange } from 'mdb-react-ui-kit';
import Select from 'react-select';
import axios from 'axios';
import { backend_url } from './config';
import LineChart from 'react-linechart';
import '../node_modules/react-linechart/dist/styles.css';

function App() {
  const [range, setRange] = useState(0.5);
  const [select,setSelect] = useState('sq');
  const [ogGraph,setOgGraph]=useState({});
  const [ftGraph,setFtGraph]=useState({});
  const [fftGraph,setFftGraph]=useState({});
  const [ttime,setTime]=useState([]);
  const [ogGraphData, setOgGraphData]=useState(null);
  const [ftGraphData, setFtGraphData]=useState(null);
  const [fftGraphData, setFftGraphData]=useState(null);

  const options = [
    { value: 'sq', label: 'Square' },
    { value: 'tri', label: 'Triangle' },
    { value: 'one', label: 'One' },
    { value: 'sine', label: 'Sine' } 
  ];

  const rangeOnChange = (e) => {
    setRange(e.target.value);
    fetchfft(e.target.value);
  }
  const selectOnChange=(e)=>{
    setSelect(e.value);
    fetchgraphs(e.value);
    ogData();
    ftData();
    fftData();
  }

  const fetchgraphs=(selectValue)=>{

    //square
    if(selectValue==='sq'){
      //fft
      const headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
      const params = {"alpha": range};
      console.log(params)
      axios.get(backend_url+'/square', {
        headers: headers,
        params: params
      })
      .then(res => {
        const data = res.data;
        setFftGraph({ data });
        fftData();
      })

      //ft
      axios.get(backend_url+'/squareft')
      .then(res => {
        const data = res.data;
        setFtGraph({ data });
        ftData();
      })

      //og
      axios.get(backend_url+'/squareog')
      .then(res => {
        const data = res.data;
        setOgGraph({ data });
        ogData();
      })

      //time
      axios.get(backend_url+'/squaret')
      .then(res => {
        const data = res.data;
        setTime({ data });
      })
    }

    //triangle
    if(selectValue==='tri'){
      const headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
      const params = {"alpha": range};
      //fft
      axios.get(backend_url+'/tri', {
        headers: headers,
        params: params
      })
      .then(res => {
        const data = res.data;
        setFftGraph({ data });
        fftData();
      })

      //ft
      axios.get(backend_url+'/trift')
      .then(res => {
        const data = res.data;
        setFtGraph({ data });
        ftData();
      })

      //og
      axios.get(backend_url+'/triog')
      .then(res => {
        const data = res.data;
        setOgGraph({ data });
        ogData();
      })

      //time
      axios.get(backend_url+'/trit')
      .then(res => {
        const data = res.data;
        setTime({ data });
      })
    }

    if(selectValue==='sine'){
      const headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
      const params = {"alpha": range};
      //fft
      axios.get(backend_url+'/sine', {
        headers: headers,
        params: params
      })
      .then(res => {
        const data = res.data;
        setFftGraph({ data });
        fftData();
      })

      //ft
      axios.get(backend_url+'/sineft')
      .then(res => {
        const data = res.data;
        setFtGraph({ data });
        ftData();
      })

      //og
      axios.get(backend_url+'/sineog')
      .then(res => {
        const data = res.data;
        setOgGraph({ data });
        ogData();
      })
      
      //time
      axios.get(backend_url+'/sinet')
      .then(res => {
        const data = res.data;
        setTime({ data });
      })
    }
    
  }
  const fetchfft=(rangeValue)=>{
    
    //square
    if(select==='sq'){
      //fft
      const headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
      const params = {"alpha": rangeValue};
      console.log(params)
      axios.get(backend_url+'/square', {
        headers: headers,
        params: params
      })
      .then(res => {
        const data = res.data;
        setFftGraph({ data });
        fftData();
      })
      
      //time
      axios.get(backend_url+'/squaret')
      .then(res => {
        const data = res.data;
        setTime({ data });
      })
    }

    //triangle
    if(select==='tri'){
      const headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
      const params = {"alpha": rangeValue};
      //fft
      axios.get(backend_url+'/tri', {
        headers: headers,
        params: params
      })
      .then(res => {
        const data = res.data;
        setFftGraph({ data });
        fftData();
      })

      //time
      axios.get(backend_url+'/trit')
      .then(res => {
        const data = res.data;
        setTime({ data });
      })
    }

    if(select==='sine'){
      const headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
      const params = {"alpha": rangeValue};
      //fft
      axios.get(backend_url+'/sine', {
        headers: headers,
        params: params
      })
      .then(res => {
        const data = res.data;
        setFftGraph({ data });
        fftData();
      })
      
      //time
      axios.get(backend_url+'/sinet')
      .then(res => {
        const data = res.data;
        setTime({ data });
      })
    }
  }

  var ogData=()=>{      
    if (ttime['data']!==undefined){
      var r=[]
      var realData={
        color: "#FF6633",
        name: "Real"
      }
      var point=[]
      
      for(var i=0;i<ttime['data']['t'].length;i++){
        var obj={}
        obj['x']=ttime['data']['t'][i];
        obj['y']=ogGraph['data']['og'][i];
        point.push(obj)
      }
      realData['points']=point
      r.push(realData)
      setOgGraphData(r)
      console.log(ogGraphData)
    }
  }

  var ftData=()=>{  
    if (ttime['data']!==undefined){
      var r=[]

      //real
      var realData={
        color: "#FF6633",
        name: "Real"
      }
      var point=[]
      for(var i=0;i<ttime['data']['t'].length;i++){
        var obj={}
        obj['x']=ttime['data']['t'][i];
        obj['y']=ftGraph['data']['real'][i];
        point.push(obj)
      }
      realData['points']=point

      r.push(realData)

      //imaginary
      var imagData={
        color: "#000000",
        name: "Imaginary"
      }
      var point=[]
      for(var i=0;i<ttime['data']['t'].length;i++){
        var obj={}
        obj['x']=ttime['data']['t'][i];
        obj['y']=ftGraph['data']['imag'][i];
        point.push(obj)
      }
      imagData['points']=point

      r.push(imagData)
      setFtGraphData(r)
      console.log(ftGraphData)
    }
  }
  
  var fftData=()=>{  
    if (ttime['data']!==undefined){
      var r=[]

      //real
      var realData={
        color: "#FF6633",
        name: "Real"
      }
      var point=[]
      for(var i=0;i<ttime['data']['t'].length;i++){
        var obj={}
        obj['x']=ttime['data']['t'][i];
        obj['y']=fftGraph['data']['real'][i];
        point.push(obj)
      }
      realData['points']=point

      r.push(realData)

      //imaginary
      var imagData={
        color: "#000000",
        name: "Imaginary"
      }
      var point=[]
      for(var i=0;i<ttime['data']['t'].length;i++){
        var obj={}
        obj['x']=ttime['data']['t'][i];
        obj['y']=fftGraph['data']['imag'][i];
        point.push(obj)
      }
      imagData['points']=point

      r.push(imagData)
      setFftGraphData(r)
      console.log(fftGraphData)
    }
  }
  
  return (
    <div className="App">
      <div className='row m-5 p-2'>
        <div className='col-3 p-4'>
          <Select 
            options = {options} 
            onChange={selectOnChange}
          />
        </div>
        <div className='col-8 p-1'>
          <MDBRange
            value={range}
            id='customRange'
            label='Alpha'
            min='0'
            max='1'
            step='0.05'
            onChange={rangeOnChange}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-4'>
          {ogGraphData===null?'':
            <LineChart 
              id={"og"}
              class={"og"}
              width={400}
              height={800}
              data={ogGraphData===null?{}:ogGraphData}
              hidePoints={true}
              onPointHover={(point)=> {
                return `<p class="popup"><b>X value:</b> ${(point.x)}</p><p class="popup"><b>Y value:</b> ${point.y}</p>`
              }}
            />
          }
        </div>
        <div className='col-4'>
          {fftGraphData===null?'':
            <LineChart 
              id={"fft"}
              class={"fft"}
              width={400}
              height={800}
              data={fftGraphData===null?{}:fftGraphData}
              hidePoints={true}
              onPointHover={(point)=> {
                return `<p class="popup"><b>X value:</b> ${(point.x)}</p><p class="popup"><b>Y value:</b> ${point.y}</p>`
              }}
            />
          }
        </div>
        <div className='col-4'>
          {ftGraphData===null?'':
            <LineChart
              id={"ft"}
              class={"ft"}
              width={400}
              height={800} 
              data={ftGraphData===null?{}:ftGraphData}
              hidePoints={true}
              onPointHover={(point)=> {
                return `<p class="popup"><b>X value:</b> ${(point.x)}</p><p class="popup"><b>Y value:</b> ${point.y}</p>`
              }}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
