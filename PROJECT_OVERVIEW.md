# Odichi Project Overview

## What is Odichi?

**Odichi** is an **Employee Benefits Management Platform** that helps companies manage and distribute employee benefits, particularly focusing on **bonus plans** and **educational benefits (courses)**. It's a comprehensive system for employers to create, manage, and track employee benefit programs with vesting schedules, tax calculations, and transaction management.

## Core Purpose

The platform enables:
- **Employers/Companies** to create and manage employee benefit programs
- **Employees** to view and manage their benefits, bonuses, and educational opportunities
- **Administrators** to oversee the entire system and manage users, companies, and transactions

## Key Features

### 1. **Bonus Plan Management**
   - Create bonus plans with vesting schedules (cliff, frequency, period)
   - Track vested vs. non-vested amounts
   - Support for different plan types (goal-based bonuses, performance bonuses, etc.)
   - Tax calculations (T4 Code 36, Code 40 amounts)
   - Plan status tracking (active, completed, etc.)
   - Document management for bonus agreements

### 2. **Employee Management**
   - Employee registration and activation
   - Employee profiles with departments, roles, and company associations
   - Annual budget allocation (default $4000 per employee)
   - Employee-employer-company hierarchy
   - Employee authentication and authorization

### 3. **Company & Employer Management**
   - Multi-company support
   - Employer management within companies
   - Company address and location management
   - Hierarchical structure: Company → Employer → Employee

### 4. **Educational Benefits (Courses)**
   - Course catalog management
   - Course details: name, degree type, institution, language, delivery method
   - Course filtering by interests, language (English/French), location
   - Cost tracking and application deadlines
   - Course assignment to employees
   - Educational benefit budget management

### 5. **Transaction Management**
   - Track bonus disbursements
   - Payment system integration
   - Transaction history and records
   - Bank information tracking
   - Currency support
   - External payment system IDs

### 6. **Department Management**
   - Organize employees by departments
   - Department-based filtering and reporting

### 7. **File Management**
   - Document upload and storage (AWS S3 integration)
   - CSV file processing for bulk operations
   - File downloads and management

### 8. **Admin Dashboard**
   - System administration
   - User management (admins, employers, employees)
   - Company and employer management
   - Transaction monitoring
   - Settings management

## Technical Architecture

### Backend (Node.js/Express)
- **Framework**: Express.js
- **Database**: MongoDB (primary), MySQL (secondary for some operations)
- **Authentication**: JWT-based authentication
- **File Storage**: AWS S3
- **API**: RESTful API with GraphQL support (AWS Amplify)
- **Port**: 3001 (default)

### Frontend (Next.js/React)
- **Framework**: Next.js 14
- **UI Library**: Material-UI (MUI)
- **State Management**: React Query
- **Authentication**: AWS Amplify Auth
- **Port**: 3004 (default)

## Data Models

### Core Entities:
1. **Company** - Organization information
2. **Employer** - Employer details within companies
3. **Employee** - Employee profiles and benefits
4. **BonusPlan** - Template for bonus plans
5. **Bonuses** - Active bonus instances for employees
6. **SignedBonuses** - Executed bonus agreements
7. **Transactions** - Payment and disbursement records
8. **Course** - Educational course catalog
9. **Department** - Organizational departments
10. **Admin** - System administrators
11. **User** - General user accounts

## User Roles

1. **System Admin (cpadmin)** - Full system access
2. **Company Admin** - Company-level management
3. **Employer** - Employer-level operations
4. **Employee** - Individual benefit management

## Key Workflows

### Bonus Plan Creation:
1. Admin/Employer creates a bonus plan
2. Plan is assigned to an employee
3. Employee reviews and signs the bonus agreement
4. Bonus vests according to schedule (cliff, frequency, period)
5. Transactions are recorded when bonuses are disbursed

### Course Management:
1. Admin/Employer adds courses to the catalog
2. Employees browse available courses
3. Employees can apply for courses within their annual budget
4. Course enrollments are tracked

## Business Logic Highlights

- **Vesting**: Bonuses vest over time with configurable cliffs and frequencies
- **Tax Management**: T4 tax code calculations (Code 36, Code 40)
- **Budget Management**: Annual budgets per employee (default $4000)
- **Multi-currency Support**: Transactions can be in different currencies
- **Document Management**: Legal documents stored in AWS S3
- **Bulk Operations**: CSV import for employees and data

## Integration Points

- **AWS Services**: S3 (file storage), Amplify (auth, GraphQL)
- **Payment Systems**: External payment system integration
- **Email Services**: Mailgun, SendinBlue for notifications
- **Database**: MongoDB (primary), MySQL (secondary)

## Use Cases

1. **HR Departments**: Manage employee benefit programs
2. **Finance Teams**: Track bonus disbursements and tax obligations
3. **Employees**: View benefits, track vesting, apply for courses
4. **Administrators**: System-wide management and reporting

## Industry Context

This appears to be a **Canadian employee benefits platform** (based on T4 tax codes, SIN numbers, and English/French language support), designed to help companies offer competitive benefit packages including:
- Performance-based bonuses with vesting
- Educational development opportunities
- Tax-compliant benefit management

---

**Note**: The project name "Odichi" appears to be related to "Benefi" (based on AWS Amplify backend naming "benefibackendv2"), suggesting this is a benefits management platform.



