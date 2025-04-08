function Button({ children, onClick }) {
  return (
    <button
      className={`border-1 rounded-4xl border-white px-5 py-1.5 text-lg text-center text-white cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
