import React from 'react';
import Component from "../../components/index"
import './Feeds.css'; // Create a CSS file to style the component
import FeedViewModel from './feedsViewModel';
import ScreenComponent from "./components/index"
const Feed = () => {
  const {
    isOpen,
    toggleModel,
    addFeed,
    handleFileChange,
    imgurl,
    isLoading,
    feeds,
    caption,
    upload,
    getFeedCaption,
    pageNo,
    previousPage,
    nextPage,
    openEditFeedModel,
    editFeed,
    isUpdate,
    toggleDeleteRequest,
    showDeleteAlert,
    deleteFeed,
    commentsOnFeed
  } = FeedViewModel()

  return (
 
    <div className='container' >
        <Component.DeleteAlert  cancelFunction={toggleDeleteRequest()} dleteFunction={deleteFeed} open={showDeleteAlert} >
        Do you want to delete this feed
     </Component.DeleteAlert>
    
      <Component.Row flexWrap="wrap" justifyContent='space-between' alignItems='center' >
        <h1 >  Feeds   </h1>
        <Component.Button title="Create New Feed" onClick={toggleModel}>Open Model</Component.Button>
      </Component.Row>
      {isOpen && (
        <ScreenComponent.FeedModel
          isOpen={isOpen}
          toggleModel={toggleModel}
          handleFileChange={handleFileChange}
          addFeed={addFeed}
          imgurl={imgurl}
          caption={caption}
          isLoading={isLoading}
          getFeedCaption={getFeedCaption}
          upload={upload}
          editFeed={editFeed}
          isUpdate={isUpdate}
        />
      )}

      <Component.ChildContainer justifyContent="space-around" flexWrap="wrap" >
        {
          isLoading ? (
            <Component.LoadingAnimation color="green" />
          ) : (
            <>
              {
                feeds.length <= 0 ? (
                  <h1> Nothing To Show </h1>
                ) : (
                  <>
                    {
                      feeds.map((feed) => {
                        return (
                          <Component.GridCard
                            key={feed._id}
                            profile={feed.user.profileImage}
                            name={feed.user.name}
                            imgurl={feed.imgurl}
                            tag="admin"
                            description={feed.caption}
                            dropDownOptions = {[
                              {
                                title:"Edit",
                                method: openEditFeedModel(feed._id)
                            },
                            {
                                title:"Delete",
                                method:toggleDeleteRequest(feed._id)
                            },
                            {
                                title:"Comments",
                                method:commentsOnFeed(feed._id)
                            }
                            ]}
                          />
                        )
                      })
                    }
                  </>
                )
              }
            </>
          )
        }
      </Component.ChildContainer>
      <Component.ChildContainer justifyContent="center" >
        <Component.PageNavigator previousPage={previousPage} nextPage={nextPage}>
          {pageNo}
        </Component.PageNavigator>
      </Component.ChildContainer>


    </div >

  );
};

export default Feed;