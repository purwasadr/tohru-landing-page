import {twMerge} from 'tailwind-merge';

interface Props extends React.ComponentProps<'button'> {}

const Button = ({className, children, ...props}: Props) => {
  return (
    <button
      className={twMerge(
        'shadow-sm font-normal focus:outline-none disabled:pointer-events-none',
        'rounded-md text-sm px-[1.225rem] py-2.5',
        'text-primary',
        'bg-gradient-to-r from-purple-600 to-indigo-600 hover:bg-gradient-to-l',
        '',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
