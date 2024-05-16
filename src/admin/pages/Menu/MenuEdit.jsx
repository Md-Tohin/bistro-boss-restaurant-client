import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../frontend/Shared/SectionHeading/SectionHeading";
import { FaUtensils } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import noImage from "../../../assets/no-image.jpg";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const MenuEdit = () => {
  const menuDetails = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },    
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    let image_url = "";
    let delete_image_url = "";
    if (data.image?.length > 0) {
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("response after image hosting: ", res);
      if (res.data?.success) {
        image_url = res.data?.data?.display_url;
        delete_image_url = res.data?.data?.delete_url;
      }
    } else {
      image_url = data.image_url;
      delete_image_url = data.delete_image_url = "";
    }

    const menuItem = {
      name: data.name,
      price: parseFloat(data.price),
      category: data.category,
      recipe: data.recipe,
      image: image_url,
      delete_image_url: delete_image_url,
    };
    const id = menuDetails?._id;
    const result = await axiosSecure.put(`/api/menu/${id}`, menuItem);
    console.log(result.data);
    if (result.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Menu item updated successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        title: "Failed!",
        text: "Menu item updated failed!",
        icon: "error",
      });
    }
  };
  return (
    <>
      <Helmet>
        <title>Menu Update | Bistro Boss Restaurant </title>
      </Helmet>
      <div>
        <SectionHeading
          title="UPDATE AN ITEM"
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
                  defaultValue={menuDetails?.name}
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
                    defaultValue={menuDetails?.category}
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
                    defaultValue={menuDetails?.price}
                    {...register("price")}
                    type="number"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Price"
                    required
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
                  defaultValue={menuDetails?.recipe}
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
                <div className="w-[150px] h-[150px mt-5">
                  <input
                    type="hidden"
                    {...register("image_url")}
                    defaultValue={menuDetails?.image}
                  />
                  <input
                    type="hidden"
                    {...register("delete_image_url")}
                    defaultValue={menuDetails?.delete_image_url}
                  />
                  <img
                    src={
                      menuDetails && menuDetails?.image
                        ? menuDetails.image
                        : noImage
                    }
                    className="w-full h-full bg-fill rounded-lg"
                    alt="image"
                  />
                </div>
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

export default MenuEdit;
