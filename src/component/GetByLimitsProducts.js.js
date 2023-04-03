import { useGetLimitsProductsQuery } from "../services/GetApi";

function GetByLimitsProducts() {
  const { isError, isLoading, data } = useGetLimitsProductsQuery(5);

  if (isError) return <h1>Error Occured</h1>;
  if (isLoading) return <h1>loading.......</h1>;

  return (
    <>
      <h1>GET Products using RTK Query - GET_By_limits</h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.title}</p>
          </div>
        );
      })}
    </>
  );
}

export default GetByLimitsProducts;
