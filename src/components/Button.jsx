function Button({ children, onClick, type, borderCol, textCol }) {
  const styling = {
    secondary: " bg-transparent font-medium text-gray-300 cursor-pointer",
    transparent: "text-3xl text-black cursor-pointer",
  };

  if (type)
    return (
      <button onClick={onClick} className={styling[type]}>
        {children}
      </button>
    );

  return (
    <button
      className={`border-2 rounded-full ${borderCol} px-8 py-4 text-xl text-center ${textCol} font-medium cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
