import Button from "../AnimatedButton/Button";
import "./Page.css";

type Props = {
  title: string;
  description: string;
  buttonText: string;
};

const Page: React.FC<Props> = (props) => {
  return (
    <div className="page">
      <h1 className="title">{props.title}</h1>
      <p className="description">{props.description}</p>
      <div className="button-holder">
        <Button title="Jeste"></Button>
      </div>
    </div>
  );
};

export default Page;
