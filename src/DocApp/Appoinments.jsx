

import React from "react";
import PaymentQR from "./PaymentQR";

const Appointments = () => {
    const [formData, setFormData] = React.useState({
        date: "",
        email: "",
        phone: "",
        name: "",
        hospitalName: "",

    });

    const [showPayment, setShowPayment] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPayment(true);
    };

    const handlePaymentSuccess = () => {
        alert("Appointment booked! Confirmation sent to email & WhatsApp ✅");
        setFormData({ date: "", email: "", phone: "", name: "", hospitalName: "" });
        setShowPayment(false);
    };

    // Get today's date in YYYY-MM-DD format for min date
    const today = new Date().toISOString().split('T')[0];

    return (
        <>
        <h1 className="p-2 ml-6 lg:ml-20 font-[Roboto] text-start text-2xl mt-20" >Only On Tiruchirappalli Soon We Will Updating...</h1>
        
        <div className="min-h-screen  flex items-center justify-center px-4 py-8">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
                    Book Appointment
                </h1>

                {!showPayment ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                        />

                        <input
                            type="text"
                            placeholder="Hospital Name"
                            required
                            value={formData.hospitalName}
                            onChange={(e) =>
                                setFormData({ ...formData, hospitalName: e.target.value })
                            }
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                        />

                        <input
                            type="tel"
                            placeholder="Phone"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                            }
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                        />

                        <input
                            type="date"
                            required
                            min={today}
                            value={formData.date}
                            onChange={(e) =>
                                setFormData({ ...formData, date: e.target.value })
                            }
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                        />

                        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200 transform hover:scale-105">
                            Continue to Payment
                        </button>
                    </form>
                ) : (
                    <PaymentQR
                        appointment={formData}
                        amount={100}
                        onSuccess={handlePaymentSuccess}
                    />
                )}
            </div>
        </div>
        </>
    );
};

export default Appointments;



























