import clsx from "clsx";
type LogoProps = { className?: string };

export const Logo = ({ className }: LogoProps) => {
  return (
    <div
      className={clsx(
        "bg-[#151718] w-[6rem] h-[2rem] px-8 py-1 rounded  items-center border border-states-success-elevation1-dark text-center",
        className,
      )}
    >
      <span className="text-primary">Logo</span>
    </div>
  );
};
