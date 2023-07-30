
import SearchBox from "../components/SearchBox";
import Header from "../components/Header";


export default function Home() {


  return (
    <>
    <Header></Header>
<SearchBox></SearchBox>
    </>
  );
}

// export const getServerSideProps = async () => {
//   let response = { data: "some demo data" };
//   let url = `http://127.0.0.1:5000/ipc?code=${322}&lang=${english}`

//   response = await axios.get(url);
//   if (!response) {
//     response = { data: "no data returned from server...." };
//   }
//   return {
//     props: {
//       response: response.data,
//     },
//   };
// };
