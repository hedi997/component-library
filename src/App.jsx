import Button from "./Button";
import Badge from "./Badge";
import Alert from "./Alert";
import Card from "./Card";
import { AiFillAlert, AiFillLike } from "react-icons/ai";

function App() {
  return (
    <div>
      <Button color="red" size="small" disabled="disabledTrue">
        Click
      </Button>
      <Button color="blue" size="big">
        Click
      </Button>
      <Badge title="Alert" color="red" size="small" icon={<AiFillAlert />} />
      <Badge title="Saved" color="green" size="big" icon={<AiFillLike />} />
      <Alert color="brown" icon={<AiFillLike />} />
      <Alert color="orange" icon={<AiFillAlert />} />
      <Card
        href="https://example.com"
        imgSrc="https://a.storyblok.com/f/152976/3864x2576/22152f1a86/istock-503636740.jpg"
        imgAlt="En bild på en hund"
      >
        <h3>En hund</h3>
      </Card>
      <Card
        href="https://example.com"
        imgSrc="https://www.forskning.se/wp-content/uploads/2018/11/kattsnack1.jpg"
        imgAlt="En bild på en katt"
      >
        <h3>En katt</h3>
      </Card>
    </div>
  );
}

export default App;
