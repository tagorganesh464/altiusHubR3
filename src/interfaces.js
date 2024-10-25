export const Invoice = {
    id: "",
    date: "",
    invoiceNumber: 0,
    customerName: "",
    billingAddress: "",
    shippingAddress: "",
    GSTIN: "",
    items: [],
    billSundrys: [],
    totalAmount: 0
}

export const InvoiceBillSundry = {
    id: "",
    billSundryName: "",
    amount: 0
}

export const InvoiceItem = {
    Id: "",
    itemName: "",
    quantity: 1,
    price: 0,
    amount: 0
}