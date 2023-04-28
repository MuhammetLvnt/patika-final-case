export default function Image({ name, size = 50, ...props }) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/images/${name}.png`}
      width={size}
      height={size}
      {...props}
    />
  );
}
