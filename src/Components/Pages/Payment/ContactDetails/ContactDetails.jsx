import { useForm } from "react-hook-form";
import BookInfoCard from "../BookInfoCard";
import PaymentPath from "../PaymentPath";
import ReviewCard from "../ReviewCard";

const ContactDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <PaymentPath />
      <div className="mx-5 md:mx-20 py-10 flex flex-col lg:flex-row justify-between lg:gap-5">
        <form onClick={handleSubmit(onSubmit)} className="lg:w-[60%] mb-10 lg:mb-0">
          <div className="flex gap-5">
            <div className="form-control mb-4 w-1/2">
              <label className="label">
                <span className="label-text  text-base">First Name</span>
              </label>
              <input
                type="text"
                {...register("firstName", { required: true })}
                placeholder="First Name"
                className="input input-bordered"
              />
              {errors.firstName && (
                <span className="text-red-600">First Name Is Required</span>
              )}
            </div>
            <div className="form-control mb-4 w-1/2">
              <label className="label">
                <span className="label-text  text-base">Last Name</span>
              </label>
              <input
                type="text"
                {...register("lastName", { required: true })}
                placeholder="Last Name"
                className="input input-bordered"
              />
              {errors.lastName && (
                <span className="text-red-600">Last Name Is Required</span>
              )}
            </div>
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-base">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-600">Email Is Required</span>
            )}
          </div>
          <div className="flex gap-5">
            <div className="form-control">
              <span className="label-text text-base">Phone Number</span>
              <label className="input-group input-group-md">
                <span>+880</span>
                <input
                  type="tel"
                  {...register("phone", { required: true })}
                  placeholder="Phone Number"
                  className="input input-bordered"
                />
              </label>
              {errors.phone && (
                <span className="text-red-600">Phone Number Is Required</span>
              )}
            </div>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="checkbox"
                {...register("receiveSMS")}
                checked="checked"
                className="checkbox"
              />
              <span className="label-text">
                Receive SMS updates about your booking. Message rates may apply.
              </span>
            </label>
          </div>
          <div className="my-5">
            <h2 className="text-2xl font-semibold pb-3 border-b-2">Promo Code</h2>
            <p className="text-lg underline mt-3 cursor-pointer text-green-800">Enter Promo Code</p>
          </div>
          <div className="text-center">
            <input
              className="btn                                      rounded-full bg-black hover:bg-[#584B9F] text-white"
              type="submit"
              value="Next"
            />
          </div>
        </form>
        <div className="space-y-3 w-4/4 mx-auto">
            <ReviewCard />
            <BookInfoCard />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
