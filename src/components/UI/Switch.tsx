import "./Switch.scss"

type Props = {
  active: boolean;
  onClick: () => void;
  left: string;
  right: string;
};

export function Switch({ active, onClick, left, right }: Props) {
  return (
    <div className="switch" onClick={onClick}>
      <span>{left}</span>
      <div className={`toggle ${active ? "active" : ""}`} />
      <span>{right}</span>
    </div>
  );
}