import { useState } from "react";
let log = console.log;

const Folder = (props) => {
  const { name, children } = props;
  log("in folder props", props);

  const folderStyles = { border: "2px solid pink" };
  const fileStyles = { marginLeft: "20px", border: "2px solid green" };

  const [isOpen, setOpen] = useState(false);
  const caretDirection = isOpen ? "down" : "right";
  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div style={folderStyles}>
        <span onClick={handleClick}>
          <i className="blue folder icon"></i>
          <i className={`caret ${caretDirection} icon`}></i>
          {name}
        </span>
        <div style={fileStyles}>{isOpen ? children : null}</div>
      </div>
    </>
  );
};

const File = (props) => {
  const { name } = props;
  const fileExt = name.split(".")[1];
  const fileIcons = {
    mp4: "headphones",
    png: "file",
    jpeg: "file outline",
    js: "code",
    css: "paint brush",
  };
  return (
    <>
      <div>
        <span>
          <i className={`pink ${fileIcons[fileExt]} icon`}></i>
        </span>
        {name}
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Folder name="Desktop">
        <Folder name="Pet Memes">
          <File name="dog-memes.png" />
          <File name="cat-memes.jpeg" />
        </Folder>
      </Folder>
      <Folder name="Music">
        <File name="fav-song.mp4" />
        <File name="classical.mp4" />
      </Folder>
      <Folder name="Application">
        <File name="hello-world.js" />
        <File name="first-styles.css" />
      </Folder>
    </>
  );
}

export default App;
