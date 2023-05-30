interface Props {
  bill: { id: number; title: string; date: string; total: number };
  onDelete: (billId: number) => void;
}

function BillRow({ bill, onDelete }: Props) {
  const dateFormatted = new Date(bill.date).toLocaleDateString('en-us', {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <a
      href="#"
      className="list-group-item list-group-item-action d-flex gap-3 py-3"
    >
      <div className="fw-bold">{bill.title}</div>
      <div className="ms-2 me-auto">{dateFormatted}</div>
      <span className="badge text-bg-success">{bill.total.toFixed(2)}</span>
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={() => {
          onDelete(bill.id);
        }}
      ></button>
    </a>
  );
}

export default BillRow;
