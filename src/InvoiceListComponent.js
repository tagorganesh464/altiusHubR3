import React, {useEffect, useState} from 'react'
import {Table, TableBody,TableCell, TableContainer, TableHead, TableRow, Button, Paper} from '@mui/material'


function InvoiceListComponent({setView}) {
    const [invoices,setInvoices] = useState([]);

    useEffect(()=>{
        const storedInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
        setInvoices(storedInvoices);
    },[])
  return (
        <Paper>
            <Button variant='contained' color='primary' onClick={(()=>setView('details'))}>
                Add
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Invoice Number</TableCell>
                        <TableCell>Customer Name</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Total Amount</TableCell>
                    </TableRow>

                </TableHead>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={(invoice.id)} onClick={() => setView('details')}>
                            <TableCell>{invoice.id}</TableCell>
                            <TableCell>{invoice.customerName}</TableCell>
                            <TableCell>{invoice.date}</TableCell>
                            <TableCell>{invoice.totalAmount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
  );
};

export default InvoiceListComponent;