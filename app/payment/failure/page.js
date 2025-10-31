import Button from "@/app/_components/Button";
import Link from "next/link";
import { notFound } from "next/navigation";

async function page({ searchParams }) {
  const { data: encodedData } = await searchParams;

  if (!encodedData) return notFound("No data received from esewa");

  try {
    const decodedJson = Buffer.from(encodedData, "base64").toString("utf-8");
    const result = JSON.parse(decodedJson);

    // console.log("result", result);
    return (
      <div className="mx-auto mt-20 max-w-md text-center">
        <h1 className="mb-4 text-3xl font-semibold text-red-600">
          Payment Failed ❌
        </h1>
        <p>
          Transaction ID: <b>{result.transaction_uuid}</b>
        </p>
        <p>
          Total Amount: <b>Rs. {result.total_amount}</b>
        </p>
        <p>Status: {result.status}</p>
        <Link href="/" replace>
          <Button>Go To Homepage</Button>
        </Link>
      </div>
    );
  } catch (error) {
    return notFound("invalid data format");
  }
}

export default page;
