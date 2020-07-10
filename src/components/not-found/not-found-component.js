import React from "react";

const NotFound = () => {

  function randomGif(num){
    console.log(num)
    switch(num){
      case 0:
        return "https://media.tenor.com/images/b4f379b4eaceb66ac2e687e94c0ac157/tenor.gif"
      case 1:
        return "https://media2.giphy.com/media/AouUeiT1EO0oA12ad2/giphy.gif"
      case 2:
        return "https://media2.giphy.com/media/l3V0gnmiNvCNz85Wg/giphy.gif"
      case 3:
        return "https://www.nannybutler.com/wp/wp-content/uploads/2015/10/baby-chef-300x218.jpg"
      default:
        return "https://i.pinimg.com/474x/b0/1b/4e/b01b4ec744f31b449f5af94510e3b06b.jpg"
    }
  }

  return (
    <div className="text-center">
      <h4 id = "is-that-dave">404 - Not Found</h4>
      <img
        src={randomGif(Math.floor(Math.random()*5))}
        alt="is-that-dave"
        width="700px"
        style={{maxHeight: "65vh"}}
        
      />
      <h6 id = "is-that-dave">Bork Bork Bork</h6>
    </div>
  );
};

export default NotFound;