import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { useSelector, useDispatch } from "react-redux";
import { Form } from 'semantic-ui-react'

function CategoryMenu() {

  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
      categoryData.categories.forEach(category => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then(categories => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    });
  };

  return (
    <Form>
    <Form.Group widths='equal'>
     
      <Form.Field label='Choose a meal' control='select' className="ui container text">
      {categories.map(category => (
        <option value={category._id}>{category.name} </option>
        
      ))}
        
      </Form.Field>
    </Form.Group>
    </Form>
   
  );
}

export default CategoryMenu;
