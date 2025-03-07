import React from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'register';
}

const AuthModal = ({ isOpen, onClose, type }: AuthModalProps) => {
  const { t } = useTranslation();

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-gray-900 rounded-xl p-6 max-w-sm w-full">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-xl font-bold text-white">
              {type === 'login' ? t('nav.login') : t('nav.register')}
            </Dialog.Title>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                {t('auth.email')}
              </label>
              <input
                type="email"
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:border-primary-light focus:ring-1 focus:ring-primary-light"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                {t('auth.password')}
              </label>
              <input
                type="password"
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:border-primary-light focus:ring-1 focus:ring-primary-light"
              />
            </div>
            {type === 'register' && (
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  {t('auth.confirmPassword')}
                </label>
                <input
                  type="password"
                  className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:border-primary-light focus:ring-1 focus:ring-primary-light"
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-primary-dark hover:bg-primary text-white rounded-lg transition-colors duration-200"
            >
              {type === 'login' ? t('auth.loginButton') : t('auth.registerButton')}
            </button>
            {type === 'login' && (
              <button
                type="button"
                className="w-full text-sm text-primary-light hover:text-primary text-center"
              >
                {t('auth.forgotPassword')}
              </button>
            )}
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AuthModal;