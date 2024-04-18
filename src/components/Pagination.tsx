import React, {useEffect, useState} from 'react';
import {pages} from '../data/pages';
import styles from '../assets/scss/Pagination.module.scss';
import {PaginationProps} from "../types.ts";

const Pagination: React.FC<PaginationProps> = ({id_page_current}) => {
  const [paginationPages, setPaginationPages] = useState<string[]>([]);

  useEffect(() => {
    const paginatedPages = Array.from(new Set(pages
    .filter(page => page.paginationTitle !== undefined)
    .map(page => page.paginationTitle)));
    setPaginationPages(paginatedPages as string[]);
  }, []);

  return (
    <div className={styles.pagination}>
      {paginationPages.map((page, index) => {
        const isActive = pages.some(p => p.paginationTitle === page && p.id_page === id_page_current);
        return (
          <div
            key={index}
            className={`${styles.pageNumber} ${isActive ? styles.active : ''}`}
          >
            {page}
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
