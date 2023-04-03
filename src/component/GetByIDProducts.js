import { useGetByIdProductsQuery } from "../services/GetApi";
function GetByIDProducts() {
  const { isError, isLoading, data } = useGetByIdProductsQuery(5);

  if (isError) return <h1>Error Occured</h1>;
  if (isLoading) return <h1>loading.......</h1>;

  return (
    <>
      <h1>GET Products using RTK Query - GET_By_ID</h1>
      <p>id: {data.id}</p>
      <p>title: {data.title}</p>
    </>
  );
}

export default GetByIDProducts;
