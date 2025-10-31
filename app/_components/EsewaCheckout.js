import { createHmac } from "node:crypto";
import Button from "./Button";

function EsewaCheckout({ total, transactionId }) {
  const message = `total_amount=${total},transaction_uuid=${transactionId},product_code=EPAYTEST`;

  //   console.log(total);

  //create signature
  const signature = createHmac("sha256", process.env.ESEWA_KEY)
    .update(message)
    .digest("base64");
  //   console.log(signature);

  return (
    <form
      action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
      method="POST"
      className="space-y-4"
    >
      <input
        hidden
        type="text"
        id="amount"
        name="amount"
        value={total}
        required
        readOnly
      />
      <input
        hidden
        type="text"
        id="tax_amount"
        name="tax_amount"
        value={0}
        required
        readOnly
      />
      <input
        hidden
        type="text"
        id="total_amount"
        name="total_amount"
        value={total}
        required
        readOnly
      />
      <input
        hidden
        type="text"
        id="transaction_uuid"
        name="transaction_uuid"
        value={transactionId}
        required
        readOnly
      />
      <input
        hidden
        type="text"
        id="product_code"
        name="product_code"
        value="EPAYTEST"
        required
        readOnly
      />
      <input
        hidden
        type="text"
        id="product_service_charge"
        name="product_service_charge"
        value={0}
        required
        readOnly
      />
      <input
        hidden
        type="text"
        id="product_delivery_charge"
        name="product_delivery_charge"
        value={0}
        required
        readOnly
      />
      <input
        hidden
        type="text"
        id="success_url"
        name="success_url"
        value="http://localhost:3000/payment/success"
        required
        readOnly
      />
      <input
        hidden
        type="text"
        id="failure_url"
        name="failure_url"
        value="http://localhost:3000/payment/failure"
        required
        readOnly
      />
      <input
        hidden
        type="text"
        id="signed_field_names"
        name="signed_field_names"
        value="total_amount,transaction_uuid,product_code"
        required
        readOnly
      />
      <input
        hidden
        type="text"
        id="signature"
        name="signature"
        value={signature}
        required
        readOnly
      />

      <Button className="mt-4 w-full">Pay with eSewa</Button>
    </form>
  );
}

export default EsewaCheckout;
