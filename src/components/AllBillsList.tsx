import BillRow from "./BillRow";

interface Props {
  allTabs: { id: number; name: string; total: number }[];
}

function AllBillsList({ allTabs }: Props) {
  return (
    <div>
      <div className="d-flex">
        <h1>My Bills</h1> &nbsp;
        <button type="button" className="btn btn-outline-primary btn-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
          </svg>
          New
        </button>
      </div>
      {allTabs.length === 0 && <p>No bills found.</p>}
      <ol className="list-group">
        {allTabs.map((tab) => {
          return <BillRow tab={tab} />;
        })}
      </ol>
    </div>
  );
}

export default AllBillsList;
