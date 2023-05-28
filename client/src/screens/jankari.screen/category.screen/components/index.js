import { useState } from "react"
import Component from "../../../../components"
import "./index.css"
const CategoryModel = ({
    isOpen,
    toggleModel,

}) => {
    const [categoryType, setCategoryType] = useState("Category")
    const toggleCategoryType = (event) => {
        setCategoryType(event.target.value !== "Category" ? "Sub Category" : "Category")
    }
    return (
        <Component.DailogBox justifyContent="flex-start" isOpen={isOpen} toggleModel={toggleModel} >
            <Component.Row width={Component.deviceWidth - 100} >
                <h1> Add {categoryType} </h1>
            </Component.Row>
            <Component.Spacer position="top" size={10} />
            <Component.Row flexWrap="wrap"  >
                <div>
                    <input type="radio" checked={categoryType === "Category" ? true : false} clicked="true" value="Category" name="category" onClick={toggleCategoryType} id="formParentCategory" />
                    <label htmlFor="formParentCategory"> Parent Category</label>
                </div>
                <Component.Spacer position="right" size={20} />
                <div>
                    <input type="radio" value="Sub Category" name="category" onClick={toggleCategoryType} id="formSubCategory" />
                    <label htmlFor="formSubCategory"> Sub Category</label>
                </div>
            </Component.Row>
            <Component.Spacer position="top" size={20} />
            <Component.Column flexWrap="wrap"  >
                <h3>Name</h3>
                <Component.DailogBoxInput type="text" name="name" placeholder="Category Name" />
                {
                    categoryType === "Sub Category" && (
                        <>
                            <Component.Spacer position="top" size={15} />
                            <h3> Parent Category </h3>
                            <select className="Parent_select">
                                <option value="1"> First Category</option>
                                <option value="2"> Second Category </option>
                            </select>
                        </>

                    )
                }
                <Component.Spacer position="top" size={15} />
                <h3> Description </h3>
                <textarea type="text" name="name" placeholder="Category Name" ></textarea>
                <Component.Spacer position="top" size={15} />
                <Component.Row alignItems="center" flexWrap="wrap" justifyContent="space-around">
                    <Component.Row alignItems="center" flexWrap="wrap">
                        <h3>Backgroun Image</h3>/
                        <Component.Spacer position="right" size={20} />
                        <input type="file" name="name" placeholder="Category Name" />
                    </Component.Row>
                    <Component.Row alignItems="center" flexWrap="wrap">
                        <h3> Icon </h3>
                        <Component.Spacer position="right" size={20} />
                        <input type="file" name="name" placeholder="Category Name" />
                    </Component.Row>
                </Component.Row>
                <Component.Spacer position="top" size={45} />

                <Component.Row justifyContent="flex-end">
                    <Component.Button title="Add Category" />
                </Component.Row>
            </Component.Column>

        </Component.DailogBox>
    )
}
export default {
    CategoryModel
}