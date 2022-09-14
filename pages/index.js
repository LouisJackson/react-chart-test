import Head from "next/head";
import styles from "../styles/Home.module.css";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Chart
        type="line"
        data={{
          datasets: [
            {
              label: "Dataset",
              data: [
                { x: "January", y: 20 },
                { x: "February", y: 30 },
              ],
            },
          ],
        }}
      />
    </div>
  );
}
