import styles from "@/styles/Home.module.css";

function EmprtyBlock({ error = false }: { error: boolean }) {
    return (
      <>
        <div data-testid="emptyBlock">
          <span className={styles.searchResultsTitle}>No results to show</span>
        </div>
        {error ? <div data-testid="emptyBlockError">
          <span className={styles.searchResultsDescr}>
            Some error occured
          </span>
        </div> : 
        <div>
          <span className={styles.searchResultsDescr}>
            Use the search to find the albums by the artists.
          </span>
        </div>}
      </>
    );
  }

  export default EmprtyBlock;