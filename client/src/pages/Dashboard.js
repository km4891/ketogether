import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">
          ← Back to Home
          </Link>

        {user ? (
          <>
            <h2>Recipes added for {user.firstName} {user.lastName}</h2>
            {user.recipes.map((recipe) => (
              <div key={recipe._id} className="my-2">
                {/* <h3>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h3> */}
                <div className="flex-row">
                  {order.recipes.map(({ _id, image, name,  }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/recipes/${_id}`}>
                        <img
                          alt={name}
                          src={`/images/${image}`}
                        />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${like}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}

      </div>

    </>)

};

export default OrderHistory;
