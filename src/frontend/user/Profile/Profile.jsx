import { FaUser } from "react-icons/fa6";

const Profile = () => {
  return (
    <>
      <div className="flex  items-center text-stone-700 py-4 mb-2">
        <span className="font-bold text-2xl">
          <FaUser />
        </span>{" "}
        <span className="font-bold text-3xl ms-2"> Profile</span>
      </div>
      <div className="py-4 px-5 shadow-lg">
        <form>
          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-3 text-sm grid-cols-1 md:grid-cols-6">
              <div className="md:col-span-6">
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="email@domain.com"
                />
              </div>

              <div className="md:col-span-3">
                <label htmlFor="full_name">Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="John Due"
                />
              </div>

              <div className="md:col-span-3">
                <label htmlFor="address">Phone Number</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="01819810909"
                />
              </div>

              <div className="md:col-span-3">
                <label htmlFor="city">Choose Photo</label>
                <input
                  type="file"
                  name="city"
                  id="city"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 pt-2"
                  placeholder=""
                />
              </div>

              <div className="md:col-span-6 text-center mt-4 mb-2">
                <div className="inline-flex items-center">
                  <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
