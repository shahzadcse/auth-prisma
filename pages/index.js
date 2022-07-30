import styles from "../styles/Home.module.css";
import Form from "../components/Form";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <div className={styles.container}>
      {/* <Form /> */}
      {session ? (
        <p>You are logged in.. !</p>
      ) : (
        <p>
          You are not authorized! <a href="/api/auth/signin">Login </a>
        </p>
      )}
    </div>
  );
}
