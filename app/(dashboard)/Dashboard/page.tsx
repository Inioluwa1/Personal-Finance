import styles from "./Dashboard.module.css";
import BalanceCard from "@/Components/BalanceCard";
import TransactionsCard from "@/Components/TransactionsCard";
import RecurringCard from "@/Components/RecurringCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1> Overview </h1>
      <div>
        <BalanceCard />
      </div>
      <div className={styles.SplitPage}>
        <div className={styles.Transactions}>
          <TransactionsCard />
        </div>
        <div className={styles.Recurring}>
          <RecurringCard />
        </div>
      </div>
    </div>
  );
}
