import { IOperator, OperatorsListProps } from "@/constants/types";
import styles from "./OperatorsList.module.css";
import { OperatorItem } from "../OperatorItem/OperatorItem";

export const OperatorsList: React.FC<OperatorsListProps> = ({ operators }) => {
  return (
    <div className={styles.operatorsBlock}>
      {operators.map((operator: IOperator) => (
        <OperatorItem
          key={operator.phone_view}
          operatorName={operator.phone_view}
        />
      ))}
    </div>
  );
};
