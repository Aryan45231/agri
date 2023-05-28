import { useRef } from "react";
import Component from "../../../components/index.js"
import feedViewModel from "../feedsViewModel.js"
import "./index.css"
const FeedModel = ({
  isOpen,
  toggleModel,
  handleFileChange,
  imgurl,
  caption,
  isLoading,
  isUpdate,
  upload,
  editFeed,
  getFeedCaption
}) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
      <Component.DailogBox isOpen={isOpen} toggleModel={toggleModel}>
         {
        isLoading? (
           <Component.LoadingAnimation  color={"green"} />
        ): (  
          <>   
            {
              imgurl === undefined ? (
                <>
                  <Component.Row >
                    <h1> Create Feed </h1>
                  </Component.Row>
                  <Component.Row>
                    <h3> Please select the Feed Image</h3>
                  </Component.Row>
                  <Component.Row justifyContent="Space-Between" alignItems="center"  >
                    <input type="file" onChange={handleFileChange} name="feedImage" ref={fileInputRef} accept="image/png, image/jpeg" id="feedImageInput" />
                    <Component.Button title="Browze Image" onClick={handleButtonClick} />
    
                  </Component.Row>
                </>
    
              ) : (<>
                <Component.Column>
                  {
                    isUpdate ?
                    <h1> Edit Your Feed</h1>
                    :
                    <h1> Your New Feed</h1>
                  }
                  <Component.Row>
                    <h2>  Caption</h2>
                    <input className="CaptionInput" onChange={getFeedCaption} type="text" value={caption} placeholder="Add Caption" id="" />
                  </Component.Row>
    
                  <Component.Column >
                  <input type="file" onChange={handleFileChange} name="feedImage" ref={fileInputRef} accept="image/png, image/jpeg" id="feedImageInput" />
                  <label for="feedImageInput" >
                  <img src={imgurl} alt="not found please try again " />
                  </label>
                  </Component.Column>
                  <Component.Column justifyContent="space-between">
                    <Component.Spacer position="top" size={10} />
                    <Component.Spacer position="top" size={30} />
                    <Component.Row justifyContent="flex-end">
                     {
                      isUpdate ?
                      <Component.Button onClick={editFeed} title="Save Changes" />
                      :
                      <Component.Button onClick={upload} title=" Create Feed" />
                     }
                    </Component.Row>
                  </Component.Column>
    
                </Component.Column>
    
              </>
              )
            }
  
          
          </>
        )       
        }
      </Component.DailogBox>
  );
}
export default {
  FeedModel
}