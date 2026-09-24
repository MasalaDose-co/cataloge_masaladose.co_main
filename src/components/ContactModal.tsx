import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import type { ContactFormData } from '../types';
import { submitContactInquiry } from '../lib/contact';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    preferredStage: '',
    whatToBuild: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      await submitContactInquiry(formData);
      setIsSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrorMessage(null);
    setFormData({
      name: '',
      email: '',
      company: '',
      preferredStage: '',
      whatToBuild: '',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#180a04]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl rounded-3xl border border-[#27140b] bg-[#1c0d05] p-6 sm:p-8 shadow-2xl overflow-hidden my-auto max-h-[90vh] overflow-y-auto text-[#fef3c7]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header & Close Button */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-5 mb-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#e5aa30] font-bold mb-1">
              PROJECT INQUIRY
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight">
              Start a Project with masaladose.co
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success State View */}
        {isSuccess ? (
          <div className="py-12 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#e5aa30]/20 text-[#fde68a] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(229,170,48,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-extrabold text-white">Inquiry Received</h4>
            <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
              Thank you for reaching out! We've received your project details and will review your requirements. You will hear back from our engineering team within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-xl bg-[#e5aa30] hover:bg-[#fde68a] text-[#27140b] font-bold text-sm transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="space-y-5">
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 font-bold mb-1.5">
                  Your Name <span className="text-[#e5aa30]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder=""
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-[#e5aa30] focus:ring-1 focus:ring-[#e5aa30] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 font-bold mb-1.5">
                  Email Address <span className="text-[#e5aa30]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder=""
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-[#e5aa30] focus:ring-1 focus:ring-[#e5aa30] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 font-bold mb-1.5">
                  Company / Brand
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-[#e5aa30] focus:ring-1 focus:ring-[#e5aa30] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 font-bold mb-1.5">
                  Preferred Stage
                </label>
                <select
                  value={formData.preferredStage}
                  onChange={(e) => setFormData({ ...formData, preferredStage: e.target.value as any })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-[#e5aa30] focus:ring-1 focus:ring-[#e5aa30] transition-colors"
                >
                  <option value="" disabled hidden>Select stage</option>
                  <option value="stage-01">Stage 01</option>
                  <option value="stage-02">Stage 02</option>
                  <option value="stage-03">Stage 03</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-400 font-bold mb-1.5">
                What do you want to build? <span className="text-[#e5aa30]">*</span>
              </label>
              <textarea
                required
                rows={3}
                placeholder=""
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-[#e5aa30] focus:ring-1 focus:ring-[#e5aa30] transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-zinc-800">
              <span className="text-xs font-mono text-zinc-400">
                // PRIVACY GUARANTEED
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-7 py-3.5 rounded-xl bg-[#e5aa30] hover:bg-[#fde68a] disabled:opacity-50 text-[#27140b] font-black text-sm transition-all duration-200 shadow-md flex items-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
