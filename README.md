# <Application Title>
<Application Description>

The overall project follows a Three Tiered Architecure.

1. Frontend: Lit-based web app that interacts with PHP web services via REST APIs.
2. Middleware: PHP Web Services layer that handles API requests, authentication, and data processing.
3. Backend: PHP-based business logic and database layer.

This repository is for the front-end of the web application.

## Technology Stack
The <Application> web application is built using [Lit](https://lit.dev/), a lightweight framework for creating reusable web components. This implementation utilizes a pre-built Lit bundle for flexibility and minimal dependencies.

**<ins>Resources</ins>:**
* 

## Application Structure
### Authentication Flow
* **~/public/login-page.html**: Initial login screen
* Upon successful login, users are redirected to the main application

## High-Level Component Hierarchy
**Public Access:**
```
<login-page>
   <login-form />
</login-page>
```
**Private Access:**
```
<dashboard-view>
   <site-header>  
      ├── <navigation-bar>  
   </site-header>  
   <side-bar>  
      ├── <nav>  
         ├── <navigation-content> (Handles menu interactions)  
         ├── <date-picker> (Filters reports by date)  
         ├── <user-settings> (User preferences/logout)  
      </nav>  
   </side-bar>  
   <main-content>  
   <notification-bar> (Optional)  
</dashboard-view>
```
## Project Structure
```
<Application Title>/  
│── assets/                    # Static assets (images, icons, etc.)  
│── public/                    # Public files (login page, etc.)  
│── src/  
│   ├── components/  
│   │   ├── common/            # Shared UI components (buttons, modals, spinners)  
│   │   ├── layout/            # Structural UI components (dashboard, sidebar, header, footer)  
│   │   ├── auth/              # Authentication-related components  
│   ├── views/                 # Page-level views (dashboard, app entry)  
│   ├── services/              # API service handlers (auth, user, reports)  
│   ├── utils/                 # Utility functions (date-time, validation)  
│   ├── styles/                # Global styles  
│   ├── lit-core.min.js        # Lit framework  
│── README.md  
```
