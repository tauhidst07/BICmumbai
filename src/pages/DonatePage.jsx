import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Users, BookOpen, Home, Utensils, GraduationCap,
  QrCode, Building2, CreditCard, Copy, Check, X
} from 'lucide-react';

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('razorpay');
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState('');

  const donationAmounts = [500, 1000, 2500, 5000, 10000];

  const impactAreas = [
    {
      icon: BookOpen,
      title: "Education Programs",
      description: "Support Quran classes, Islamic studies, and youth education",
      impact: "₹1000 sponsors 1 student for a month"
    },
    {
      icon: Utensils,
      title: "Community Kitchen",
      description: "Provide meals for the needy and weekend community lunches",
      impact: "₹500 feeds 20 people"
    },
    {
      icon: Users,
      title: "Social Welfare",
      description: "Support for widows, orphans, and families in need",
      impact: "₹2500 helps a family for a month"
    },
    {
      icon: Home,
      title: "Facility Maintenance",
      description: "Keep our center clean, safe, and well-maintained",
      impact: "₹5000 covers monthly utilities"
    },
    {
      icon: GraduationCap,
      title: "Scholarship Fund",
      description: "Help deserving students pursue higher education",
      impact: "₹10000 sponsors semester fees"
    }
  ];

  const bankDetails = {
    accountName: "Markaz Bazil al-Khair Islamic Center",
    accountNumber: "1234567890123456",
    ifscCode: "SBIN0001234",
    bankName: "State Bank of India",
    branch: "Nashik Main Branch",
    accountType: "Current Account",
    upiId: "markazbazil@sbi"
  };

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(''), 2000);
  };

  const handleRazorpayPayment = () => {
    const amount = selectedAmount || parseFloat(customAmount) || 0;
    
    if (amount < 100) {
      alert('Minimum donation amount is ₹100');
      return;
    }

    // Razorpay integration
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your actual key
      amount: amount * 100, // Amount in paise
      currency: "INR",
      name: "Markaz Bazil al-Khair",
      description: "Donation to Islamic Center",
      image: "/logo.png",
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        // Handle success - send to backend, show confirmation, etc.
      },
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      theme: {
        color: "#C79732"
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--color-primaryCustom) 0%, var(--color-secondaryCustom) 100%)"
        }}
      >
        {/* Decorative elements */}
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "var(--color-bright-accent)" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center justify-center mb-6">
              <Heart 
                className="w-16 h-16"
                style={{ color: "var(--color-white)" }}
                fill="currentColor"
              />
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{
                fontFamily: "var(--font-playfairDisplay)",
                color: "var(--color-white)"
              }}
            >
              Make a Difference
            </h1>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[2px] w-16" style={{ backgroundColor: "var(--color-bright-accent)" }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-bright-accent)" }} />
              <div className="h-[2px] w-16" style={{ backgroundColor: "var(--color-bright-accent)" }} />
            </div>

            <p 
              className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-4"
              style={{
                fontFamily: "var(--font-poppins)",
                color: "var(--color-light-accent)"
              }}
            >
              Your generosity transforms lives and strengthens our community
            </p>

            <p 
              className="text-base md:text-lg italic"
              style={{
                fontFamily: "var(--font-poppins)",
                color: "var(--color-white)",
                opacity: 0.9
              }}
            >
              "The best charity is that given in Ramadan" - Prophet Muhammad ﷺ
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{
                fontFamily: "var(--font-playfairDisplay)",
                color: "var(--color-primaryCustom)"
              }}
            >
              Where Your Donation Goes
            </h2>
            <div 
              className="w-20 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "var(--color-secondaryCustom)" }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl"
                  style={{
                    backgroundColor: "#FFF8F0",
                    boxShadow: "0 4px 12px rgba(122, 89, 51, 0.08)"
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                    style={{ backgroundColor: "var(--color-light-accent)" }}
                  >
                    <Icon 
                      className="w-8 h-8"
                      style={{ color: "var(--color-primaryCustom)" }}
                      strokeWidth={2}
                    />
                  </div>
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      color: "var(--color-primaryCustom)"
                    }}
                  >
                    {area.title}
                  </h3>
                  <p 
                    className="text-base mb-4"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      color: "#6B7280"
                    }}
                  >
                    {area.description}
                  </p>
                  <div 
                    className="px-4 py-2 rounded-lg inline-block"
                    style={{
                      backgroundColor: "var(--color-secondaryCustom)",
                      color: "var(--color-white)"
                    }}
                  >
                    <p 
                      className="text-sm font-semibold"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {area.impact}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20" style={{ backgroundColor: "#FFF8F0" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              style={{
                fontFamily: "var(--font-playfairDisplay)",
                color: "var(--color-primaryCustom)"
              }}
            >
              Choose Your Contribution
            </h2>

            {/* Amount Selection */}
            <div className="mb-8">
              <label 
                className="block text-lg font-semibold mb-4"
                style={{
                  fontFamily: "var(--font-poppins)",
                  color: "var(--color-primaryCustom)"
                }}
              >
                Select Amount
              </label>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                {donationAmounts.map((amount) => (
                  <motion.button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className="py-4 rounded-xl font-semibold text-lg border-2 transition-all"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      borderColor: selectedAmount === amount ? "var(--color-secondaryCustom)" : "var(--color-light-accent)",
                      backgroundColor: selectedAmount === amount ? "var(--color-secondaryCustom)" : "transparent",
                      color: selectedAmount === amount ? "var(--color-white)" : "var(--color-primaryCustom)"
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    ₹{amount}
                  </motion.button>
                ))}
              </div>

              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    color: "var(--color-primaryCustom)"
                  }}
                >
                  Or Enter Custom Amount
                </label>
                <input
                  type="number"
                  placeholder="Enter amount (min ₹100)"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    borderColor: "var(--color-light-accent)"
                  }}
                />
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="mb-8">
              <label 
                className="block text-lg font-semibold mb-4"
                style={{
                  fontFamily: "var(--font-poppins)",
                  color: "var(--color-primaryCustom)"
                }}
              >
                Choose Payment Method
              </label>

              <div className="grid md:grid-cols-3 gap-4">
                <motion.button
                  onClick={() => setPaymentMethod('razorpay')}
                  className="p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all"
                  style={{
                    borderColor: paymentMethod === 'razorpay' ? "var(--color-secondaryCustom)" : "var(--color-light-accent)",
                    backgroundColor: paymentMethod === 'razorpay' ? "var(--color-light-accent)" : "transparent"
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CreditCard 
                    className="w-8 h-8"
                    style={{ color: "var(--color-primaryCustom)" }}
                  />
                  <span 
                    className="font-semibold"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      color: "var(--color-primaryCustom)"
                    }}
                  >
                    Card/UPI/Net Banking
                  </span>
                </motion.button>

                <motion.button
                  onClick={() => {
                    setPaymentMethod('qr');
                    setShowQR(true);
                  }}
                  className="p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all"
                  style={{
                    borderColor: paymentMethod === 'qr' ? "var(--color-secondaryCustom)" : "var(--color-light-accent)",
                    backgroundColor: paymentMethod === 'qr' ? "var(--color-light-accent)" : "transparent"
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <QrCode 
                    className="w-8 h-8"
                    style={{ color: "var(--color-primaryCustom)" }}
                  />
                  <span 
                    className="font-semibold"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      color: "var(--color-primaryCustom)"
                    }}
                  >
                    Scan QR Code
                  </span>
                </motion.button>

                <motion.button
                  onClick={() => setPaymentMethod('bank')}
                  className="p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all"
                  style={{
                    borderColor: paymentMethod === 'bank' ? "var(--color-secondaryCustom)" : "var(--color-light-accent)",
                    backgroundColor: paymentMethod === 'bank' ? "var(--color-light-accent)" : "transparent"
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Building2 
                    className="w-8 h-8"
                    style={{ color: "var(--color-primaryCustom)" }}
                  />
                  <span 
                    className="font-semibold"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      color: "var(--color-primaryCustom)"
                    }}
                  >
                    Bank Transfer
                  </span>
                </motion.button>
              </div>
            </div>

            {/* Razorpay Payment */}
            {paymentMethod === 'razorpay' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <motion.button
                  onClick={handleRazorpayPayment}
                  className="w-full py-4 rounded-xl font-bold text-lg"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    backgroundColor: "var(--color-secondaryCustom)",
                    color: "var(--color-white)"
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 8px 24px rgba(199, 151, 50, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Proceed to Payment
                </motion.button>
                <p 
                  className="text-sm text-center mt-3"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    color: "#6B7280"
                  }}
                >
                  Secured by Razorpay
                </p>
              </motion.div>
            )}

            {/* QR Code Modal */}
            {showQR && paymentMethod === 'qr' && (
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setShowQR(false)}
              >
                <motion.div
                  className="bg-white rounded-3xl p-8 max-w-md w-full relative"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setShowQR(false)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <h3 
                    className="text-2xl font-bold mb-4 text-center"
                    style={{
                      fontFamily: "var(--font-playfairDisplay)",
                      color: "var(--color-primaryCustom)"
                    }}
                  >
                    Scan to Pay
                  </h3>

                  {/* QR Code Placeholder */}
                  <div 
                    className="aspect-square rounded-2xl mb-4 flex items-center justify-center"
                    style={{ backgroundColor: "#F3F4F6" }}
                  >
                    <div className="text-center">
                      <QrCode 
                        className="w-48 h-48 mx-auto mb-4"
                        style={{ color: "var(--color-primaryCustom)" }}
                      />
                      <p 
                        className="text-sm"
                        style={{
                          fontFamily: "var(--font-poppins)",
                          color: "#6B7280"
                        }}
                      >
                        Place actual QR code image here
                      </p>
                    </div>
                  </div>

                  <div 
                    className="p-4 rounded-xl mb-4"
                    style={{ backgroundColor: "#FFF8F0" }}
                  >
                    <p 
                      className="text-sm font-medium mb-2"
                      style={{
                        fontFamily: "var(--font-poppins)",
                        color: "var(--color-primaryCustom)"
                      }}
                    >
                      UPI ID
                    </p>
                    <div className="flex items-center justify-between">
                      <span 
                        className="font-mono"
                        style={{
                          fontFamily: "var(--font-poppins)",
                          color: "#4B5563"
                        }}
                      >
                        {bankDetails.upiId}
                      </span>
                      <button
                        onClick={() => handleCopy(bankDetails.upiId, 'upi')}
                        className="p-2 rounded-lg hover:bg-white transition-colors"
                      >
                        {copied === 'upi' ? (
                          <Check className="w-5 h-5" style={{ color: "green" }} />
                        ) : (
                          <Copy className="w-5 h-5" style={{ color: "var(--color-primaryCustom)" }} />
                        )}
                      </button>
                    </div>
                  </div>

                  <p 
                    className="text-xs text-center"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      color: "#6B7280"
                    }}
                  >
                    Use any UPI app to scan and pay
                  </p>
                </motion.div>
              </motion.div>
            )}

            {/* Bank Details */}
            {paymentMethod === 'bank' && (
              <motion.div
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "#FFF8F0" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 
                  className="text-xl font-bold mb-6 text-center"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    color: "var(--color-primaryCustom)"
                  }}
                >
                  Bank Account Details
                </h3>

                <div className="space-y-4">
                  {[
                    { label: "Account Name", value: bankDetails.accountName },
                    { label: "Account Number", value: bankDetails.accountNumber, copyable: true },
                    { label: "IFSC Code", value: bankDetails.ifscCode, copyable: true },
                    { label: "Bank Name", value: bankDetails.bankName },
                    { label: "Branch", value: bankDetails.branch },
                    { label: "Account Type", value: bankDetails.accountType }
                  ].map((detail, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between py-3 border-b"
                      style={{ borderColor: "var(--color-light-accent)" }}
                    >
                      <div>
                        <p 
                          className="text-sm font-medium mb-1"
                          style={{
                            fontFamily: "var(--font-poppins)",
                            color: "#6B7280"
                          }}
                        >
                          {detail.label}
                        </p>
                        <p 
                          className={detail.copyable ? "font-mono font-semibold" : "font-semibold"}
                          style={{
                            fontFamily: "var(--font-poppins)",
                            color: "var(--color-primaryCustom)"
                          }}
                        >
                          {detail.value}
                        </p>
                      </div>
                      {detail.copyable && (
                        <button
                          onClick={() => handleCopy(detail.value, detail.label)}
                          className="p-2 rounded-lg hover:bg-white transition-colors"
                        >
                          {copied === detail.label ? (
                            <Check className="w-5 h-5" style={{ color: "green" }} />
                          ) : (
                            <Copy className="w-5 h-5" style={{ color: "var(--color-primaryCustom)" }} />
                          )}
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <p 
                  className="text-sm text-center mt-6"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    color: "#6B7280"
                  }}
                >
                  Please send payment confirmation to: donations@markazbazil.org
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "100% Transparent", description: "Regular financial reports shared" },
              { title: "Tax Benefits", description: "80G Certificate provided" },
              { title: "Secure Payments", description: "Your data is safe with us" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                  style={{ backgroundColor: "var(--color-light-accent)" }}
                >
                  <Check 
                    className="w-6 h-6"
                    style={{ color: "var(--color-secondaryCustom)" }}
                  />
                </div>
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    color: "var(--color-primaryCustom)"
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  style={{
                    fontFamily: "var(--font-poppins)",
                    color: "#6B7280"
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;