import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import "./styles.css";

const SocialMediaShare = ({ todo }) => {



  const topDestinationUrl = `https://tripsure-client.web.app/top-destination-details/${todo?._id}`



  return (
    <div>
      <div className="flex items-center gap-1">
        <FacebookShareButton
          className="FacebookShareButton"
          url={todo && topDestinationUrl }
          quote={todo?.cardtitle}
          hashtag="#TripSure #Travel"
        >
          <FacebookIcon size={20} round={true} />
        </FacebookShareButton>
        <TwitterShareButton
          className="TwitterShareButton"
          url={todo && topDestinationUrl }
          quote={todo?.cardtitle}
          hashtag="#TripSure #Travel"
        >
          <TwitterIcon size={20} round={true} />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default SocialMediaShare;
