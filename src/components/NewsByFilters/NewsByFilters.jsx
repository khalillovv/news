import { TOTAL_PAGES } from "../../constants/constants";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import Pagination from "../Pagination/Pagination";
import styles from "./styles.module.css";

const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <Pagination
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      />

      <NewsList isLoading={isLoading} news={news} />

      <Pagination
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      />
    </section>
  );
};

export default NewsByFilters;
