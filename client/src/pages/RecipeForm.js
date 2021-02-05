import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../utils/actions';
import { QUERY_CATEGORIES } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import { useMutation } from '@apollo/react-hooks';
import { ADD_RECIPE } from "../utils/mutations";
import Auth from "../utils/auth";
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
  const [addRecipe] = useMutation(ADD_RECIPE);

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);
  const [options, setOptions] = useState([])
  useEffect(() => {
   
    if (categoryData) {

      console.log(categoryData)
      const newCategories = categoryData.categories.map(category => {
        console.log(category)
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
        
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const [input, setInput] = useState({
    name: "",
    category: "",
    image: "",
    ingredients: "",
    instructions: "",
    like: 0
  })
  const handleCategory = (e) => {
    console.log(options)
    let category =   options.find(option => option.text.includes(e.target.textContent))  

    setInput({
      ...input,
      category: category.value
    })
    console.log(category)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({
      ...input,
      [name]: value 
    })
    
  }
  const handleHeart = e => {
    setInput({
      ...input,
      like:input.like + 1
    })
  }
  const  handleSubmit = async e => {
      console.log(input)
      const mutationResponse = await addRecipe({
        variables: {
          name: input.name,
          category: input.category,
          image: input.image,
          ingredients: input.ingredients,
          instructions: input.instructions,
          like: input.like
           
        }
      });
      const token = mutationResponse.data.addRecipe.token;
      Auth.login(token);
  }


  return (
    <Container>
      {console.log(options)}
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Recipe Name'
            name="name"
            placeholder='Recipe Name'
            onChange={handleChange}
            value={input.name}
          />
          <Form.Field
            control={Select}
            label='Category'
            options={options}
            name="category"
            placeholder='Category'
            onChange={handleCategory}
          />
        </Form.Group>
        <Form.Field
          control={Input}
          label='Recipe Image'
          name="image"
          placeholder='Paste your recipe image'
          onChange={handleChange}
          value={input.image}
        />
        <Form.Field
          control={TextArea}
          label='Recipe Ingredients'
          name="ingredients"
          placeholder='List your ingredients'
          onChange={handleChange}
          value={input.ingredients}
        />
        <Form.Field
          control={TextArea}
          label='Recipe Instructions'
          name="instructions"
          placeholder='List your instructions'
          onChange={handleChange}
          value={input.instructions}
        />
        <Icon name='heart big icon' size='large' onClick={handleHeart} /> {input.like}

        <Form.Field control={Button} onClick={handleSubmit}>Submit</Form.Field>
      </Form>
    </Container>
  )

}

export default FormExampleFieldControl