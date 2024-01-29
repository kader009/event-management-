import { ReactNode } from 'react';

interface TProps {
  children: ReactNode;
}

const Container = ({ children }: TProps) => {
  return <div className=" w-full mx-auto max-w-[1276px] h-[608px] px-[20px]">{children}</div>;
};

export default Container;
