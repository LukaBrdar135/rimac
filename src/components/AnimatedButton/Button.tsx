import "./Button.css";

type Props = {
  title: string;
};

const Button: React.FC<Props> = (props) => {
  return (
    <button className="btn">
      <div className="upper-line"></div>
      <div className="upper-line-animation"></div>
      <div className="content">{props.title}</div>
      <div className="content-animation">{props.title}</div>
      <div className="lower-line"></div>
      <div className="lower-line-animation"></div>
    </button>
  );
};

export default Button;
