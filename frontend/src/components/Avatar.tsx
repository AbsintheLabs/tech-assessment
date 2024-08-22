import clsx from "clsx";
import Image from "next/image";
type AvatarProps = { className?: string };

export const Avatar = ({ className }: AvatarProps) => {
  return (
    <div className={clsx(className)}>
      <button className="flex items-center bg-elevation-3-dark space-x-2 px-4 py-2 rounded-full">
        <Image
          src="/images/avatar.png"
          alt="Powered by Absinthe Labs"
          width={18}
          height={18}
          priority
        />
        <span>bongo.eth</span>
      </button>
    </div>
  );
};
