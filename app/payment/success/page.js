import { paymentSuccessful } from "@/_lib/action";
import Button from "@/app/_components/Button";
import Link from "next/link";
import { notFound } from "next/navigation";

async function page({ searchParams }) {
  const { data: encodedData } = await searchParams;

  if (!encodedData) return notFound();

  try {
    const decodedJson = Buffer.from(encodedData, "base64").toString("utf-8");
    const result = JSON.parse(decodedJson);
    const verifyPayment = await fetch(
      `https://rc.esewa.com.np/api/epay/transaction/status/?product_code=EPAYTEST&total_amount=${result.total_amount}&transaction_uuid=${result.transaction_uuid}`,
    );
    const finalResponse = await verifyPayment.json();
    // console.log("finalResponse", finalResponse);
    //if payment successful then create new payment complete table in database
    if (finalResponse.status === "COMPLETE") {
      await paymentSuccessful(finalResponse);
    }
    return (
      <div className="mx-auto mt-20 max-w-md text-center">
        <h1 className="text-primary mb-4 text-3xl font-semibold">
          Payment Successful 🎉
        </h1>
        <p>
          Transaction ID: <b>{finalResponse.transaction_uuid}</b>
        </p>
        <p>
          Total Amount: <b>Rs. {finalResponse.total_amount}</b>
        </p>
        <p>Status: {finalResponse.status}</p>
        <Link href="/" replace>
          <Button>Go To Homepage</Button>
        </Link>
      </div>
    );
  } catch (error) {
    return notFound();
  }
}

export default page;
