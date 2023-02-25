import Image from 'next/image';
import {twMerge} from 'tailwind-merge';
import {OperationalTeam} from '../constants';

interface Props extends React.ComponentProps<'ul'> {
  profile: OperationalTeam;
}

const CardProfile = ({
  profile: {img, name, description},
  className,
  ...props
}: Props) => {
  return (
    <ul
      className={twMerge(
        'w-full max-w-[230px] hover:bg-border-card-team-reverse bg-border-card-team rounded-[17px] p-[2px]',
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center h-full w-full bg-[#181536] py-14 px-4 rounded-[15px]">
        <Image
          className="rounded-full"
          src={img}
          height={60}
          width={60}
          alt={name}
        />
        <p className="uppercase mt-3">{name}</p>
        <p className="text-center text-secondary mt-3">{description}</p>
      </div>
    </ul>
  );
};

export default CardProfile;
