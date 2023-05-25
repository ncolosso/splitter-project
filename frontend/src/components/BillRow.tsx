interface Props {
  tab: { id: number; name: string; total: number };
}

function BillRow({ tab }: Props) {
  return (
    <a
      href="#"
      className="list-group-item list-group-item-action d-flex gap-3 py-3"
    >
      <div className="fw-bold">{tab.name}</div>
      <div className="ms-2 me-auto">[date]</div>
      <span className="badge bg-primary rounded-pill">
        {tab.total.toFixed(2)}
      </span>
    </a>
  );
}

export default BillRow;
