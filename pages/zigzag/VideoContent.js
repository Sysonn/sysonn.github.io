class VideoContent extends React.Component {

    constructor(props){
      super (props);
      this.handleVideo = this.handleVideo.bind(this);
    }
  
    getInitialState(){
      return { videoSrc: null }
    }
    componentDidMount(){
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
      if (navigator.getUserMedia) {
          navigator.getUserMedia({video: true}, this.handleVideo, this.videoError);
          console.log('test1');
          
      }
    }
    handleVideo(stream) {
      // Update the state, triggering the component to re-render with the correct stream
      //this.setState({ videoSrc: window.URL.createObjectURL(stream) });
      var video = document.querySelector("#videoElement2");
      video.srcObject = stream;
      var video = document.querySelector("#videoElement");
      video.srcObject = stream;
      
    }
    videoError(){
  
    }
  
    render() {
  
  
      return (
        <div>
            <div style = {{ 
              //user video parent
              "backgroundColor" : "white", 
              "height":"400px", 
              "width":"380px", 
              "borderRadius" : "20px",
              "boxShadow" : "0 8px 30px 0 rgba(0, 0, 0, 0.4)",
              "marginLeft" : "-120px",
              "marginTop" : "80px"
              }}>
                <div style={{
                    "height":"80%", 
                    "width":"95%",
                    "overflow":"hidden",
                    "borderRadius" : "20px",
                    "textAlign":"center"   
                }}> 
                  <video
                    style={{
                    "marginTop":"20px",
                    "height":"350px", 
                    //"width":"350px", 
                    "borderRadius" : "20px",
                    "marginLeft":"20px",
                    "borderRadius" : "20px",
                   
                    }}
  
                     autoPlay='true' id='videoElement2' 
                     />
                  
  
                </div>
  
                <div style={{"margin":"0, auto", "textAlign":"center", "color":"#5d5d5d"}}>
                    <h1>@username</h1>
                </div>
              
              </div>
  
              <div style = {{ 
                //account video parent
                "backgroundColor" : "white", 
                "height":"250px", 
                "width":"220px", 
                "borderRadius" : "20px", 
                "marginTop":"-340px", 
                "marginLeft":"280px",
                "boxShadow" : "0 8px 30px 0 rgba(0, 0, 0, 0.4)"  
                }}>
                  <div style={{
                    "height":"80%", 
                    "width":"95%",
                    "overflow":"hidden",
                    "borderRadius" : "20px",
                    "textAlign":"center", 
                  }}>
                      <video
                      style={{
                      "marginTop":"10px",
                      "height":"200px", 
                      //"width":"200px", 
                      "marginLeft":"10px",
                      "borderRadius" : "20px",
                      }}
  
                      autoPlay='true' id='videoElement' 
                      />
                  </div>
              
                  <div style={{"margin":"0, auto", "textAlign":"center"}}>
                    <h1 style={{"fontSize":"20px", "color":"#5d5d5d"}}>@me</h1>
                </div>
  
              </div> 
              
              <div style = {{ 
                //chat parent
              "backgroundColor" : "white", 
              "height":"90%", 
              "width":"30%", 
              "borderRadius" : "20px",
              "boxShadow" : "0 8px 30px 0 rgba(0, 0, 0, 0.4)",
              "position" : "absolute",
              "right": "10",
              "marginTop" : "-400px",
              "padding" : "15px",
              
              }}>
                <div style={{
                  "fontSize" : "20px",
                  "marginBottom":"5px",
                  "color":"#5d5d5d"
                }}>
                  @username
                  <div style={{"position":"absolute", "right":"0","marginTop":"-30px", "marginRight":"20px"}}>></div>
                </div>
  
                <div style={{
                  //chat box
                    "overflow-y": "scroll",
                    "height":"85%",
                    "width":"100%",
                    //"backgroundColor":"grey",
                    "marginBottom":"20px"
                }}>
                
  
                </div>
  
                <div>
                    <input 
                    style={{
                      "border":"none",
                      "outline":"none",
                      "width":"100%",
                      "fontSize":"18px",
                      "height":"20px",
                      "color":"#5d5d5d"
                    }}
                    />
                  <hr />
                </div>
              
              </div>
  
        </div>
    
      );
    }
  }

    export default VideoContent