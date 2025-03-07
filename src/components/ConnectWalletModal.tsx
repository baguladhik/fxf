import React from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';

interface ConnectWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectWalletModal = ({ isOpen, onClose }: ConnectWalletModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-gray-900 rounded-xl p-6 max-w-sm w-full">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-xl font-bold text-white">
              Connect Wallet
            </Dialog.Title>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-4">
            <button className="w-full py-3 px-4 bg-primary-dark hover:bg-primary text-white rounded-lg transition-colors duration-200">
              MetaMask
            </button>
            <button className="w-full py-3 px-4 bg-primary-dark hover:bg-primary text-white rounded-lg transition-colors duration-200">
              WalletConnect
            </button>
            <button className="w-full py-3 px-4 bg-primary-dark hover:bg-primary text-white rounded-lg transition-colors duration-200">
              Coinbase Wallet
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ConnectWalletModal;