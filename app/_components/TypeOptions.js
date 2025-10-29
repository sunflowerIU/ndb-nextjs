import Link from "next/link";

function TypeOptions({ category }) {
  return (
    <div className="text-secondary flex flex-row justify-end gap-5 px-4 py-3">
      <SelectButton type="thermos" category={category}>
        Thermos
      </SelectButton>
      <SelectButton type="bottle" category={category}>
        Bottle
      </SelectButton>
      <SelectButton type="others" category={category}>
        Others
      </SelectButton>
    </div>
  );
}
function SelectButton({ children, type, category }) {
  return (
    <Link
      href={`/all-products/${type}`}
      prefetch={false}
      disabled={category === type}
      className={`border-primary hover:bg-primary cursor-pointer rounded-2xl border-1 px-3 py-2 shadow-2xl ${category === type ? "bg-primary cursor-not-allowed opacity-50" : "bg-royal"}`}
    >
      {children}
    </Link>
  );
}
export default TypeOptions;
