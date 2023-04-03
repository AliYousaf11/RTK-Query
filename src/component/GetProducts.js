import { useGetProductsQuery } from "../services/GetApi";
function GetProducts() {
  const { isError, isLoading, data } = useGetProductsQuery();

  if (isError) return <h1>Error Occured</h1>;
  if (isLoading) return <h1>loading.......</h1>;

  return (
    <>
      <h1>GET Products using RTK Query - GET</h1>
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

export default GetProducts;
