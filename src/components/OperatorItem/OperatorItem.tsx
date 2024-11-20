import { OperatorItemProps } from "@/constants/types";

export const OperatorItem: React.FC<OperatorItemProps> = ({ operatorName }) => {
  return <p>{operatorName}</p>;
};
