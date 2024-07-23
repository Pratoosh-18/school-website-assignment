function Hcomp({ heading, text }) {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 flex flex-col justify-center items-center p-4 rounded-md transition-opacity duration-300">
      <h1 className=" text-[2.5vw] font-bold">{heading}</h1>
      <p className=" text-center text-[1.2vw] w-4/5">{text}</p>
    </div>
  );
}

export default Hcomp;
