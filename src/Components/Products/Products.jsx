import React, { useEffect } from "react";

import { connect } from "react-redux";
import { fetchDataRequest } from "../../Store/Actions/Actions";

const Products = ({ data, fetchDataRequest }) => {
  console.log(data);
  useEffect(() => {
    fetchDataRequest();
  }, []);
  return (
    <>
      {data && data.length > 0 && (
        <div className="h-screen w-full bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <p className="text-center text-5xl pt-5 font-bold ">Products Page</p>
          <section className="mx-auto w-full max-w-7xl px-4 py-4">
            <div className="mt-6 flex flex-col">
              <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                          >
                            <span>Product</span>
                          </th>
                          <th
                            scope="col"
                            className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                          >
                            Description
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                          >
                            Price
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                          >
                            Discount
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {data.map((product) => (
                          <tr key={product.id}>
                            <td className="whitespace-nowrap px-4 py-4">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0">
                                  <img
                                    className="h-10 w-10 rounded-full object-cover"
                                    src={product.images[0]}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {product.brand}
                                  </div>
                                  <div className="text-sm text-gray-700">
                                    {product.title}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className=" px-12 py-4 break-words">
                              <div className="text-sm text-gray-900 ">
                                {product.category}
                              </div>
                              <div className="text-sm text-gray-700">
                                {product.description}
                              </div>
                            </td>
                            <td className=" px-4 py-4">
                              <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                ${product.price}
                              </span>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-700">
                              {product.discountPercentage}%
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.Products?.product?.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataRequest: () => dispatch(fetchDataRequest()),
});

const ConnectedProducts = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export default ConnectedProducts;
