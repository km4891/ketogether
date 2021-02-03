import React, { useEffect } from "react";
import { UPDATE_RECIPES } from "../../utils/actions";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RECIPES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif"
import { useSelector, useDispatch } from "react-redux";

function Recipe(props){

return(
    <div>
        {props.name}
    </div>
)

}

export default Recipe;