import React from 'react'
import { Link } from 'react-router-dom'
import { invoices } from '../data/invoices'
import { useTranslation } from "react-i18next";

export default function Invoices() {

    const { t } = useTranslation();


    return (
        <div style={{ display: "flex", marginTop: 20 }}>

            {invoices.map((invoice) => (

                <div style={{ backgroundColor: 'lightgray', borderRadius: 15, marginInline: 20, paddingInline: 10, paddingBlock: 10 }}>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <label style={{ fontWeight: 'bold' }}>{t('Job')}:</label>
                        <p style={{ marginLeft: 10 }}>{invoice.name}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <label style={{ fontWeight: 'bold' }}>{t('Amount')}:</label>
                        <p style={{ marginLeft: 10 }}>{invoice.amount}</p>
                    </div>
                    <Link
                        style={{ display: "inline", paddingInline: 10, padding: 10 }}
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number}
                    >
                        show invoice
                    </Link>

                </div>
            ))}
        </div>
    )
}
