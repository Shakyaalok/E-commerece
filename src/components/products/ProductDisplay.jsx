import React from "react";
import CustomCard from "../../custome_componets/CustomCard";
import productsLists from "./productsLists";

const ProductDisplay = () => {
  return (
    <div className="container-fluid">
      <h4 className="text-center m-5">Categories</h4>

      <div className="row">
        {productsLists.map((product) => (
          <div className="col-sm-6 col-md-4 col-lg-4 p-2 mr-2 ml-2">
            <CustomCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
