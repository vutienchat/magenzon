import React from "react";

const Footer = ({
  changePage,
  countActive,
  listTodo,
  pageURL,
  handleClear,
}) => {
  return (
    <section className="footer">
      <div className="footer-content">
        <div className="count-todo">{countActive()} items left</div>
        <div className="filter-items">
          <button>
            <a
              href="/#/all"
              onClick={() => changePage("all")}
              className={
                pageURL === "all"
                  ? "filter-item-link active"
                  : "filter-item-link"
              }
            >
              All
            </a>
          </button>
          <button>
            <a
              href="/#/active"
              onClick={() => changePage("active")}
              className={
                pageURL === "active"
                  ? "filter-item-link active"
                  : "filter-item-link"
              }
            >
              Active
            </a>
          </button>
          <button>
            <a
              href="/#/completed"
              onClick={() => changePage("completed")}
              className={
                pageURL === "completed"
                  ? "filter-item-link active"
                  : "filter-item-link"
              }
            >
              Completed
            </a>
          </button>
        </div>
        <div className="footer-right" onClick={handleClear}>
          {countActive() !== listTodo.length &&
            listTodo.length > 0 &&
            "Clear completed"}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Footer);
