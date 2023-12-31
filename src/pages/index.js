import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Productfeed from "@/components/Productfeed";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>

      {/* Header */}
      <Header />

      <main className="max-w-screen-2xl mx-a">
        {/* Banner */}
        <Banner />

        {/* Productfeed */}
        <Productfeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
     );

    return { 
      props: {
        products,
      }
    }
}