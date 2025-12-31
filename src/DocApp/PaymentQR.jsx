import React from "react";
import { QRCodeCanvas as QRCode } from "qrcode.react"; // Install: npm install qrcode.react
import emailjs from '@emailjs/browser';

const PaymentQR = ({ appointment, amount, onSuccess }) => {
    // Generate a sample UPI payment URL (customize for your provider, e.g., Razorpay or Paytm)
    // Format: upi://pay?pa=merchant@upi&pn=MerchantName&am=amount&cu=INR&tn=Appointment Booking
    const upiUrl = `upi://pay?pa=your-merchant@upi&pn=YourService&am=${amount}&cu=INR&tn=Appointment for ${appointment.name} on ${appointment.date}`;

    const sendEmail = () => {
        const templateParams = {
            to_email: appointment.email,
            to_name: appointment.name,
            appointment_date: appointment.date,
            amount: amount,
        };

        emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_public_key')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
            }, (error) => {
                console.log('Email send failed:', error.text);
            });
    };

    const sendMessage = () => {
        // Simulate sending WhatsApp/SMS message
        console.log(`Message sent to ${appointment.phone}: Appointment confirmed for ${appointment.name} on ${appointment.date}. Amount paid: ₹${amount}`);
        alert(`Message sent to ${appointment.phone} ✅`);
    };

    const handleSimulateSuccess = () => {
        // In a real app, this would be triggered by a payment gateway callback/webhook
        // For now, simulate success after a delay
        setTimeout(() => {
            sendEmail();
            sendMessage();
            onSuccess();
        }, 2000); // 2-second delay to mimic processing
    };

    return (
        <div className="text-center space-y-4 p-4 md:p-6 animate-fadeIn">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Scan to Pay</h2>
            <p className="text-gray-600">Amount: ₹{amount}</p>
            <div className="flex justify-center">
                <QRCode value={upiUrl} size={200} className="transition-transform duration-300 hover:scale-105" /> {/* Generates QR code */}
            </div>
            <p className="text-sm text-gray-500">
                Scan with any UPI app (e.g., Google Pay, PhonePe) to complete payment.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-700">Appointment Details:</h3>
                <p className="text-sm">Name: {appointment.name}</p>
                <p className="text-sm">Email: {appointment.email}</p>
                <p className="text-sm">Phone: {appointment.phone}</p>
                <p className="text-sm">Date: {appointment.date}</p>
            </div>
            {/* Demo button - replace with real payment integration */}
            <button
                onClick={handleSimulateSuccess}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 transform hover:scale-105"
            >
                Simulate Payment Success (Demo)
            </button>
            <p className="text-xs text-gray-400">
                In production, integrate with a payment provider for real callbacks.
            </p>
        </div>
    );
};

export default PaymentQR;
