

const PlacesToVisit = () => {
    return (
      <div className="my-16">
        {/* title  */}
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-bold text-black">Places to Visit</h1>
          <p className="text-xl mt-3">
            The most exciting destinations, experiences, hidden gems, and traveler
            faves to check out     sdsnow.
          </p>
        </div>
        {/* Articles cards  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-3 md:mx-5 mt-16 lg:mx-0">
          <div
            style={{
              background:
                "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/87/1a/e3/caption.jpg?w=1200&h=1200&s=1&cx=1920&cy=1080&chk=v1_7071b196c21eef4b234b')  center center/cover",
            }}
            className="h-96 relative cursor-pointer rounded-md"
          >
            <h1 className="text-white text-2xl font-bold mx-5 absolute top-72 hover:underline">
              A first-timers guide to Walt Disney World
            </h1>
          </div>
          <div
            style={{
              background:
                "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/7a/66/43/caption.jpg?w=1200&h=1200&s=1&cx=3008&cy=2000&chk=v1_ad2b0b28b29ee07b13f6')  center center/cover",
            }}
            className="h-96 relative cursor-pointer rounded-md"
          >
            <h1 className="text-white text-2xl font-bold mx-5 absolute top-72 hover:underline">
              3 perfect days in Lisbon
            </h1>
          </div>
          <div
            style={{
              background:
                "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/73/6f/6d/caption.jpg?w=1200&h=-1&s=1&cx=960&cy=540&chk=v1_afd81324cf3eddd3b82d)  center center/cover",
            }}
            className="h-96 relative cursor-pointer rounded-md"
          >
            <h1 className="text-white text-2xl font-bold mx-5 absolute top-72 hover:underline">
            4 cities for unique summer food truck eats
  
            </h1>
          </div>
          <div
            style={{
              background:
                "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/bb/ed/9d/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_471ba8592fa9a1808e87)  center center/cover",
            }}
            className="h-96 relative cursor-pointer rounded-md"
          >
            <h1 className="text-white text-2xl font-bold mx-5 absolute top-72 hover:underline">
              7 family-friendly Caribbean islands for your next vacation
            </h1>
          </div>
          <div
            style={{
              background:
                "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/87/1a/e3/caption.jpg?w=1200&h=1200&s=1&cx=1920&cy=1080&chk=v1_7071b196c21eef4b234b')  center center/cover",
            }}
            className="h-96 relative cursor-pointer rounded-md"
          >
            <h1 className="text-white text-2xl font-bold mx-5 absolute top-72 hover:underline">
              A first-timers guide to Walt Disney World
            </h1>
          </div>
          <div
            style={{
              background:
                "linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5) 30%,rgba(0,0,0,.95)), url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/7a/66/43/caption.jpg?w=1200&h=1200&s=1&cx=3008&cy=2000&chk=v1_ad2b0b28b29ee07b13f6')  center center/cover",
            }}
            className="h-96 relative cursor-pointer rounded-md"
          >
            <h1 className="text-white text-2xl font-bold mx-5 absolute top-72 hover:underline">
              3 perfect days in Lisbon
            </h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default PlacesToVisit;
  