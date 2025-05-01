import Button from "./Button";

function Hobbies({
  onClick,
  check,
  num,
  title,
  subTitle,
  firstText,
  secText,
  thirdText,
}) {
  return (
    <div className="border-b-1 border-black">
      <div className="px-2 pt-4 pb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-gray-400">0{num}</p>
          <h1 className="text-2xl font-bold text-black">{title}</h1>
        </div>
        <Button type={"transparent"} onClick={onClick}>
          {check ? "-" : "+"}
        </Button>
      </div>

      {check && (
        <div className="px-2">
          <p className="text-lg text-gray-600">{subTitle}</p>

          <div className="py-2">
            <ul>
              <li className="flex items-center">
                <span className="">.</span>
                {firstText}
              </li>
              <li className="flex items-center">
                <span className="">.</span>
                {secText}
              </li>
              <li className="flex items-center">
                <span className="">.</span>
                {thirdText}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hobbies;
