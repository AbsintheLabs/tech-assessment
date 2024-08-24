import clsx from "clsx";
type LogoProps = { className?: string };

export const Logo = ({ className }: LogoProps) => {
  return (
    <div
      className={clsx(
        "bg-[#151718] w-[6rem] h-[2rem] rounded border border-states-success-elevation1-dark flex justify-center items-center",
        className,
      )}
    >
      <span className="text-text-primary-dark text-center">Logo</span>
    </div>
  );
};
