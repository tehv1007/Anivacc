import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import Container from "../../components/Layout/Container/Container";
import { supabase } from "../../config/supabase";
import ContactLg from "../../components/Contact/ContactLg";
import { Link } from "react-router-dom";
import Header from "../../components/Feature/Header";

export default function Inquiry({ cart, setCart }) {
  const {
    isLoading,
    isError,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => supabase.from("product").select(),
    select: (res) => res.data,
  });

  const handleDelete = (id) => {
    console.log(id);

    setCart(cart.filter((idpro) => idpro != id));
    const carts = cart.filter((idpro) => idpro != id);
    if (carts.length > 0) {
      localStorage.setItem("cart", JSON.stringify(carts));
    } else {
      localStorage.removeItem("cart");
    }
  };

  if (isLoading || isError) {
    return (
      <ClipLoader
        loading={isLoading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="lg:col-span-4 mx-auto"
      />
    );
  }
  return (
    <>
      <Header imgUrl={"/images/products-bg.webp"} />
      <Container>
        <div className="text-center mt-8">
          <h1 className="text-3xl font-bold text-[#003d79]">Product Inquiry</h1>
        </div>
        <table className="w-full mx-auto mt-10 px-4 border-[1px] border-black border-collapse [&_th]:border-[1px]  [&_th]:border-black [&_th]:border-collapse [&_td]:border-[1px]  [&_td]:border-black [&_td]:border-collapse [&_th]:p-3 [&_td]:p-3">
          <thead>
            <tr>
              <th className="w-1/5 text-left">Product Picture</th>
              <th className="w-3/5 text-left">Product Name</th>
              <th className="w-1/5 text-left">Options</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((id) => {
              let product = products.filter((product) => product.id == id);
              product = product[0];
              return (
                <tr key={id}>
                  <td className=" flex justify-center">
                    <Link to={`/products/${product.id}`}>
                      <img
                        className="h-[150px] "
                        src={product.thumbnail}
                        alt={product.title}
                      />
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/products/${product.id}`}
                      className="hover:text-blue-900"
                    >
                      {product.title}
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            handleDelete(product.id);
                            Swal.fire(
                              "Deleted!",
                              "Your file has been deleted.",
                              "success"
                            );
                          }
                        });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ContactLg
          setCart={setCart}
          products={JSON.parse(localStorage.getItem("cart"))}
          eraseCart={true}
        />
      </Container>
    </>
  );
}
