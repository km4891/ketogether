import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../utils/actions';
import { QUERY_CATEGORIES } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Container,
  Icon
} from 'semantic-ui-react'
import { useSelector, useDispatch } from "react-redux";

// const options = [
//   { key: 'm', text: 'Male', value: 'male' },
//   { key: 'f', text: 'Female', value: 'female' },
//   { key: 'o', text: 'Other', value: 'other' },
// ]


function FormExampleFieldControl() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);
 const [options, setOptions] = useState([])
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
        // const options = [
//   { key: 'm', text: 'Male', value: 'male' },
//   { key: 'f', text: 'Female', value: 'female' },
//   { key: 'o', text: 'Other', value: 'other' },
// ]
         const newCategories = categories.map(category => {
           return (
             {
               key: category._id,
               text: category.name,
               value: category._id
             }
           )
         })
        setOptions(newCategories)
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const [input, setInput] = useState("")

 const handleChange = (e) =>  {
   const {value} = e.target 
  setInput(value )
}

 
   
    return (
      <Container>
        {console.log(options)}
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Recipe Name'
            placeholder='Recipe Name'
          />
          <Form.Field
            control={Select}
            label='Category'
            options={options}
            placeholder='Category'
          />
        </Form.Group>
        <Form.Field
            control={Input}
            label='Recipe Image'
            placeholder='Paste your recipe image'
        />
        <Form.Field
          control={TextArea}
          label='Recipe Ingredients'
          placeholder='List your ingredients'
        />
        <Form.Field
          control={TextArea}
          label='Recipe Instructions'
          placeholder='List your instructions'
        />
          <Icon name='heart big icon' size='large' />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      </Container>
    )
 
}

export default FormExampleFieldControl