# Prevent-User-Deletion-If-Assigned-to-an-Incident-in-ServiceNow---SmartInternz
A ServiceNow Business Rule solution that prevents deletion of users who are assigned to active incidents, ensuring data integrity, incident ownership, and ITSM workflow continuity.

**Demonstration Video:** https://youtu.be/2tZUFJbcEvg?si=RzzfpVdlReawgURc


📌 Project Overview

This project implements a server-side validation mechanism in ServiceNow to prevent deletion of users who are assigned to active incidents.
It uses a Before Delete Business Rule on the sys_user table to check incident dependencies using GlideRecord.

If the user is assigned to any incident, the system:

Blocks the deletion

Displays an error message

Maintains data integrity

If no incidents are assigned, the user is deleted successfully.

🚀 Features

Prevents deletion of users assigned to incidents

Server-side validation using Business Rule

Optimized GlideRecord query with setLimit(1)

Error notification for admins

Supports ITIL best practices

Scalable for Problem, Change, and Task tables

🏗️ Architecture

Frontend: ServiceNow Admin UI

Backend: Before Delete Business Rule (JavaScript)

Database: ServiceNow tables (sys_user, incident)

Platform: ServiceNow Cloud (SaaS)

⚙️ How It Works

Admin attempts to delete a user

Business Rule triggers before deletion

GlideRecord checks incident assignments

If incident exists → deletion aborted

If no incident → deletion allowed

🧪 Testing

Assigned user deletion → Blocked ✅

Unassigned user deletion → Allowed ✅

Error message validation → Passed ✅

📈 Future Enhancements

Multi-table dependency validation (Problem, Change, Task)

Role-based override for super admins

User dependency dashboard

Scoped reusable ServiceNow application

👥 Team

Yaramareddy Sai Chandrika – Team Leader

Chagi Shivasindu

Sorakayala Sumanth

Ediga Sunil

Busireddy Sharandeepreddy
