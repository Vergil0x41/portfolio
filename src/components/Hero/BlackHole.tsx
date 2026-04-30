type Props = {
  x: number;
  y: number;
  isDesktop: boolean;
};

const BlackHole = ({ x, y, isDesktop }: Props) => {
  return (
    <div
      className="black-hole"
      style={{
        left: isDesktop ? x : "60%",
        top: isDesktop ? y : "40%",
      }}
    >
      <div className="pulse" />
      <div className="spiral" />
      <div className="disk" />
      <div className="core" />
    </div>
  );
}

export default BlackHole