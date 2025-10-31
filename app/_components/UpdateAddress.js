"use client";

import { updateAddress } from "@/_lib/action";
import Button from "./Button";
import { toast } from "react-toastify";

function UpdateAddress({ data }) {
  const { delivery_address } = data;
  //   console.log(delivery_address);

  //   if (!delivery_address) return;
  async function handleSubmit(formData) {
    const response = await updateAddress(formData);
    if (!response.success) {
      toast.error(response.message);
    }

    if (response.success) {
      toast.success("Address Updated");
    }
  }
  return (
    <form
      action={handleSubmit}
      className="mt-6 flex w-full flex-col justify-center gap-6 rounded-xl bg-white p-6 shadow-sm"
    >
      <h1 className="text-primary mb-6 text-3xl font-bold">
        Update Your Delivery Address
      </h1>

      <label
        htmlFor="contact"
        className="text-text mb-1 block text-sm font-medium"
      >
        Your Contact Number
      </label>
      <input
        name="contact"
        required
        defaultValue={delivery_address?.contact}
        type="tel"
        pattern="\d{10}"
        placeholder="Your Contact Number"
        className="text-text w-full rounded-md border px-3 py-2 focus:border-green-500 focus:outline-none"
      />
      <label
        className="text-text mb-1 block text-sm font-medium"
        htmlFor="province"
      >
        Select Province:
      </label>
      <select
        defaultValue={delivery_address?.province || ""}
        id="province"
        required
        className="text-text w-full rounded-md border px-3 py-2 focus:border-green-500 focus:outline-none"
        name="province"
      >
        <option value="">--Select a Province--</option>
        <option value="koshi">Koshi Province</option>
        <option value="madhesh">Madhesh Province</option>
        <option value="bagmati">Bagmati Province</option>
        <option value="gandaki">Gandaki Province</option>
        <option value="lumbini">Lumbini Province</option>
        <option value="karnali">Karnali Province</option>
        <option value="sudurpaschim">Sudurpaschim Province</option>
      </select>
      <label
        htmlFor="city"
        className="text-text mb-1 block text-sm font-medium"
      >
        City Name
      </label>
      <input
        defaultValue={delivery_address?.city}
        minLength={8}
        name="city"
        required
        type="text"
        placeholder="Your City Name or Village Name"
        className="text-text w-full rounded-md border px-3 py-2 focus:border-green-500 focus:outline-none"
      />
      <label
        htmlFor="landmark"
        className="text-text mb-1 block text-sm font-medium"
      >
        Nearest Landmark
      </label>
      <input
        defaultValue={delivery_address?.landmark}
        name="landmark"
        type="text"
        required
        placeholder="Nearest Landmark"
        className="text-text w-full rounded-md border px-3 py-2 focus:border-green-500 focus:outline-none"
      />
      <label
        htmlFor="addressLine"
        className="text-text mb-1 block text-sm font-medium"
      >
        Address Line
      </label>
      <input
        defaultValue={delivery_address?.addressLine}
        name="addressLine"
        type="text"
        required
        placeholder="Your tole and house detail"
        className="text-text w-full rounded-md border px-3 py-2 focus:border-green-500 focus:outline-none"
      />

      <Button type="secondary" className="w-full">
        Save Address
      </Button>
    </form>
  );
}

export default UpdateAddress;
