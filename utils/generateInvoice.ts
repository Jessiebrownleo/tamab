import { CartItem } from '../contexts/CartContext';

interface InvoiceData {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  customerName: string;
  customerEmail: string;
  shippingAddress: string;
}

export const generateInvoice = (data: InvoiceData): string => {
  const { orderId, date, items, subtotal, shipping, total, customerName, customerEmail, shippingAddress } = data;

  const itemsHtml = items.map(item => {
    const itemPrice = item.discount ? item.price * (1 - item.discount / 100) : item.price;
    return `
      <tr>
        <td>${item.name}</td>
        <td class="text-right">${item.quantity}</td>
        <td class="text-right">$${itemPrice.toFixed(2)}</td>
        <td class="text-right">$${(itemPrice * item.quantity).toFixed(2)}</td>
      </tr>
    `;
  }).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Invoice #${orderId}</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: Arial, sans-serif;
          background-color: #f5f5f5;
          padding: 32px;
          line-height: 1.6;
        }
        
        .invoice-container {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 32px;
        }
        
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 2px solid #f0f0f0;
        }
        
        .company-info h1 {
          font-size: 28px;
          font-weight: bold;
          color: #333;
          margin-bottom: 8px;
        }
        
        .company-info p {
          color: #666;
          font-size: 14px;
        }
        
        .invoice-info {
          text-align: right;
        }
        
        .invoice-info h2 {
          font-size: 24px;
          font-weight: bold;
          color: #d97706;
          margin-bottom: 8px;
        }
        
        .invoice-info p {
          color: #666;
          margin-bottom: 4px;
        }
        
        .customer-section {
          display: flex;
          justify-content: space-between;
          margin-bottom: 32px;
        }
        
        .bill-to, .payment-info {
          flex: 1;
        }
        
        .payment-info {
          text-align: right;
        }
        
        .section-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #333;
        }
        
        .customer-details p {
          margin-bottom: 4px;
          color: #555;
        }
        
        .customer-name {
          font-weight: 600;
          color: #333;
        }
        
        .items-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 32px;
        }
        
        .items-table th {
          background-color: #f8f9fa;
          padding: 12px;
          text-align: left;
          font-weight: 600;
          color: #333;
          border: 1px solid #dee2e6;
        }
        
        .items-table th.text-right {
          text-align: right;
        }
        
        .items-table td {
          padding: 12px;
          border: 1px solid #dee2e6;
          color: #555;
        }
        
        .items-table td.text-right {
          text-align: right;
        }
        
        .items-table tbody tr:nth-child(even) {
          background-color: #f8f9fa;
        }
        
        .totals-section {
          width: 300px;
          margin-left: auto;
          margin-bottom: 32px;
        }
        
        .total-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #dee2e6;
        }
        
        .total-row.final {
          font-size: 18px;
          font-weight: bold;
          color: #333;
          border-bottom: 2px solid #333;
          padding-top: 12px;
        }
        
        .footer {
          margin-top: 48px;
          padding-top: 24px;
          border-top: 1px solid #dee2e6;
          text-align: center;
          color: #666;
          font-size: 14px;
        }
        
        .footer p {
          margin-bottom: 8px;
        }
        
        .contact-info {
          margin-top: 16px;
          font-weight: 600;
          color: #333;
        }
        
        .print-button {
          margin-top: 32px;
          text-align: center;
        }
        
        .print-btn {
          background-color: #d97706;
          color: white;
          border: none;
          padding: 12px 24px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .print-btn:hover {
          background-color: #b45309;
        }
        
        @media print {
          body {
            background-color: white;
            padding: 0;
            -webkit-print-color-adjust: exact;
          }
          
          .invoice-container {
            box-shadow: none;
            padding: 0;
            max-width: none;
          }
          
          .no-print {
            display: none !important;
          }
        }
        
        @media (max-width: 768px) {
          body {
            padding: 16px;
          }
          
          .invoice-container {
            padding: 16px;
          }
          
          .header {
            flex-direction: column;
            gap: 16px;
          }
          
          .invoice-info {
            text-align: left;
          }
          
          .customer-section {
            flex-direction: column;
            gap: 24px;
          }
          
          .payment-info {
            text-align: left;
          }
          
          .totals-section {
            width: 100%;
          }
        }
      </style>
    </head>
    <body>
      <div class="invoice-container">
        <!-- Header -->
        <div class="header">
          <div class="company-info">
            <h1>TAMAB CONSTRUCTION</h1>
            <p>Your Trusted Construction Materials Supplier</p>
          </div>
          <div class="invoice-info">
            <h2>INVOICE</h2>
            <p>#${orderId}</p>
            <p>${date}</p>
          </div>
        </div>

        <!-- Customer Info -->
        <div class="customer-section">
          <div class="bill-to">
            <h3 class="section-title">Bill To:</h3>
            <div class="customer-details">
              <p class="customer-name">${customerName}</p>
              <p>${customerEmail}</p>
              <p>${shippingAddress}</p>
            </div>
          </div>
          <div class="payment-info">
            <h3 class="section-title">Payment Method:</h3>
            <p>Cash on Delivery</p>
            <p style="margin-top: 8px;">Due: ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
          </div>
        </div>

        <!-- Items Table -->
        <table class="items-table">
          <thead>
            <tr>
              <th>Description</th>
              <th class="text-right">Qty</th>
              <th class="text-right">Unit Price</th>
              <th class="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>

        <!-- Totals -->
        <div class="totals-section">
          <div class="total-row">
            <span>Subtotal:</span>
            <span>$${subtotal.toFixed(2)}</span>
          </div>
          <div class="total-row">
            <span>Shipping:</span>
            <span>${shipping > 0 ? `$${shipping.toFixed(2)}` : 'FREE'}</span>
          </div>
          <div class="total-row final">
            <span>Total:</span>
            <span>$${total.toFixed(2)}</span>
          </div>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p>Thank you for your business!</p>
          <p>If you have any questions about this invoice, please contact our support team.</p>
          <p class="contact-info">TAMAB CONSTRUCTION • support@tamab.com • +855 23 456 789</p>
        </div>

        <!-- Print Button -->
        <div class="print-button no-print">
          <button onclick="window.print()" class="print-btn">
            Print Invoice
          </button>
        </div>
      </div>
    </body>
    </html>
  `;
};

/**
 * Returns the invoice HTML as a string that can be used for email or display
 * @param invoiceHtml The HTML string of the invoice
 * @returns The same HTML string for chaining or further processing
 */
export const getInvoiceHtml = (invoiceHtml: string): string => {
  return invoiceHtml;
};

/**
 * Opens the invoice in a new browser tab
 * @param invoiceHtml The HTML string of the invoice
 */
export const openInvoiceInNewTab = (invoiceHtml: string) => {
  const blob = new Blob([invoiceHtml], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const newWindow = window.open(url, '_blank');
  
  // Ensure the new window is not blocked by popup blockers
  if (newWindow) {
    newWindow.focus();
  } else {
    alert('Please allow popups for this website to view the invoice.');
  }
};

/**
 * Downloads the invoice as an HTML file
 * @param invoiceHtml The HTML string of the invoice
 * @param orderId The order ID for the filename
 */
export const downloadInvoiceAsHtml = (invoiceHtml: string, orderId: string) => {
  const blob = new Blob([invoiceHtml], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `invoice-${orderId}.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Provides multiple options for the invoice after checkout
 * @param invoiceHtml The HTML string of the invoice
 * @param orderId The order ID
 */
export const handleInvoiceAfterCheckout = (invoiceHtml: string, orderId: string) => {
  // Open in new tab for immediate viewing
  openInvoiceInNewTab(invoiceHtml);
  
  // Automatically download the HTML file
  setTimeout(() => {
    downloadInvoiceAsHtml(invoiceHtml, orderId);
  }, 1000); // Small delay to ensure the new tab opens first
};
