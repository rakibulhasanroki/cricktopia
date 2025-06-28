export default function Button({ name, className, handleClick, children }) {
  return (
    <button className={className} onClick={handleClick}>
      {name}
      {children}
    </button>
  );
}
