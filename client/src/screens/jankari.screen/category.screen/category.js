import Component from "../../../components"
import ScreenComponent from "./components"
import useJankariViewModel from "./categoryViewModel"

const JankariCategory = () => {
    const {
        toggleModel,
        heading,
        isOpen,
        isLoading,
        categoriesList,
        toggleHeading
    } = useJankariViewModel()
    return (
        <div className="container">
            <Component.Row flexWrap="wrap" justifyContent='space-between' alignItems='center' >
                <h1>   {heading}  </h1>
                <Component.Button title="Add Category" onClick={toggleModel}>Open Model</Component.Button>
            </Component.Row>
            <Component.Spacer position="top" size={0} />
            <ScreenComponent.CategoryModel
                isOpen={isOpen}
                toggleModel={toggleModel}
                heading={heading}
                toggleHeading={toggleHeading}
            />
            <Component.Row>
                <div>
                    <input type="radio" checked={heading==="Category" ? true :false}  value="Category" name="category" onClick={toggleHeading} id="parentCategory" />
                    <label htmlFor="parentCategory"> Parent Category</label>
                </div>
                <Component.Spacer position="right" size={20} />
                <div>
                    <input type="radio" value="Sub Category" name="category"  onClick={toggleHeading} id="subCategory" />
                    <label htmlFor="subCategory"> Sub Category</label>
                </div>
            </Component.Row>
            <Component.ChildContainer justifyContent="space-around" flexWrap="wrap" >
        {
          isLoading ? (
            <Component.LoadingAnimation color="green" />
          ) : (
            <>
              {
                categoriesList.length <= 0 ? (
                  <h1> Nothing To Show </h1>
                ) : (
                  <>
                    {
                      categoriesList.map((Category) => {
                        return (
                          <Component.GridCard
                           profileHeader ={false}
                            key={Category._id}
                            imgurl={Category.imgurl}
                            description={Category.description}
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
        </div>
    )
}
export default JankariCategory