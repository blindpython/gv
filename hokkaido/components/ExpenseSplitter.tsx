
import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Check, Delete } from 'lucide-react';
import { Expense, ExpenseMember } from '../types';
import { StorageService } from '../services/storage';
import { motion, AnimatePresence } from 'framer-motion';

export const ExpenseSplitter: React.FC = () => {
  const [members, setMembers] = useState<ExpenseMember[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  
  // New Expense Form
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [payer, setPayer] = useState('');
  const [involved, setInvolved] = useState<string[]>([]);
  const [newMemberName, setNewMemberName] = useState('');

  useEffect(() => {
    setMembers(StorageService.getMembers());
    setExpenses(StorageService.getExpenses());
  }, []);

  useEffect(() => {
    if (showAddModal && members.length > 0) {
        if (!payer) setPayer(members[0].id);
        if (involved.length === 0) setInvolved(members.map(m => m.id));
    }
  }, [showAddModal, members]);

  const handleAddMember = () => {
    if (!newMemberName.trim()) return;
    const newMember = { id: Date.now().toString(), name: newMemberName };
    const updated = [...members, newMember];
    setMembers(updated);
    StorageService.saveMembers(updated);
    setNewMemberName('');
  };

  const handleAddExpense = () => {
    if (!desc || !amount || !payer || involved.length === 0) return;
    const newExpense: Expense = {
      id: Date.now().toString(),
      description: desc,
      amount: parseFloat(amount),
      payerId: payer,
      involvedIds: involved,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    };
    const updated = StorageService.addExpense(newExpense);
    setExpenses(updated);
    setShowAddModal(false);
    setDesc('');
    setAmount('');
  };

  const handleDeleteExpense = (id: string) => {
      if(confirm('Delete this expense?')) {
          const updated = StorageService.deleteExpense(id);
          setExpenses(updated);
      }
  }

  const handleNumPad = (value: string) => {
      if (value === 'backspace') {
          setAmount(prev => prev.slice(0, -1));
      } else if (value === '.') {
          if (!amount.includes('.')) {
              setAmount(prev => prev + '.');
          }
      } else {
          // prevent multiple leading zeros
          if (amount === '0' && value !== '.') {
              setAmount(value);
          } else {
              setAmount(prev => prev + value);
          }
      }
  };

  const balances: Record<string, number> = {};
  members.forEach(m => balances[m.id] = 0);
  expenses.forEach(exp => {
    const split = exp.amount / exp.involvedIds.length;
    if (balances[exp.payerId] !== undefined) balances[exp.payerId] += exp.amount;
    exp.involvedIds.forEach(id => {
        if (balances[id] !== undefined) balances[id] -= split;
    });
  });

  return (
    <div className="min-h-screen bg-[#F5F5F7] pt-safe px-4 pb-32">
        <div className="max-w-md mx-auto space-y-8 pt-6">
            
            {/* Header */}
            <div className="flex justify-between items-end">
                <h1 className="text-3xl font-bold text-[#1D1D1F]">Expenses</h1>
                <button 
                    onClick={() => setShowAddModal(true)}
                    className="bg-[#007AFF] text-white p-2 rounded-full shadow-lg active:scale-90 transition-transform"
                >
                    <Plus size={24} />
                </button>
            </div>

            {/* Balances Section */}
            <div>
                <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 ml-4">Balances</h2>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/50 divide-y divide-gray-100">
                    {members.map(m => {
                        const bal = balances[m.id] || 0;
                        return (
                            <div key={m.id} className="flex justify-between items-center p-4">
                                <span className="font-medium text-gray-900">{m.name}</span>
                                <span className={`font-semibold ${bal >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                                    {bal >= 0 ? '+' : ''}{bal.toFixed(0)}
                                </span>
                            </div>
                        );
                    })}
                    <div className="p-2 bg-gray-50 flex gap-2">
                        <input 
                            value={newMemberName}
                            onChange={e => setNewMemberName(e.target.value)}
                            placeholder="Add person..."
                            className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                        />
                        <button onClick={handleAddMember} className="text-blue-600 font-bold text-sm px-2">Add</button>
                    </div>
                </div>
            </div>

            {/* Transactions Section */}
            <div>
                <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 ml-4">History</h2>
                {expenses.length === 0 ? (
                    <div className="text-center py-12 text-gray-400">No expenses yet.</div>
                ) : (
                    <div className="space-y-3">
                        {expenses.map(exp => (
                            <div key={exp.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200/50 flex justify-between items-center" onClick={() => handleDeleteExpense(exp.id)}>
                                <div>
                                    <div className="font-bold text-gray-900">{exp.description}</div>
                                    <div className="text-xs text-gray-500 mt-0.5">
                                        <span className="font-medium text-blue-600">{members.find(m => m.id === exp.payerId)?.name}</span> paid • {exp.date}
                                    </div>
                                </div>
                                <span className="font-bold text-lg text-gray-900">${exp.amount}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Add Modal */}
            <AnimatePresence>
                {showAddModal && (
                    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none">
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
                            onClick={() => setShowAddModal(false)}
                        />
                        <motion.div 
                            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-[#F5F5F7] w-full max-w-md rounded-t-[2rem] sm:rounded-2xl p-6 pointer-events-auto shadow-2xl pb-safe flex flex-col max-h-[95vh]"
                        >
                            <div className="flex justify-between items-center mb-4 flex-shrink-0">
                                <h3 className="text-xl font-bold">New Expense</h3>
                                <button onClick={() => setShowAddModal(false)} className="text-gray-400 bg-gray-200 rounded-full p-1"><Check size={16} /></button>
                            </div>

                            <div className="flex-1 overflow-y-auto no-scrollbar space-y-4">
                                {/* Title Input */}
                                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 p-4 flex items-center">
                                    <span className="w-16 text-gray-500 text-sm font-medium">For</span>
                                    <input 
                                        autoFocus
                                        value={desc}
                                        onChange={e => setDesc(e.target.value)}
                                        placeholder="Dinner, Taxi..."
                                        className="flex-1 outline-none font-bold text-lg placeholder-gray-300 bg-transparent"
                                    />
                                </div>

                                {/* Payer & Involved - Horizontal Scroll */}
                                <div className="space-y-3">
                                    <div>
                                        <div className="flex gap-2 overflow-x-auto px-1 no-scrollbar pb-1">
                                            {members.map(m => (
                                                <button
                                                    key={m.id}
                                                    onClick={() => setPayer(m.id)}
                                                    className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                                                        payer === m.id ? 'bg-gray-900 text-white' : 'bg-white text-gray-500 border border-gray-200'
                                                    }`}
                                                >
                                                    {m.name} Paid
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex gap-2 overflow-x-auto px-1 no-scrollbar pb-1">
                                            {members.map(m => {
                                                const active = involved.includes(m.id);
                                                return (
                                                    <button
                                                        key={m.id}
                                                        onClick={() => setInvolved(prev => active ? prev.filter(id => id !== m.id) : [...prev, m.id])}
                                                        className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors border ${
                                                            active ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-white border-transparent text-gray-400'
                                                        }`}
                                                    >
                                                        For {m.name}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* Amount Display */}
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex justify-center items-center">
                                    <span className="text-4xl font-bold text-gray-900 tracking-tight">
                                        {amount ? amount : <span className="text-gray-300">0</span>}
                                    </span>
                                </div>

                                {/* Numeric Keypad */}
                                <div className="grid grid-cols-3 gap-3">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0].map(num => (
                                        <button 
                                            key={num} 
                                            onClick={() => handleNumPad(num.toString())}
                                            className="h-14 bg-white rounded-xl shadow-sm border-b-2 border-gray-200 text-2xl font-bold text-gray-700 active:bg-gray-50 active:border-b-0 active:translate-y-[2px] transition-all"
                                        >
                                            {num}
                                        </button>
                                    ))}
                                    <button 
                                        onClick={() => handleNumPad('backspace')}
                                        className="h-14 bg-gray-100 rounded-xl shadow-sm border-b-2 border-gray-200 text-gray-600 flex items-center justify-center active:bg-gray-200 active:border-b-0 active:translate-y-[2px] transition-all"
                                    >
                                        <Delete size={24} />
                                    </button>
                                </div>
                            </div>

                            <button 
                                onClick={handleAddExpense}
                                disabled={!desc || !amount}
                                className="w-full mt-4 bg-[#007AFF] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200/50 active:scale-95 transition-all disabled:opacity-50 flex-shrink-0"
                            >
                                Save Expense
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    </div>
  );
};
