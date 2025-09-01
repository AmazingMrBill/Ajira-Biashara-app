import React, { useState } from 'react';
import { X, Wallet, Plus, Minus, CreditCard, Smartphone, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'deposit' | 'withdraw'>('overview');

  if (!isOpen) return null;

  const transactions = [
    {
      id: 1,
      type: 'credit',
      description: 'Payment from John Doe - Plumbing Service',
      amount: 2500,
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: 2,
      type: 'debit',
      description: 'Withdrawal to M-PESA',
      amount: -1000,
      date: '2024-01-14',
      status: 'completed'
    },
    {
      id: 3,
      type: 'credit',
      description: 'Course completion bonus',
      amount: 500,
      date: '2024-01-13',
      status: 'completed'
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Wallet className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Digital Wallet</h2>
              <p className="text-sm text-gray-600">Manage your earnings and payments</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Balance Card */}
        <div className="p-6">
          <div className="bg-gradient-to-r from-green-600 to-orange-500 rounded-2xl p-6 text-white mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-green-100 text-sm">Available Balance</p>
                <p className="text-3xl font-bold">KSh 15,750</p>
              </div>
              <div className="text-right">
                <p className="text-green-100 text-sm">Pending</p>
                <p className="text-xl font-semibold">KSh 2,500</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={() => setActiveTab('deposit')}
                className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Plus size={18} />
                <span>Add Money</span>
              </button>
              <button 
                onClick={() => setActiveTab('withdraw')}
                className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Minus size={18} />
                <span>Withdraw</span>
              </button>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('deposit')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'deposit'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Deposit
            </button>
            <button
              onClick={() => setActiveTab('withdraw')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'withdraw'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Withdraw
            </button>
          </div>
          
          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-3">Recent Transactions</h3>
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      transaction.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {transaction.type === 'credit' ? 
                        <ArrowDownLeft size={16} /> : 
                        <ArrowUpRight size={16} />
                      }
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{transaction.description}</p>
                      <p className="text-xs text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'credit' ? '+' : ''}KSh {Math.abs(transaction.amount).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500 capitalize">{transaction.status}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'deposit' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount (KSh)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter amount"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Payment Method
                </label>
                <div className="space-y-3">
                  <button className="w-full p-4 border-2 border-gray-200 hover:border-green-500 rounded-lg transition-colors flex items-center space-x-3">
                    <Smartphone className="w-6 h-6 text-green-600" />
                    <div className="text-left">
                      <p className="font-medium text-gray-900">M-PESA</p>
                      <p className="text-sm text-gray-600">Pay with your mobile money</p>
                    </div>
                  </button>
                  
                  <button className="w-full p-4 border-2 border-gray-200 hover:border-green-500 rounded-lg transition-colors flex items-center space-x-3">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                    <div className="text-left">
                      <p className="font-medium text-gray-900">Debit/Credit Card</p>
                      <p className="text-sm text-gray-600">Visa, Mastercard accepted</p>
                    </div>
                  </button>
                </div>
              </div>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Add Money
              </button>
            </div>
          )}
          
          {activeTab === 'withdraw' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount (KSh)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter amount"
                  max="15750"
                />
                <p className="text-sm text-gray-500 mt-1">Maximum: KSh 15,750</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Withdrawal Method
                </label>
                <div className="space-y-3">
                  <button className="w-full p-4 border-2 border-gray-200 hover:border-green-500 rounded-lg transition-colors flex items-center space-x-3">
                    <Smartphone className="w-6 h-6 text-green-600" />
                    <div className="text-left">
                      <p className="font-medium text-gray-900">M-PESA</p>
                      <p className="text-sm text-gray-600">+254 700 *** ***</p>
                    </div>
                  </button>
                  
                  <button className="w-full p-4 border-2 border-gray-200 hover:border-green-500 rounded-lg transition-colors flex items-center space-x-3">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                    <div className="text-left">
                      <p className="font-medium text-gray-900">Bank Transfer</p>
                      <p className="text-sm text-gray-600">KCB Bank - ****1234</p>
                    </div>
                  </button>
                </div>
              </div>
              
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Withdraw Money
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletModal;