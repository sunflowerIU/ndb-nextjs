"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function TypeOptions() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeType = searchParams.get("type") ?? "thermos";

  function handleClick(type) {
    // searchParams.
    const params = new URLSearchParams(searchParams);
    params.set("type", type);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    // console.log(params.toString());
  }

  return (
    <div className="text-secondary flex flex-row justify-end gap-5 px-4 py-3">
      <SelectButton
        type="thermos"
        activeType={activeType}
        onClick={handleClick}
      >
        Thermos
      </SelectButton>
      <SelectButton type="bottle" activeType={activeType} onClick={handleClick}>
        Bottle
      </SelectButton>
      <SelectButton type="others" activeType={activeType} onClick={handleClick}>
        Others
      </SelectButton>
    </div>
  );
}
function SelectButton({ children, onClick, type, activeType }) {
  return (
    <button
      disabled={activeType === type}
      onClick={() => onClick(type)}
      className={`border-primary hover:bg-primary cursor-pointer rounded-2xl border-1 px-3 py-2 shadow-2xl ${activeType === type ? "bg-primary cursor-not-allowed opacity-50" : "bg-royal"}`}
    >
      {children}
    </button>
  );
}
export default TypeOptions;
