import { useForm } from "react-hook-form";
import BookInfoCard from "../BookInfoCard";
import PaymentPath from "../PaymentPath";
import ReviewCard from "../ReviewCard";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import { useEffect, useState } from "react";

const ContactDetails = () => {
  const [contactDetails, setContactDetails] = useState(null)
  const [orderDetails, setOrderDetails] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const {user} = useAuth();
  console.log(user);
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setContactDetails(data)
    
    
  };
console.log(location);
  const handleLoader = ()=>{
    if (contactDetails == null) {
      setIsLoading(true);
      console.log(contactDetails);
    }
    else{
      setIsLoading(false);
      navigate('/activityDetails')
      console.log('activityDetails', contactDetails);
    }
  }

  useEffect(()=>{
    
  },[])


useEffect(()=>{
  if (orderDetails && location.state) {
    setOrderDetails(location.state.orderDetails);
  }
},[location.state])
  return (
    <div>
      {
        isLoading && <p className="text-red-600">Your Phone number is require</p>
      }
      <PaymentPath active={true} />
      <div className="mx-5 md:mx-20 py-10 flex flex-col lg:flex-row justify-between lg:gap-5">
        <form
          onClick={handleSubmit(onSubmit)}
          className="lg:w-[60%] mb-10 lg:mb-0"
        >
          <div className="flex gap-5">
            <div className="form-control mb-4 w-1/2">
              <label className="label">
                <span className="label-text  text-base">First Name</span>
              </label>
              <input
                type="text"
                value={user?.displayName?.split(' ')[0]}
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
                value={user?.displayName?.split(' ')[1]}
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
              value={user?.email}
              required
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
            <h2 className="text-2xl font-semibold pb-3 border-b-2">
        
            </h2>
          </div>
          <div className="text-center">
            <Link onClick={handleLoader} 
            state={{orderDetails: orderDetails, contactDetails: contactDetails}}
             >
            
              <input
                className="btn rounded-full bg-black hover:bg-[#584B9F] text-white"
                type="submit"
                value="Next"
              />
              
            </Link>
          </div>
        </form>
             
        <div className="space-y-3 w-4/4 mx-auto">
          <ReviewCard  orderDetails={location?.state?.orderDetails} />
          <BookInfoCard />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
