import { useEffect, useState } from "react"
import { useAlert } from "react-alert";
import { FeedRepository } from "../../repository/feed.repository";
const FeedViewModel = () => {
  const alert = useAlert()
  const feedRepository = new FeedRepository()
  // Usefull States for FeedScreen
  const [isOpen, setIsOpen] = useState(false);
  const [imgurl, setImgurl] = useState(undefined)
  const [formData, setFormData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [feeds, setFeeds] = useState([]);
  const [caption, setCaption] = useState("");
  const [pageNo, setPageNo] = useState(1)
  const [isUpdate, setisUpdate] = useState(false)
  const [feedId, setFeedId] = useState(null)
  const [showDeleteAlert, setDeleteAlert] = useState(false);

  // function to handle the model opening or closing
  const toggleModel = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
    setImgurl(undefined)
    setisUpdate(false)
    setCaption("")
  };
  // function to get all feeds
  const getFeeds = async (pageNo = 1) => {
    try {
      if (pageNo >= 1) {
        setIsLoading(true)
        let response = await feedRepository.getFeeds(pageNo)
        setPageNo(pageNo)
        setFeeds(response.feeds)
        setIsLoading(false)
      }
    } catch (error) {
      alert.error(error.message)
      console.log(error)
      setIsLoading(false)
    }
  }
  // function for getting the url of the image that has been selected and uppending the image into formdata
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgurl(`${reader.result}`);
      };
      reader.readAsDataURL(file);
      const data = new FormData();
      data.append("image", file);
      setFormData(data)
    }
  };
  // Funtion for Uploading New Feed
  const upload = async () => {
    try {
      if (caption !== "") {
        console.log("target")
        setIsLoading(true)
        let response = await feedRepository.uploadFeedImage(formData)
        await feedRepository.upload({ caption, imgurl: response.imgurl })
        setIsLoading(false)
        toggleModel()
        getFeeds(pageNo)
        alert.success("Feed updated successfully")
      }
    } catch (error) {
      alert.error(error.message)
    }
  }
  // function to get feed Capton 
  const getFeedCaption = (event) => {
    try {
      setCaption(event.target.value)
    } catch (error) {
      alert.error(error.message)

    }
  }

  // function to Navige Pages
  const previousPage = async () => {
    await getFeeds(pageNo - 1)
  }
  const nextPage = async () => {
    await getFeeds(pageNo + 1)
  }

 // Function to open the edit Feed Model
  const openEditFeedModel = (feed_id) => {
    return () => {
      try {
        const feed = feeds.find((ele) => ele._id === feed_id)
        console.log(feed)
        toggleModel()
        setImgurl(feed.imgurl)
        setCaption(feed.caption)
        setisUpdate(true)
        setFeedId(feed._id)
      } catch (error) {
        alert.error(error.message)
      }
    }
  }
  // Funvction to save the changes on the feed
  const editFeed = async () => {
    try {
      setIsLoading(true)
      let updatedData = { caption, feedId }
      if (formData !== null) {
        console.log("target")
        let response = await feedRepository.uploadFeedImage(formData)
        updatedData = { ...updatedData, imgurl: response.imgurl }
      }
      const response = await feedRepository.editFeed(updatedData)
      toggleModel()
      getFeeds(pageNo)

      setFormData(null)
      alert.success(response.message)
    } catch (error) {
      alert.error(error.message)
    }

  }
  // Function To Toggle a Delete Alert Box
  const toggleDeleteRequest = (feed_id=null) => {
    return () => {
      try {
        if(showDeleteAlert){
          setDeleteAlert(false)
        }else{
          setDeleteAlert(true)
          setFeedId(feed_id)
        }
      } catch (error) {
        alert.error(error.message)  
      }
    }
  }
  // Function to Delete a Feed
  const deleteFeed = async () => {
    try {
      const response = await feedRepository.deleteFeed({ feedId })
      setDeleteAlert(false)
      setFeedId(null)
      getFeeds(pageNo)
      alert.success(response.message)
    } catch (error) {
      alert.error(error.message)
    }

  }
  const commentsOnFeed = (feed_id) => {
    return () => {
      try {
        console.log("hello workd")
      } catch (error) {
        alert.error(error.message)
      }
    }
  }
  useEffect(() => {
    getFeeds()
  }, [])
  return {
    // Usefull States for FeedScreen
    isOpen,
    imgurl,
    feeds,
    isLoading,
    caption,
    pageNo,
    isUpdate,
    showDeleteAlert,

    toggleModel,
    handleFileChange,
    upload,
    getFeedCaption,
    toggleDeleteRequest,
    // Pagination Functions
    previousPage,
    nextPage,
    // Operation on Feed
    openEditFeedModel,
    editFeed,
    deleteFeed,
    commentsOnFeed
  }
}
export default FeedViewModel