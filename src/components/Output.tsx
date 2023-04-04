function Output({ type, amount }: { type: string; amount?: number }) {
  return (
    <p className="font-poppins font-extrabold sm:text-5xl text-7xl italic">
      <span className="text-custom-purple ">{amount ? amount : "--"}</span> {type + "s"}
    </p>
  );
}

export default Output;
