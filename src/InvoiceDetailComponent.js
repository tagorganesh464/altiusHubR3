import { TextField, Typography,Button,Paper } from '@mui/material'
import React,{useState} from 'react'
import { Invoice, InvoiceItem, InvoiceBillSundry} from './interfaces'

function InvoiceDetailComponent({setView}) {
    const dateObj = new Date()
    const [invoice, setInvoice]=useState( {...Invoice});
    const handleSave = () => {
        const storedInvoices = JSON.parse(localStorage.getItem("invoices")) || []
        const updatedInvoices = [...storedInvoices,{...invoice,id:Date.now().toString(),date:dateObj.toLocaleDateString()}];
        localStorage.setItem('invoices',JSON.stringify(updatedInvoices))
        setView("list")
    }
  return (
    <paper style={{ padding: '16px'}}>
        <Typography varient="h6">
           Invoice Detail
        </Typography>
        <TextField label = "Customer Name" name='customerName' value={invoice.customerName} onChange={(e)=>{setInvoice({...invoice,customerName:e.target.value})}} fullWidth/>
        <TextField label = "Billing Address" name='billingAddress' value={invoice.billingAddress} onChange={(e)=>{setInvoice({...invoice,billingAddress:e.target.value})}}  fullWidth/>
        <TextField label = "Total amount" name='totalAmount' value={invoice.totalAmount} onChange={(e)=>{setInvoice({...invoice,totalAmount:e.target.value})}}  fullWidth/>
        <Button variant='contained' color='primary' onClick={handleSave}>Save</Button>
    </paper>
  );
  
}

export default InvoiceDetailComponent;