# Wananchi One: Administrator’s Migration Guide 🚀

Welcome to Wananchi One! This guide is designed to help you migrate your SACCO’s legacy data from paper or old systems into our modern platform. Follow these 5 phases to ensure a smooth transition.

---

## 🏗 Phase 1: Foundation (System Rules)
Before you import a single member, you must define the "rules" of your SACCO. These are found under the **Setup** menu.

### 1. General Ledger (GL) 📖
The GL is the heart of your accounting. You must have your Chart of Accounts ready.
*   **What to do:** Create GL accounts for Assets, Liabilities, Equity, Revenue, and Expenses.
*   **Why:** Every transaction (a deposit, a loan payment, a fee) needs a GL account to "hit."

### 2. Payment Accounts 💳
Define where the money actually sits (Cash or Bank).
*   **What to do:** Create accounts like "KCB Bank," "Equity Bank," or "Petty Cash."
*   **Linkage:** Each payment account must be linked to an `ASSET` GL account.

### 3. Fee Types (The Extras) 🎟
Fees handle one-time or recurring charges like Membership Registration or Share Capital contributions.
*   **Key Settings:** Link these to `REVENUE` or `LIABILITY` accounts.

### 4. Loan Products (Lending Rules) 📈
Define products like "Short Term Loan" or "Emergency Loan."
*   **Critical:** Map the Principal, Interest, Penalty, and Processing Fee to their respective GL accounts.

### 5. Saving Products (Deposit Rules) 💰
Define types like "Main Savings" or "Education Fund."
*   **Collateral:** Check `Can Guarantee` if these savings can be used for loans.

---

## 👥 Phase 2: Member Migration
Now, bring in your members. You have three options:
1.  **Single Member Invite:** Manual entry for one-off additions.
2.  **Bulk Entry Form:** A grid for up to 15 members at a time.
3.  **CSV Upload:** Mass migration using our Excel template.

---

## 💰 Phase 3: Savings & Fees Migration
Migrate existing balances for savings and unpaid fees.
*   **Options:** Single deposit, Batch form, or Bulk CSV upload.
*   **Important:** Reconcile these totals with your Phase 1 Bank balances.

---

## 🏦 Phase 4: Loan Migration & Lifecycle
Migrate active loans and manage the ongoing application flow.
1.  **Bulk Loan Applications:** Best for automation and member tracking.
2.  **Legacy Loan Migration:** Manual bypass for old or non-standard loans.

---

## 📊 Phase 5: Reports & Validation
Verify your migration using Wananchi One’s reporting engine.
*   **Member Reports:** Individual statements in the Member Detail page.
*   **SACCO Reports:** Trial Balance, Balance Sheets, and Portfolio summaries in the Reports page.

---

> [!TIP]
> **Check your Trial Balance daily** during the first week to ensure all automated entries align with your expectations.
