import { BsWallet2, BsHeadphones } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";

const BookInfoCard = () => {
  return (
    <div className="card md:w-96 bg-base-100 border-2 rounded-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl pb-2 mb-5 border-b-2">
          Book with confidence
        </h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div>
              <BsWallet2 className="text-xl" />
            </div>
            <div className="">
              <p className="text-sm font-semibold">Lowest price guarantee</p>
              <p className="text-xs">
                Find it cheaper? We'll refund the difference
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <AiOutlineLock className="text-xl" />
            </div>
            <div className="">
              <p className="text-sm font-semibold">Privacy protection</p>
              <p className="text-xs">
                We use SSL encryption to keep your data secure
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <BsHeadphones className="text-xl" />
            </div>
            <div className="">
              <p className="text-sm font-semibold">24/7 global support</p>
              <p className="text-xs">
                Get the answers you need, when you need them
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <BiSolidPhoneCall className="text-xl" />
            </div>
            <div className="">
              <p className="text-sm font-semibold">Give us a call</p>
              <p className="text-xs">
                We’d be happy to help you out with your booking
              </p>
              <p className="text-xs underline">Call now: +808239084</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfoCard;
