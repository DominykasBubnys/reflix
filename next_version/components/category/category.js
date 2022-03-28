import React from 'react'
import classes from "./category.module.css";
import CategoryList from './categoryList.js'


const Category = ({category, data}) => {


  console.log("category: ", category, " | data: ", data ? data.length : "no data passed")



  return (
    <React.Fragment>

      <div className={classes.container}>
        <h1 className={classes.title}>{category ? category.toUpperCase() : "No category"}</h1>
        {data && category && <CategoryList category={category} movies={data} />}
      </div>

    </React.Fragment>
  )
}

export default Category