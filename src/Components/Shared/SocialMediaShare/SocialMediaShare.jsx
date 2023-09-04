import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const SocialMediaShare = () => {

    const sharchUrl = "https://tripsure-client.web.app/"

    


  return (
    <div>
      <div className="flex items-center gap-1">
        <FacebookShareButton
          url={sharchUrl}
          quote="Our Trip sure"
          hashtag="#tripSure"
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
        <TwitterShareButton
          url={sharchUrl}
          quote="Our Trip sure"
          hashtag="#tripSure"
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default SocialMediaShare;
