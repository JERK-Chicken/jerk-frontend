import React from "react";

const NotFound = () => {

  function randomGif(num){
    console.log(num)
    switch(true){
      case (num > 0 && num < 20):
        return "https://media.tenor.com/images/b4f379b4eaceb66ac2e687e94c0ac157/tenor.gif"
      case (num > 19 && num < 40):
        return "https://media2.giphy.com/media/AouUeiT1EO0oA12ad2/giphy.gif"
      case (num > 39 && num < 60):
        return "https://media2.giphy.com/media/l3V0gnmiNvCNz85Wg/giphy.gif"
      case (num > 59 && num < 80):
        return "https://www.nannybutler.com/wp/wp-content/uploads/2015/10/baby-chef-300x218.jpg"
      case (num > 79 && num < 82):
        return "https://cdn.discordapp.com/attachments/726161334944923809/728281173758836746/unknown.png"
      default:
        return "https://i.pinimg.com/474x/b0/1b/4e/b01b4ec744f31b449f5af94510e3b06b.jpg"
    }
  }

  return (
    <div className="text-center">
      <h4 className="text-white">404 - Not Found</h4>
      <img
        src={randomGif(Math.floor(Math.random()*100))}
        alt="is-that-dave"
        width="700px"
        style={{maxHeight: "65vh"}}
        
      />
      <h2 className="text-white">Bork Bork Bork Bork Bork</h2>
    </div>
  );
};

export default NotFound;