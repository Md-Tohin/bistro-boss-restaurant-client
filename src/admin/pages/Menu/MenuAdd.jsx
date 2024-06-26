import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../frontend/Shared/SectionHeading/SectionHeading";
import { FaUtensils } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import axios from "axios";

// const imageHostingApiKey = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
// const imageHostingURI = `https://api.imgbb.com/1/upload/?key=${imageHostingApiKey}`;

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const MenuAdd = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
//   console.log(imageHostingURI);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    });
    console.log("response after send image: ", res.data);
    if(res.data?.success){
        const menuItem = {
            name: data.name,
            price: parseFloat(data.price),
            category: data.category,
            recipe: data.recipe,
            image: res.data?.data?.display_url,
            delete_image_url: res.data?.data?.delete_url,
        }
        const result = await axiosSecure.post("/api/menu", menuItem);
        console.log(result.data);
        if(result.data?.insertedId){
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Menu item added successfully!",
                showConfirmButton: false,
                timer: 1500
              });
        }
        else{
            Swal.fire({
                title: "Failed!",
                text: "Menu item added failed!",
                icon: "error"
              });
        }
    }
    
  };
  return (
    <>
      <Helmet>
        <title>Menu Add | Bistro Boss Restaurant </title>
      </Helmet>
      <div>
        <SectionHeading
          title="ADD AN ITEM"
          subTitle="--- What's new? ---"
        ></SectionHeading>
        <div className="bg-white w-9/12 mx-auto shadow-2xl border px-5 py-5 mb-16">
          <div className="mt-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Recipe name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Recipe name"
                />
                {errors.name?.type == "required" && (
                  <small className="text-red-500">
                    Recipe name field is required!
                  </small>
                )}
              </div>
              <div className="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register("category", { required: true })}
                    id="category"
                    defaultValue={""}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option disabled value="">
                      Choose a Category
                    </option>
                    <option value="offered">Offered</option>
                    <option value="popular">Popular</option>
                    <option value="dessert">Dessert</option>
                    <option value="soup">Soup</option>
                    <option value="pizza">Pizza</option>
                    <option value="salad">Salad</option>
                    <option value="drinks">Drinks</option>
                  </select>
                  {errors.category?.type === "required" && (
                    <small className="text-red-500">
                      Category field is required
                    </small>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Price <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Price"
                  />
                  {errors.price?.type === "required" && (
                    <small className="text-red-500">
                      Price field is required
                    </small>
                  )}
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="recipe"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Recipe Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register("recipe", { required: true })}
                  id="recipe"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Recipe Details"
                  rows={3}
                />
                {errors.recipe?.type === "required" && (
                  <small className="text-red-500">
                    Recipe details field is required
                  </small>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Image <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("image")}
                  type="file"
                  id="image"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Image"
                />
              </div>
              <div className="mt-7">
                <button
                  type="submit"
                  className="text-white flex justify-center items-center w-3/12 mx-auto  font-semibold bg-yellowDark hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-golden  rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-golden dark:hover:bg-golden dark:focus:ring-golden"
                >
                  Add Item <FaUtensils className="ms-2"></FaUtensils>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuAdd;
