import { useState } from "react";

const useJankariViewModel = ()=>{
    const [isLoading, setIsLoading]= useState(false)
    const [heading, setHeading] = useState("Category")
    const [isOpen , setIsOpen] = useState(false)
    const [categoriesList , setCategoriesList] = useState([
        {
            _id:"dklfdsa0932rr",
            imgurl:"https://free-images.com/md/6fff/farming_agriculture_countryside_169927.jpg",
            description:" the category is for farmaing knowledge"
        },
        {
            _id:"dklfdsa0932rr",
            imgurl:"https://free-images.com/md/ba65/farming_tractors_agriculture_615108.jpg",
            description:" the category is for farmaing knowledge"
        },
        {
            _id:"dklfdsa0932rr",
            imgurl:"https://free-images.com/md/f70f/rice_ch_farming_republic.jpg",
            description:" the category is for farmaing knowledge"
        },
        {
            _id:"dklfdsa0932rr",
            imgurl:"https://free-images.com/md/229c/power_farming_displaces_tenants.jpg",
            description:" the category is for farmaing knowledge"
        },
        {
            _id:"dklfdsa0932rr",
            imgurl:"https://free-images.com/md/f70f/rice_ch_farming_republic.jpg",
            description:" the category is for farmaing knowledge"
        },
        {
            _id:"dklfdsa0932rr",
            imgurl:"https://free-images.com/md/229c/power_farming_displaces_tenants.jpg",
            description:" the category is for farmaing knowledge"
        }
    ])
    
    const toggleModel = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
      };
    const toggleHeading = (event)=>{
        setHeading(event.target.value)
        if( event.target.value === "Category"){
            setCategoriesList([
                {
                    _id:"dklfdsa0932rr",
                    imgurl:"https://free-images.com/md/6fff/farming_agriculture_countryside_169927.jpg",
                    description:" the category is for farmaing knowledge"
                },
                {
                    _id:"dklfdsa0932rr",
                    imgurl:"https://free-images.com/md/ba65/farming_tractors_agriculture_615108.jpg",
                    description:" the category is for farmaing knowledge"
                },
                {
                    _id:"dklfdsa0932rr",
                    imgurl:"https://free-images.com/md/f70f/rice_ch_farming_republic.jpg",
                    description:" the category is for farmaing knowledge"
                },
                {
                    _id:"dklfdsa0932rr",
                    imgurl:"https://free-images.com/md/229c/power_farming_displaces_tenants.jpg",
                    description:" the category is for farmaing knowledge"
                },
                {
                    _id:"dklfdsa0932rr",
                    imgurl:"https://free-images.com/md/f70f/rice_ch_farming_republic.jpg",
                    description:" the category is for farmaing knowledge"
                },
                {
                    _id:"dklfdsa0932rr",
                    imgurl:"https://free-images.com/md/229c/power_farming_displaces_tenants.jpg",
                    description:" the category is for farmaing knowledge"
                }
            ])
        }else{
            setCategoriesList([])
        } 
    }
return{
    toggleModel,
    isOpen,
    heading,
    isLoading,
    categoriesList,
    toggleHeading

}
}

export default useJankariViewModel;