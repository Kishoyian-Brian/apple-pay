// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  source: string;
  amount: number;
  description: string;
  timestamp: string;
  icon: 'dollar' | 'bank' | 'person';
}

@Component({
  selector: 'app-wallet-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.html',
})
export class Chime implements OnInit {
  // TrackBy function for better performance with *ngFor
  trackByTransactionId(index: number, transaction: Transaction): string {
    return transaction.id;
  }
  balance: number = 0;

  transactions: Transaction[] = [
    {
      id: '1',
      type: 'credit',
      source: 'Cash Card',
      amount: 2500.00,
      description: 'Added to Balance',
      timestamp: '6 hours ago',
      icon: 'dollar'
    },
    {
      id: '2',
      type: 'credit',
      source: 'Chase Bank',
      amount: 5000.00,
      description: 'Added to Balance',
      timestamp: '6 hours ago',
      icon: 'bank'
    },
    {
      id: '3',
      type: 'credit',
      source: 'Chase Bank',
      amount: 5000.00,
      description: 'Added to Balance',
      timestamp: '16 hours ago',
      icon: 'bank'
    },
    {
      id: '4',
      type: 'credit',
      source: 'Cash Card',
      amount: 5000.00,
      description: 'Added to Balance',
      timestamp: '16 hours ago',
      icon: 'dollar'
    },
    {
      id: '5',
      type: 'credit',
      source: 'Cash Card',
      amount: 5000.00,
      description: 'Added to Balance',
      timestamp: '16 hours ago',
      icon: 'dollar'
    },
    {
      id: '6',
      type: 'debit',
      source: 'Daniel',
      amount: 10.00,
      description: 'Sent',
      timestamp: 'Monday',
      icon: 'person'
    }
  ];

  ngOnInit() {
    // Generate random balance between $100 and $50,000 on refresh
    this.balance = Math.floor(Math.random() * (50000 - 100 + 1)) + 100;
    // Randomize transaction amounts between $10 and $5000 on every refresh
    this.transactions.forEach(t => {
      t.amount = Math.floor(Math.random() * (5000 - 10 + 1)) + 10;
    });
  }

  onSendOrRequest() {
    console.log('Send or Request clicked');
  }

  onTransactionClick(transaction: Transaction) {
    console.log('Transaction clicked:', transaction);
  }
}